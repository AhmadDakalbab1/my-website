import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ResourceCard } from "../components/ResourceCard";
import { Map, Database, Globe, Satellite, CheckCircle2, Sparkles, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function DataMapsPage() {
  const { t } = useTranslation(undefined, { keyPrefix: "dataMaps" });

  return (
    <div className="w-full">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-16 py-32 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-8 items-center">
            {/* Icon with Gradient */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl blur-xl opacity-20" />
              <div className="relative bg-gradient-to-br from-blue-500 to-cyan-600 p-6 rounded-2xl shadow-xl">
                <Map className="w-16 h-16 text-white" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-2 rounded-full mx-auto shadow-lg">
                <Database className="w-4 h-4" />
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
                  <Globe className="w-5 h-5 text-blue-600" />
                  <div className="text-3xl text-[#0c0c09]">{t("stats.un.value")}</div>
                </div>
                <p className="text-sm text-slate-600">{t("stats.un.label")}</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Satellite className="w-5 h-5 text-cyan-600" />
                  <div className="text-3xl text-[#0c0c09]">{t("stats.live.value")}</div>
                </div>
                <p className="text-sm text-slate-600">{t("stats.live.label")}</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <div className="text-3xl text-[#0c0c09]">{t("stats.authoritative.value")}</div>
                </div>
                <p className="text-sm text-slate-600">{t("stats.authoritative.label")}</p>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href="https://reliefweb.int"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#f65d5d] to-[#e54d4d] text-white px-8 py-4 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 shadow-lg"
              >
                <span>{t("hero.ctas.exploreData")}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://humanitarian.atlassian.net/wiki/spaces/imtoolbox"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#0c0c09] px-8 py-4 rounded-lg border-2 border-slate-300 hover:border-[#f65d5d] hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
              >
                <span>{t("hero.ctas.citationGuide")}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reliable Data Sources - Enhanced Dark Section */}
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
              <Database className="w-4 h-4" />
              <span className="text-sm font-semibold">{t("sources.badge")}</span>
            </div>
            <h2 className="text-white text-5xl tracking-tight leading-tight mb-6">
              {t("sources.title")}
            </h2>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
              {t("sources.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {[
              {
                link: "https://reliefweb.int",
                color: "from-blue-500 to-blue-600",
                idx: 0,
              },
              {
                link: "https://www.acaps.org",
                color: "from-purple-500 to-purple-600",
                idx: 1,
              },
              {
                link: "https://go.ifrc.org",
                color: "from-red-500 to-red-600",
                idx: 2,
              },
              {
                link: "https://www.gdacs.org",
                color: "from-orange-500 to-orange-600",
                idx: 3,
              },
            ].map((source, index) => (
              <div key={index} className="group relative bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20 p-8 flex flex-col gap-6 hover:bg-white/15 hover:border-white/40 hover:shadow-2xl transition-all duration-300">
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${source.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`} />

                <div className="flex flex-col gap-2 relative z-10">
                  <h3 className="text-white text-2xl tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 transition-all duration-300">
                    {t(`sources.items.${source.idx}.name`)}
                  </h3>
                  <p className="text-slate-400 text-sm">{t(`sources.items.${source.idx}.org`)}</p>
                </div>

                <p className="text-slate-300 relative z-10">{t(`sources.items.${source.idx}.description`)}</p>

                <div className="grid grid-cols-2 gap-3 relative z-10">
                  {[0, 1, 2, 3].map((fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${source.color} rounded-full shadow-lg`} />
                      <p className="text-slate-200 text-sm">{t(`sources.items.${source.idx}.features.${fIndex}`)}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={source.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors mt-auto pt-4 border-t border-white/20 font-semibold relative z-10 group/link"
                >
                  <span>{t(`sources.items.${source.idx}.linkLabel`)}</span>
                  <svg className="w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rapid Mapping Section - Enhanced */}
      <section className="bg-gradient-to-br from-white to-slate-50 px-16 py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex gap-20 items-center">
            <div className="flex-1">
              <div className="aspect-[600/640] relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-slate-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1584291527905-f930791fb1ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMG1hcHN8ZW58MXx8fHwxNzYxMDE2NDA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Data visualization and mapping"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10" />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl blur opacity-20" />
                  <div className="relative bg-gradient-to-br from-blue-500 to-cyan-600 p-4 rounded-xl inline-flex text-white shadow-lg w-fit">
                    <Satellite className="w-10 h-10" />
                  </div>
                </div>

                <h2 className="text-[#0c0c09] text-5xl tracking-tight leading-tight">
                  {t("rapidMapping.title")}
                </h2>

                <p className="text-slate-600 text-lg leading-relaxed">
                  {t("rapidMapping.subtitle")}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  { color: "from-blue-500 to-blue-600", idx: 0 },
                  { color: "from-purple-500 to-purple-600", idx: 1 },
                  { color: "from-green-500 to-green-600", idx: 2 },
                  { color: "from-orange-500 to-orange-600", idx: 3 },
                ].map((service) => (
                  <div key={service.idx} className="group bg-white rounded-xl border-2 border-slate-200 p-5 hover:border-transparent hover:shadow-xl transition-all duration-300">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`} />
                    <div className="flex items-start gap-4">
                      <div className={`w-1 h-12 bg-gradient-to-b ${service.color} rounded-full flex-shrink-0`} />
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#0c0c09] mb-1">{t(`rapidMapping.services.${service.idx}.name`)}</h4>
                        <p className="text-slate-600 text-sm">{t(`rapidMapping.services.${service.idx}.description`)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href="https://humanitarian.atlassian.net/wiki/spaces/imtoolbox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#0c0c09] px-6 py-3 rounded-lg border-2 border-slate-300 hover:border-[#f65d5d] hover:shadow-lg transition-all duration-200 inline-flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>{t("rapidMapping.ctas.citationGuide")}</span>
                </a>
                <a
                  href="https://emergency.copernicus.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#0c0c09] px-6 py-3 hover:text-[#f65d5d] transition-colors font-semibold"
                >
                  <span>{t("rapidMapping.ctas.viewExamples")}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Management - Enhanced Dark Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-16 py-28 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="flex gap-20 items-center">
            <div className="flex-1 flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl blur opacity-20" />
                  <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-xl inline-flex text-white shadow-lg w-fit">
                    <Globe className="w-10 h-10" />
                  </div>
                </div>

                <h2 className="text-white text-5xl tracking-tight leading-tight">
                  {t("informationManagement.title")}
                </h2>

                <p className="text-slate-300 text-lg leading-relaxed">
                  {t("informationManagement.subtitle")}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-lg">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-white text-xl">{t("informationManagement.glossaryTitle")}</h4>
                </div>
                <div className="flex flex-col gap-4">
                  {[0, 1, 2, 3].map((index) => (
                    <div key={index} className="flex gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all duration-200">
                      <span className="font-semibold text-emerald-400 min-w-[80px]">
                        {t(`informationManagement.glossary.${index}.term`)}:
                      </span>
                      <span className="text-slate-300">
                        {t(`informationManagement.glossary.${index}.def`)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://humanitarian.atlassian.net/wiki/spaces/imtoolbox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 font-semibold shadow-lg"
                >
                  <span>{t("informationManagement.ctas.imToolbox")}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="https://data.humdata.org/dashboards/overview-of-data-standards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-200 inline-flex items-center gap-2 font-semibold"
                >
                  <span>{t("informationManagement.ctas.standards")}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-white/10 backdrop-blur-sm border-4 border-white/30 rounded-2xl p-10 shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-3 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white text-2xl tracking-tight">{t("informationManagement.citeCard.title")}</h3>
                </div>
                <div className="flex flex-col gap-5 text-sm">
                  {[0, 1, 2, 3].map((index) => (
                    <div key={index}>
                      <p className="font-semibold text-slate-200 mb-2">
                        {t(`informationManagement.citeCard.items.${index}.label`)}
                      </p>
                      <p className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-slate-300 border border-white/20">
                        {t(`informationManagement.citeCard.items.${index}.example`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Resource Cards Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white px-16 py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-6 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">{t("platforms.badge")}</span>
            </div>
            <h2 className="text-[#0c0c09] text-5xl tracking-tight leading-tight mb-6">
              {t("platforms.title")}
            </h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
              {t("platforms.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title={t("platforms.cards.0.title")}
              description={t("platforms.cards.0.description")}
              url="https://reliefweb.int"
              category={t("platforms.cards.0.category")}
              icon={Database}
              tags={[
                t("platforms.cards.0.tags.0"),
                t("platforms.cards.0.tags.1"),
                t("platforms.cards.0.tags.2"),
                t("platforms.cards.0.tags.3"),
              ]}
              featured={true}
            />
            <ResourceCard
              title={t("platforms.cards.1.title")}
              description={t("platforms.cards.1.description")}
              url="https://www.acaps.org"
              category={t("platforms.cards.1.category")}
              icon={Map}
              tags={[
                t("platforms.cards.1.tags.0"),
                t("platforms.cards.1.tags.1"),
                t("platforms.cards.1.tags.2"),
              ]}
            />
            <ResourceCard
              title={t("platforms.cards.2.title")}
              description={t("platforms.cards.2.description")}
              url="https://go.ifrc.org"
              category={t("platforms.cards.2.category")}
              icon={Globe}
              tags={[
                t("platforms.cards.2.tags.0"),
                t("platforms.cards.2.tags.1"),
                t("platforms.cards.2.tags.2"),
              ]}
            />
            <ResourceCard
              title={t("platforms.cards.3.title")}
              description={t("platforms.cards.3.description")}
              url="https://www.gdacs.org"
              category={t("platforms.cards.3.category")}
              icon={Satellite}
              tags={[
                t("platforms.cards.3.tags.0"),
                t("platforms.cards.3.tags.1"),
                t("platforms.cards.3.tags.2"),
              ]}
            />
            <ResourceCard
              title={t("platforms.cards.4.title")}
              description={t("platforms.cards.4.description")}
              url="https://data.humdata.org"
              category={t("platforms.cards.4.category")}
              icon={Database}
              tags={[
                t("platforms.cards.4.tags.0"),
                t("platforms.cards.4.tags.1"),
                t("platforms.cards.4.tags.2"),
                t("platforms.cards.4.tags.3"),
              ]}
            />
            <ResourceCard
              title={t("platforms.cards.5.title")}
              description={t("platforms.cards.5.description")}
              url="https://emergency.copernicus.eu"
              category={t("platforms.cards.5.category")}
              icon={Satellite}
              tags={[
                t("platforms.cards.5.tags.0"),
                t("platforms.cards.5.tags.1"),
                t("platforms.cards.5.tags.2"),
                t("platforms.cards.5.tags.3"),
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
