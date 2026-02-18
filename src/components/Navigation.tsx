import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.portfolio'), path: '/portfolio' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-brand-dark/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center -ml-[70px]">
            <img 
              src="/assets/codica_dev_logo_3d.png" 
              alt="Códica Dev Logo" 
              className="w-auto mt-4"
              style={{ height: '125px' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-brand-accent bg-gray-900'
                      : 'text-gray-300 hover:text-brand-accent hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <button
              onClick={toggleLanguage}
              className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-brand-accent hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2"
              title={i18n.language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
            >
              <Globe size={16} />
              <span>{i18n.language === 'en' ? 'ES' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleLanguage}
              className="mr-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-brand-accent hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2"
              title={i18n.language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
            >
              <Globe size={16} />
              <span>{i18n.language === 'en' ? 'ES' : 'EN'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-brand-accent focus:outline-none focus:text-brand-accent"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.path)
                      ? 'text-brand-accent bg-gray-900'
                      : 'text-gray-300 hover:text-brand-accent hover:bg-gray-800'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
