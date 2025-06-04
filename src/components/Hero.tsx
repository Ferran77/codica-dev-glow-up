import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Cloud } from 'lucide-react';
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-brand-gradient opacity-80"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-white mb-6 animate-fade-in">
          Códica Dev: Your Partner for{' '}
          <span className="text-brand-accent">Digital Success</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
          We design and develop impactful websites, mobile apps, and SaaS solutions 
          that accelerate your business growth and digital transformation.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link to="/services" className="btn-primary flex items-center gap-2 text-lg animate-scale-in">
            Explore Our Services
            <ArrowRight size={20} />
          </Link>
          
          <Link to="/contact" className="border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white font-medium px-8 rounded-lg transition-all duration-200 hover:shadow-lg my-[40px] py-[22px]">
            Start Your Project
          </Link>
        </div>

        {/* Service Pillars Preview */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-brand-accent transition-all duration-300 card-hover">
            <div className="text-brand-accent mb-4 flex justify-center">
              <Code size={48} />
            </div>
            <h3 className="text-xl font-bold text-brand-white mb-4">
              Digital Presence & Web Applications
            </h3>
            <p className="text-gray-300">
              Create memorable first impressions with professional websites and custom web applications that convert visitors into clients.
            </p>
          </div>

          <div className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-brand-accent transition-all duration-300 card-hover">
            <div className="text-brand-accent mb-4 flex justify-center">
              <Cloud size={48} />
            </div>
            <h3 className="text-xl font-bold text-brand-white mb-4">
              SaaS & Micro SaaS Solutions
            </h3>
            <p className="text-gray-300">
              Launch innovative software products and generate recurring revenue with scalable, market-ready SaaS solutions.
            </p>
          </div>

          <div className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-brand-accent transition-all duration-300 card-hover">
            <div className="text-brand-accent mb-4 flex justify-center">
              <Smartphone size={48} />
            </div>
            <h3 className="text-xl font-bold text-brand-white mb-4">
              Strategic Mobile Applications
            </h3>
            <p className="text-gray-300">
              Connect with your audience anywhere and deliver superior user experiences with custom mobile applications.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-brand-accent/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
    </section>;
};
export default Hero;