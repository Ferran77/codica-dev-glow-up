import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t('contact.form.success.title'),
        description: t('contact.form.success.description'),
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-brand-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mb-6"
            dangerouslySetInnerHTML={{ __html: t('contact.hero.title') }}
          />
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            {t('contact.hero.description')}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-brand-white mb-6">{t('contact.form.title')}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
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
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
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
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.form.phone.label')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder={t('contact.form.phone.placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
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
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-white mb-6">{t('contact.info.title')}</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {t('contact.info.description')}
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-accent/10 p-3 rounded-lg">
                    <Mail className="text-brand-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-white mb-1">{t('contact.info.email.title')}</h3>
                    <p className="text-gray-300">
                      <a href="mailto:contact@codicadev.com" className="text-link">
                        contact@codicadev.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      {t('contact.info.email.response')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-accent/10 p-3 rounded-lg">
                    <Phone className="text-brand-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-white mb-1">{t('contact.info.phone.title')}</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-400 mt-1">
                      {t('contact.info.phone.hours')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-accent/10 p-3 rounded-lg">
                    <MapPin className="text-brand-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-white mb-1">{t('contact.info.location.title')}</h3>
                    <p className="text-gray-300">{t('contact.info.location.address')}</p>
                    <p className="text-sm text-gray-400 mt-1">
                      {t('contact.info.location.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Process Timeline */}
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold text-brand-white mb-4 flex items-center gap-2">
                  <Clock className="text-brand-accent" size={20} />
                  {t('contact.process.title')}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-brand-accent mt-1 flex-shrink-0" size={16} />
                    <div>
                      <p className="text-gray-300 text-sm">
                        <span className="font-medium">{t('contact.process.step1.time')}:</span> {t('contact.process.step1.description')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-brand-accent mt-1 flex-shrink-0" size={16} />
                    <div>
                      <p className="text-gray-300 text-sm">
                        <span className="font-medium">{t('contact.process.step2.title')}:</span> {t('contact.process.step2.description')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-brand-accent mt-1 flex-shrink-0" size={16} />
                    <div>
                      <p className="text-gray-300 text-sm">
                        <span className="font-medium">{t('contact.process.step3.title')}:</span> {t('contact.process.step3.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
