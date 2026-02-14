import { Rss, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

interface PageTypeBadgeProps {
  type: "dynamic" | "static";
  className?: string;
}

export function PageTypeBadge({ type, className = "" }: PageTypeBadgeProps) {
  const { t } = useTranslation();

  console.log('PageTypeBadge rendering:', { type, translation: t('pageTypeBadge.dynamic') });
  
  if (type === "dynamic") {
    return (
      <div className={`inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-sm border border-orange-300 ${className}`}>
        <Rss className="w-4 h-4" />
        <span className="font-medium">{t('pageTypeBadge.dynamic')}</span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm border border-blue-300 ${className}`}>
      <FileText className="w-4 h-4" />
      <span className="font-medium">{t('pageTypeBadge.static')}</span>
    </div>
  );
}

