// pages/ToolsPage.tsx
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ResourceCard } from "../components/ResourceCard";
import {
  Wrench,
  PenTool,
  Image as ImageIcon,
  Search,
  Shield,
  Code,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function ToolsPage() {
  const { t } = useTranslation(undefined, { keyPrefix: "tools.index" });

  // Icon/color meta aligned by index with i18n categories (texts come from i18n)
  const categoryMeta = [
    { icon: <PenTool className="w-8 h-8" />, color: "from-blue-500 to-blue-600", bgColor: "bg-blue-50", iconBg: "bg-gradient-to-br from-blue-500 to-blue-600" },
    { icon: <ImageIcon className="w-8 h-8" />, color: "from-purple-500 to-purple-600", bgColor: "bg-purple-50", iconBg: "bg-gradient-to-br from-purple-500 to-purple-600" },
    { icon: <Search className="w-8 h-8" />, color: "from-green-500 to-green-600", bgColor: "bg-green-50", iconBg: "bg-gradient-to-br from-green-500 to-green-600" },
    { icon: <Shield className="w-8 h-8" />, color: "from-red-500 to-red-600", bgColor: "bg-red-50", iconBg: "bg-gradient-to-br from-red-500 to-red-600" },
    { icon: <Zap className="w-8 h-8" />, color: "from-orange-500 to-orange-600", bgColor: "bg-orange-50", iconBg: "bg-gradient-to-br from-orange-500 to-orange-600" },
    { icon: <Code className="w-8 h-8" />, color: "from-indigo-500 to-indigo-600", bgColor: "bg-indigo-50", iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-600" },
  ];

  // ===== typed data from i18n =====
  type Category = { title: string; description: string; tools: string[]; link: string };
  type FeaturedPick = { category: string; name: string; description: string; useLabel: string; use: string; url: string };
  type FVCard = { title: string; description: string; url: string; category: string; tags: string[] };

  const categories = t("categories", { returnObjects: true }) as Category[];
  const featuredPicks = t("featuredPicks.items", { returnObjects: true }) as FeaturedPick[];
  const fvCards = t("featuredVerification.cards", { returnObjects: true }) as FVCard[];
  const guidelines = t("responsibleAI.guidelines", { returnObjects: true }) as string[];

  return (
    <div className="w-full">
      {/* Enhanced Hero Section with Gradient & Stats */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 px-16 py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-8 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-20" />
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-2xl shadow-xl">
                <Wrench className="w-16 h-16 text-white" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full mx-auto shadow-lg">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">{t("header.badge")}</span>
              </div>

              <h1 className="text-[#0c0c09] text-7xl tracking-tight leading-tight">
                {t("header.title")}
              </h1>

              <p className="text-[#0c0c09] text-xl leading-relaxed max-w-3xl mx-auto">
                {t("header.subtitle")}
              </p>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-8 w-full max-w-3xl mt-4">
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <div className="text-3xl text-[#0c0c09]">{t("header.stats.toolsValue")}</div>
                </div>
                <p className="text-sm text-slate-600">{t("header.stats.toolsLabel")}</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <div className="text-3xl text-[#0c0c09]">{t("header.stats.categoriesValue")}</div>
                </div>
                <p className="text-sm text-slate-600">{t("header.stats.categoriesLabel")}</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  <div className="text-3xl text-[#0c0c09]">{t("header.stats.trustedValue")}</div>
                </div>
                <p className="text-sm text-slate-600">{t("header.stats.trustedLabel")}</p>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href="https://newsinitiative.withgoogle.com/resources/trainings/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#f65d5d] to-[#e54d4d] text-white px-8 py-4 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 shadow-lg"
              >
                <span>{t("header.ctas.googleNewsTools")}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://gijn.org/resources/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#0c0c09] px-8 py-4 rounded-lg border-2 border-slate-300 hover:border-[#f65d5d] hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
              >
                <span>{t("header.ctas.gijnResources")}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Warning Banner */}
      <section className="relative bg-gradient-to-r from-[#e54d4d] via-[#f65d5d] to-[#e54d5d] text-white px-16 py-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)",
            }}
          />
        </div>
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" />
            <p className="text-center text-lg">
              <strong className="font-semibold">{t("warning.important")}</strong> {t("warning.text")}
            </p>
            <AlertTriangle className="w-6 h-6 flex-shrink-0" />
          </div>
        </div>
      </section>

      {/* Enhanced Tool Categories Grid */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-16 py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">{t("explore.badge")}</span>
            </div>
            <h2 className="text-white text-5xl tracking-tight leading-tight mb-4">{t("explore.title")}</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">{t("explore.subtitle")}</p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link key={index} href={category.link}>
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20 p-8 flex flex-col gap-6 hover:bg-white/15 hover:border-white/40 hover:shadow-2xl transition-all duration-300 cursor-pointer h-full overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${categoryMeta[index]?.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-sm text-white font-semibold group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300 border border-white/20">
                    {index + 1}
                  </div>
                  <div className="relative z-10">
                    <div className={`${categoryMeta[index]?.iconBg} p-4 rounded-xl inline-flex text-white shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 ring-2 ring-white/20`}>
                      {categoryMeta[index]?.icon}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 relative z-10">
                    <h3 className="text-white text-2xl tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                      {category.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">{category.description}</p>
                  </div>
                  <div className="flex flex-col gap-3 relative z-10">
                    {category.tools.map((tool) => (
                      <div key={tool} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${categoryMeta[index]?.color} shadow-lg`} />
                        <p className="text-slate-200 text-sm">{tool}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 group-hover:text-white transition-colors mt-auto pt-4 border-t border-white/20 relative z-10">
                    <span className="font-semibold">{t("explore.viewAll")}</span>
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Tools Section */}
      <section className="bg-white px-16 py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 text-orange-700 px-6 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">{t("featuredPicks.badge")}</span>
            </div>
            <h2 className="text-[#0c0c09] text-5xl tracking-tight leading-tight mb-6">{t("featuredPicks.title")}</h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
              {t("featuredPicks.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {featuredPicks.map((tool, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl border-2 border-slate-200 p-8 flex flex-col gap-5 hover:shadow-2xl hover:border-transparent transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${categoryMeta[index % categoryMeta.length]?.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="flex items-start justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className={`bg-gradient-to-br ${categoryMeta[index % categoryMeta.length]?.color} p-3 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Shield className="w-5 h-5" />
                    </div>
                    <span className={`bg-gradient-to-r ${categoryMeta[index % categoryMeta.length]?.color} text-white text-xs px-4 py-1.5 rounded-full font-semibold shadow-md`}>
                      {tool.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-[#0c0c09] text-2xl tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 relative z-10">
                  {tool.name}
                </h3>

                <p className="text-slate-700 leading-relaxed relative z-10">{tool.description}</p>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-5 rounded-xl border border-blue-100 relative z-10">
                  <p className="text-slate-700 text-sm leading-relaxed">
                    <strong className="text-[#0c0c09]">{tool.useLabel}</strong> {tool.use}
                  </p>
                </div>

                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-[#f65d5d] transition-colors mt-auto pt-4 border-slate-200 font-semibold relative z-10 group/link"
                >
                  <span>{t("featuredPicks.visitTool")}</span>
                  <svg className="w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Responsible AI Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-16 py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="flex gap-20 items-center">
            <div className="flex-1">
              <div className="aspect-[600/640] relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1643501381409-bca32a0588bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdG9vbHMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDk4ODMzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={t("responsibleAI.image.alt")}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20" />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full w-fit shadow-lg">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-semibold">{t("responsibleAI.badge")}</span>
                </div>

                <h2 className="text-white text-5xl tracking-tight leading-tight">
                  {t("responsibleAI.title")}
                </h2>

                <p className="text-slate-300 text-lg leading-relaxed">
                  {t("responsibleAI.text")}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {guidelines.map((g: string, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-white text-lg pt-0.5">{g}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://www.poynter.org/ethics-trust/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 w-fit mt-4 font-semibold"
              >
                <span>{t("responsibleAI.learnMore")}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Resource Cards Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white px-16 py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-6 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">{t("featuredVerification.badge")}</span>
            </div>
            <h2 className="text-[#0c0c09] text-5xl tracking-tight leading-tight mb-6">{t("featuredVerification.title")}</h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
              {t("featuredVerification.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fvCards.map((card) => (
              <ResourceCard
                key={card.title}
                title={card.title}
                description={card.description}
                url={card.url}
                category={card.category}
                icon={ImageIcon}
                tags={card.tags}
                featured={card.title === "InVID Verification Plugin"}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
