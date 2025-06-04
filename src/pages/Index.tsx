
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Zap, Shield } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Navigation />
      <Hero />
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and explore how we can help you achieve your digital goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary flex items-center justify-center gap-2 text-lg"
            >
              Let's Talk
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-gray-600 text-gray-300 hover:border-brand-accent hover:text-brand-accent font-medium px-8 py-3 rounded-lg transition-all duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
              Why Choose Códica Dev?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with strategic thinking to deliver solutions that drive real business results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-brand-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-accent/20 transition-colors">
                <CheckCircle className="text-brand-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-white mb-3">Quality First</h3>
              <p className="text-gray-300">
                We deliver high-quality solutions built with best practices and modern technologies.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-brand-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-accent/20 transition-colors">
                <Users className="text-brand-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-white mb-3">Client-Centric</h3>
              <p className="text-gray-300">
                Your success is our priority. We work closely with you throughout the entire process.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-brand-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-accent/20 transition-colors">
                <Zap className="text-brand-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-white mb-3">Fast Delivery</h3>
              <p className="text-gray-300">
                We understand the importance of time-to-market and deliver projects efficiently.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-brand-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-accent/20 transition-colors">
                <Shield className="text-brand-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-white mb-3">Ongoing Support</h3>
              <p className="text-gray-300">
                We provide continuous support and maintenance to keep your solutions running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
