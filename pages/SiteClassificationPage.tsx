import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowLeft, Zap, BookOpen, Rss, FileText, CheckCircle2, Info } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function SiteClassificationPage() {

  const dynamicPages = [
    {
      name: "Home Page / Crisis Reporting",
      path: "/",
      description: "Features real-time news feeds from UN agencies (OCHA, WHO, UNHCR, UNICEF, WFP), humanitarian organizations (IFRC, MSF), and trusted journalism sources. Content updates automatically as new stories are published. This is the main landing page with DynamicNewsFeed component.",
      updateFrequency: "Real-time updates (every few minutes)"
    },
    {
      name: "Crisis Reporting Page",
      path: "/crisis-reporting",
      description: "Same as home page - features comprehensive crisis journalism guide PLUS real-time news feed. Updates automatically from UN OCHA ReliefWeb, WHO, IFRC, CDC and other trusted disaster reporting sources.",
      updateFrequency: "Real-time updates (every 30 minutes)"
    },
    {
      name: "Verification & Fact-Checking Page",
      path: "/verification",
      description: "Verification tools directory with real-time news feed on latest fact-checking initiatives, verification tools, and misinformation trends from trusted journalism organizations.",
      updateFrequency: "Real-time updates (every 30 minutes)"
    }
  ];

  const staticPages = [
    {
      name: "Breaking News Checklist",
      path: "/breaking-news",
      description: "Fixed checklist and guidelines for breaking news verification. Professional standards and procedures that remain consistent.",
      updateFrequency: "Static reference material"
    },
    {
      name: "Image Verification Tools",
      path: "/verification/image-verification",
      description: "Curated collection of 35+ professional image verification tools including reverse image search, metadata analysis, and forensic tools.",
      updateFrequency: "Static tool directory"
    },
    {
      name: "Video Analysis Tools",
      path: "/verification/video-analysis",
      description: "Professional video verification toolkit with 35+ tools for InVID verification, frame analysis, and deepfake detection.",
      updateFrequency: "Static tool directory"
    },
    {
      name: "Geolocation Tools",
      path: "/verification/geolocation-tools",
      description: "30+ geolocation and mapping tools for verifying locations in photos and videos using satellite imagery and geographic databases.",
      updateFrequency: "Static tool directory"
    },
    {
      name: "Account Verification Tools",
      path: "/verification/account-verification",
      description: "Tools for verifying social media accounts, checking profile authenticity, and detecting bot networks and fake accounts.",
      updateFrequency: "Static tool directory"
    },
    {
      name: "Fact-Check Databases",
      path: "/verification/fact-check-databases",
      description: "International fact-checking networks and databases including ClaimReview, Google Fact Check Explorer, and global verification organizations.",
      updateFrequency: "Static tool directory"
    },
    {
      name: "AI Detection Tools",
      path: "/verification/ai-detection",
      description: "35+ professional tools for detecting AI-generated content, deepfakes, and synthetic media across images, videos, text, and audio.",
      updateFrequency: "Static tool directory"
    },
    {
      name: "Risk Communication",
      path: "/risk-communication",
      description: "Evidence-based guidelines for communicating risks during disasters and public health emergencies. Educational content following WHO and CDC standards.",
      updateFrequency: "Static educational material"
    },
    {
      name: "Data & Maps",
      path: "/data-maps",
      description: "Curated directory of data visualization tools, mapping platforms, and GIS resources for disaster reporting.",
      updateFrequency: "Updated when new tools are added"
    },
    {
      name: "Safety & Well-Being",
      path: "/safety",
      description: "Safety protocols, mental health resources, and well-being guidelines for journalists covering traumatic events and disasters.",
      updateFrequency: "Static safety guidelines"
    },
    {
      name: "Training Resources",
      path: "/training",
      description: "Comprehensive training programs, courses, and educational resources from leading journalism organizations and universities.",
      updateFrequency: "Updated when new courses are available"
    },
    {
      name: "Professional Tools",
      path: "/tools",
      description: "Directory of 168+ professional tools across 6 categories: AI Writing, Media Creation, Research, Verification & Safety, Automation, and Technical Tools.",
      updateFrequency: "Static tool directory"
    },
    {
      name: "For Influencers",
      path: "/influencers",
      description: "Guidelines and best practices for social media influencers covering disasters and humanitarian crises responsibly.",
      updateFrequency: "Static guidelines"
    },
    {
      name: "For Citizens",
      path: "/citizens",
      description: "Citizen journalism guide covering how to safely document and report disasters while maintaining ethical standards.",
      updateFrequency: "Static educational content"
    },
    {
      name: "About",
      path: "/about",
      description: "Information about the Media Toolkit project, its mission, team, and contact details.",
      updateFrequency: "Static informational page"
    },
    {
      name: "Submit Resource",
      path: "/submit",
      description: "Form for submitting new tools and resources to be reviewed and potentially added to the toolkit.",
      updateFrequency: "Form submission (stores to database)"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-['Cabin']">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white px-4 sm:px-8 py-20">
        <div className="max-w-[1280px] mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Info className="w-5 h-5" />
                <span>Technical Classification</span>
              </div>
              <h1 className="font-['Aleo'] text-5xl mb-6">Website Classification</h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Understanding which pages feature dynamic real-time content versus static informational resources in the Media Toolkit for Disaster Reporting.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <div className="text-3xl font-bold">3</div>
                  <div className="text-sm text-white/80">Dynamic Pages</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <div className="text-3xl font-bold">15</div>
                  <div className="text-sm text-white/80">Static Pages</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                  alt="Website classification and data analysis"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classification Overview */}
      <section className="bg-gray-50 px-4 sm:px-8 py-16">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="font-['Aleo'] text-3xl mb-6 text-center">What's the Difference?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Prof. Qassim has requested clear classification of all pages to distinguish between real-time dynamic content and static informational resources.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Dynamic Websites */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-600 text-white w-14 h-14 rounded-lg flex items-center justify-center">
                  <Rss className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-['Aleo'] text-2xl text-[#0c0c09]">Dynamic Websites</h3>
                  <p className="text-orange-700">Real-time content updates</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Content changes automatically and frequently</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Pulls data from external sources via APIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>News feeds, live updates, real-time information</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Requires backend server and database</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Example: News aggregators, social media feeds</span>
                </li>
              </ul>
            </div>

            {/* Static Websites */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 text-white w-14 h-14 rounded-lg flex items-center justify-center">
                  <FileText className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-['Aleo'] text-2xl text-[#0c0c09]">Static Websites</h3>
                  <p className="text-blue-700">Fixed informational content</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Content remains constant until manually updated</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Educational materials, guides, and references</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Tool directories, resource listings, documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Can be served without backend/database</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Example: Wikipedia pages, company websites, guides</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Pages Section */}
      <section className="bg-white px-4 sm:px-8 py-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-lg flex items-center justify-center">
              <Rss className="w-8 h-8" />
            </div>
            <div>
              <h2 className="font-['Aleo'] text-3xl text-[#0c0c09]">Dynamic Pages (3)</h2>
              <p className="text-gray-600">Real-time content with automatic updates from news feeds</p>
            </div>
          </div>

          <div className="space-y-6">
            {dynamicPages.map((page) => (
              <div
                key={page.path}
                className="bg-gradient-to-r from-orange-50 to-white border-l-4 border-orange-600 rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Zap className="w-6 h-6 text-orange-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-['Aleo'] text-xl text-[#0c0c09]">{page.name}</h3>
                      <p className="text-sm text-gray-500">{page.path}</p>
                    </div>
                  </div>
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm flex-shrink-0">
                    DYNAMIC
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3 break-words">
                  {page.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-orange-700 bg-orange-50 px-3 py-2 rounded-lg inline-flex">
                  <Rss className="w-4 h-4" />
                  <span className="break-words">{page.updateFrequency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Static Pages Section */}
      <section className="bg-gray-50 px-4 sm:px-8 py-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-lg flex items-center justify-center">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h2 className="font-['Aleo'] text-3xl text-[#0c0c09]">Static Pages (15)</h2>
              <p className="text-gray-600">Fixed informational content and resource directories</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {staticPages.map((page) => (
              <div
                key={page.path}
                className="bg-white border-l-4 border-blue-600 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-['Aleo'] text-xl text-[#0c0c09] break-words pr-2">{page.name}</h3>
                      <p className="text-sm text-gray-500 break-words">{page.path}</p>
                    </div>
                  </div>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex-shrink-0">
                    STATIC
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3 break-words">
                  {page.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-blue-700 bg-blue-50 px-3 py-2 rounded-lg inline-flex">
                  <FileText className="w-4 h-4" />
                  <span className="break-words">{page.updateFrequency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Summary */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 sm:px-8 py-16">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="font-['Aleo'] text-3xl mb-8 text-center">Technical Architecture Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="font-['Aleo'] text-xl mb-3">Dynamic Components</h3>
              <p className="text-white/80 break-words">
                Three pages integrate real-time RSS/Atom feeds from 10+ trusted sources including UN agencies (OCHA, WHO, UNHCR, UNICEF, WFP), humanitarian organizations (IFRC, MSF), and journalism networks. Content auto-updates every 30 minutes.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-['Aleo'] text-xl mb-3">Static Resources</h3>
              <p className="text-white/80 break-words">
                15 comprehensive pages provide 200+ verification tools, 168+ professional tools, training resources, safety guidelines, and educational content that remains consistent until manually curated and updated.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-['Aleo'] text-xl mb-3">Hybrid Architecture</h3>
              <p className="text-white/80 break-words">
                The site combines 3 dynamic pages with real-time news feeds and 15 static informational pages, providing both up-to-the-minute disaster updates and reliable reference materials for journalists.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
