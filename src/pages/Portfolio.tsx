import { Link } from 'react-router-dom';
import { ExternalLink, Monitor, Smartphone, Cloud } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t('portfolio.projects.ecommerce.title'),
      category: t('portfolio.projects.ecommerce.category'),
      description: t('portfolio.projects.ecommerce.description'),
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      icon: Monitor,
      results: t('portfolio.projects.ecommerce.results'),
      url: 'https://quiosco-pos-app.vercel.app'
    },
    {
      id: 2,
      title: t('portfolio.projects.taskManagement.title'),
      category: t('portfolio.projects.taskManagement.category'),
      description: t('portfolio.projects.taskManagement.description'),
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      icon: Cloud,
      results: t('portfolio.projects.taskManagement.results'),
      url: 'https://pr0mptr-demo-kgrs.vercel.app'
    },
    {
      id: 3,
      title: t('portfolio.projects.fitness.title'),
      category: t('portfolio.projects.fitness.category'),
      description: t('portfolio.projects.fitness.description'),
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      icon: Smartphone,
      results: t('portfolio.projects.fitness.results'),
      url: 'https://codic-admin.vercel.app'
    },
    {
      id: 4,
      title: t('portfolio.projects.restaurant.title'),
      category: t('portfolio.projects.restaurant.category'),
      description: t('portfolio.projects.restaurant.description'),
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Laravel", "MySQL", "Square API"],
      icon: Monitor,
      results: t('portfolio.projects.restaurant.results'),
      url: 'https://bank-dash-2-0.vercel.app'
    },
    {
      id: 5,
      title: t('portfolio.projects.healthcare.title'),
      category: t('portfolio.projects.healthcare.category'),
      description: t('portfolio.projects.healthcare.description'),
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      icon: Cloud,
      results: t('portfolio.projects.healthcare.results'),
      url: 'https://cripto-ya.vercel.app'
    },
    {
      id: 6,
      title: t('portfolio.projects.realEstate.title'),
      category: t('portfolio.projects.realEstate.category'),
      description: t('portfolio.projects.realEstate.description'),
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      technologies: ["Flutter", "Firebase", "Google Maps", "ARCore"],
      icon: Smartphone,
      results: t('portfolio.projects.realEstate.results'),
      url: 'https://codica-play.vercel.app'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-brand-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mb-6">
            {t('portfolio.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            {t('portfolio.hero.description')}
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.id}
                  className="bg-gray-900/50 rounded-xl border border-gray-700 overflow-hidden card-hover group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-brand-accent text-white px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </div>
                    <div className="absolute top-4 right-4 text-brand-accent bg-gray-900/80 p-2 rounded-full">
                      <IconComponent size={20} />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-white mb-2 group-hover:text-brand-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="border-t border-gray-700 pt-4">
                      <p className="text-sm text-brand-accent font-semibold mb-3">
                        {t('portfolio.project.results')}: {project.results}
                      </p>
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-brand-accent hover:text-orange-300 font-medium transition-colors"
                        >
                          {t('portfolio.project.viewProject')}
                          <ExternalLink size={16} />
                        </a>
                      ) : (
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 text-brand-accent hover:text-orange-300 font-medium transition-colors"
                        >
                          {t('portfolio.project.viewDetails')}
                          <ExternalLink size={16} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
            {t('portfolio.cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('portfolio.cta.description')}
          </p>
          <Link
            to="/contact"
            className="btn-primary"
          >
            {t('portfolio.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
