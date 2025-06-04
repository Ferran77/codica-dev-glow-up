
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Monitor, Cloud, Smartphone, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-brand-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mb-6">
            Our Services: Technology for Your <span className="text-brand-accent">Growth</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            At Códica Dev, we offer comprehensive digital solutions tailored to your business needs, 
            helping you achieve your goals with cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Service 1: Digital Presence & Web Applications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Monitor className="text-brand-accent" size={48} />
                <h2 className="text-3xl md:text-4xl font-bold text-brand-white">
                  Códica Dev: Your Online Presence, Realized
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="text-brand-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-xl font-semibold text-brand-white mb-2">
                      Professional Website Design & Development
                    </h3>
                    <p className="text-gray-300">
                      Create a memorable first impression and establish online authority with a design that converts visitors into clients (corporate, informative, portfolios, blogs).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="text-brand-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-xl font-semibold text-brand-white mb-2">
                      Custom Web Applications
                    </h3>
                    <p className="text-gray-300">
                      Optimize operations and deliver unique value with robust, intuitive custom web tools (management systems, client portals, internal tools).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="text-brand-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-xl font-semibold text-brand-white mb-2">
                      Ongoing Maintenance & Evolution
                    </h3>
                    <p className="text-gray-300">
                      Keep your platform secure, updated, and performing optimally, so you can focus on your business (deployment, updates, security, support).
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 btn-primary mt-8"
              >
                Explore Web Projects
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
                alt="Web Development" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h4 className="text-lg font-semibold text-brand-white mb-3">Technologies We Use</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS'].map((tech) => (
                  <span key={tech} className="bg-brand-accent/20 text-brand-accent px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: SaaS & Micro SaaS Solutions */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=600&h=400&fit=crop" 
                alt="SaaS Development" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h4 className="text-lg font-semibold text-brand-white mb-3">SaaS Success Factors</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Scalable Architecture</li>
                <li>• User-Centric Design</li>
                <li>• Robust Security</li>
                <li>• Analytics & Insights</li>
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <Cloud className="text-brand-accent" size={48} />
                <h2 className="text-3xl md:text-4xl font-bold text-brand-white">
                  Códica Dev: SaaS Innovation Within Reach
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="text-brand-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-xl font-semibold text-brand-white mb-2">
                      Custom SaaS Development
                    </h3>
                    <p className="text-gray-300">
                      Launch your innovative product and generate recurring revenue with a scalable, market-ready software solution.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="text-brand-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-xl font-semibold text-brand-white mb-2">
                      Micro SaaS Creation
                    </h3>
                    <p className="text-gray-300">
                      Identify and dominate a niche market with a powerful, specialized application.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="text-brand-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-xl font-semibold text-brand-white mb-2">
                      SaaS Consulting & Strategy
                    </h3>
                    <p className="text-gray-300">
                      Minimize risks and maximize success with a clear strategy and well-defined MVP for your next great SaaS idea.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 btn-primary mt-8"
              >
                Your Next SaaS Idea? Let's Discuss
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Strategic Mobile Applications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Smartphone className="text-brand-accent" size={48} />
                <h2 className="text-3xl md:text-4xl font-bold text-brand-white">
                  Códica Dev: Your Brand in Their Hand
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="text-brand-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-xl font-semibold text-brand-white mb-2">
                      Business Mobile Apps (B2B)
                    </h3>
                    <p className="text-gray-300">
                      Digitize and streamline internal processes, enhance team communication, and boost productivity with a custom app (team management, sales, reporting).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="text-brand-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-xl font-semibold text-brand-white mb-2">
                      Consumer Mobile Apps (B2C)
                    </h3>
                    <p className="text-gray-300">
                      Connect with your audience anywhere, expand your reach, and deliver a superior user experience with an app your audience will love (e-commerce, services, entertainment).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="text-brand-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-xl font-semibold text-brand-white mb-2">
                      Cross-Platform & Native Development
                    </h3>
                    <p className="text-gray-300">
                      Ensure the best user experience and performance, optimizing costs and development time to reach all platforms (Flutter, React Native, iOS, Android).
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 btn-primary mt-8"
              >
                I Need a Mobile App
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" 
                alt="Mobile Development" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h4 className="text-lg font-semibold text-brand-white mb-3">Mobile Platforms</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <h5 className="text-brand-accent font-semibold">iOS</h5>
                  <p className="text-sm text-gray-300">Native & Cross-platform</p>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <h5 className="text-brand-accent font-semibold">Android</h5>
                  <p className="text-sm text-gray-300">Native & Cross-platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
