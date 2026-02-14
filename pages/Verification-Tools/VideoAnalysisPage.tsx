import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { ArrowLeft, ExternalLink, Video, Film, Play, Database, FileVideo, Layers } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function VideoAnalysisPage() {
  const { t } = useTranslation(undefined, { keyPrefix: "verification.videoAnalysis" });

  // ثابتات الأيقونات/الألوان فقط - النصوص من i18n
  const categoryMeta = [
    { icon: <Video className="w-6 h-6" />,    color: "bg-purple-50 text-purple-600", toolCount: 5 },
    { icon: <Database className="w-6 h-6" />, color: "bg-blue-50 text-blue-600",     toolCount: 5 },
    { icon: <Film className="w-6 h-6" />,     color: "bg-green-50 text-green-600",    toolCount: 5 },
    { icon: <Layers className="w-6 h-6" />,   color: "bg-red-50 text-red-600",        toolCount: 5 },
    { icon: <Play className="w-6 h-6" />,     color: "bg-yellow-50 text-yellow-600",  toolCount: 5 },
    { icon: <FileVideo className="w-6 h-6" />,color: "bg-orange-50 text-orange-600",  toolCount: 5 }
  ];

  const toolCategories = categoryMeta.map((meta, idx) => {
    const tools = Array.from({ length: meta.toolCount }, (_, ti) => ({
      name: t(`categories.${idx}.tools.${ti}.name`),
      url: t(`categories.${idx}.tools.${ti}.url`),
      description: t(`categories.${idx}.tools.${ti}.description`)
    }));
    return {
      title: t(`categories.${idx}.title`),
      description: t(`categories.${idx}.description`),
      icon: meta.icon,
      color: meta.color,
      tools
    };
  });

  return (
    <div className="min-h-screen bg-white font-['Cabin']">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-800 text-white px-8 py-20">
        <div className="max-w-[1280px] mx-auto">
          <Link href="/verification">
            <a className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>{t("header.back")}</span>
            </a>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Video className="w-5 h-5" />
                <span>{t("header.badge")}</span>
              </div>
              <h1 className="font-['Aleo'] text-5xl mb-6">{t("header.title")}</h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                {t("header.subtitle")}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <div className="text-3xl font-bold">{t("header.stats.toolsValue")}</div>
                  <div className="text-sm text-white/80">{t("header.stats.toolsLabel")}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <div className="text-3xl font-bold">{t("header.stats.categoriesValue")}</div>
                  <div className="text-sm text-white/80">{t("header.stats.categoriesLabel")}</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1732327390234-c78eb47d1b88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2MjAxOTU4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt={t("header.heroAlt")}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      {toolCategories.map((category, idx) => (
        <section key={idx} className={idx % 2 === 0 ? "bg-white px-8 py-16" : "bg-gray-50 px-8 py-16"}>
          <div className="max-w-[1280px] mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className={`${category.color} w-14 h-14 rounded-lg flex items-center justify-center`}>
                {category.icon}
              </div>
              <div>
                <h2 className="font-['Aleo'] text-3xl text-[#0c0c09]">{category.title}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.tools.map((tool, i) => (
                <a
                  key={`${category.title}-${i}`}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-500 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-['Aleo'] text-xl text-[#0c0c09] group-hover:text-purple-600 transition-colors">
                      {tool.name}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors flex-shrink-0 ml-2" />
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {tool.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Best Practices */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white px-8 py-16">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="font-['Aleo'] text-3xl mb-8 text-center">
            {t("bestPractices.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[0,1,2].map((i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-4">{t(`bestPractices.items.${i}.emoji`)}</div>
                <h3 className="font-['Aleo'] text-xl mb-3">{t(`bestPractices.items.${i}.title`)}</h3>
                <p className="text-white/80">
                  {t(`bestPractices.items.${i}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
