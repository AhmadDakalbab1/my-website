import { useState } from 'react';
import { FileText, Users, Flame, Radio, ArrowRight, Download, Wrench, Map, Shield, GraduationCap, MessageSquare, CheckCircle, TrendingUp, Globe, Zap, BookOpen, Send } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'wouter';
import { EmergencyBanner } from '../components/EmergencyBanner';
import { ExpertVoices } from '../components/ExpertVoices';
import { DynamicNewsFeed } from '../components/DynamicNewsFeed';
import { PageTypeBadge } from '../components/PageTypeBadge';
import { useTranslation } from 'react-i18next';

export default function CrisisReportingPage() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState<'before' | 'during' | 'after'>('before');
  const isArabic = i18n.language === 'ar';
  const hazardPlaybooks = [
    { name: 'Floods', nameAr: 'الفيضانات', icon: '🌊', color: 'bg-blue-100', url: 'https://www.ifrc.org/media/13379' },
    { name: 'Heat Waves', nameAr: 'موجات الحر', icon: '🌡️', color: 'bg-orange-100', url: 'https://www.ifrc.org/document/heat-waves-key-messages' },
    { name: 'Wildfires', nameAr: 'الحرائق', icon: '🔥', color: 'bg-red-100', url: 'https://www.ifrc.org/document/wildfires-key-messages' },
    { name: 'Storms', nameAr: 'العواصف', icon: '⛈️', color: 'bg-gray-100', url: 'https://www.ifrc.org/document/cyclones-key-messages' },
    { name: 'Earthquakes', nameAr: 'الزلازل', icon: '🏚️', color: 'bg-yellow-100', url: 'https://www.ifrc.org/document/earthquakes-key-messages' },
    { name: 'Tsunamis', nameAr: 'تسونامي', icon: '🌊', color: 'bg-cyan-100', url: 'https://www.ifrc.org/document/tsunamis-key-messages' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="absolute top-20 right-4 z-50">
        <PageTypeBadge type="dynamic" />
      </div>
      <EmergencyBanner 
        message={t('crisis.emergency.message')}
        actionText={t('crisis.emergency.actionText')}
        actionUrl="https://www.unisdr.org/files/20108_mediabook.pdf"
      />
      {/* Hero */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm mb-4">
            {t('crisis.hero.badge')}
          </span>
          <h1 className="text-5xl md:text-7xl mb-6">
            {t('crisis.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {t('crisis.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://internews.org/sites/default/files/2018-06/IN140220_HumanitarianReportingHANDOUTS_WEB.pdf" target="_blank" rel="noopener noreferrer" className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center inline-flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              {t('crisis.hero.downloadBtn')}
            </a>
            <Link href="/tools" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors text-center">
              {t('crisis.hero.viewResourcesBtn')}
            </Link>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE RESOURCE CATEGORIES */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-600 uppercase tracking-wider text-sm"><b>{t('crisis.resources.badge')}</b></span>
            <h2 className="text-4xl md:text-5xl mt-2 mb-4">
              {t('crisis.resources.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('crisis.resources.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Digital Tools Card */}
            <Link href="/tools">
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-purple-300 hover:-translate-y-2 cursor-pointer">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-500 to-indigo-600">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1643501381409-bca32a0588bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdG9vbHMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTkwMDA1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Digital Tools"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Wrench className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="p-6 text-left rtl:text-right">
                  <h3 className="text-2xl mb-3 group-hover:text-purple-600 transition-colors">{t('crisis.cards.digitalTools.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('crisis.cards.digitalTools.description')}
                  </p>
                  <div className="flex items-center text-purple-600 group-hover:gap-3 gap-2 transition-all">
                    <span>{t('crisis.cards.digitalTools.cta')}</span>
                    <ArrowRight className="w-5 h-5 rtl-arrow transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Verification Card */}
            <Link href="/verification">
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-green-300 hover:-translate-y-2 cursor-pointer">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-green-500 to-emerald-600">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1672839946212-aee298e40923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0JTIwY2hlY2tpbmclMjB2ZXJpZmljYXRpb258ZW58MXx8fHwxNzYxOTgyNDYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Verification & Fact-Checking"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="p-6 text-left rtl:text-right">
                  <h3 className="text-2xl mb-3 group-hover:text-green-600 transition-colors">{t('crisis.cards.verification.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('crisis.cards.verification.description')}
                  </p>
                  <div className="flex items-center text-green-600 group-hover:gap-3 gap-2 transition-all">
                    <span>{t('crisis.cards.verification.cta')}</span>
                    <ArrowRight className="w-5 h-5 rtl-arrow transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Data & Maps Card */}
            <Link href="/data-maps">
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:-translate-y-2 cursor-pointer">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-600">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758876202877-30b2c505ad9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMGRhdGF8ZW58MXx8fHwxNzYxOTU1OTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Data & Maps"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Map className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="p-6 text-left rtl:text-right">
                  <h3 className="text-2xl mb-3 group-hover:text-blue-600 transition-colors">{t('crisis.cards.dataMaps.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('crisis.cards.dataMaps.description')}
                  </p>
                  <div className="flex items-center text-blue-600 group-hover:gap-3 gap-2 transition-all">
                    <span>{t('crisis.cards.dataMaps.cta')}</span>
                    <ArrowRight className="w-5 h-5 rtl-arrow transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Safety Card */}
            <Link href="/safety">
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-red-300 hover:-translate-y-2 cursor-pointer">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-red-500 to-orange-600">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1755925193287-275aa7fe64f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjBwcm90ZWN0aXZlJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MTk4MjQ2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Safety & Well-Being"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="p-6 text-left rtl:text-right">
                  <h3 className="text-2xl mb-3 group-hover:text-red-600 transition-colors">{t('crisis.cards.safety.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('crisis.cards.safety.description')}
                  </p>
                  <div className="flex items-center text-red-600 group-hover:gap-3 gap-2 transition-all">
                    <span>{t('crisis.cards.safety.cta')}</span>
                    <ArrowRight className="w-5 h-5 rtl-arrow transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Training Card */}
            <Link href="/training">
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-indigo-300 hover:-translate-y-2 cursor-pointer">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1584143257261-e16224e2c9df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFpbmluZyUyMHdvcmtzaG9wJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYxOTgyNDYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Training & Workshops"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="p-6 text-left rtl:text-right">
                  <h3 className="text-2xl mb-3 group-hover:text-indigo-600 transition-colors">{t('crisis.cards.training.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('crisis.cards.training.description')}
                  </p>
                  <div className="flex items-center text-indigo-600 group-hover:gap-3 gap-2 transition-all">
                    <span>{t('crisis.cards.training.cta')}</span>
                    <ArrowRight className="w-5 h-5 rtl-arrow transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Risk Communication Card */}
            <Link href="/risk-communication">
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-teal-300 hover:-translate-y-2 cursor-pointer">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-teal-500 to-cyan-600">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1679091131773-50f3cd76d7c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pY2F0aW9uJTIwbmV0d29ya3xlbnwxfHx8fDE3NjE5NjIxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Risk Communication"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <MessageSquare className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="p-6 text-left rtl:text-right">
                  <h3 className="text-2xl mb-3 group-hover:text-teal-600 transition-colors">{t('crisis.cards.riskComm.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('crisis.cards.riskComm.description')}
                  </p>
                  <div className="flex items-center text-teal-600 group-hover:gap-3 gap-2 transition-all">
                    <span>{t('crisis.cards.riskComm.cta')}</span>
                    <ArrowRight className="w-5 h-5 rtl-arrow transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* For Influencers Card */}
            <Link href="/influencers">
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-pink-300 hover:-translate-y-2 cursor-pointer">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-pink-500 to-rose-600">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1605170495891-6483b26dd358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGluZmx1ZW5jZXJ8ZW58MXx8fHwxNzYxOTM2NzkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="For Influencers"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="p-6 text-left rtl:text-right">
                  <h3 className="text-2xl mb-3 group-hover:text-pink-600 transition-colors">{t('crisis.cards.influencers.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('crisis.cards.influencers.description')}
                  </p>
                  <div className="flex items-center text-pink-600 group-hover:gap-3 gap-2 transition-all">
                    <span>{t('crisis.cards.influencers.cta')}</span>
                    <ArrowRight className="w-5 h-5 rtl-arrow transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* For Citizens Card */}
            <Link href="/citizens">
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-amber-300 hover:-translate-y-2 cursor-pointer">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-amber-500 to-orange-600">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1621340340315-6aae69a404f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBwZW9wbGUlMjBjaXRpemVuc3xlbnwxfHx8fDE3NjE5ODMwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="For Citizens"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="p-6 text-left rtl:text-right">
                  <h3 className="text-2xl mb-3 group-hover:text-amber-600 transition-colors">{t('crisis.cards.citizens.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('crisis.cards.citizens.description')}
                  </p>
                  <div className="flex items-center text-amber-600 group-hover:gap-3 gap-2 transition-all">
                    <span>{t('crisis.cards.citizens.cta')}</span>
                    <ArrowRight className="w-5 h-5 rtl-arrow transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link href="/about">
              <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-10 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
                <BookOpen className="w-6 h-6" />
                <span className="text-lg">{t('crisis.exploreAll')}</span>
                <ArrowRight className="w-6 h-6 rtl-arrow" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Breaking News Checklist */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left rtl:text-right">
              <div className="inline-flex items-center bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6">
                <FileText className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                <span>{t('crisis.breakingNews.badge')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl mb-6">
                {t('crisis.breakingNews.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('crisis.breakingNews.subtitle')}
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <ArrowRight className="w-6 h-6 text-red-600 flex-shrink-0 mt-1 ltr:mr-3 rtl:ml-3 rtl:rotate-180" />
                  <div>
                    <h4 className="font-semibold mb-1">{t('crisis.breakingNews.verifyFirst.title')}</h4>
                    <p className="text-gray-600">{t('crisis.breakingNews.verifyFirst.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-6 h-6 text-red-600 flex-shrink-0 mt-1 ltr:mr-3 rtl:ml-3 rtl:rotate-180" />
                  <div>
                    <h4 className="font-semibold mb-1">{t('crisis.breakingNews.sourceProtection.title')}</h4>
                    <p className="text-gray-600">{t('crisis.breakingNews.sourceProtection.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-6 h-6 text-red-600 flex-shrink-0 mt-1 ltr:mr-3 rtl:ml-3 rtl:rotate-180" />
                  <div>
                    <h4 className="font-semibold mb-1">{t('crisis.breakingNews.ethical.title')}</h4>
                    <p className="text-gray-600">{t('crisis.breakingNews.ethical.description')}</p>
                  </div>
                </li>
              </ul>
              <div className="flex gap-4">
                <a href="https://internews.org/wp-content/uploads/legacy/2018-06/IN140220_HumanitarianReportingHANDOUTS_WEB.pdf" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  {t('crisis.breakingNews.downloadPdf')}
                </a>
                <a href="https://datajournalism.com/read/handbook/verification-1" target="_blank" rel="noopener noreferrer" className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  {t('crisis.breakingNews.previewOnline')}
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760129957276-248197c00497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBuZXdzJTIwcmVwb3J0aW5nfGVufDF8fHx8MTc2MTA0MDM1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Emergency news coverage"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STATISTICS SECTION */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">{t('crisis.impact.title')}</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {t('crisis.impact.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="text-5xl mb-4">🌍</div>
              <div className="text-4xl mb-2">{t('crisis.impact.stat1.number')}</div>
              <p className="text-slate-300">{t('crisis.impact.stat1.text')}</p>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="text-5xl mb-4">⚡</div>
              <div className="text-4xl mb-2">{t('crisis.impact.stat2.number')}</div>
              <p className="text-slate-300">{t('crisis.impact.stat2.text')}</p>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="text-5xl mb-4">📰</div>
              <div className="text-4xl mb-2">{t('crisis.impact.stat3.number')}</div>
              <p className="text-slate-300">{t('crisis.impact.stat3.text')}</p>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="text-5xl mb-4">✅</div>
              <div className="text-4xl mb-2">{t('crisis.impact.stat4.number')}</div>
              <p className="text-slate-300">{t('crisis.impact.stat4.text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interviewing Survivors */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1656634195486-4f94c0617963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYXNzaW9uYXRlJTIwY29udmVyc2F0aW9uJTIwbGlzdGVuaW5nJTIwc3VwcG9ydHxlbnwxfHx8fDE3NjExMzUwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Interviewing Survivors with Respect and Care"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 text-left rtl:text-right">
              <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6">
                <Users className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                <span>{t('crisis.interviewing.badge')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl mb-6">
                {t('crisis.interviewing.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('crisis.interviewing.subtitle')}
              </p>
              <div className="bg-white p-6 rounded-xl mb-8 ltr:border-l-4 rtl:border-r-4 border-blue-600">
                <h4 className="font-semibold mb-3">{t('crisis.interviewing.principlesTitle')}</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ {t('crisis.interviewing.principle1')}</li>
                  <li>✓ {t('crisis.interviewing.principle2')}</li>
                  <li>✓ {t('crisis.interviewing.principle3')}</li>
                  <li>✓ {t('crisis.interviewing.principle4')}</li>
                  <li>✓ {t('crisis.interviewing.principle5')}</li>
                </ul>
              </div>
              <a 
                href="https://internews.org/wp-content/uploads/2023/10/IRPAIE-Module-4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t('crisis.interviewing.accessGuide')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hazard Playbooks */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-red-600 uppercase tracking-wider text-sm block">{t('crisis.hazards.badge')}</span>
            <h2 className="text-4xl md:text-5xl mt-6 mb-8">
              {t('crisis.hazards.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('crisis.hazards.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {hazardPlaybooks.map((hazard, index) => (
              <a
                key={index}
                href={hazard.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${hazard.color} p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200`}
              >
                <div className="text-4xl mb-3">{hazard.icon}</div>
                <div className="font-semibold">{isArabic ? hazard.nameAr : hazard.name}</div>
              </a>
            ))}
          </div>

          {/* Playbook Tabs Example */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="border-b border-gray-200 flex">
              <button 
                onClick={() => setActiveTab('before')}
                className={`flex-1 px-6 py-4 transition-colors text-center ${
                  activeTab === 'before' 
                    ? 'bg-red-50 border-b-2 border-red-600 font-semibold' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <strong>{t('crisis.hazards.before')}</strong>
              </button>
              <button 
                onClick={() => setActiveTab('during')}
                className={`flex-1 px-6 py-4 transition-colors text-center ${
                  activeTab === 'during' 
                    ? 'bg-red-50 border-b-2 border-red-600 font-semibold' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <strong>{t('crisis.hazards.during')}</strong>
              </button>
              <button 
                onClick={() => setActiveTab('after')}
                className={`flex-1 px-6 py-4 transition-colors text-center ${
                  activeTab === 'after' 
                    ? 'bg-red-50 border-b-2 border-red-600 font-semibold' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <strong>{t('crisis.hazards.after')}</strong>
              </button>
            </div>
            <div className="p-8 text-left rtl:text-right">
              {/* BEFORE Tab Content */}
              {activeTab === 'before' && (
                <>
                  <h3 className="text-2xl mb-6">{t('crisis.floodBefore.title')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">{t('crisis.floodBefore.messagesTitle')}</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>✓ {t('crisis.floodBefore.message1')}</li>
                        <li>✓ {t('crisis.floodBefore.message2')}</li>
                        <li>✓ {t('crisis.floodBefore.message3')}</li>
                        <li>✓ {t('crisis.floodBefore.message4')}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">{t('crisis.floodBefore.prioritiesTitle')}</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>✓ {t('crisis.floodBefore.priority1')}</li>
                        <li>✓ {t('crisis.floodBefore.priority2')}</li>
                        <li>✓ {t('crisis.floodBefore.priority3')}</li>
                        <li>✓ {t('crisis.floodBefore.priority4')}</li>
                      </ul>
                    </div>
                  </div>
                </>
              )}

              {/* DURING Tab Content */}
              {activeTab === 'during' && (
                <>
                  <h3 className="text-2xl mb-6">{t('crisis.floodDuring.title')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">{t('crisis.floodDuring.actionsTitle')}</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>✓ {t('crisis.floodDuring.action1')}</li>
                        <li>✓ {t('crisis.floodDuring.action2')}</li>
                        <li>✓ {t('crisis.floodDuring.action3')}</li>
                        <li>✓ {t('crisis.floodDuring.action4')}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">{t('crisis.floodDuring.ethicsTitle')}</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>✓ {t('crisis.floodDuring.ethics1')}</li>
                        <li>✓ {t('crisis.floodDuring.ethics2')}</li>
                        <li>✓ {t('crisis.floodDuring.ethics3')}</li>
                        <li>✓ {t('crisis.floodDuring.ethics4')}</li>
                      </ul>
                    </div>
                  </div>
                </>
              )}

              {/* AFTER Tab Content */}
              {activeTab === 'after' && (
                <>
                  <h3 className="text-2xl mb-6">{t('crisis.floodAfter.title')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">{t('crisis.floodAfter.recoveryTitle')}</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>✓ {t('crisis.floodAfter.recovery1')}</li>
                        <li>✓ {t('crisis.floodAfter.recovery2')}</li>
                        <li>✓ {t('crisis.floodAfter.recovery3')}</li>
                        <li>✓ {t('crisis.floodAfter.recovery4')}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">{t('crisis.floodAfter.accountabilityTitle')}</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>✓ {t('crisis.floodAfter.accountability1')}</li>
                        <li>✓ {t('crisis.floodAfter.accountability2')}</li>
                        <li>✓ {t('crisis.floodAfter.accountability3')}</li>
                        <li>✓ {t('crisis.floodAfter.accountability4')}</li>
                      </ul>
                    </div>
                  </div>
                </>
              )}

              <div className="mt-6 flex gap-4">
                <a href="https://www.ifrc.org/sites/default/files/PAPE-2.0-English.pdf" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors inline-block">
                  {t('crisis.hazards.downloadPlaybook')}
                </a>
                <a href="https://www.preventionweb.net/drr-glossary/hips" target="_blank" rel="noopener noreferrer" className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors inline-block">
                  {t('crisis.hazards.viewAllHazards')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Broadcast Formats & PSAs */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left rtl:text-right">
              <div className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full mb-6">
                <Radio className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                <span>{t('crisis.broadcast.badge')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl mb-6">
                {t('crisis.broadcast.title')}
              </h2>
              <p className="text-lg mb-8 opacity-90">
                {t('crisis.broadcast.subtitle')}
              </p>
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">{t('crisis.broadcast.radioTitle')}</h4>
                  <p className="opacity-90">{t('crisis.broadcast.radioDesc')}</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">{t('crisis.broadcast.tvTitle')}</h4>
                  <p className="opacity-90">{t('crisis.broadcast.tvDesc')}</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">{t('crisis.broadcast.socialTitle')}</h4>
                  <p className="opacity-90">{t('crisis.broadcast.socialDesc')}</p>
                </div>
              </div>
              <div className="mt-8">
                <a 
                  href="https://lifeline.bbcmediaaction.org/wp-content/uploads/2020/05/lifeline-production-manual-english.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {t('crisis.broadcast.accessTemplates')}
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1554941829-1a16e65a02b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBicm9hZGNhc3QlMjBuZXdzJTIwc3R1ZGlvfGVufDF8fHx8MTc2MTAxODQyMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Broadcast studio"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC NEWS FEED */}
      <DynamicNewsFeed
        title={t('crisis.dynamicNews.title')}
        subtitle={t('crisis.dynamicNews.subtitle')}
        maxItems={6}
        sources={["all"]}
      />

      {/* Expert Voices Section */}
      <ExpertVoices
        title={t('crisis.expertVoices.title')}
        subtitle={t('crisis.expertVoices.subtitle')}
        items={[
          {
            image: "https://images.unsplash.com/photo-1742837610745-6aff0cdac3cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsaXNtJTIwZXF1aXBtZW50JTIwY2FtZXJhfGVufDF8fHx8MTc2MTA0MDM1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
            category: t('crisis.expertVoices.item1.category'),
            title: t('crisis.expertVoices.item1.title'),
            description: t('crisis.expertVoices.item1.description'),
            source: t('crisis.expertVoices.item1.source'),
            url: "https://datajournalism.com/read/handbook/verification-1/preparing-for-disaster-coverage/8-preparing-for-disaster-coverage"
          },
          {
            image: "https://images.unsplash.com/photo-1633095975779-fd354aa0dc95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml0ZWQlMjBuYXRpb25zJTIwZmxhZ3xlbnwxfHx8fDE3NjEwNDAyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
            category: t('crisis.expertVoices.item2.category'),
            title: t('crisis.expertVoices.item2.title'),
            description: t('crisis.expertVoices.item2.description'),
            source: t('crisis.expertVoices.item2.source'),
            url: "https://reliefweb.int/updates"
          },
          {
            image: "https://images.unsplash.com/photo-1533545587081-bbdccaab0c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBjcm9zcyUyMGh1bWFuaXRhcmlhbnxlbnwxfHx8fDE3NjEwNDAyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
            category: t('crisis.expertVoices.item3.category'),
            title: t('crisis.expertVoices.item3.title'),
            description: t('crisis.expertVoices.item3.description'),
            source: t('crisis.expertVoices.item3.source'),
            url: "https://www.ifrc.org/our-work/disasters-climate-and-crises/climate-smart-disaster-risk-reduction/PAPE"
          }
        ]}
        viewAllText={t('crisis.expertVoices.viewAll')}
        viewAllUrl="https://www.preventionweb.net/collections/reporting-disasters-media-resources"
      />

      {/* Resources Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-8 text-center">{t('crisis.handbooks.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a 
              href="https://www.internews.org/wp-content/uploads/legacy/resources/IN140220_HumanitarianReportingMANUAL_WEB.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-[rgba(12,12,9,0.15)] text-left rtl:text-right"
            >
              <h3 className="text-xl font-semibold mb-3">{t('crisis.handbooks.internews.title')}</h3>
              <p className="text-gray-600 mb-4">{t('crisis.handbooks.internews.description')}</p>
              <span className="text-red-600 hover:underline inline-flex items-center gap-2">
                {t('crisis.handbooks.internews.cta')}
              </span>
            </a>
            <a 
              href="https://www.bbc.co.uk/mediaaction" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-[rgba(12,12,9,0.15)] text-left rtl:text-right"
            >
              <h3 className="text-xl font-semibold mb-3">{t('crisis.handbooks.bbc.title')}</h3>
              <p className="text-gray-600 mb-4">{t('crisis.handbooks.bbc.description')}</p>
              <span className="text-red-600 hover:underline inline-flex items-center gap-2">
                {t('crisis.handbooks.bbc.cta')}
              </span>
            </a>
            <a 
              href="https://www.ifrc.org/document/prepare-your-family-and-home-pape-messages" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-[rgba(12,12,9,0.15)] text-left rtl:text-right"
            >
              <h3 className="text-xl font-semibold mb-3">{t('crisis.handbooks.ifrc.title')}</h3>
              <p className="text-gray-600 mb-4">{t('crisis.handbooks.ifrc.description')}</p>
              <span className="text-red-600 hover:underline inline-flex items-center gap-2">
                {t('crisis.handbooks.ifrc.cta')}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CONTRIBUTE SECTION */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Send className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl md:text-5xl mb-6">
            {t('crisis.contribute.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('crisis.contribute.subtitle')}
          </p>
          <Link href="/submit">
            <button className="bg-white text-indigo-600 px-10 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
              <span className="text-lg">{t('crisis.contribute.cta')}</span>
              <ArrowRight className="w-6 h-6 rtl-arrow" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
