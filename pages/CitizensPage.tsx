import { AlertCircle, Smartphone, MapPin, Shield, Sparkles, CheckCircle2, Bell, Download, Info } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CitizensPage() {
  const { t } = useTranslation(undefined, { keyPrefix: "citizens" });

  // Keep icons/colors locally; pull names/actions from i18n
  const hazardMeta = [
    { icon: "🌊", color: "from-blue-500 to-blue-600" },
    { icon: "☀️", color: "from-orange-500 to-orange-600" },
    { icon: "🌍", color: "from-purple-500 to-purple-600" },
    { icon: "🔥", color: "from-red-500 to-red-600" },
    { icon: "⛈️", color: "from-cyan-500 to-cyan-600" },
    { icon: "🌊", color: "from-teal-500 to-teal-600" }
  ];

  const hazards = hazardMeta.map((h, i) => ({
    icon: h.icon,
    color: h.color,
    name: t(`hazards.${i}.name`),
    actions: [0,1,2,3].map(a => t(`hazards.${i}.actions.${a}`))
  }));

  return (
    <div className="w-full">
      {/* Enhanced Hero Section - Emergency Alert Style */}
      <section className="relative bg-gradient-to-br from-red-600 via-rose-600 to-orange-600 text-white px-16 py-32 overflow-hidden">
        {/* Alert Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)' }} />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-8 items-center">
            {/* Icon with Pulse Animation */}
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-2xl blur-xl opacity-30 animate-pulse" />
              <div className="relative bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-2 border-white/30">
                <AlertCircle className="w-16 h-16" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-6 py-2 rounded-full mx-auto shadow-lg">
                <Bell className="w-4 h-4" />
                <span className="text-sm font-semibold">{t("hero.badge")}</span>
              </div>

              <h1 className="text-7xl tracking-tight leading-tight">
                {t("hero.title")}
              </h1>

              <p className="text-xl leading-relaxed max-w-3xl mx-auto text-white/90">
                {t("hero.subtitle")}
              </p>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-8 w-full max-w-3xl mt-4">
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <AlertCircle className="w-5 h-5" />
                  <div className="text-3xl">{t("stats.hazards.value")}</div>
                </div>
                <p className="text-sm text-white/90">{t("stats.hazards.label")}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Info className="w-5 h-5" />
                  <div className="text-3xl">{t("stats.quick.value")}</div>
                </div>
                <p className="text-sm text-white/90">{t("stats.quick.label")}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <div className="text-3xl">{t("stats.guidelines.value")}</div>
                </div>
                <p className="text-sm text-white/90">{t("stats.guidelines.label")}</p>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <a 
                href="https://www.ifrc.org/our-work/disasters-climate-and-crises/disaster-preparedness" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-red-600 px-8 py-4 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 shadow-lg font-semibold"
              >
                <Download className="w-4 h-4" />
                <span>{t("hero.ctas.guide")}</span>
              </a>
              <a 
                href="https://www.ready.gov" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/20 hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 font-semibold"
              >
                <Smartphone className="w-4 h-4" />
                <span>{t("hero.ctas.apps")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions by Hazard - Enhanced Section */}
      <section className="bg-gradient-to-br from-white to-slate-50 px-16 py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-orange-100 text-red-700 px-6 py-2 rounded-full mb-6">
              <Info className="w-4 h-4" />
              <span className="text-sm font-semibold">{t("quickActions.badge")}</span>
            </div>
            <h2 className="text-[#0c0c09] text-5xl tracking-tight leading-tight mb-6">
              {t("quickActions.title")}
            </h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
              {t("quickActions.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {hazards.map((hazard, i) => (
              <div key={i} className="group relative bg-white rounded-2xl border-4 border-slate-900 p-8 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${hazard.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-6xl">{hazard.icon}</div>
                    <h3 className="text-[#0c0c09] text-3xl tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-600 transition-all duration-300">
                      {hazard.name}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {hazard.actions.map((action, ai) => (
                      <div key={ai} className="flex items-start gap-4 bg-slate-50 p-4 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className={`w-10 h-10 bg-gradient-to-br ${hazard.color} text-white rounded-xl flex items-center justify-center flex-shrink-0 font-semibold text-lg shadow-lg`}>
                          {ai+1}
                        </div>
                        <p className="text-[#0c0c09] pt-2 leading-relaxed">{action}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Alert Apps - Enhanced Dark Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-16 py-28 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
              <Smartphone className="w-4 h-4" />
              <span className="text-sm font-semibold">{t("apps.badge")}</span>
            </div>
            <h2 className="text-white text-5xl tracking-tight leading-tight mb-6">
              {t("apps.title")}
            </h2>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
              {t("apps.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[0,1,2].map((i) => (
              <div key={i} className="group relative bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20 p-8 flex flex-col gap-6 hover:bg-white/15 hover:border-white/40 hover:shadow-2xl transition-all duration-300">
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  i===0 ? "from-blue-500 to-blue-600" :
                  i===1 ? "from-purple-500 to-purple-600" :
                          "from-green-500 to-green-600"
                } opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`} />

                <div className="relative z-10">
                  <h3 className="text-white text-2xl tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 transition-all duration-300">
                    {t(`apps.items.${i}.name`)}
                  </h3>
                  <p className="text-slate-400 text-sm">{t(`apps.items.${i}.desc`)}</p>
                </div>

                <div className="flex flex-col gap-3 relative z-10">
                  {[0,1,2,3].map((fi) => (
                    <div key={fi} className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${
                        i===0 ? "from-blue-500 to-blue-600" :
                        i===1 ? "from-purple-500 to-purple-600" :
                                "from-green-500 to-green-600"
                      } rounded-full shadow-lg`} />
                      <p className="text-slate-200 text-sm">{t(`apps.items.${i}.features.${fi}`)}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/20 relative z-10">
                  <p className="text-slate-300 text-sm mb-4">
                    <strong className="text-white">{t("apps.availableOn")}</strong> {t(`apps.items.${i}.platforms`)}
                  </p>
                  <a 
                    href={
                      i===0 ? "https://www.gdacs.org" :
                      i===1 ? "https://www.pdc.org/apps/disasteralert" :
                              "https://myshake.berkeley.edu"
                    } 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`flex items-center justify-center gap-2 bg-gradient-to-r ${
                      i===0 ? "from-blue-500 to-blue-600" :
                      i===1 ? "from-purple-500 to-purple-600" :
                              "from-green-500 to-green-600"
                    } text-white px-6 py-3 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold`}
                  >
                    <Download className="w-4 h-4" />
                    <span>{t("apps.ctaDownload")}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Preparedness Checklist - Enhanced Section */}
      <section className="bg-gradient-to-br from-white to-slate-50 px-16 py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="relative bg-gradient-to-br from-red-600 via-rose-600 to-orange-600 text-white p-16 rounded-3xl overflow-hidden shadow-2xl">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)' }} />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm border-2 border-white/30 px-6 py-3 rounded-full mb-6 shadow-lg">
                  <Shield className="w-6 h-6" />
                  <span className="font-semibold">{t("checklist.badge")}</span>
                </div>
                <h2 className="text-5xl tracking-tight leading-tight mb-4">
                  {t("checklist.title")}
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  {t("checklist.subtitle")}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[0,1,2,3,4,5,6,7].map((i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 p-5 rounded-xl hover:bg-white/20 transition-all duration-200">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <p className="text-lg">{t(`checklist.items.${i}`)}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-4 mt-12">
                <a 
                  href="https://www.ready.gov/kit" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white text-red-600 px-8 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 font-semibold"
                >
                  <Download className="w-4 h-4" />
                  <span>{t("checklist.ctas.download")}</span>
                </a>
                <a 
                  href="https://www.ifrc.org/our-work/disasters-climate-and-crises/disaster-preparedness" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-200 inline-flex items-center gap-2 font-semibold"
                >
                  <Info className="w-4 h-4" />
                  <span>{t("checklist.ctas.learnMore")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
