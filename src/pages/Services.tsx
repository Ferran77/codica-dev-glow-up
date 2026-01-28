import { Link } from "react-router-dom";
import {
  Monitor,
  Cloud,
  Smartphone,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

const Services = () => {
  const { t } = useTranslation();
  const [hasInteracted, setHasInteracted] = useState(false);
  const webVideoRef = useRef<HTMLVideoElement | null>(null);
  const saasVideoRef = useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const enableInteraction = () => {
      setHasInteracted(true);
    };

    window.addEventListener("click", enableInteraction, { once: true });
    window.addEventListener("keydown", enableInteraction, { once: true });
    window.addEventListener("scroll", enableInteraction, { once: true });

    return () => {
      window.removeEventListener("click", enableInteraction);
      window.removeEventListener("keydown", enableInteraction);
      window.removeEventListener("scroll", enableInteraction);
    };
  }, []);

  useEffect(() => {
    if (hasInteracted) {
      const players = [
        webVideoRef.current,
        saasVideoRef.current,
        mobileVideoRef.current,
      ].filter(Boolean) as HTMLVideoElement[];

      players.forEach((video) => {
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {
            // Ignorar errores de autoplay bloqueado
          });
        }
      });
    }
  }, [hasInteracted]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-brand-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mb-6">
            {t("services.hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            {t("services.hero.description")}
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
                  {t("services.web.title")}
                </h2>
              </div>

              <div className="space-y-6">
                {["design", "custom", "maintenance"].map((key) => (
                  <div key={key} className="flex gap-4">
                    <CheckCircle
                      className="text-brand-accent mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-brand-white mb-2">
                        {t(`services.web.${key}.title`)}
                      </h3>
                      <p className="text-gray-300">
                        {t(`services.web.${key}.description`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 btn-primary mt-8"
              >
                {t("services.web.cta")}
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700">
              <div className="w-full h-64 rounded-lg mb-6 overflow-hidden bg-black">
                {hasInteracted ? (
                  <video
                    ref={webVideoRef}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    poster="/assets/services1.jpg"
                  >
                    <source src="/assets/services1.webm" type="video/webm" />
                    <source src="/assets/services1.mp4" type="video/mp4" />
                    {/* Fallback final: imagen estática */}
                    <img
                      src="/assets/services1.jpg"
                      alt="Web Development"
                      className="w-full h-full object-cover"
                    />
                  </video>
                ) : (
                  <img
                    src="/assets/services1.jpg"
                    alt="Web Development"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <h4 className="text-lg font-semibold text-brand-white mb-3">
                {t("services.web.technologies.title")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Python",
                  "PostgreSQL",
                  "AWS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-brand-accent/20 text-brand-accent px-3 py-1 rounded-full text-sm"
                  >
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
              <div className="w-full h-64 rounded-lg mb-6 overflow-hidden bg-black">
                {hasInteracted ? (
                  <video
                    ref={saasVideoRef}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    poster="/assets/services2.jpg"
                  >
                    <source src="/assets/services2.webm" type="video/webm" />
                    <source src="/assets/services2.mp4" type="video/mp4" />
                    {/* Fallback final: imagen estática */}
                    <img
                      src="/assets/services2.jpg"
                      alt="SaaS Development"
                      className="w-full h-full object-cover"
                    />
                  </video>
                ) : (
                  <img
                    src="/assets/services2.jpg"
                    alt="SaaS Development"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <h4 className="text-lg font-semibold text-brand-white mb-3">
                {t("services.saas.factors.title")}
              </h4>
              <ul className="text-gray-300 space-y-2">
                {["scalable", "userCentric", "security", "analytics"].map(
                  (key) => (
                    <li key={key}>• {t(`services.saas.factors.${key}`)}</li>
                  )
                )}
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <Cloud className="text-brand-accent" size={48} />
                <h2 className="text-3xl md:text-4xl font-bold text-brand-white">
                  {t("services.saas.title")}
                </h2>
              </div>

              <div className="space-y-6">
                {["custom", "micro", "consulting"].map((key) => (
                  <div key={key} className="flex gap-4">
                    <CheckCircle
                      className="text-brand-accent mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-brand-white mb-2">
                        {t(`services.saas.${key}.title`)}
                      </h3>
                      <p className="text-gray-300">
                        {t(`services.saas.${key}.description`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 btn-primary mt-8"
              >
                {t("services.saas.cta")}
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
                  {t("services.mobile.title")}
                </h2>
              </div>

              <div className="space-y-6">
                {["b2b", "consumer", "hybrid"].map((key) => (
                  <div key={key} className="flex gap-4">
                    <CheckCircle
                      className="text-brand-accent mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-brand-white mb-2">
                        {t(`services.mobile.${key}.title`)}
                      </h3>
                      <p className="text-gray-300">
                        {t(`services.mobile.${key}.description`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 btn-primary mt-8"
              >
                {t("services.mobile.cta")}
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700">
              <div className="w-full h-64 rounded-lg mb-6 overflow-hidden bg-black">
                {hasInteracted ? (
                  <video
                    ref={mobileVideoRef}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    poster="/assets/services3.jpg"
                  >
                    <source src="/assets/services3.webm" type="video/webm" />
                    <source src="/assets/services3.mp4" type="video/mp4" />
                    <img
                      src="/assets/services3.jpg"
                      alt="Mobile Development"
                      className="w-full h-full object-cover"
                    />
                  </video>
                ) : (
                  <img
                    src="/assets/services3.jpg"
                    alt="Mobile Development"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <h4 className="text-lg font-semibold text-brand-white mb-3">
                {t("services.mobile.platforms.title")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {["iOS", "Android", "React Native", "Flutter"].map(
                  (platform) => (
                    <span
                      key={platform}
                      className="bg-brand-accent/20 text-brand-accent px-3 py-1 rounded-full text-sm"
                    >
                      {platform}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
