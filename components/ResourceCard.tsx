import { ExternalLink, Bookmark, Copy, Check } from "lucide-react";
import { useState } from "react";
import { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ResourceCardProps {
  title: string;
  description: string;
  url?: string;
  category?: string;
  icon?: LucideIcon;
  tags?: string[];
  featured?: boolean;
}

export function ResourceCard({
  title,
  description,
  url,
  category,
  icon: Icon,
  tags = [],
  featured = false,
}: ResourceCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyUrl = () => {
    if (url) {
      navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const { t } = useTranslation();

  return (
    <div
      className={`group relative bg-white border border-[rgba(12,12,9,0.15)] rounded-lg p-6 hover:shadow-lg transition-all ${
        featured ? "ring-2 ring-[#f65d5d]" : ""
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-4 bg-[#f65d5d] text-white px-3 py-1 rounded-full text-xs font-['Cabin']">
          Featured
        </div>
      )}

      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-start gap-3 flex-1">
          {Icon && (
            <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-[#f65d5d] group-hover:text-white transition-colors">
              <Icon className="w-5 h-5" />
            </div>
          )}
          <div className="flex-1">
            <h3 className="font-['Cabin'] text-[#0c0c09] mb-2">{title}</h3>
            {category && (
              <span className="inline-block text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-['Cabin'] mb-2">
                {category}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`p-2 rounded-lg transition-colors ${
              isBookmarked
                ? "bg-[#f65d5d] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
          >
            <Bookmark className="w-4 h-4" fill={isBookmarked ? "currentColor" : "none"} />
          </button>
        </div>
      </div>

      <p className="text-gray-700 font-['Cabin'] mb-4 text-sm">{description}</p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded font-['Cabin']"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
        {url && (
          <>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#f65d5d] hover:text-[#e54d4d] font-['Cabin'] text-sm transition-colors"
            >
              {t('ResourceCard.buttons.title')}
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={handleCopyUrl}
              className="ml-auto p-2 text-gray-600 hover:text-[#f65d5d] transition-colors"
              aria-label="Copy URL"
            >
              {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
