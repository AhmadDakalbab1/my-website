import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  CheckCircle,
  Eye,
  Shield,
  AlertTriangle,
  ExternalLink,
  Search,
  FileCheck,
  Video,
  Image as ImageIcon,
  Users,
  Zap,
  ArrowRight,
} from "lucide-react";
import { ExpertVoices } from "../components/ExpertVoices";
import { DynamicNewsFeed } from "../components/DynamicNewsFeed";
import { PageTypeBadge } from "../components/PageTypeBadge";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function VerificationPage() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="absolute top-56 right-4 right-4 z-50">
        <PageTypeBadge type="dynamic" />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 px-16 py-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full self-start">
                <Shield className="w-4 h-4" />
                <span className="font-['Cabin']">
                  {t("verification.hero.badge")}
                </span>
              </div>
              <h1 className="font-['Aleo'] text-[#0c0c09] tracking-tight leading-tight">
                {t("verification.hero.title")}
              </h1>
              <p className="font-['Cabin'] text-[#0c0c09] text-lg leading-relaxed">
                {t("verification.hero.subtitle")}
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://verificationhandbook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f65d5d] text-white px-6 py-3 font-['Cabin'] hover:bg-[#e54d4d] transition-colors inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <FileCheck className="w-5 h-5" />
                  {t("verification.buttons.verificationHandbook")}
                </a>
                <a
                  href="https://www.poynter.org/ifcn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-[#0c0c09] text-[#0c0c09] px-6 py-3 font-['Cabin'] hover:bg-[#0c0c09] hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  {t("verification.buttons.ifcnFactChecking")}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1672839946212-aee298e40923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0JTIwY2hlY2tpbmclMjBpbnZlc3RpZ2F0aW9ufGVufDF8fHx8MTc2MTY0ODA2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Fact checking and verification"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-8 py-5 rounded-xl shadow-2xl border-2 border-green-100 hover:shadow-3xl transition-all hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <p className="font-['Cabin'] text-xs text-gray-600 uppercase tracking-wide">
                      {t("verification.hero.trustedBy")}
                    </p>
                    <p className="font-['Aleo'] text-2xl text-[#0c0c09]">
                      {t("verification.hero.newsrooms")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Verification Checklist */}
      <section className="bg-[#0c0c09] text-white px-16 py-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['Aleo'] text-4xl mb-4">
              {t("verification.process.title")}
            </h2>
            <p className="font-['Cabin'] text-lg text-gray-300 max-w-2xl mx-auto">
              {t("verification.process.subtitle")}
            </p>
          </div>

          {/* EXACT order & wording from en.ts (6 steps) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Search className="w-8 h-8" />,
                title: t("verification.process.step1.title"),
                description: t("verification.process.step1.description"),
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: t("verification.process.step2.title"),
                description: t("verification.process.step2.description"),
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: t("verification.process.step3.title"),
                description: t("verification.process.step3.description"),
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: t("verification.process.step4.title"),
                description: t("verification.process.step4.description"),
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: t("verification.process.step5.title"),
                description: t("verification.process.step5.description"),
              },
              {
                icon: <FileCheck className="w-8 h-8" />,
                title: t("verification.process.step6.title"),
                description: t("verification.process.step6.description"),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="bg-[#f65d5d] w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-['Aleo'] text-xl mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="font-['Cabin'] text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Tools Showcase */}
      <section className="bg-white px-16 py-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Aleo'] text-[#0c0c09] text-4xl mb-4">
              {t("verification.tools.title")}
            </h2>
            <p className="font-['Cabin'] text-[#0c0c09] text-lg max-w-3xl mx-auto">
              {t("verification.tools.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ImageIcon className="w-10 h-10" />,
                title: t("verification.tools.imageVerification"),
                tools: [
                  "Google Reverse Image",
                  "TinEye",
                  "Yandex Images",
                  "InVID/WeVerify",
                ],
                color: "bg-blue-50 text-blue-600",
                route: "/verification/image-verification",
              },
              {
                icon: <Video className="w-10 h-10" />,
                title: t("verification.tools.videoVerification"),
                tools: [
                  "InVID Plugin",
                  "YouTube DataViewer",
                  "Amnesty Citizen Evidence",
                  "FFmpeg",
                ],
                color: "bg-purple-50 text-purple-600",
                route: "/verification/video-analysis",
              },
              {
                icon: <Search className="w-10 h-10" />,
                title: t("verification.tools.geolocation"),
                tools: [
                  "Google Earth Pro",
                  "Satellite Imagery",
                  "SunCalc",
                  "Chronolocation",
                ],
                color: "bg-green-50 text-green-600",
                route: "/verification/geolocation-tools",
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: t("verification.tools.social"),
                tools: [
                  "Twitter Advanced Search",
                  "Wayback Machine",
                  "Bot Sentinel",
                  "Social Searcher",
                ],
                color: "bg-red-50 text-red-600",
                route: "/verification/account-verification",
              },
              {
                icon: <FileCheck className="w-10 h-10" />,
                title: t("verification.tools.factCheck"),
                tools: [
                  "Google Fact Check",
                  "ClaimReview",
                  "IFCN Database",
                  "Snopes",
                ],
                color: "bg-yellow-50 text-yellow-600",
                route: "/verification/fact-check-databases",
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: t("verification.tools.metadata"),
                tools: [
                  "Sensity AI",
                  "Hive Moderation",
                  "AI Detection Tools",
                  "Forensic Analysis",
                ],
                color: "bg-orange-50 text-orange-600",
                route: "/verification/ai-detection",
              },
            ].map((category) => (
              <Link key={category.title as string} href={category.route}>
                <a className="group bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#f65d5d] hover:shadow-xl transition-all block cursor-pointer">
                  <div
                    className={`${category.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="font-['Aleo'] text-[#0c0c09] text-xl mb-4 group-hover:text-[#f65d5d] transition-colors">
                    {category.title}
                  </h3>
                  <ul className="font-['Cabin'] text-sm text-gray-600 space-y-2">
                    {category.tools.map((tool) => (
                      <li key={tool} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#f65d5d] rounded-full"></div>
                        {tool}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center gap-2 text-[#f65d5d] font-['Cabin'] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>{t("verification.buttons.exploreTools")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Image Verification Deep Dive */}
      <section className="bg-gray-50 px-16 py-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1584291527908-033f4d6542c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjBjb21wdXRlciUyMHNjcmVlbnxlbnwxfHx8fDE3NjE2NDgwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Image verification analysis"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full self-start">
                <ImageIcon className="w-4 h-4" />
                <span className="font-['Cabin']">
                  {t("verification.badges.essential")}
                </span>
              </div>
              <h2 className="font-['Aleo'] text-[#0c0c09] text-4xl">
                {t("verification.tools.imageVerification")}
              </h2>
              <p className="font-['Cabin'] text-[#0c0c09] text-lg leading-relaxed">
                {t("verification.tools.imageDesc")}
              </p>
              {/* Skills (labels + percents from i18n, with sane fallbacks) */}
              <div className="space-y-4">
                {(() => {
                  const defaults: Record<string, string> = {
                    exif: "95%",
                    reverse: "98%",
                    geolocation: "85%",
                    shadow: "75%",
                  };

                  const keys = [
                    "exif",
                    "reverse",
                    "geolocation",
                    "shadow",
                  ] as const;

                  const skills = keys.map((k) => ({
                    id: k,
                    label: t(`verification.image.skills.${k}`),
                    percent: t(`verification.image.progressPercents.${k}`, {
                      // if progressPercents.* is missing, use the fallback
                      defaultValue: defaults[k],
                    }),
                  }));

                  return skills.map((skill) => (
                    <div key={skill.id}>
                      <div className="flex justify-between mb-2">
                        <span className="font-['Cabin'] text-sm text-[#0c0c09]">
                          {skill.label}
                        </span>
                        <span className="font-['Cabin'] text-sm text-gray-600">
                          {skill.percent}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-[#f65d5d] h-2 rounded-full transition-all duration-1000"
                          style={{ width: skill.percent }} // "95%" etc.
                        />
                      </div>
                    </div>
                  ));
                })()}
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href="https://support.google.com/websearch/answer/1325808"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0c0c09] text-white px-6 py-3 font-['Cabin'] hover:bg-[#2c2c29] transition-colors inline-flex items-center gap-2"
                >
                  {t("verification.image.links.googleGuide")}
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://exiftool.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#0c0c09] text-[#0c0c09] px-6 py-3 font-['Cabin'] hover:bg-[#0c0c09] hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  {t("verification.image.links.exifTool")}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Verification */}
      <section className="bg-white px-16 py-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full self-start">
                <Video className="w-4 h-4" />
                <span className="font-['Cabin']">
                  {t("verification.badges.advanced")}
                </span>
              </div>
              <h2 className="font-['Aleo'] text-[#0c0c09] text-4xl">
                {t("verification.tools.videoVerification")}
              </h2>
              <p className="font-['Cabin'] text-[#0c0c09] text-lg leading-relaxed">
                {t("verification.tools.videoDesc")}
              </p>
              <div className="bg-gray-50 border-l-4 border-[#f65d5d] p-6 rounded-r-lg">
                <h4 className="font-['Aleo'] text-[#0c0c09] text-lg mb-3">
                  {t("common.keyMethods") ?? "Key Verification Methods:"}
                </h4>
                <ul className="font-['Cabin'] text-[#0c0c09] space-y-2">
                  {[
                    "verification.video.lines.extractKeyframes",
                    "verification.video.lines.verifyLocation",
                    "verification.video.lines.analyzeShadows",
                    "verification.video.lines.checkAudio",
                  ].map((k) => (
                    <li key={k} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{t(k)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.invid-project.eu/tools-and-services/invid-verification-plugin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f65d5d] text-white px-6 py-3 font-['Cabin'] hover:bg-[#e54d4d] transition-colors inline-flex items-center gap-2"
                >
                  <Video className="w-5 h-5" />
                  {t("verification.buttons.invidPlugin")}{" "}
                  {/* InVID/WeVerify Plugin Button */}
                </a>
                <a
                  href="https://tineye.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#0c0c09] text-[#0c0c09] px-6 py-3 font-['Cabin'] hover:bg-[#0c0c09] hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  {t("verification.buttons.tineyeReverse")}{" "}
                  {/* TinEye Reverse Search Button */}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXJpZmljYXRpb24lMjB0ZWNobm9sb2d5JTIwZGlnaXRhbHxlbnwxfHx8fDE3NjE2NDgwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Video verification technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deepfakes & AI Detection */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 px-16 py-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span className="font-['Cabin']">
                {t("verification.badges.emergingThreat")}
              </span>
            </div>
            <h2 className="font-['Aleo'] text-[#0c0c09] text-4xl mb-6">
              {t("verification.ai.title")}
            </h2>
            <p className="font-['Cabin'] text-[#0c0c09] text-lg max-w-3xl mx-auto">
              {t("verification.ai.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Eye className="w-8 h-8" />,
                title: t("verification.ai.cards.visualArtifacts.title"),
                description: t(
                  "verification.ai.cards.visualArtifacts.description"
                ),
                link: "https://www.bellingcat.com/resources/2022/09/22/how-to-detect-ai-generated-images/",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: t("verification.ai.cards.aiDetection.title"),
                description: t("verification.ai.cards.aiDetection.description"),
                link: "https://sensity.ai/",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: t("verification.ai.cards.protocol.title"),
                description: t("verification.ai.cards.protocol.description"),
                link: "https://verificationhandbook.com/",
              },
            ].map((item) => (
              <a
                key={item.title as string}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-red-300"
              >
                <div className="bg-red-100 text-red-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-['Aleo'] text-[#0c0c09] text-xl mb-3 group-hover:text-[#f65d5d] transition-colors">
                  {item.title}
                </h3>
                <p className="font-['Cabin'] text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-[#f65d5d] font-['Cabin']">
                  <span>{t("common.learnMore")}</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-red-200">
            <div className="flex items-start gap-6">
              <div className="bg-red-100 p-4 rounded-lg flex-shrink-0">
                <AlertTriangle className="w-10 h-10 text-red-600" />
              </div>
              <div>
                <h3 className="font-['Aleo'] text-[#0c0c09] text-2xl mb-3">
                  {t("verification.ai.warning.title")}
                </h3>
                <p className="font-['Cabin'] text-gray-700 leading-relaxed mb-4">
                  {t("verification.ai.warning.body")}
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://sensity.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#f65d5d] text-white px-6 py-3 font-['Cabin'] hover:bg-[#e54d4d] transition-colors"
                  >
                    {t("verification.ai.warning.buttons.aiTools")}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.poynter.org/ifcn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-[#0c0c09] text-[#0c0c09] px-6 py-3 font-['Cabin'] hover:bg-[#0c0c09] hover:text-white transition-colors"
                  >
                    {t("verification.ai.warning.buttons.ifcn")}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Handbooks / Resources */}
      <section className="bg-white px-16 py-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Aleo'] text-[#0c0c09] text-4xl mb-4">
              {t("verification.resources.title")}
            </h2>
            <p className="font-['Cabin'] text-[#0c0c09] text-lg max-w-2xl mx-auto">
              {t("verification.resources.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                badge: t("verification.resources.items.gni.badge"),
                title: t("verification.resources.items.gni.title"),
                subtitle: t("verification.resources.items.gni.subtitle"),
                description: t("verification.resources.items.gni.description"),
                link: "https://newsinitiative.withgoogle.com/resources/trainings/",
                color: "purple",
                cta: t("verification.resources.items.gni.cta"),
              },
              {
                badge: t("verification.resources.items.ifcn.badge"),
                title: t("verification.resources.items.ifcn.title"),
                subtitle: t("verification.resources.items.ifcn.subtitle"),
                description: t("verification.resources.items.ifcn.description"),
                link: "https://www.poynter.org/ifcn/",
                color: "green",
                cta: t("verification.resources.items.ifcn.cta"),
              },
              {
                badge: t("verification.resources.items.vhb.badge"),
                title: t("verification.resources.items.vhb.title"),
                subtitle: t("verification.resources.items.vhb.subtitle"),
                description: t("verification.resources.items.vhb.description"),
                link: "https://verificationhandbook.com",
                color: "blue",
                cta: t("verification.resources.items.vhb.cta"),
              },
            ].map((handbook) => (
              <a
                key={handbook.title as string}
                href={handbook.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#f65d5d] hover:shadow-2xl transition-all flex flex-col"
              >
                <div
                  className={`inline-flex items-center gap-2 ${
                    handbook.color === "blue"
                      ? "bg-blue-50 text-blue-600"
                      : handbook.color === "green"
                      ? "bg-green-50 text-green-600"
                      : "bg-purple-50 text-purple-600"
                  } px-3 py-1 rounded-full self-start mb-4`}
                >
                  <FileCheck className="w-3 h-3" />
                  <span className="font-['Cabin'] text-xs">
                    {handbook.badge}
                  </span>
                </div>
                <h3 className="font-['Aleo'] text-[#0c0c09] text-2xl mb-2 group-hover:text-[#f65d5d] transition-colors">
                  {handbook.title}
                </h3>
                <p className="font-['Cabin'] text-sm text-gray-500 mb-4">
                  {handbook.subtitle}
                </p>
                <p className="font-['Cabin'] text-gray-600 leading-relaxed mb-6 flex-grow">
                  {handbook.description}
                </p>
                <div className="flex items-center gap-2 text-[#f65d5d] font-['Cabin'] pt-4 border-t border-gray-200">
                  <span>{handbook.cta}</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic News Feed */}
      <DynamicNewsFeed
        title={t("verification.news.title")}
        subtitle={t("verification.news.subtitle")}
        maxItems={6}
        sources={["all"]}
      />

      {/* Expert Voices */}
      <ExpertVoices
        title={t("verification.expertVoices.title")}
        subtitle={t("verification.expertVoices.subtitle")}
        items={[
          {
            image:
              "https://images.unsplash.com/photo-1672839946212-aee298e40923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
            category: t("verification.expertVoices.items.vhb.category"),
            title: t("verification.expertVoices.items.vhb.title"),
            description: t("verification.expertVoices.items.vhb.description"),
            source: t("verification.expertVoices.items.vhb.source"),
            url: t("verification.expertVoices.items.vhb.url"),
          },
          {
            image:
              "https://images.unsplash.com/photo-1754666104618-3e0655f5fa7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
            category: t("verification.expertVoices.items.ifcn.category"),
            title: t("verification.expertVoices.items.ifcn.title"),
            description: t("verification.expertVoices.items.ifcn.description"),
            source: t("verification.expertVoices.items.ifcn.source"),
            url: t("verification.expertVoices.items.ifcn.url"),
          },
          {
            image:
              "https://images.unsplash.com/photo-1652739758426-56a564265f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
            category: t("verification.expertVoices.items.gni.category"),
            title: t("verification.expertVoices.items.gni.title"),
            description: t("verification.expertVoices.items.gni.description"),
            source: t("verification.expertVoices.items.gni.source"),
            url: t("verification.expertVoices.items.gni.url"),
          },
        ]}
        viewAllText={t("verification.expertVoices.viewAllText")}
        viewAllUrl="https://verificationhandbook.com"
      />
    </div>
  );
}
