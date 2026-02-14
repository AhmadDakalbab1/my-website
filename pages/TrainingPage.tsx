import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ResourceCard } from "../components/ResourceCard";
import {
  GraduationCap,
  Video,
  BookOpen,
  FileText,
  Users,
  Sparkles,
  CheckCircle2,
  Clock,
  Award
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function TrainingPage() {
  const { t } = useTranslation(undefined, { keyPrefix: "training" });

  return (
    <div className="w-full">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-indigo-50 px-16 py-32 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-8 items-center">
            {/* Icon with Gradient */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl blur-xl opacity-20" />
              <div className="relative bg-gradient-to-br from-purple-500 to-indigo-600 p-6 rounded-2xl shadow-xl">
                <GraduationCap className="w-16 h-16 text-white" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-full mx-auto shadow-lg">
                <Users className="w-4 h-4" />
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
                  <Video className="w-5 h-5 text-purple-600" />
                  <div className="text-3xl text-[#0c0c09]">
                    {t("stats.free.value")}
                  </div>
                </div>
                <p className="text-sm text-slate-600">
                  {t("stats.free.label")}
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-indigo-600" />
                  <div className="text-3xl text-[#0c0c09]">
                    {t("stats.ready.value")}
                  </div>
                </div>
                <p className="text-sm text-slate-600">
                  {t("stats.ready.label")}
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <div className="text-3xl text-[#0c0c09]">
                    {t("stats.expert.value")}
                  </div>
                </div>
                <p className="text-sm text-slate-600">
                  {t("stats.expert.label")}
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href="https://knightcenter.utexas.edu/catalog.php"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#f65d5d] to-[#e54d4d] text-white px-8 py-4 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 shadow-lg"
              >
                <span>{t("hero.ctas.knightCourses")}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <a
                href="#workshop-box"
                className="bg-white text-[#0c0c09] px-8 py-4 rounded-lg border-2 border-slate-300 hover:border-[#f65d5d] hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
              >
                <span>{t("hero.ctas.workshopKits")}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Videos & Webinars */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-16 py-28 overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
              <Video className="w-4 h-4" />
              <span className="text-sm font-semibold">{t("videos.badge")}</span>
            </div>
            <h2 className="text-white text-5xl tracking-tight leading-tight mb-6">
              {t("videos.title")}
            </h2>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
              {t("videos.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20 p-8 flex flex-col gap-6 hover:bg-white/15 hover:border-white/40 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-3 rounded-xl">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-300 text-sm">
                    {t(`videos.items.${i}.hours`)}
                  </span>
                </div>

                <div>
                  <h3 className="text-white text-2xl tracking-tight">
                    {t(`videos.items.${i}.title`)}
                  </h3>
                  <p className="text-slate-300">
                    {t(`videos.items.${i}.desc`)}
                  </p>
                </div>

                <a
                  href="#"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors mt-auto pt-2 border-t border-white/20 font-semibold"
                >
                  <span>{t(`videos.items.${i}.cta`)}</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop-in-a-Box */}
      <section
        id="workshop-box"
        className="bg-gradient-to-br from-white to-slate-50 px-16 py-28"
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="flex gap-20 items-center">
            <div className="flex-1">
              <div className="aspect-[600/640] relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-slate-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2069&auto=format&fit=crop"
                  alt="Training resources and workshop materials"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-indigo-500/10" />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl blur opacity-20" />
                  <div className="relative bg-gradient-to-br from-purple-500 to-indigo-600 p-4 rounded-xl inline-flex text-white shadow-lg w-fit">
                    <FileText className="w-10 h-10" />
                  </div>
                </div>

                <h2 className="text-[#0c0c09] text-5xl tracking-tight leading-tight">
                  {t("workshopBox.title")}
                </h2>

                <p className="text-slate-600 text-lg leading-relaxed">
                  {t("workshopBox.subtitle")}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="group bg-white rounded-xl border-2 border-slate-200 p-5 hover:border-transparent hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-full flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#0c0c09] mb-1">
                          {t(`workshopBox.items.${i}.title`)}
                        </h4>
                        <p className="text-slate-600 text-sm">
                          {t(`workshopBox.items.${i}.duration`)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href="#"
                  className="bg-white text-[#0c0c09] px-6 py-3 rounded-lg border-2 border-slate-300 hover:border-[#f65d5d] hover:shadow-lg transition-all duration-200 inline-flex items-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  <span>{t("workshopBox.ctas.download")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Training Resources */}
      <section className="bg-gradient-to-br from-slate-50 to-white px-16 py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-6 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">{t("featured.badge")}</span>
            </div>
            <h2 className="text-[#0c0c09] text-5xl tracking-tight leading-tight mb-6">
              {t("featured.title")}
            </h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
              {t("featured.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title={t("featured.cards.0.title")}
              description={t("featured.cards.0.description")}
              url="https://knightcenter.utexas.edu/course-category/mooc/"
              category={t("featured.cards.0.category")}
              icon={BookOpen}
              tags={[
                t("featured.cards.0.tags.0"),
                t("featured.cards.0.tags.1"),
                t("featured.cards.0.tags.2"),
                t("featured.cards.0.tags.3")
              ]}
              featured={true}
            />
            <ResourceCard
              title={t("featured.cards.1.title")}
              description={t("featured.cards.1.description")}
              url="https://www.bbc.co.uk/mediaaction"
              category={t("featured.cards.1.category")}
              icon={FileText}
              tags={[
                t("featured.cards.1.tags.0"),
                t("featured.cards.1.tags.1"),
                t("featured.cards.1.tags.2")
              ]}
            />
            <ResourceCard
              title={t("featured.cards.2.title")}
              description={t("featured.cards.2.description")}
              url="https://gijn.org/category/resource/"
              category={t("featured.cards.2.category")}
              icon={Users}
              tags={[
                t("featured.cards.2.tags.0"),
                t("featured.cards.2.tags.1"),
                t("featured.cards.2.tags.2")
              ]}
            />
            <ResourceCard
              title={t("featured.cards.3.title")}
              description={t("featured.cards.3.description")}
              url="https://www.poynter.org/courses/"
              category={t("featured.cards.3.category")}
              icon={GraduationCap}
              tags={[
                t("featured.cards.3.tags.0"),
                t("featured.cards.3.tags.1"),
                t("featured.cards.3.tags.2"),
                t("featured.cards.3.tags.3")
              ]}
            />
            <ResourceCard
              title={t("featured.cards.4.title")}
              description={t("featured.cards.4.description")}
              url="https://internews.org"
              category={t("featured.cards.4.category")}
              icon={Users}
              tags={[
                t("featured.cards.4.tags.0"),
                t("featured.cards.4.tags.1"),
                t("featured.cards.4.tags.2")
              ]}
            />
            <ResourceCard
              title={t("featured.cards.5.title")}
              description={t("featured.cards.5.description")}
              url="https://firstdraftnews.org/long-form-article/first-draft-essential-guide/"
              category={t("featured.cards.5.category")}
              icon={CheckCircle2}
              tags={[
                t("featured.cards.5.tags.0"),
                t("featured.cards.5.tags.1"),
                t("featured.cards.5.tags.2")
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
