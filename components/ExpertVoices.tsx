import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface VoiceItem {
  image: string;
  category: string;
  title: string;
  description: string;
  source: string;
  url: string;
}

interface ExpertVoicesProps {
  title?: string;
  subtitle?: string;
  items: VoiceItem[];
  viewAllText?: string;
  viewAllUrl?: string;
}

export function ExpertVoices({ 
  title = "Expert Voices & Resources",
  subtitle = "Stories, guidance, and best practices from leading disaster reporting and humanitarian organizations.",
  items,
  viewAllText,
  viewAllUrl
}: ExpertVoicesProps) {
  return (
    <section className="bg-white px-16 py-28">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-['Aleo'] text-[#0c0c09] text-4xl mb-4">{title}</h2>
          <p className="font-['Cabin'] text-[#0c0c09] text-lg max-w-3xl">
            {subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border border-[rgba(12,12,9,0.15)] overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-['Cabin'] text-xs text-[#0c0c09] bg-[#f2f2f2] px-3 py-1 rounded">
                    {item.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-[#0c0c09] opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="font-['Aleo'] text-[#0c0c09] text-xl mb-3 group-hover:text-[#f65d5d] transition-colors">
                  {item.title}
                </h3>

                <p className="font-['Cabin'] text-[#0c0c09] text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 pt-3 border-t border-[rgba(12,12,9,0.1)]">
                  <span className="font-['Cabin'] text-xs text-[#0c0c09] font-semibold">
                    Source: {item.source}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        {viewAllText && viewAllUrl && (
          <div className="flex gap-4">
            <a
              href={viewAllUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0c0c09] text-white px-6 py-3 font-['Cabin'] hover:bg-[#2c2c29] transition-colors inline-flex items-center gap-2"
            >
              {viewAllText}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
