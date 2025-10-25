import { Link } from "react-router-dom";
import { ArrowRight, Code, Smartphone, Cloud } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Modal from "./Modal";

const Hero = () => {
  const { t } = useTranslation();
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    content: string;
  }>({
    isOpen: false,
    title: "",
    content: "",
  });

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
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/assets/home-4.png"
              alt="Digital Solutions"
              className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left pt-8 pb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-white mb-6 animate-fade-in">
              {t("hero.title")}
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed animate-fade-in">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-12">
              <Link
                to="/services"
                className="btn-primary flex items-center gap-2 text-lg animate-scale-in"
              >
                {t("hero.cta")}
                <ArrowRight size={20} />
              </Link>

              <Link
                to="/contact"
                className="border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white font-medium px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg"
              >
                {t("hero.contact")}
              </Link>
            </div>

            {/* Service Pillars Preview */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="group bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-brand-accent transition-all duration-300 card-hover flex flex-col h-[22rem]">
                <div className="text-brand-accent mb-3 flex justify-center">
                  <Code size={32} />
                </div>
                <h3 className="text-lg font-bold text-brand-white mb-2">
                  {t("hero.cards.web.title")}
                </h3>
                <p className="text-sm text-gray-300 mb-4 flex-grow">
                  {t("hero.cards.web.description")}
                </p>
                <button
                  onClick={() =>
                    openModal(
                      t("hero.cards.web.modal.title"),
                      t("hero.cards.web.modal.content")
                    )
                  }
                  className="w-full bg-brand-accent/10 hover:bg-brand-accent/20 text-brand-accent border border-brand-accent/30 hover:border-brand-accent font-medium px-4 py-2 rounded-lg transition-all duration-200 text-sm mt-auto"
                >
                  {t("hero.cards.web.button")}
                </button>
              </div>

              <div className="group bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-brand-accent transition-all duration-300 card-hover flex flex-col h-[22rem]">
                <div className="text-brand-accent mb-3 flex justify-center">
                  <Cloud size={32} />
                </div>
                <h3 className="text-lg font-bold text-brand-white mb-2">
                  {t("hero.cards.saas.title")}
                </h3>
                <p className="text-sm text-gray-300 mb-4 flex-grow">
                  {t("hero.cards.saas.description")}
                </p>
                <button
                  onClick={() =>
                    openModal(
                      t("hero.cards.saas.modal.title"),
                      t("hero.cards.saas.modal.content")
                    )
                  }
                  className="w-full bg-brand-accent/10 hover:bg-brand-accent/20 text-brand-accent border border-brand-accent/30 hover:border-brand-accent font-medium px-4 py-2 rounded-lg transition-all duration-200 text-sm mt-auto"
                >
                  {t("hero.cards.saas.button")}
                </button>
              </div>

              <div className="group bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-brand-accent transition-all duration-300 card-hover flex flex-col h-[22rem]">
                <div className="text-brand-accent mb-3 flex justify-center">
                  <Smartphone size={32} />
                </div>
                <h3 className="text-lg font-bold text-brand-white mb-2">
                  {t("hero.cards.mobile.title")}
                </h3>
                <p className="text-sm text-gray-300 mb-4 flex-grow">
                  {t("hero.cards.mobile.description")}
                </p>
                <button
                  onClick={() =>
                    openModal(
                      t("hero.cards.mobile.modal.title"),
                      t("hero.cards.mobile.modal.content")
                    )
                  }
                  className="w-full bg-brand-accent/10 hover:bg-brand-accent/20 text-brand-accent border border-brand-accent/30 hover:border-brand-accent font-medium px-4 py-2 rounded-lg transition-all duration-200 text-sm mt-auto"
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
