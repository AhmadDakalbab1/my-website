import { FileText, Shield, AlertCircle, Map, Radio, Users, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export function QuickAccess() {
  const [isOpen, setIsOpen] = useState(false);

  const quickLinks = [
    { icon: FileText, label: "Breaking News Checklist", url: "https://cpj.org/emergency-response/", color: "text-red-600 bg-red-50", external: true },
    { icon: Shield, label: "Verification Tools", url: "/verification", color: "text-blue-600 bg-blue-50" },
    { icon: AlertCircle, label: "Safety Guidelines", url: "/safety", color: "text-orange-600 bg-orange-50" },
    { icon: Map, label: "Live Data & Maps", url: "/data-maps", color: "text-green-600 bg-green-50" },
    { icon: Radio, label: "Risk Communication", url: "/risk-communication", color: "text-purple-600 bg-purple-50" },
    { icon: Users, label: "Training Resources", url: "/training", color: "text-indigo-600 bg-indigo-50" },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-8 top-1/2 transform -translate-y-1/2 bg-[#f65d5d] text-white px-4 py-3 rounded-r-lg shadow-lg hover:bg-[#e54d4d] transition-all z-40 hover:pl-6 font-['Cabin'] text-sm"
        style={{ writingMode: "vertical-rl" }}
        aria-label="Quick Access Menu"
      >
        Quick Access
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed left-0 top-0 bottom-0 w-80 bg-white shadow-2xl z-50 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-['Cabin']">Quick Access</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                {quickLinks.map((link, index) => {
                  const Icon = link.icon;
                  const LinkComponent = link.external ? 'a' : Link;
                  const linkProps = link.external 
                    ? { href: link.url, target: "_blank", rel: "noopener noreferrer" }
                    : { href: link.url };
                  
                  return (
                    <LinkComponent
                      key={index}
                      {...linkProps}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className={`${link.color} p-2 rounded-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-['Cabin'] text-[#0c0c09]">{link.label}</span>
                    </LinkComponent>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 font-['Cabin'] mb-3">Most Used Today</p>
                <div className="space-y-2">
                  <Link href="/crisis-reporting" className="block text-sm font-['Cabin'] text-[#0c0c09] hover:text-[#f65d5d]">
                    → Crisis Reporting Guide
                  </Link>
                  <Link href="/verification" className="block text-sm font-['Cabin'] text-[#0c0c09] hover:text-[#f65d5d]">
                    → Fact-Checking Resources
                  </Link>
                  <Link href="/tools" className="block text-sm font-['Cabin'] text-[#0c0c09] hover:text-[#f65d5d]">
                    → Essential Tools
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
