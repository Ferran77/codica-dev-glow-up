import { Link } from "react-router-dom";
import { ArrowRight, Code, Smartphone, Cloud } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import Modal from "./Modal";

const Hero = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    content: string;
  }>({
    isOpen: false,
    title: "",
    content: "",
  });

  // Detectar primera interacción del usuario
  useEffect(() => {
    const handleFirstInteraction = () => {
      setHasInteracted(true);
      // Reproducir el video si existe
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // Ignorar errores de autoplay
        });
      }
    };

    // Eventos que consideramos como "interacción"
    const events = ['click', 'touchstart', 'scroll', 'keydown'];
    
    events.forEach((event) => {
      window.addEventListener(event, handleFirstInteraction, { once: true });
    });

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, handleFirstInteraction);
      });
    };
  }, []);

  const openModal = (title: string, content: string) => {
    setModalState({
      isOpen: true,
      title,
      content,
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      title: "",
      content: "",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-brand-gradient opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Video */}
          <div className="order-2 lg:order-1 relative">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="w-full flex items-center justify-center mb-4">
                <video
                  ref={videoRef}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-auto max-w-full object-contain transform hover:scale-105 transition-transform duration-300 rounded-lg"
                  style={{ 
                    maxHeight: '100%',
                    maskImage: 'radial-gradient(ellipse 80% 80% at center, black 60%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at center, black 60%, transparent 100%)'
                  }}
                >
                  <source src="/assets/home-4.webm" type="video/webm" />
                  <source src="/assets/home-4.mp4" type="video/mp4" />
                  {/* Fallback para navegadores que no soportan video */}
                  <img
                    src="/assets/home-4.png"
                    alt="Digital Solutions"
                    className="w-full h-auto max-w-full object-contain"
                  />
                </video>
              </div>
              <p 
                className="text-sm md:text-base text-gray-300 text-center max-w-xl leading-relaxed animate-fade-in mb-4 md:mb-0"
                dangerouslySetInnerHTML={{ __html: t("hero.description") }}
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left pt-8 pb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-white mb-6 animate-fade-in">
              {t("hero.title")}
            </h1>

            <p 
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed animate-fade-in"
              dangerouslySetInnerHTML={{ __html: t("hero.subtitle") }}
            />

            <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center lg:justify-start items-center mb-12">
              <Link
                to="/services"
                className="btn-primary flex items-center gap-2 text-sm md:text-base xl:text-lg whitespace-nowrap animate-scale-in px-3 md:px-4 xl:px-10 py-2 md:py-3"
              >
                {t("hero.cta")}
                <ArrowRight size={18} className="md:w-5 md:h-5" />
              </Link>

              <Link
                to="/contact"
                className="border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white font-medium px-3 md:px-6 lg:px-2 xl:px-8 py-2 md:py-3 rounded-lg transition-all duration-200 hover:shadow-lg whitespace-nowrap text-xs md:text-sm xl:text-base"
              >
                {t("hero.contact")}
              </Link>
            </div>

            {/* Service Pillars Preview */}
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              <div className="group bg-gray-900/50 backdrop-blur-sm p-3 md:p-4 xl:p-6 rounded-xl border border-gray-700 hover:border-brand-accent transition-all duration-300 card-hover flex flex-col h-[200px] md:h-[22rem] max-h-[200px] md:max-h-[22rem] overflow-hidden">
                <div className="text-brand-accent mb-1 md:mb-2 xl:mb-3 flex justify-center flex-shrink-0">
                  <Code size={24} className="md:w-7 md:h-7 xl:w-8 xl:h-8" />
                </div>
                <h3 className="text-sm md:text-sm xl:text-lg font-bold text-brand-white mb-2 text-center leading-tight flex-shrink-0">
                  {t("hero.cards.web.title")}
                </h3>
                <p className="text-sm md:text-xs xl:text-sm text-gray-300 mb-2 md:mb-3 xl:mb-4 flex-grow min-h-0 line-clamp-3 md:line-clamp-[999]" style={{ 
                  lineHeight: '1.3'
                }}>
                  {t("hero.cards.web.description")}
                </p>
                <button
                  onClick={() =>
                    openModal(
                      t("hero.cards.web.modal.title"),
                      t("hero.cards.web.modal.content")
                    )
                  }
                  className="w-full bg-brand-accent/10 hover:bg-brand-accent/20 text-brand-accent border border-brand-accent/30 hover:border-brand-accent font-medium px-2 md:px-3 xl:px-4 py-1 md:py-1.5 xl:py-2 rounded-lg transition-all duration-200 text-xs md:text-xs xl:text-sm mt-auto whitespace-nowrap flex-shrink-0"
                >
                  {t("hero.cards.web.button")}
                </button>
              </div>

              <div className="group bg-gray-900/50 backdrop-blur-sm p-3 md:p-4 xl:p-6 rounded-xl border border-gray-700 hover:border-brand-accent transition-all duration-300 card-hover flex flex-col h-[200px] md:h-[22rem] max-h-[200px] md:max-h-[22rem] overflow-hidden">
                <div className="text-brand-accent mb-1 md:mb-2 xl:mb-3 flex justify-center flex-shrink-0">
                  <Cloud size={24} className="md:w-7 md:h-7 xl:w-8 xl:h-8" />
                </div>
                <h3 className="text-sm md:text-sm xl:text-lg font-bold text-brand-white mb-2 text-center leading-tight flex-shrink-0">
                  {t("hero.cards.saas.title")}
                </h3>
                <p className="text-sm md:text-xs xl:text-sm text-gray-300 mb-2 md:mb-3 xl:mb-4 flex-grow min-h-0 line-clamp-3 md:line-clamp-[999]" style={{ 
                  lineHeight: '1.3'
                }}>
                  {t("hero.cards.saas.description")}
                </p>
                <button
                  onClick={() =>
                    openModal(
                      t("hero.cards.saas.modal.title"),
                      t("hero.cards.saas.modal.content")
                    )
                  }
                  className="w-full bg-brand-accent/10 hover:bg-brand-accent/20 text-brand-accent border border-brand-accent/30 hover:border-brand-accent font-medium px-2 md:px-3 xl:px-4 py-1 md:py-1.5 xl:py-2 rounded-lg transition-all duration-200 text-xs md:text-xs xl:text-sm mt-auto whitespace-nowrap flex-shrink-0"
                >
                  {t("hero.cards.saas.button")}
                </button>
              </div>

              <div className="group bg-gray-900/50 backdrop-blur-sm p-3 md:p-4 xl:p-6 rounded-xl border border-gray-700 hover:border-brand-accent transition-all duration-300 card-hover flex flex-col h-[200px] md:h-[22rem] max-h-[200px] md:max-h-[22rem] overflow-hidden">
                <div className="text-brand-accent mb-1 md:mb-2 xl:mb-3 flex justify-center flex-shrink-0">
                  <Smartphone size={24} className="md:w-7 md:h-7 xl:w-8 xl:h-8" />
                </div>
                <h3 className="text-sm md:text-sm xl:text-lg font-bold text-brand-white mb-2 text-center leading-tight flex-shrink-0">
                  {t("hero.cards.mobile.title")}
                </h3>
                <p className="text-sm md:text-xs xl:text-sm text-gray-300 mb-2 md:mb-3 xl:mb-4 flex-grow min-h-0 line-clamp-3 md:line-clamp-[999]" style={{ 
                  lineHeight: '1.3'
                }}>
                  {t("hero.cards.mobile.description")}
                </p>
                <button
                  onClick={() =>
                    openModal(
                      t("hero.cards.mobile.modal.title"),
                      t("hero.cards.mobile.modal.content")
                    )
                  }
                  className="w-full bg-brand-accent/10 hover:bg-brand-accent/20 text-brand-accent border border-brand-accent/30 hover:border-brand-accent font-medium px-2 md:px-3 xl:px-4 py-1 md:py-1.5 xl:py-2 rounded-lg transition-all duration-200 text-xs md:text-xs xl:text-sm mt-auto whitespace-nowrap flex-shrink-0"
                >
                  {t("hero.cards.mobile.button")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-brand-accent/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>

      {/* Modal */}
      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        content={modalState.content}
      />
    </section>
  );
};

export default Hero;
