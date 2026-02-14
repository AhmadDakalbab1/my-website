import { ChevronRight, ChevronLeft, Home } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";

export function Breadcrumbs() {
  const [location] = useLocation();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const pathSegments = location.split("/").filter(Boolean);

  const breadcrumbMap: Record<string, string> = {
    "crisis-reporting": t('breadcrumbs.crisisReporting'),
    "verification": t('breadcrumbs.verification'),
    "breaking-news": t('breadcrumbs.breakingNews'),
    "tools": t('breadcrumbs.tools'),
    "data-maps": t('breadcrumbs.dataMaps'),
    "safety": t('breadcrumbs.safety'),
    "training": t('breadcrumbs.training'),
    "risk-communication": t('breadcrumbs.riskCommunication'),
    "influencers": t('breadcrumbs.influencers'),
    "citizens": t('breadcrumbs.citizens'),
    "about": t('breadcrumbs.about'),
    "submit": t('breadcrumbs.submit'),
    // Digital Tools Pages (both /tools/xyz and /xyz-tools routes)
    "ai-writing-tools": t('breadcrumbs.aiWriting'),
    "media-creation-tools": t('breadcrumbs.mediaCreation'),
    "research-discovery-tools": t('breadcrumbs.researchDiscovery'),
    "verification-safety-tools": t('breadcrumbs.verificationSafety'),
    "automation-productivity-tools": t('breadcrumbs.automationProductivity'),
    "technical-tools": t('breadcrumbs.technicalTools'),
    // Verification Tools Pages
    "image-verification": t('breadcrumbs.imageVerification'),
    "video-analysis": t('breadcrumbs.videoAnalysis'),
    "geolocation-tools": t('breadcrumbs.geolocationTools'),
    "account-verification": t('breadcrumbs.accountVerification'),
    "fact-check-databases": t('breadcrumbs.factCheckDatabases'),
    "ai-detection": t('breadcrumbs.aiDetection'),
    // Additional Pages
    "site-classification": t('breadcrumbs.siteClassification'),
    "translation-review": t('breadcrumbs.translationReview'),
    "admin": "Admin",
    "translate": t('breadcrumbs.translationReview'),  
  };

  if (pathSegments.length === 0) return null;

  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <nav className="bg-gray-50 border-b border-[rgba(12,12,9,0.15)]" aria-label="Breadcrumb">
      <div className="max-w-[1280px] mx-auto px-8 py-3">
        <ol className="flex items-center gap-2 font-['Cabin'] text-sm">
          <li>
            <Link href="/crisis-reporting" className="flex items-center text-gray-600 hover:text-[#f65d5d] transition-colors">
              <Home className="w-4 h-4" />
            </Link>
          </li>
          {pathSegments.map((segment, index) => {
            const path = "/" + pathSegments.slice(0, index + 1).join("/");
            const isLast = index === pathSegments.length - 1;
            const label = breadcrumbMap[segment] || segment;

            return (
              <li key={segment} className="flex items-center gap-2">
                <ChevronIcon className="w-4 h-4 text-gray-400" />
                {isLast ? (
                  <span className="text-[#0c0c09]">{label}</span>
                ) : (
                  <Link href={path} className="text-gray-600 hover:text-[#f65d5d] transition-colors">
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
