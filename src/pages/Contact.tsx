import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  const { t } = useTranslation();

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
              <ContactForm />
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
                     
                      <a
                        href="mailto:contacto.codicadev@gmail.com"
                        className="text-brand-accent hover:underline"
                      >
                        contacto.codicadev@gmail.com
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
                    <p className="text-gray-300">(+52) 56 1155-4662</p>
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
