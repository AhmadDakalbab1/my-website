import { Search, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";

interface SearchResult {
  title: string;
  category: string;
  url: string;
  description: string;
  external?: boolean;
}

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [, setLocation] = useLocation();
  const searchRef = useRef<HTMLDivElement>(null);

  const allResources: SearchResult[] = [
    // Main Pages
    { title: "Home", category: "Main", url: "/", description: "Media Toolkit for Disaster Reporting - Your comprehensive resource for crisis journalism" },
    { title: "Breaking News Checklist", category: "Crisis Reporting", url: "https://cpj.org/emergency-response/", description: "Emergency response resources from Committee to Protect Journalists", external: true },
    { title: "Crisis Reporting Essentials", category: "Crisis Reporting", url: "/crisis-reporting", description: "Navigate complex disaster scenarios with professional frameworks and ethical guidelines" },
    { title: "Verification & Fact-Checking", category: "Verification", url: "/verification", description: "Comprehensive fact-checking tools, reverse image search, deepfake detection, and source verification" },
    { title: "Risk Communication", category: "Communication", url: "/risk-communication", description: "CERC and RCCE frameworks for effective disaster communication" },
    { title: "Safety & Well-Being", category: "Safety", url: "/safety", description: "Physical safety, mental health resources, trauma support, and security protocols for journalists" },
    { title: "Data & Maps", category: "Data", url: "/data-maps", description: "Real-time crisis data, mapping tools, satellite imagery, ReliefWeb, ACAPS, GDACS" },
    { title: "Training & Workshops", category: "Learning", url: "/training", description: "Professional development courses, webinars, and crisis journalism training from BBC, EJC" },
    { title: "Digital Tools", category: "Tools", url: "/tools", description: "AI tools, verification plugins, transcription services, and digital resources" },
    { title: "For Influencers", category: "Guides", url: "/influencers", description: "Social media best practices, PSA scripts, and responsible crisis communication for influencers" },
    { title: "For Citizens", category: "Guides", url: "/citizens", description: "How citizens can help during disasters, reporting tips, and community engagement" },
    { title: "About", category: "Info", url: "/about", description: "About the Media Toolkit, mission, team, and trusted sources" },
    { title: "Submit Resource", category: "Contribute", url: "/submit", description: "Submit tools, training materials, or report broken links to help expand the toolkit" },
    
    // Crisis Reporting Content
    { title: "Ethical Guidelines for Disaster Reporting", category: "Crisis Reporting", url: "/crisis-reporting", description: "Minimize harm, protect vulnerable populations, verify before publishing" },
    { title: "Trauma-Informed Interviewing", category: "Crisis Reporting", url: "/crisis-reporting", description: "Dart Center resources for interviewing survivors with sensitivity and care" },
    { title: "Disaster Playbooks by Hazard", category: "Crisis Reporting", url: "/crisis-reporting", description: "Earthquake, flood, hurricane, wildfire, conflict coverage preparation guides" },
    
    // Verification Content
    { title: "Bellingcat Tools", category: "Verification", url: "/verification", description: "Open source investigation techniques, geolocation, and image verification from Bellingcat" },
    { title: "First Draft News", category: "Verification", url: "/verification", description: "Essential verification skills, misinformation detection, and fact-checking frameworks" },
    { title: "InVID Plugin", category: "Verification", url: "/verification", description: "Browser extension for reverse image search and video verification" },
    { title: "Deepfake Detection", category: "Verification", url: "/verification", description: "AI-generated content detection and newsroom policies for synthetic media" },
    { title: "Reverse Image Search", category: "Verification", url: "/verification", description: "Google Images, TinEye, and Yandex for visual verification" },
    
    // Data & Maps Content
    { title: "ReliefWeb", category: "Data", url: "/data-maps", description: "UN OCHA humanitarian information, situation reports, and crisis maps" },
    { title: "ACAPS Crisis Analysis", category: "Data", url: "/data-maps", description: "Independent crisis severity assessments and humanitarian forecasts" },
    { title: "IFRC GO Platform", category: "Data", url: "/data-maps", description: "Red Cross disaster tracking, emergency alerts, and response operations" },
    { title: "GDACS Alerts", category: "Data", url: "/data-maps", description: "Global Disaster Alert System for earthquakes, storms, and floods" },
    { title: "Copernicus Satellite Mapping", category: "Data", url: "/data-maps", description: "EU emergency satellite imagery and rapid mapping services" },
    { title: "HDX Humanitarian Data", category: "Data", url: "/data-maps", description: "Open humanitarian datasets and crisis visualization tools" },
    
    // Safety Content
    { title: "Committee to Protect Journalists", category: "Safety", url: "/safety", description: "CPJ safety resources, hostile environment training, and journalist security" },
    { title: "Dart Center Trauma Resources", category: "Safety", url: "/safety", description: "Mental health support, vicarious trauma prevention, and psychological first aid" },
    { title: "Hostile Environment Training", category: "Safety", url: "/safety", description: "ACOS, RISC, physical security in conflict zones" },
    { title: "Digital Security", category: "Safety", url: "/safety", description: "Source protection, encryption, secure communication tools" },
    
    // Tools Content
    { title: "ClaimBuster", category: "Tools", url: "/tools", description: "AI fact-checking and automated claim detection for live coverage" },
    { title: "Otter.ai Transcription", category: "Tools", url: "/tools", description: "Real-time interview and press conference transcription" },
    { title: "Recharts Data Visualization", category: "Tools", url: "/tools", description: "Create charts and graphs for data journalism" },
    
    // Training Content
    { title: "EJC Online Courses", category: "Learning", url: "/training", description: "European Journalism Centre professional development courses" },
    { title: "BBC Media Action", category: "Learning", url: "/training", description: "Crisis communication and humanitarian journalism training" },
    { title: "Internews Resources", category: "Learning", url: "/training", description: "Local media development and crisis reporting support" },
    
    // Risk Communication
    { title: "CERC Framework", category: "Communication", url: "/risk-communication", description: "CDC Crisis and Emergency Risk Communication principles" },
    { title: "RCCE Guidelines", category: "Communication", url: "/risk-communication", description: "WHO Risk Communication and Community Engagement for health emergencies" },
    { title: "Infodemic Management", category: "Communication", url: "/risk-communication", description: "Combat misinformation during health and disaster crises" },
  ];

  const filteredResults = query.length > 0
    ? allResources.filter(
        (resource) =>
          resource.title.toLowerCase().includes(query.toLowerCase()) ||
          resource.category.toLowerCase().includes(query.toLowerCase()) ||
          resource.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleResultClick = (result: SearchResult) => {
    if (result.external) {
      window.open(result.url, '_blank', 'noopener,noreferrer');
    } else {
      setLocation(result.url);
    }
    setIsOpen(false);
    setQuery("");
  };

  return (
    <div ref={searchRef} className="relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search resources..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-60 pl-10 pr-10 py-2 border border-[rgba(12,12,9,0.15)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f65d5d] focus:border-transparent font-['Cabin']"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {isOpen && query && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[rgba(12,12,9,0.15)] rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
          {filteredResults.length > 0 ? (
            <div className="py-2">
              {filteredResults.map((result, index) => (
                <button
                  key={index}
                  onClick={() => handleResultClick(result)}
                  className="w-full text-left px-4 py-3 hover:bg-[#f2f2f2] transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <p className="font-['Cabin'] text-[#0c0c09]">{result.title}</p>
                      <p className="text-sm text-gray-600 font-['Cabin'] mt-1">{result.description}</p>
                    </div>
                    <span className="text-xs bg-[#f2f2f2] text-[#0c0c09] px-2 py-1 rounded font-['Cabin'] whitespace-nowrap">
                      {result.category}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="px-4 py-6 text-center text-gray-500 font-['Cabin']">
              No results found for "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
