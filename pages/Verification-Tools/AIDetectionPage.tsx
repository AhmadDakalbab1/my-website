import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { ArrowLeft, ExternalLink, Zap, Brain, Image as ImageIcon, Video, FileText, Cpu } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function AIDetectionPage() {
  const { t } = useTranslation(undefined, { keyPrefix: "verification.aiDetection" });

  // icons/colors kept locally and aligned to categories by index
  const visualMeta = [
    { icon: <ImageIcon className="w-6 h-6" />, color: "bg-orange-50 text-orange-600" },
    { icon: <Video className="w-6 h-6" />,     color: "bg-purple-50 text-purple-600" },
    { icon: <FileText className="w-6 h-6" />,  color: "bg-blue-50 text-blue-600" },
    { icon: <Cpu className="w-6 h-6" />,       color: "bg-green-50 text-green-600" },
    { icon: <Brain className="w-6 h-6" />,     color: "bg-red-50 text-red-600" },
    { icon: <Zap className="w-6 h-6" />,       color: "bg-yellow-50 text-yellow-600" }
  ];

  type Tool = { name: string; url: string; description: string; };
  type Category = { title: string; description: string; tools: Tool[]; };
  type PracticeItem = { emoji: string; title: string; text: string; };

  const categories = t("categories", { returnObjects: true }) as Category[];
  const bestItems = t("bestPractices.items", { returnObjects: true }) as PracticeItem[];

  return (
    <div className="min-h-screen bg-white font-['Cabin']">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-orange-600 to-orange-800 text-white px-8 py-20">
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
                <Zap className="w-5 h-5" />
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
                  src="/public/AI-detector.png"
                  alt={t("image.alt")}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      {categories.map((category, idx) => (
        <section key={category.title} className={idx % 2 === 0 ? "bg-white px-8 py-16" : "bg-gray-50 px-8 py-16"}>
          <div className="max-w-[1280px] mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className={`${visualMeta[idx]?.color} w-14 h-14 rounded-lg flex items-center justify-center`}>
                {visualMeta[idx]?.icon}
              </div>
              <div>
                <h2 className="font-['Aleo'] text-3xl text-[#0c0c09]">{category.title}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.tools.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-['Aleo'] text-xl text-[#0c0c09] group-hover:text-orange-600 transition-colors">
                      {tool.name}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-orange-600 transition-colors flex-shrink-0 ml-2" />
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
          <h2 className="font-['Aleo'] text-3xl mb-8 text-center">{t("bestPractices.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestItems.map((item) => (
              <div key={item.title} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="font-['Aleo'] text-xl mb-3">{item.title}</h3>
                <p className="text-white/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
