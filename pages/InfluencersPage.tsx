import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ResourceCard } from "../components/ResourceCard";
import { Mic, Video, Share2, Users2, Download, Sparkles, CheckCircle2, TrendingUp, MessageCircle, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function InfluencersPage() {
  const { t } = useTranslation(undefined, { keyPrefix: "influencers" });

  // PSA items (pulling hazard, duration, lang from i18n)
  const psaItems = [0,1,2,3,4,5].map((i) => ({
    hazard: t(`psaLibrary.items.${i}.hazard`),
    duration: t(`psaLibrary.items.${i}.duration`),
    lang: t(`psaLibrary.items.${i}.lang`),
    color:
      i===0 ? "from-blue-500 to-blue-600" :
      i===1 ? "from-orange-500 to-orange-600" :
      i===2 ? "from-red-500 to-red-600" :
      i===3 ? "from-purple-500 to-purple-600" :
      i===4 ? "from-cyan-500 to-cyan-600" :
              "from-green-500 to-green-600"
  }));

  return (
    <div className="w-full">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-white to-rose-50 px-16 py-32 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-rose-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-8 items-center">
            {/* Icon with Gradient */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl blur-xl opacity-20" />
              <div className="relative bg-gradient-to-br from-pink-500 to-rose-600 p-6 rounded-2xl shadow-xl">
                <Mic className="w-16 h-16 text-white" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-2 rounded-full mx-auto shadow-lg">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">{t("hero.badge")}</span>
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
                  <Video className="w-5 h-5 text-pink-600" />
                  <div className="text-3xl text-[#0c0c09]">{t("stats.psa.value")}</div>
                </div>
                <p className="text-sm text-slate-600">{t("stats.psa.label")}</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MessageCircle className="w-5 h-5 text-rose-600" />
                  <div className="text-3xl text-[#0c0c09]">{t("stats.scripts.value")}</div>
                </div>
                <p className="text-sm text-slate-600">{t("stats.scripts.label")}</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <div className="text-3xl text-[#0c0c09]">{t("stats.free.value")}</div>
                </div>
                <p className="text-sm text-slate-600">{t("stats.free.label")}</p>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <a 
                href="https://www.who.int/teams/risk-communication" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-[#f65d5d] to-[#e54d4d] text-white px-8 py-4 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>{t("hero.ctas.downloadScripts")}</span>
              </a>
              <a 
                href="https://www.ifrc.org/our-work/disasters-climate-and-crises/risk-communication" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-[#0c0c09] px-8 py-4 rounded-lg border-2 border-slate-300 hover:border-[#f65d5d] hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
              >
                <Mic className="w-4 h-4" />
                <span>{t("hero.ctas.bookSlot")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PSA Scripts - Enhanced Dark Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-16 py-28 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
              <Video className="w-4 h-4" />
              <span className="text-sm font-semibold">{t("psaLibrary.badge")}</span>
            </div>
            <h2 className="text-white text-5xl tracking-tight leading-tight mb-6">
              {t("psaLibrary.title")}
            </h2>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
              {t("psaLibrary.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {psaItems.map((psa, i) => (
              <div key={i} className="group relative bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20 p-8 hover:bg-white/15 hover:border-white/40 hover:shadow-2xl transition-all duration-300">
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${psa.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`} />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-white text-2xl tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-300 group-hover:to-rose-300 transition-all duration-300">
                      {psa.hazard}
                    </h3>
                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${psa.color} text-white text-sm px-4 py-2 rounded-lg shadow-lg font-semibold`}>
                      <Video className="w-3 h-3" />
                      {psa.duration}
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg mb-6 border border-white/20">
                    <p className="text-slate-300 text-sm">
                      <strong className="text-white">{t("psaLibrary.languagesLabel")}</strong> {psa.lang}
                    </p>
                  </div>

                  <a 
                    href="https://www.who.int/teams/risk-communication" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-semibold group/link"
                  >
                    <Download className="w-4 h-4" />
                    <span>{t("psaLibrary.download")}</span>
                    <svg className="w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Guidelines - Enhanced Light Section */}
      <section className="bg-gradient-to-br from-white to-slate-50 px-16 py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex gap-20 items-center">
            <div className="flex-1">
              <div className="aspect-[600/640] relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-slate-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1472393365320-db77a5abbecc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGluZmx1ZW5jZXJ8ZW58MXx8fHwxNzYwOTM4NzczfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Social media influencer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-rose-500/10" />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl blur opacity-20" />
                  <div className="relative bg-gradient-to-br from-pink-500 to-rose-600 p-4 rounded-xl inline-flex text-white shadow-lg w-fit">
                    <Share2 className="w-10 h-10" />
                  </div>
                </div>

                <h2 className="text-[#0c0c09] text-5xl tracking-tight leading-tight">
                  {t("partnership.title")}
                </h2>

                <p className="text-slate-600 text-lg leading-relaxed">
                  {t("partnership.subtitle")}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-r from-pink-500 to-rose-600 p-2 rounded-lg">
                      <Video className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-[#0c0c09] text-lg">{t("partnership.recordingSpecs.title")}</h4>
                  </div>
                  <ul className="text-slate-700 space-y-2">
                    {[0,1,2,3].map((i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                        <span>{t(`partnership.recordingSpecs.bullets.${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-2 rounded-lg">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-[#0c0c09] text-lg">{t("partnership.contentGuidelines.title")}</h4>
                  </div>
                  <ul className="text-slate-700 space-y-2">
                    {[0,1,2,3].map((i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{t(`partnership.contentGuidelines.bullets.${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a 
                href="https://www.ifrc.org/our-work/disasters-climate-and-crises/risk-communication" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 font-semibold shadow-lg w-fit"
              >
                <Mic className="w-4 h-4" />
                <span>{t("partnership.bookSession")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Messages Gallery - Enhanced Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-16 py-28 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">{t("gallery.badge")}</span>
            </div>
            <h2 className="text-white text-5xl tracking-tight mb-6">
              {t("gallery.title")}
            </h2>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
              {t("gallery.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {[
              "https://images.unsplash.com/photo-1640017438849-15957fd5b277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjByZWNvcmRpbmclMjBwaG9uZSUyMG1lc3NhZ2V8ZW58MXx8fHwxNzYxMTM2OTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1694878982074-d8d4bc4581b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMHZpZGVvJTIwYW5ub3VuY2VtZW50fGVufDF8fHx8MTc2MTEzNjk3OHww&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1758524571928-6283144ffdea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBjcmVhdGluZyUyMHNvY2lhbCUyMG1lZGlhJTIwY29udGVudHxlbnwxfHx8fDE3NjExMzY5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1663784294206-9b508132baf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMG1lc3NhZ2UlMjByZWNvcmRpbmclMjBzY3JlZW58ZW58MXx8fHwxNzYxMTM2OTc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            ].map((src, i) => (
              <div key={i} className="group relative bg-white/10 backdrop-blur-sm border-2 border-white/20 aspect-square overflow-hidden rounded-2xl hover:border-white/40 hover:shadow-2xl transition-all duration-300">
                <ImageWithFallback
                  src={src}
                  alt={`PSA example ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay with play icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Cards Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white px-16 py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 px-6 py-2 rounded-full mb-6">
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
            <ResourceCard
              title={t("resources.cards.0.title")}
              description={t("resources.cards.0.description")}
              url="https://www.who.int/teams/risk-communication"
              category={t("resources.cards.0.category")}
              icon={FileText}
              tags={[
                t("resources.cards.0.tags.0"),
                t("resources.cards.0.tags.1"),
                t("resources.cards.0.tags.2"),
                t("resources.cards.0.tags.3")
              ]}
              featured={true}
            />
            <ResourceCard
              title={t("resources.cards.1.title")}
              description={t("resources.cards.1.description")}
              url="https://www.ifrc.org/our-work/disasters-climate-and-crises/risk-communication"
              category={t("resources.cards.1.category")}
              icon={MessageCircle}
              tags={[
                t("resources.cards.1.tags.0"),
                t("resources.cards.1.tags.1"),
                t("resources.cards.1.tags.2")
              ]}
            />
            <ResourceCard
              title={t("resources.cards.2.title")}
              description={t("resources.cards.2.description")}
              url="https://communityengagementhub.org"
              category={t("resources.cards.2.category")}
              icon={Share2}
              tags={[
                t("resources.cards.2.tags.0"),
                t("resources.cards.2.tags.1"),
                t("resources.cards.2.tags.2")
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
