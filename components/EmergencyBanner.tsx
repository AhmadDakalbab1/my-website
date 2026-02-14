import { AlertTriangle, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

interface EmergencyBannerProps {
  message?: string;
  actionText?: string;
  actionUrl?: string;
}

export function EmergencyBanner({ 
  message = "Breaking: Major earthquake reported. Check our crisis reporting guide for coverage tips.",
  actionText = "View Guide",
  actionUrl = "https://www.unisdr.org/files/20108_mediabook.pdf"
}: EmergencyBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-red-600 text-white py-3 px-4 relative">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <AlertTriangle className="w-5 h-5 flex-shrink-0 animate-pulse" />
          <p className="font-['Cabin'] text-sm md:text-base">{message}</p>
        </div>
        <div className="flex items-center gap-3">
          {actionUrl && actionText && (
            <a 
              href={actionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 px-4 py-1.5 rounded font-['Cabin'] text-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              {actionText}
            </a>
          )}
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Close banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
