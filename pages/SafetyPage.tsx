import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ResourceCard } from "../components/ResourceCard";
import { Shield, AlertTriangle, Lock, Phone, Heart, Sparkles, CheckCircle2, Zap, Users } from "lucide-react";
import { ExpertVoices } from "../components/ExpertVoices";
import { useTranslation } from "react-i18next";

export default function SafetyPage() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-orange-50 px-16 py-32 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-8 items-center">
            {/* Icon with Gradient */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl blur-xl opacity-20" />
              <div className="relative bg-gradient-to-br from-red-500 to-orange-600 p-6 rounded-2xl shadow-xl">
                <Shield className="w-16 h-16 text-white" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-600 text-white px-6 py-2 rounded-full mx-auto shadow-lg">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-sm font-semibold">{t('safety.hero.badge')}</span>
              </div>

              <h1 className="text-[#0c0c09] text-7xl tracking-tight leading-tight">
                {t('safety.hero.title')}
              </h1>

              <p className="text-slate-600 text-xl leading-relaxed max-w-3xl mx-auto">
                {t('safety.hero.subtitle')}
              </p>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-8 w-full max-w-3xl mt-4">
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Phone className="w-5 h-5 text-red-600" />
                  <div className="text-3xl text-[#0c0c09]">{t('safety.stats.availability')}</div>
                </div>
                <p className="text-sm text-slate-600">{t('safety.stats.support')}</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-orange-600" />
                  <div className="text-3xl text-[#0c0c09]">{t('safety.stats.global')}</div>
                </div>
                <p className="text-sm text-slate-600">{t('safety.stats.network')}</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <div className="text-3xl text-[#0c0c09]">{t('safety.stats.trusted')}</div>
                </div>
                <p className="text-sm text-slate-600">{t('safety.stats.sources')}</p>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <a 
                href="https://cpj.org/safety-kit/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-[#f65d5d] to-[#e54d4d] text-white px-8 py-4 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 shadow-lg"
              >
                <Shield className="w-4 h-4" />
                <span>{t('safety.buttons.safetyKit')}</span>
              </a>
              <a 
                href="https://cpj.org" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-[#0c0c09] px-8 py-4 rounded-lg border-2 border-slate-300 hover:border-[#f65d5d] hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{t('safety.buttons.emergencyHelp')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Categories - Enhanced Dark Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-16 py-28 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">{t('safety.protocols.title')}</span>
            </div>
            <h2 className="text-white text-5xl tracking-tight leading-tight mb-6">
              {t('safety.protocols.heading')}
            </h2>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
              {t('safety.protocols.description')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {[
              {
                icon: <AlertTriangle className="w-8 h-8" />,
                title: t('safety.physical.riskAssessment'),
                desc: t('safety.physical.riskDesc'),
                resources: ["IFJ Safety Guide", "CPJ Safety Kit", t('safety.physical.hostile')],
                color: "from-red-500 to-red-600",
                iconBg: "bg-gradient-to-br from-red-500 to-red-600"
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: t('safety.digital.title'),
                desc: t('safety.digital.subtitle'),
                resources: [t('safety.digital.encryption'), t('safety.digital.vpn'), t('safety.digital.twoFactor')],
                color: "from-purple-500 to-purple-600",
                iconBg: "bg-gradient-to-br from-purple-500 to-purple-600"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: t('safety.physical.insurance'),
                desc: t('safety.physical.insuranceDesc'),
                resources: ["Freelance Safety Guide", t('safety.mental.title'), "Insurance Options"],
                color: "from-blue-500 to-blue-600",
                iconBg: "bg-gradient-to-br from-blue-500 to-blue-600"
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: t('safety.emergency.rapidHelp'),
                desc: t('safety.emergency.rapidHelpDesc'),
                resources: [t('safety.emergency.cpjAssistance'), t('safety.organizations.rory'), t('safety.emergency.hotlines')],
                color: "from-orange-500 to-orange-600",
                iconBg: "bg-gradient-to-br from-orange-500 to-orange-600"
              }
            ].map((item, i) => (
              <div key={i} className="group relative bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20 p-8 flex flex-col gap-6 hover:bg-white/15 hover:border-white/40 hover:shadow-2xl transition-all duration-300">
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`} />

                {/* Icon */}
                <div className="relative z-10">
                  <div className={`${item.iconBg} p-4 rounded-xl inline-flex text-white shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 ring-2 ring-white/20`}>
                    {item.icon}
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-white text-2xl tracking-tight mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-300 group-hover:to-orange-300 transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-300">{item.desc}</p>
                </div>

                <div className="flex flex-col gap-2 relative z-10">
                  {item.resources.map((r, ri) => (
                    <div key={ri} className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full shadow-lg`} />
                      <p className="text-slate-200 text-sm">{r}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts - Enhanced Light Section */}
      <section className="bg-gradient-to-br from-white to-slate-50 px-16 py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex gap-20 items-center">
            <div className="flex-1">
              <div className="aspect-[600/640] relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-slate-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759673824881-0ddb7f27d970?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjBlcXVpcG1lbnQlMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc2MTA0MDM1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Journalist safety equipment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-orange-500/10" />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl blur opacity-20" />
                  <div className="relative bg-gradient-to-br from-red-500 to-orange-600 p-4 rounded-xl inline-flex text-white shadow-lg w-fit">
                    <Phone className="w-10 h-10" />
                  </div>
                </div>

                <h2 className="text-[#0c0c09] text-5xl tracking-tight leading-tight">
                  {t('safety.emergency.contactsTitle')}
                </h2>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-red-500 to-orange-600 text-white p-8 rounded-2xl shadow-2xl">
                {/* Alert Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)' }} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="w-6 h-6" />
                    <p className="font-semibold text-lg">{t('safety.emergency.immediateDanger')}</p>
                  </div>
                  <div className="flex flex-col gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">{t('safety.mental.cpj.title')}</p>
                        <p className="text-xl">+1-212-465-1004</p>
                      </div>
                    </div>
                    <div className="h-px bg-white/20" />
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">{t('safety.organizations.rory')}</p>
                        <p className="text-xl">+44-203-219-7860</p>
                      </div>
                    </div>
                    <div className="h-px bg-white/20" />
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">{t('safety.organizations.ifj')}</p>
                        <p className="text-lg">{t('safety.emergency.localUnion')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <p className="text-slate-700 leading-relaxed">
                  <strong className="text-blue-700">{t('safety.confidential.title')}</strong> {t('safety.confidential.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Cards Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white px-16 py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-orange-100 text-red-700 px-6 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">{t('safety.resources.badge')}</span>
            </div>
            <h2 className="text-[#0c0c09] text-5xl tracking-tight leading-tight mb-6">
              {t('safety.resources.title')}
            </h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
              {t('safety.resources.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title={t('safety.resources.cpj.title')}
              description={t('safety.resources.cpj.description')}
              url="https://cpj.org/safety-kit/"
              category={t('safety.resources.cpj.category')}
              icon={Shield}
              tags={[t('safety.resources.cpj.tag1'), t('safety.resources.cpj.tag2'), t('safety.resources.cpj.tag3')]}
              featured={true}
            />
            <ResourceCard
              title={t('safety.resources.ifj.title')}
              description={t('safety.resources.ifj.description')}
              url="https://www.ifj.org/safety"
              category={t('safety.resources.ifj.category')}
              icon={AlertTriangle}
              tags={[t('safety.resources.ifj.tag1'), t('safety.resources.ifj.tag2'), t('safety.resources.ifj.tag3')]}
            />
            <ResourceCard
              title={t('safety.resources.rory.title')}
              description={t('safety.resources.rory.description')}
              url="https://rorypecktrust.org"
              category={t('safety.resources.rory.category')}
              icon={Heart}
              tags={[t('safety.resources.rory.tag1'), t('safety.resources.rory.tag2'), t('safety.resources.rory.tag3'), t('safety.resources.rory.tag4')]}
            />
            <ResourceCard
              title={t('safety.resources.digitalSecurity.title')}
              description={t('safety.resources.digitalSecurity.description')}
              url="https://cpj.org/digital-safety/"
              category={t('safety.resources.digitalSecurity.category')}
              icon={Lock}
              tags={[t('safety.resources.digitalSecurity.tag1'), t('safety.resources.digitalSecurity.tag2'), t('safety.resources.digitalSecurity.tag3')]}
            />
            <ResourceCard
              title={t('safety.resources.training.title')}
              description={t('safety.resources.training.description')}
              url="https://www.newssafety.org/training/"
              category={t('safety.resources.training.category')}
              icon={Shield}
              tags={[t('safety.resources.training.tag1'), t('safety.resources.training.tag2'), t('safety.resources.training.tag3'), t('safety.resources.training.tag4')]}
            />
            <ResourceCard
              title={t('safety.resources.dartCenter.title')}
              description={t('safety.resources.dartCenter.description')}
              url="https://dartcenter.org"
              category={t('safety.resources.dartCenter.category')}
              icon={Heart}
              tags={[t('safety.resources.dartCenter.tag1'), t('safety.resources.dartCenter.tag2'), t('safety.resources.dartCenter.tag3'), t('safety.resources.dartCenter.tag4')]}
            />
          </div>
        </div>
      </section>

      {/* Expert Voices Section */}
      <ExpertVoices
        title={t('safety.expertVoices.title')}
        subtitle={t('safety.expertVoices.subtitle')}
        items={[
          {
            image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzcyUyMGNvbmZlcmVuY2UlMjBqb3VybmFsaXNtfGVufDF8fHx8MTc2MTA0MDIyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
            category: t('safety.expertVoices.card1.category'),
            title: t('safety.expertVoices.card1.title'),
            description: t('safety.expertVoices.card1.description'),
            source: t('safety.expertVoices.card1.source'),
            url: "https://cpj.org/safety-kit/"
          },
          {
            image: "https://images.unsplash.com/photo-1703449481095-bb99a6928f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjB3ZWxsYmVpbmd8ZW58MXx8fHwxNzYxMDM5MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
            category: t('safety.expertVoices.card2.category'),
            title: t('safety.expertVoices.card2.title'),
            description: t('safety.expertVoices.card2.description'),
            source: t('safety.expertVoices.card2.source'),
            url: "https://dartcenter.org"
          },
          {
            image: "https://images.unsplash.com/photo-1477039181047-efb4357d01bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2VjdXJpdHklMjBlbmNyeXB0aW9ufGVufDF8fHx8MTc2MTAzOTI1OHww&ixlib=rb-4.1.0&q=80&w=1080",
            category: t('safety.expertVoices.card3.category'),
            title: t('safety.expertVoices.card3.title'),
            description: t('safety.expertVoices.card3.description'),
            source: t('safety.expertVoices.card3.source'),
            url: "https://cpj.org/digital-safety/"
          }
        ]}
        viewAllText={t('safety.buttons.viewAll')}
        viewAllUrl="https://cpj.org"
      />
    </div>
  );
}
