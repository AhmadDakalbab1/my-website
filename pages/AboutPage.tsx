import { BookOpen, Users, Globe, Heart, Mail, Phone } from "lucide-react";
import { Link } from "wouter";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-[#455a64] via-[#2c3940] to-[#1a2328] px-16 py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        {/* Animated gradient blobs*/}
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-32 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-15 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-12 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-8">
            {/* Icon with animated glow */}
            <div className="relative mx-auto">
              <div className="absolute inset-0 bg-[#f65d5d] rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/20">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="inline-block mx-auto">
                <span className="bg-[#f65d5d] text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
                  {t("about.hero.badge")}
                </span>
              </div>
              <h1 className="text-white text-7xl tracking-tight leading-tight font-bold">
                {t("about.hero.title")}
              </h1>
              <p className="text-white/90 text-2xl leading-relaxed max-w-3xl mx-auto">
                {t("about.hero.subtitle")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section - Enhanced */}
      <section className="bg-white px-16 py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block bg-[#f65d5d] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              {t("about.mission.badge")}
            </div>
            <h2 className="text-[#0c0c09] text-6xl tracking-tight mb-6">
              {t("about.mission.title")}
            </h2>
            <p className="text-[#0c0c09] text-xl max-w-3xl mx-auto">
              {t("about.mission.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-12 h-12" />,
                title: t("about.mission.cards.0.title"),
                desc: t("about.mission.cards.0.description"),
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: t("about.mission.cards.1.title"),
                desc: t("about.mission.cards.1.description"),
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: t("about.mission.cards.2.title"),
                desc: t("about.mission.cards.2.description"),
                color: "from-pink-500 to-pink-600",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-[rgba(12,12,9,0.1)] p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                ></div>

                <div className="relative">
                  {/* Icon with gradient background */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <div className="text-white">{item.icon}</div>
                  </div>

                  <h3 className="text-[#0c0c09] text-2xl font-bold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[#0c0c09] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Partners Section - Enhanced */}
      <section className="bg-gradient-to-b from-[#f8f9fa] to-white px-16 py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block bg-[#455a64] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              {t("about.partners.badge")}
            </div>
            <h2 className="text-[#0c0c09] text-6xl tracking-tight mb-6">
              {t("about.partners.title")}
            </h2>
            <p className="text-[#0c0c09] text-xl max-w-3xl mx-auto">
              {t("about.partners.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* International Organizations */}
            <div className="bg-white rounded-2xl shadow-lg border border-[rgba(12,12,9,0.1)] p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[#0c0c09] text-3xl font-bold">
                  {t("about.partners.international.title")}
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    name: t("about.partners.international.items.0.name"),
                    area: t("about.partners.international.items.0.area"),
                    color: "bg-blue-50",
                  },
                  {
                    name: t("about.partners.international.items.1.name"),
                    area: t("about.partners.international.items.1.area"),
                    color: "bg-red-50",
                  },
                  {
                    name: t("about.partners.international.items.2.name"),
                    area: t("about.partners.international.items.2.area"),
                    color: "bg-purple-50",
                  },
                  {
                    name: t("about.partners.international.items.3.name"),
                    area: t("about.partners.international.items.3.area"),
                    color: "bg-green-50",
                  },
                ].map((org, i) => (
                  <div
                    key={i}
                    className={`${org.color} rounded-xl p-5 border border-[rgba(12,12,9,0.1)] hover:shadow-md transition-all`}
                  >
                    <p className="font-bold text-[#0c0c09] mb-1">{org.name}</p>
                    <p className="text-[#0c0c09] text-sm">{org.area}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Journalism Organizations */}
            <div className="bg-white rounded-2xl shadow-lg border border-[rgba(12,12,9,0.1)] p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#f65d5d] to-[#e54d4d] rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <h3 className="text-[#0c0c09] text-3xl font-bold">
                  {t("about.partners.journalism.title")}
                </h3>
              </div>
              <div className="space-y-3">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-[#f8f9fa] rounded-xl p-4 border border-[rgba(12,12,9,0.1)] hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#f65d5d] rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                      <div>
                        <p className="font-bold text-[#0c0c09] mb-0.5">
                          {t(`about.partners.journalism.items.${i}.name`)}
                        </p>
                        <p className="text-[#0c0c09] text-sm">
                          {t(`about.partners.journalism.items.${i}.area`)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Citation Section - Enhanced */}
      <section className="bg-white px-16 py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#f65d5d] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                {t("about.citation.badge")}
              </div>
              <h2 className="text-[#0c0c09] text-6xl tracking-tight mb-6">
                {t("about.citation.title")}
              </h2>
            </div>

            <div className="bg-gradient-to-br from-[#f8f9fa] to-white rounded-2xl border border-[rgba(12,12,9,0.1)] p-10 mb-12 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#455a64] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-[#0c0c09] font-bold text-lg mb-4">
                    {t("about.citation.recommendedLabel")}
                  </p>
                  <div className="bg-white rounded-xl p-6 border-l-4 border-[#f65d5d] shadow-sm">
                    <p className="text-[#0c0c09] font-mono text-sm leading-relaxed">
                      {t("about.citation.recommendedText")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f8f9fa] to-white rounded-2xl border border-[rgba(12,12,9,0.1)] p-10 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#f65d5d] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#0c0c09] font-bold text-2xl mb-4">
                    {t("about.citation.licensingTitle")}
                  </h3>
                  <p className="text-[#0c0c09] leading-relaxed mb-4">
                    {t("about.citation.licensingLine")}
                  </p>
                  <p className="text-[#0c0c09] text-sm leading-relaxed bg-white rounded-xl p-4 border border-[rgba(12,12,9,0.1)]">
                    {t("about.citation.licensingNote")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Supervisors Section - Enhanced Professional Design */}
      <section className="bg-gradient-to-b from-white to-[#f8f9fa] px-16 py-28">
        <div className="max-w-[1280px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-[#f65d5d] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              {t("about.supervisors.badge")}
            </div>
            <h2 className="text-[#0c0c09] text-6xl tracking-tight mb-6">
              {t("about.supervisors.title")}
            </h2>
            <p className="text-[#0c0c09] text-xl max-w-3xl mx-auto">
              {t("about.supervisors.subtitle")}
            </p>
          </div>

          {/* Supervisors Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Prof. Qassim Nasir */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[rgba(12,12,9,0.1)]">
              {/* Card Header with Pattern */}
              <div className="bg-gradient-to-r from-[#455a64] to-[#2c3940] p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-3 h-3 bg-[#f65d5d] rounded-full"></div>
                    <p className="text-white/90 text-sm font-semibold tracking-wider uppercase">
                      {t("about.supervisors.common.coSupervisor")}
                    </p>
                  </div>
                  <h3 className="text-white text-3xl font-bold mb-2">
                    {t("about.supervisors.qassim.name")}
                  </h3>
                  <p className="text-[#f65d5d] text-lg font-semibold mb-3">
                    {t("about.supervisors.qassim.titleLine")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <span
                        key={i}
                        className="bg-white/20 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm"
                      >
                        {t(`about.supervisors.qassim.chips.${i}`)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Profile Image */}
              <div className="p-8">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden mb-6 shadow-inner max-w-sm mx-auto h-[400px]">
                  <ImageWithFallback
                    src="/Prof_qassim.jpg"
                    alt={t("about.supervisors.qassim.alt")}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bio */}
                <div className="space-y-4 mb-6">
                  <p className="text-[#0c0c09] leading-relaxed">
                    <strong>{t("about.supervisors.qassim.name")}</strong>{" "}
                    {t("about.supervisors.qassim.bio1")}
                  </p>
                  <p className="text-[#0c0c09] leading-relaxed">
                    {t("about.supervisors.qassim.bio2")}
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mb-6 bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                  <h4 className="text-[#0c0c09] font-bold text-lg mb-4">
                    {t("about.supervisors.common.contact")}
                  </h4>
                  <div className="space-y-3 mb-5">
                    <a
                      href={`mailto:${t("about.supervisors.qassim.mail")}`}
                      className="flex items-center gap-3 text-[#0c0c09] hover:text-[#f65d5d] transition-colors group"
                    >
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow border border-gray-200">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span>{t("about.supervisors.qassim.mail")}</span>
                    </a>
                    <a
                      href={`tel:${t("about.supervisors.qassim.phone")}`}
                      className="flex items-center gap-3 text-[#0c0c09] hover:text-[#f65d5d] transition-colors group"
                    >
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow border border-gray-200">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span>{t("about.supervisors.qassim.phone")}</span>
                    </a>
                  </div>

                  {/* Academic Profile Links */}
                  <div className="flex gap-3 pt-3 border-t border-gray-200">
                    <a
                      href="https://www.researchgate.net/profile/Qassim-Nasir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#00d0af] hover:bg-[#00b896] rounded-lg flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                      title={t("about.supervisors.common.researchGate")}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53c.024.15.062.3.113.438.143.741.55 1.3 1.214 1.677.564.376 1.254.564 2.072.564.87 0 1.607-.21 2.21-.628.604-.418 1.017-1.004 1.237-1.757.093-.3.138-.618.138-.956a2.456 2.456 0 0 0-.138-.956c-.22-.753-.633-1.339-1.237-1.757-.603-.418-1.34-.628-2.21-.628z" />
                      </svg>
                    </a>
                    <a
                      href="https://scholar.google.com/citations?user=EXAMPLE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#4285f4] hover:bg-[#3367d6] rounded-lg flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                      title={t("about.supervisors.common.googleScholar")}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.scopus.com/authid/detail.uri?authorId=EXAMPLE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#f36e21] hover:bg-[#d35400] rounded-lg flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                      title={t("about.supervisors.common.scopus")}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M24 19.059l-5.084-5.575c-.739-.81-1.647-1.214-2.717-1.214-.284 0-.57.028-.857.085-.854-1.062-1.939-1.592-3.256-1.592-1.301 0-2.38.538-3.237 1.614l-2.27 2.701c-.456.542-.684 1.181-.684 1.916 0 .721.228 1.354.684 1.898.456.543 1.034.814 1.735.814.7 0 1.279-.271 1.735-.814l2.27-2.7c.171-.205.356-.307.557-.307.2 0 .385.102.556.307.171.204.256.456.256.755 0 .298-.085.549-.256.754l-4.455 5.305c-.456.543-1.034.814-1.735.814-.7 0-1.279-.271-1.735-.814-.456-.544-.684-1.177-.684-1.898 0-.735.228-1.374.684-1.916l7.668-9.123c.854-1.018 1.933-1.527 3.237-1.527 1.304 0 2.383.509 3.237 1.527l7.668 9.123c.456.542.684 1.181.684 1.916 0 .721-.228 1.354-.684 1.898-.456.543-1.034.814-1.735.814-.7 0-1.279-.271-1.735-.814z" />
                      </svg>
                    </a>
                    <a
                      href="https://orcid.org/EXAMPLE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#a6ce39] hover:bg-[#8db82d] rounded-lg flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                      title={t("about.supervisors.common.orcid")}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.988-1.428 3.988-3.722 0-2.297-1.669-3.722-3.988-3.722h-2.297z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Contact Link */}
                <a
                  href="https://www.sharjah.ac.ae/Academics/Faculty-And-Staff/Qassim-Nasir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#f65d5d] hover:text-[#e54d4d] font-semibold transition-colors group"
                >
                  <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  {t("about.supervisors.common.viewFacultyProfile")}
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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

            {/* Dr. Syed Ali Hussein */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[rgba(12,12,9,0.1)]">
              {/* Card Header with Pattern */}
              <div className="bg-gradient-to-r from-[#455a64] to-[#2c3940] p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-3 h-3 bg-[#f65d5d] rounded-full"></div>
                    <p className="text-white/90 text-sm font-semibold tracking-wider uppercase">
                      {t("about.supervisors.common.coSupervisor")}
                    </p>
                  </div>
                  <h3 className="text-white text-3xl font-bold mb-2">
                    {t("about.supervisors.syed.name")}
                  </h3>
                  <p className="text-[#f65d5d] text-lg font-semibold mb-3">
                    {t("about.supervisors.syed.titleLine")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <span
                        key={i}
                        className="bg-white/20 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm"
                      >
                        {t(`about.supervisors.syed.chips.${i}`)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Profile Image */}
              <div className="p-8">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden mb-6 shadow-inner max-w-sm mx-auto h-[400px]">
                  <ImageWithFallback
                    src="/Dr_syed_ali_hussein.jpg"
                    alt={t("about.supervisors.syed.alt")}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bio */}
                <div className="space-y-4 mb-6">
                  <p className="text-[#0c0c09] leading-relaxed">
                    <strong>{t("about.supervisors.syed.name")}</strong>{" "}
                    {t("about.supervisors.syed.bio1")}
                  </p>
                  <p className="text-[#0c0c09] leading-relaxed">
                    {t("about.supervisors.syed.bio2")}
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mb-6 bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                  <h4 className="text-[#0c0c09] font-bold text-lg mb-4">
                    {t("about.supervisors.common.contact")}
                  </h4>
                  <div className="space-y-3">
                    <a
                      href={`mailto:${t("about.supervisors.syed.mail")}`}
                      className="flex items-center gap-3 text-[#0c0c09] hover:text-[#f65d5d] transition-colors group"
                    >
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow border border-gray-200">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span>{t("about.supervisors.syed.mail")}</span>
                    </a>
                    <a
                      href={`tel:${t("about.supervisors.syed.phone")}`}
                      className="flex items-center gap-3 text-[#0c0c09] hover:text-[#f65d5d] transition-colors group"
                    >
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow border border-gray-200">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span>{t("about.supervisors.syed.phone")}</span>
                    </a>
                  </div>
                </div>

                {/* Contact Link */}
                <a
                  href="https://www.sharjah.ac.ae/en/academics/colleges/cas/dept/masscom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#f65d5d] hover:text-[#e54d4d] font-semibold transition-colors group"
                >
                  <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  {t("about.supervisors.syed.deptCta")}
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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

          {/* Meeting Schedule Callout */}
          <div className="bg-white rounded-2xl shadow-lg border-l-4 border-[#f65d5d] p-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#f65d5d]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-[#f65d5d]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-[#0c0c09] text-xl font-bold mb-2">
                  {t("about.supervisors.meetings.title")}
                </h4>
                <p className="text-[#0c0c09] leading-relaxed">
                  {t("about.supervisors.meetings.body")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department of Mass Communication Section - Enhanced */}
      <section className="bg-white px-16 py-28">
        <div className="max-w-[1280px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-[#455a64] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              {t("about.department.badge")}
            </div>
            <h2 className="text-[#0c0c09] text-6xl tracking-tight mb-6">
              {t("about.department.title")}
            </h2>
            <p className="text-[#0c0c09] text-xl max-w-3xl mx-auto">
              {t("about.department.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* About the Department */}
            <div className="bg-gradient-to-br from-[#f8f9fa] to-white rounded-2xl p-10 border border-[rgba(12,12,9,0.1)] shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#f65d5d] rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-[#0c0c09] text-3xl font-bold">
                  {t("about.department.aboutTitle")}
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-[#0c0c09] leading-relaxed">
                  {t("about.department.aboutP1")}
                </p>
                <p className="text-[#0c0c09] leading-relaxed">
                  {t("about.department.aboutP2")}
                </p>
              </div>
            </div>

            {/* Key Areas */}
            <div className="bg-gradient-to-br from-[#455a64] to-[#2c3940] rounded-2xl p-10 text-white shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>
              </div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#f65d5d] rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white text-3xl font-bold">
                    {t("about.department.keyAreasTitle")}
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-8 h-8 bg-[#f65d5d] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="text-white font-medium">
                        {t(`about.department.keyAreas.${index}`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Department Link */}
          <div className="text-center">
            <a
              href="https://www.sharjah.ac.ae/en/academics/colleges/cas/dept/masscom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#f65d5d] text-white px-8 py-4 rounded-xl hover:bg-[#e54d4d] transition-all shadow-lg hover:shadow-xl group text-lg font-semibold"
            >
              <Globe className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              {t("about.department.deptButton")}
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
      </section>

      <section className="bg-white px-16 py-28">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="text-[#0c0c09] text-5xl mb-6">
            {t("about.contact.title")}
          </h2>
          <p className="text-[#0c0c09] text-lg mb-8 max-w-2xl mx-auto">
            {t("about.contact.subtitle")}
          </p>
          <Link
            href="/submit"
            className="inline-block bg-[#f65d5d] text-white px-8 py-4 text-lg hover:bg-[#e54d4d] transition-colors rounded-lg shadow-md hover:shadow-lg"
          >
            {t("about.contact.cta")}
          </Link>
        </div>
      </section>
    </div>
  );
}
