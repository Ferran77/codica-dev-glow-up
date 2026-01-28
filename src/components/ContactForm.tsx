import { useState, useRef, FormEvent } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validar que las variables de entorno estén configuradas
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error(
        t('contact.form.error.config') || 
        'Error de configuración: faltan credenciales de EmailJS'
      );
      console.error('EmailJS credentials missing:', {
        serviceId: !!serviceId,
        templateId: !!templateId,
        publicKey: !!publicKey,
      });
      return;
    }

    if (!formRef.current) {
      toast.error(
        t('contact.form.error.generic') || 
        'Error al procesar el formulario'
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      if (result.status === 200) {
        toast.success(
          t('contact.form.success.title') || 
          '¡Mensaje enviado con éxito!'
        );
        
        // Limpiar el formulario después de un envío exitoso
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        throw new Error('Error en el envío del correo');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error(
        t('contact.form.error.generic') || 
        'Error al enviar el mensaje. Por favor, intenta nuevamente.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          {t('contact.form.name.label')}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-accent transition-colors"
          placeholder={t('contact.form.name.placeholder')}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          {t('contact.form.email.label')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-accent transition-colors"
          placeholder={t('contact.form.email.placeholder')}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          {t('contact.form.message.label')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-accent transition-colors resize-none"
          placeholder={t('contact.form.message.placeholder')}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            {t('contact.form.submitting')}
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          </>
        ) : (
          <>
            {t('contact.form.submit')}
            <Send size={20} />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
