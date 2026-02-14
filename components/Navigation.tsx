import { Link } from "wouter";
import { ChevronDown, Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { SearchBar } from "./SearchBar";
import { useTranslation } from "react-i18next";

export function Navigation() {
  const { t, i18n } = useTranslation();
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  const resourcesRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  // Get current language from i18n
  const currentLang = i18n.language as 'en' | 'ar';

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target as Node)
      ) {
        setIsResourcesOpen(false);
      }
      if (
        toolsRef.current &&
        !toolsRef.current.contains(event.target as Node)
      ) {
        setIsToolsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
    };
  }, []);

  // Language toggle handler using i18next
  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="bg-white border-b border-[rgba(12,12,9,0.15)] sticky top-0 z-50 shadow-sm backdrop-blur-sm" dir="ltr">
      <div className="max-w-[1280px] mx-auto px-8 py-1">
        <div className="flex items-center justify-between gap-8">
          {/* University of Sharjah Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 flex-shrink-0 group"
          >
            <div className="relative">
              <img
                src="/logo.png"
                alt="University of Sharjah"
                className="h-[100px] w-auto object-contain group-hover:opacity-90 transition-opacity"
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/crisis-reporting"
              className="font-['Cabin'] text-[#0c0c09] hover:text-[#f65d5d] transition-colors relative group"
            >
              <span>{t('nav.crisis')}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f65d5d] to-[#e54d4d] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/verification"
              className="font-['Cabin'] text-[#0c0c09] hover:text-[#f65d5d] transition-colors relative group"
            >
              <span>{t('nav.verification')}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f65d5d] to-[#e54d4d] group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Tools Dropdown */}
            <div ref={toolsRef} className="relative">
              <button
                onClick={() => setIsToolsOpen(!isToolsOpen)}
                className="flex items-center gap-1 font-['Cabin'] text-[#0c0c09] hover:text-[#f65d5d] transition-colors group"
              >
                <span>{t('nav.tools')}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${isToolsOpen ? "rotate-180" : ""}`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f65d5d] to-[#e54d4d] group-hover:w-full transition-all duration-300"></span>
              </button>

              {isToolsOpen && (
                <div className="absolute top-full left-0 mt-3 w-60 bg-white border border-slate-200 shadow-2xl rounded-xl py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
                  {/* Dropdown Header */}
                  <div className="px-4 py-2 mb-2">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                      {t('nav.tools')}
                    </p>
                  </div>

                  <Link
                    href="/ai-writing-tools"
                    className="block px-4 py-3 text-[#0c0c09] hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 transition-all duration-200 hover:translate-x-1"
                  >
                    {t('nav.aiWriting')}
                  </Link>

                  <Link
                    href="/verification-safety-tools"
                    className="block px-4 py-3 text-[#0c0c09] hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-200 hover:translate-x-1"
                  >
                    {t('nav.verificationSafety')}
                  </Link>

                  <Link
                    href="/media-creation-tools"
                    className="block px-4 py-3 text-[#0c0c09] hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition-all duration-200 hover:translate-x-1"
                  >
                    {t('nav.mediaCreation')}
                  </Link>

                  <Link
                    href="/automation-productivity-tools"
                    className="block px-4 py-3 text-[#0c0c09] hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-200 hover:translate-x-1"
                  >
                    {t('nav.automation')}
                  </Link>

                  <Link
                    href="/research-discovery-tools"
                    className="block px-4 py-3 text-[#0c0c09] hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-200 hover:translate-x-1"
                  >
                    {t('nav.research')}
                  </Link>

                  <Link
                    href="/technical-tools"
                    className="block px-4 py-3 text-[#0c0c09] hover:bg-gradient-to-r hover:from-slate-50 hover:to-gray-50 transition-all duration-200 hover:translate-x-1"
                  >
                    {t('nav.technical')}
                  </Link>

                  {/* View All Link */}
                  <div className="border-t border-slate-200 mt-2 pt-2">
                    <Link
                      href="/tools"
                      className="flex items-center justify-center gap-2 mx-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#f65d5d] to-[#e54d4d] rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105"
                    >
                      {t('nav.viewAllTools')}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div ref={resourcesRef} className="relative">
              <button
                onClick={() =>
                  setIsResourcesOpen(!isResourcesOpen)
                }
                className="flex items-center gap-1 font-['Cabin'] text-[#0c0c09] hover:text-[#f65d5d] transition-colors group"
              >
                <span>{t('nav.resources')}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${isResourcesOpen ? "rotate-180" : ""}`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f65d5d] to-[#e54d4d] group-hover:w-full transition-all duration-300"></span>
              </button>

              {isResourcesOpen && (
                <div className="absolute top-full left-0 mt-3 w-56 bg-white border border-slate-200 shadow-2xl rounded-xl py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
                  {/* Dropdown Header */}
                  <div className="px-4 py-2 mb-2">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                      {t('nav.resourceLibrary')}
                    </p>
                  </div>

                  <Link
                    href="/data-maps"
                    className="block px-4 py-3 text-[#0c0c09] hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-200 hover:translate-x-1"
                  >
                    {t('nav.dataMaps')}
                  </Link>

                  <Link
                    href="/safety"
                    className="block px-4 py-3 text-[#0c0c09] hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 transition-all duration-200 hover:translate-x-1"
                  >
                    {t('nav.safety')}
                  </Link>

                  <Link
                    href="/training"
                    className="block px-4 py-3 text-[#0c0c09] hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 transition-all duration-200 hover:translate-x-1"
                  >
                    {t('nav.training')}
                  </Link>

                  <Link
                    href="/risk-communication"
                    className="block px-4 py-3 text-[#0c0c09] hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 transition-all duration-200 hover:translate-x-1"
                  >
                    {t('nav.riskComm')}
                  </Link>

                  <Link
                    href="/influencers"
                    className="block px-4 py-3 text-[#0c0c09] hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition-all duration-200 hover:translate-x-1"
                  >
                    {t('nav.influencers')}
                  </Link>

                  <Link
                    href="/citizens"
                    className="block px-4 py-3 text-[#0c0c09] hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-200 hover:translate-x-1"
                  >
                    {t('nav.citizens')}
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="font-['Cabin'] text-[#0c0c09] hover:text-[#f65d5d] transition-colors relative group"
            >
              <span>{t('nav.about')}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f65d5d] to-[#e54d4d] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Right Side - Search, Language Selector & CTA */}
          <div className="flex items-center gap-4">
            <SearchBar />
            
            {/* Language Toggle Button (Fixed position on RIGHT) */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 border-2 border-[#0c0c09] rounded-lg text-[#0c0c09] hover:bg-slate-50 transition-all font-['Cabin']"
            >
              <Globe className="w-4 h-4" />
              <span>{currentLang === 'en' ? 'AR' : 'EN'}</span>
            </button>
            
            <Link
              href="/submit"
              className="bg-gradient-to-r from-[#f65d5d] to-[#e54d4d] text-white px-5 py-2.5 rounded-lg font-['Cabin'] hover:shadow-lg transition-all duration-200 hover:scale-105 whitespace-nowrap"
            >
              {t('common.submitResource')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}