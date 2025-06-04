
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ExternalLink, Monitor, Smartphone, Cloud } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Application",
      description: "A complete e-commerce solution with inventory management, payment processing, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      icon: Monitor,
      results: "300% increase in online sales"
    },
    {
      id: 2,
      title: "Task Management SaaS",
      category: "SaaS Platform",
      description: "A collaborative project management tool with real-time updates, team collaboration, and advanced reporting.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      icon: Cloud,
      results: "10,000+ active users in first 6 months"
    },
    {
      id: 3,
      title: "Fitness Tracking App",
      category: "Mobile Application",
      description: "A comprehensive fitness app with workout tracking, nutrition planning, and social features.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      icon: Smartphone,
      results: "50,000+ downloads and 4.8★ rating"
    },
    {
      id: 4,
      title: "Restaurant Management System",
      category: "Web Application",
      description: "Complete restaurant management solution with POS integration, inventory tracking, and customer management.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Laravel", "MySQL", "Square API"],
      icon: Monitor,
      results: "Reduced operational costs by 25%"
    },
    {
      id: 5,
      title: "Healthcare Appointment Platform",
      category: "SaaS Platform",
      description: "Digital platform connecting patients with healthcare providers, featuring appointment scheduling and telehealth.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      icon: Cloud,
      results: "Serves 25+ healthcare practices"
    },
    {
      id: 6,
      title: "Real Estate Mobile App",
      category: "Mobile Application",
      description: "Property search and management app with AR visualization, mortgage calculator, and agent connection.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      technologies: ["Flutter", "Firebase", "Google Maps", "ARCore"],
      icon: Smartphone,
      results: "Featured in App Store Top Charts"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-brand-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mb-6">
            Our Work <span className="text-brand-accent">Speaks for Itself</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            Explore some of the innovative solutions we've crafted for our clients, 
            solving real challenges and driving their growth.
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
                        Results: {project.results}
                      </p>
                      <Link
                        to={`/contact`}
                        className="inline-flex items-center gap-2 text-brand-accent hover:text-orange-300 font-medium transition-colors"
                      >
                        View Project Details
                        <ExternalLink size={16} />
                      </Link>
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
            Ready to Start Your Own Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and create something amazing together.
          </p>
          <Link
            to="/contact"
            className="btn-primary"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
