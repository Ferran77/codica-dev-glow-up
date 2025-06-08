import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Zap, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
            {t('index.cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('index.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary flex items-center justify-center gap-2 text-lg"
            >
              {t('index.cta.contact')}
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-gray-600 text-gray-300 hover:border-brand-accent hover:text-brand-accent font-medium px-8 py-3 rounded-lg transition-all duration-200"
            >
              {t('index.cta.portfolio')}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
              {t('index.whyChooseUs.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('index.whyChooseUs.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-brand-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-accent/20 transition-colors">
                <CheckCircle className="text-brand-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-white mb-3">{t('index.whyChooseUs.quality.title')}</h3>
              <p className="text-gray-300">
                {t('index.whyChooseUs.quality.description')}
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-brand-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-accent/20 transition-colors">
                <Users className="text-brand-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-white mb-3">{t('index.whyChooseUs.client.title')}</h3>
              <p className="text-gray-300">
                {t('index.whyChooseUs.client.description')}
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-brand-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-accent/20 transition-colors">
                <Zap className="text-brand-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-white mb-3">{t('index.whyChooseUs.speed.title')}</h3>
              <p className="text-gray-300">
                {t('index.whyChooseUs.speed.description')}
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-brand-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-accent/20 transition-colors">
                <Shield className="text-brand-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-white mb-3">{t('index.whyChooseUs.support.title')}</h3>
              <p className="text-gray-300">
                {t('index.whyChooseUs.support.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
