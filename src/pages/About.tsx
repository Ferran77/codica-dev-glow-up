
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Code, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges."
    },
    {
      icon: Code,
      title: "Quality",
      description: "Every line of code, every design element, and every user interaction is crafted with precision."
    },
    {
      icon: Heart,
      title: "Transparency",
      description: "Open communication, honest timelines, and clear pricing are the foundation of our relationships."
    },
    {
      icon: Users,
      title: "Client-Centricity",
      description: "Your success is our success. We align our efforts with your business goals and objectives."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-brand-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mb-6">
            Códica Dev: Our <span className="text-brand-accent">Story & Vision</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            We're passionate technologists and strategic thinkers dedicated to transforming 
            businesses through innovative digital solutions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Códica Dev was born from a simple yet powerful belief: that every business, 
                  regardless of size, deserves access to world-class digital solutions that 
                  drive growth and success.
                </p>
                <p>
                  Founded by experienced developers and strategic thinkers, we've witnessed 
                  firsthand how the right technology can transform operations, expand reach, 
                  and unlock new opportunities. Our journey began with a mission to bridge 
                  the gap between complex technology and practical business solutions.
                </p>
                <p>
                  Today, we're proud to partner with businesses across industries, helping 
                  them navigate the digital landscape with confidence and achieve measurable 
                  results through innovative web applications, SaaS platforms, and mobile solutions.
                </p>
              </div>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Team collaboration" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold text-brand-white mb-2">Our Approach</h3>
                <p className="text-gray-300">
                  We combine technical expertise with strategic thinking to deliver 
                  solutions that don't just work—they excel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="bg-brand-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-brand-accent" size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, 
                enhance efficiency, and create meaningful connections with their audiences. 
                We're committed to delivering excellence in every project while building 
                lasting partnerships based on trust and results.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="text-brand-accent" size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-white mb-6">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the go-to strategic technology partner for businesses seeking to 
                transform their digital presence and achieve sustainable growth. We envision 
                a future where every business has access to powerful, user-friendly technology 
                that amplifies their potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core principles guide every decision we make and every solution we create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-brand-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-accent/20 transition-colors">
                    <IconComponent className="text-brand-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of developers, designers, and strategists brings together 
              decades of experience in creating exceptional digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 text-center card-hover">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                alt="Team member" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-brand-white mb-2">Alex Rodriguez</h3>
              <p className="text-brand-accent font-medium mb-2">Founder & Lead Developer</p>
              <p className="text-gray-300 text-sm">
                Full-stack developer with 10+ years experience in enterprise solutions.
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 text-center card-hover">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face" 
                alt="Team member" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-brand-white mb-2">Sarah Chen</h3>
              <p className="text-brand-accent font-medium mb-2">UX/UI Designer</p>
              <p className="text-gray-300 text-sm">
                Creative designer specializing in user-centered design and modern interfaces.
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 text-center card-hover">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                alt="Team member" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-brand-white mb-2">Marcus Johnson</h3>
              <p className="text-brand-accent font-medium mb-2">Mobile Developer</p>
              <p className="text-gray-300 text-sm">
                Mobile specialist with expertise in cross-platform and native development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your digital presence and achieve your business goals.
          </p>
          <Link
            to="/contact"
            className="btn-primary"
          >
            Let's Start the Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
