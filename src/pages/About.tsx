import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Code, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Lightbulb,
      title: t("about.values.innovation.title"),
      description: t("about.values.innovation.description"),
    },
    {
      icon: Code,
      title: t("about.values.quality.title"),
      description: t("about.values.quality.description"),
    },
    {
      icon: Heart,
      title: t("about.values.transparency.title"),
      description: t("about.values.transparency.description"),
    },
    {
      icon: Users,
      title: t("about.values.clientCentricity.title"),
      description: t("about.values.clientCentricity.description"),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-brand-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mb-6">
            {t("about.hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            {t("about.hero.description")}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
                {t("about.story.title")}
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>{t("about.story.paragraph1")}</p>
                <p>{t("about.story.paragraph2")}</p>
                <p>{t("about.story.paragraph3")}</p>
              </div>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700">
              <img
                src="/assets/about1.png"
                alt={t("about.story.approach.imageAlt")}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold text-brand-white mb-2">
                  {t("about.story.approach.title")}
                </h3>
                <p className="text-gray-300">
                  {t("about.story.approach.description")}
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
              <h2 className="text-2xl md:text-3xl font-bold text-brand-white mb-6">
                {t("about.mission.title")}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t("about.mission.description")}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brand-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="text-brand-accent" size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-white mb-6">
                {t("about.vision.title")}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t("about.vision.description")}
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
              {t("about.values.title")}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("about.values.description")}
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
                  <h3 className="text-xl font-bold text-brand-white mb-3">
                    {value.title}
                  </h3>
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
              {t("about.team.title")}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("about.team.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 text-center card-hover">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt={t("about.team.members.alex.name")}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-brand-white mb-2">
                {t("about.team.members.alex.name")}
              </h3>
              <p className="text-brand-accent font-medium mb-2">
                {t("about.team.members.alex.role")}
              </p>
              <p className="text-gray-300 text-sm">
                {t("about.team.members.alex.description")}
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 text-center card-hover">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face"
                alt={t("about.team.members.sarah.name")}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-brand-white mb-2">
                {t("about.team.members.sarah.name")}
              </h3>
              <p className="text-brand-accent font-medium mb-2">
                {t("about.team.members.sarah.role")}
              </p>
              <p className="text-gray-300 text-sm">
                {t("about.team.members.sarah.description")}
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 text-center card-hover">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                alt={t("about.team.members.marcus.name")}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-brand-white mb-2">
                {t("about.team.members.marcus.name")}
              </h3>
              <p className="text-brand-accent font-medium mb-2">
                {t("about.team.members.marcus.role")}
              </p>
              <p className="text-gray-300 text-sm">
                {t("about.team.members.marcus.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
            {t("about.cta.title")}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t("about.cta.description")}
          </p>
          <Link to="/contact" className="btn-primary">
            {t("about.cta.button")}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
