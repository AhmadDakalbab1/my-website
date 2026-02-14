import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ResourceCard } from "../components/ResourceCard";
import { Radio, MessageSquare, BarChart3, Users, BookOpen, Sparkles, CheckCircle2, TrendingUp, Target, Mic } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function RiskCommunicationPage() {
  const { t } = useTranslation(undefined, { keyPrefix: "riskCommunication" });

  return (
    <div className="w-full">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-cyan-50 px-16 py-32 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-8 items-center">
            {/* Icon with Gradient */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl blur-xl opacity-20" />
              <div className="relative bg-gradient-to-br from-teal-500 to-cyan-600 p-6 rounded-2xl shadow-xl">
                <Radio className="w-16 h-16 text-white" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2 rounded-full mx-auto shadow-lg">
                <Target className="w-4 h-4" />
                <span className="text-sm font-semibold">
                  {t("hero.badge")}
                </span>
              </div>

              <h1 className="text-[#0c0c09] text-7xl tracking-tight leading-tight">
                {t("hero.title")}
              </h1>

              <p className="text-slate-600 text-xl leading-relaxed max-w-3xl mx-auto">
                {t("hero.subtitle")}
              </p>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-8 w-full max-w-3xl mt-4">
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MessageSquare className="w-5 h-5 text-teal-600" />
                  <div className="text-3xl text-[#0c0c09]">{t("stats.cerc.value")}</div>
                </div>
                <p className="text-sm text-slate-600">{t("stats.cerc.label")}</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-cyan-600" />
                  <div className="text-3xl text-[#0c0c09]">{t("stats.rcce.value")}</div>
                </div>
                <p className="text-sm text-slate-600">{t("stats.rcce.label")}</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <div className="text-3xl text-[#0c0c09]">{t("stats.cdc.value")}</div>
                </div>
                <p className="text-sm text-slate-600">{t("stats.cdc.label")}</p>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <a 
                href="https://emergency.cdc.gov/cerc/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-[#f65d5d] to-[#e54d4d] text-white px-8 py-4 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 shadow-lg"
              >
                <Radio className="w-4 h-4" />
                <span>{t("hero.ctas.cdc")}</span>
              </a>
              <a 
                href="https://www.who.int/teams/risk-communication" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-[#0c0c09] px-8 py-4 rounded-lg border-2 border-slate-300 hover:border-[#f65d5d] hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                <span>{t("hero.ctas.who")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Principles - Enhanced Dark Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-16 py-28 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-semibold">{t("principles.badge")}</span>
            </div>
            <h2 className="text-white text-5xl tracking-tight leading-tight mb-6">
              {t("principles.title")}
            </h2>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
              {t("principles.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {[0, 1].map((i) => (
              <div key={i} className="group relative bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20 p-8 hover:bg-white/15 hover:border-white/40 hover:shadow-2xl transition-all duration-300">
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${i === 0 ? "from-teal-500 to-teal-600" : "from-cyan-500 to-cyan-600"} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`} />

                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`${i === 0 ? "bg-gradient-to-br from-teal-500 to-teal-600" : "bg-gradient-to-br from-cyan-500 to-cyan-600"} p-4 rounded-xl inline-flex text-white shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 ring-2 ring-white/20`}>
                    {i === 0 ? <MessageSquare className="w-8 h-8" /> : <Users className="w-8 h-8" />}
                  </div>
                </div>

                <div className="relative z-10 mb-8">
                  <h3 className="text-white text-2xl tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-300 group-hover:to-cyan-300 transition-all duration-300">
                    {t(`principles.sections.${i}.title`)}
                  </h3>
                  <p className="text-slate-400 text-sm">{t(`principles.sections.${i}.subtitle`)}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 relative z-10">
                  {[0,1,2,3,4,5].map((pi) => (
                    <div key={pi} className="flex items-start gap-3 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-all duration-200">
                      <div className={`w-7 h-7 ${i === 0 ? "bg-gradient-to-br from-teal-500 to-teal-600" : "bg-gradient-to-br from-cyan-500 to-cyan-600"} text-white rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-semibold shadow-lg`}>
                        {pi+1}
                      </div>
                      <p className="text-slate-200 text-sm pt-0.5">{t(`principles.sections.${i}.principles.${pi}`)}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data for RCCE - Enhanced Light Section */}
      <section className="bg-gradient-to-br from-white to-slate-50 px-16 py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex gap-20 items-center">
            <div className="flex-1 flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl blur opacity-20" />
                  <div className="relative bg-gradient-to-br from-teal-500 to-cyan-600 p-4 rounded-xl inline-flex text-white shadow-lg w-fit">
                    <BarChart3 className="w-10 h-10" />
                  </div>
                </div>

                <h2 className="text-[#0c0c09] text-5xl tracking-tight leading-tight">
                  {t("dataRCCE.title")}
                </h2>

                <p className="text-slate-600 text-lg leading-relaxed">
                  {t("dataRCCE.subtitle")}
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-2 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-[#0c0c09] text-xl">{t("dataRCCE.keySourcesTitle")}</h4>
                </div>
                <div className="flex flex-col gap-3">
                  {[0,1,2,3,4].map((i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className={`w-2 h-2 bg-gradient-to-r ${
                        i===0 ? "from-blue-500 to-blue-600" :
                        i===1 ? "from-purple-500 to-purple-600" :
                        i===2 ? "from-green-500 to-green-600" :
                        i===3 ? "from-orange-500 to-orange-600" :
                                "from-pink-500 to-pink-600"
                      } rounded-full`} />
                      <p className="text-[#0c0c09]">{t(`dataRCCE.sources.${i}`)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://www.rcce-collective.net/wp-content/uploads/2023/01/Collective-Service-Data-Handbook.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 font-semibold shadow-lg"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{t("dataRCCE.cta")}</span>
                </a>
              </div>
            </div>

            <div className="flex-1">
              <div className="aspect-[600/640] relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-slate-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjBkYXNoYm9hcmQlMjBtb25pdG9yaW5nfGVufDF8fHx8MTc2MTEzNTE1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Data for RCCE - Social Listening and Community Feedback Monitoring"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-cyan-500/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Cards Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white px-16 py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 px-6 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">{t("resources.badge")}</span>
            </div>
            <h2 className="text-[#0c0c09] text-5xl tracking-tight leading-tight mb-6">
              {t("resources.title")}
            </h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
              {t("resources.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0,1,2,3,4,5].map((i) => (
              <ResourceCard
                key={i}
                title={t(`resources.cards.${i}.title`)}
                description={t(`resources.cards.${i}.description`)}
                url={
                  i===0 ? "https://emergency.cdc.gov/cerc/" :
                  i===1 ? "https://www.who.int/teams/risk-communication" :
                  i===2 ? "https://communityengagementhub.org/resource/rcce-data-handbook/" :
                  i===3 ? "https://emergency.cdc.gov/cerc/training/index.asp" :
                  i===4 ? "https://internews.org/areas-of-expertise/humanitarian-emergencies/" :
                          "https://communityengagementhub.org"
                }
                category={t(`resources.cards.${i}.category`)}
                icon={ i===0 ? Radio : i===1 ? Users : i===2 ? BarChart3 : i===3 ? BookOpen : i===4 ? MessageSquare : Mic }
                tags={[
                  t(`resources.cards.${i}.tags.0`),
                  t(`resources.cards.${i}.tags.1`),
                  t(`resources.cards.${i}.tags.2`)
                ].concat(
                  i===0 ? [t(`resources.cards.${i}.tags.3`)] : []
                )}
                featured={i===0}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
