import { ResourceCard } from "../../components/ResourceCard";
import { Shield, CheckCircle, AlertTriangle, Lock, Eye, Fingerprint, Search, Globe } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function VerificationSafetyToolsPage() {
  const { t } = useTranslation(undefined, { keyPrefix: "tools.digital.verificationSafety" });

  return (
    <div className="w-full bg-slate-50">
      {/* Hero Section - Security Focused */}
      <section className="relative px-8 py-32 bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 overflow-hidden">
        {/* Security Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="text-center flex flex-col gap-10 items-center">
            {/* Shield Icon with Pulse */}
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <Shield className="w-20 h-20 text-emerald-600" strokeWidth={2} />
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-8 py-3 rounded-full mx-auto border-2 border-white/30">
                <Lock className="w-5 h-5 text-white" />
                <span className="text-white font-bold tracking-widest">{t("hero.badge")}</span>
              </div>
              <h1 className="text-white tracking-tight leading-tight max-w-5xl">
                {t("hero.title")}
              </h1>
              <p className="text-white/90 text-xl max-w-4xl mx-auto leading-relaxed">
                {t("hero.subtitle")}
              </p>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-4 gap-8 mt-8">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <div className="text-white text-lg font-semibold">{t("highlights.factChecking")}</div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <div className="text-white text-lg font-semibold">{t("highlights.imageVerification")}</div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div className="text-white text-lg font-semibold">{t("highlights.digitalSafety")}</div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30">
                  <Fingerprint className="w-10 h-10 text-white" />
                </div>
                <div className="text-white text-lg font-semibold">{t("highlights.sourceTracking")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fact-Checking Tools */}
      <section className="px-8 py-28 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-6 mb-16 pb-6 border-b-4 border-emerald-600">
            <div className="bg-emerald-100 p-5 rounded-2xl">
              <CheckCircle className="w-12 h-12 text-emerald-600" strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="text-[#0c0c09] mb-2">{t("sections.factChecking.title")}</h2>
              <p className="text-gray-600 text-lg">{t("sections.factChecking.subtitle")}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title="Snopes"
              description={t("cards.snopes.description")}
              url="https://www.snopes.com"
              category={t("cards.snopes.category")}
              icon={CheckCircle}
              tags={t('cards.snopes.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="FactCheck.org"
              description={t("cards.factcheck.description")}
              url="https://www.factcheck.org"
              category={t("cards.factcheck.category")}
              icon={Shield}
              tags={t('cards.factcheck.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="PolitiFact"
              description={t("cards.politifact.description")}
              url="https://www.politifact.com"
              category={t("cards.politifact.category")}
              icon={CheckCircle}
              tags={t('cards.politifact.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Full Fact"
              description={t("cards.fullfact.description")}
              url="https://fullfact.org"
              category={t("cards.fullfact.category")}
              icon={Shield}
              tags={t('cards.fullfact.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Africa Check"
              description={t("cards.africaCheck.description")}
              url="https://africacheck.org"
              category={t("cards.africaCheck.category")}
              icon={Globe}
              tags={t('cards.africaCheck.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="International Fact-Checking Network"
              description={t("cards.ifcn.description")}
              url="https://www.poynter.org/ifcn/"
              category={t("cards.ifcn.category")}
              icon={Globe}
              tags={t('cards.ifcn.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="ClaimReview"
              description={t("cards.claimReview.description")}
              url="https://toolbox.google.com/factcheck/explorer"
              category={t("cards.claimReview.category")}
              icon={Search}
              tags={t('cards.claimReview.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Hoaxy"
              description={t("cards.hoaxy.description")}
              url="https://hoaxy.osome.iu.edu"
              category={t("cards.hoaxy.category")}
              icon={Eye}
              tags={t('cards.hoaxy.tags', { returnObjects: true }) as string[]}
            />
          </div>
        </div>
      </section>

      {/* Image & Video Verification */}
      <section className="px-8 py-28 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-6 mb-16 pb-6 border-b-4 border-blue-600">
            <div className="bg-blue-100 p-5 rounded-2xl">
              <Eye className="w-12 h-12 text-blue-600" strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="text-[#0c0c09] mb-2">{t("sections.imageVideo.title")}</h2>
              <p className="text-gray-600 text-lg">{t("sections.imageVideo.subtitle")}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title="Google Reverse Image Search"
              description={t("cards.googleReverse.description")}
              url="https://images.google.com"
              category={t("cards.googleReverse.category")}
              icon={Search}
              tags={t("cards.googleReverse.tags", {returnObjects: true}) as string[]}
              featured={true}
            />
            <ResourceCard
              title="TinEye"
              description={t("cards.tineye.description")}
              url="https://tineye.com"
              category={t("cards.tineye.category")}
              icon={Eye}
              tags={t("cards.tineye.tags", {returnObjects: true}) as string[]}
              featured={true}
            />
            <ResourceCard
              title="InVID / WeVerify"
              description={t("cards.invid.description")}
              url="https://www.invid-project.eu/tools-and-services/invid-verification-plugin/"
              category={t("cards.invid.category")}
              icon={Eye}
              tags={t("cards.invid.tags", {returnObjects: true}) as string[]}
            />
            <ResourceCard
              title="FotoForensics"
              description={t("cards.fotoforensics.description")}
              url="https://fotoforensics.com"
              category={t("cards.fotoforensics.category")}
              icon={Fingerprint}
              tags={t("cards.fotoforensics.tags", {returnObjects: true}) as string[]}
            />
            <ResourceCard
              title="Forensically"
              description={t("cards.forensically.description")}
              url="https://29a.ch/photo-forensics/"
              category={t("cards.forensically.category")}
              icon={Eye}
              tags={t("cards.forensically.tags", {returnObjects: true}) as string[]}
            />
            <ResourceCard
              title="RevEye Reverse Image Search"
              description={t("cards.reveye.description")}
              url="https://reveye.it"
              category={t("cards.reveye.category")}
              icon={Search}
              tags={t("cards.reveye.tags", {returnObjects: true}) as string[]}
            />
            <ResourceCard
              title="Jeffrey's Image Metadata Viewer"
              description={t("cards.jeffreyExif.description")}
              url="http://exif.regex.info/exif.cgi"
              category={t("cards.jeffreyExif.category")}
              icon={Fingerprint}
              tags={t("cards.jeffreyExif.tags", {returnObjects: true}) as string[]}
            />
            <ResourceCard
              title="Yandex Image Search"
              description={t("cards.yandex.description")}
              url="https://yandex.com/images/"
              category={t("cards.yandex.category")}
              icon={Search}
              tags={t("cards.yandex.tags", {returnObjects: true}) as string[]}
            />
          </div>
        </div>
      </section>

      {/* Source Verification */}
      <section className="px-8 py-28 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-6 mb-16 pb-6 border-b-4 border-purple-600">
            <div className="bg-purple-100 p-5 rounded-2xl">
              <Fingerprint className="w-12 h-12 text-purple-600" strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="text-[#0c0c09] mb-2">{t('sections.sourceVerification.title')}</h2>
              <p className="text-gray-600 text-lg">{t('sections.sourceVerification.subtitle')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title="Bellingcat OSINT Toolkit"
              description={t('cards.bellingcat.description')}
              url="https://docs.google.com/spreadsheets/d/18rtqh8EG2q1xBo2cLNyhIDuK9jrPGwYr9DI2UncoqJQ"
              category={t('cards.bellingcat.category')}
              icon={Fingerprint}
              tags={t("cards.bellingcat.tags", {returnObjects: true}) as string[]}
              featured={true}
            />
            <ResourceCard
              title="WhoisXML API"
              description={t('cards.whoisxml.description')}
              url="https://www.whoisxmlapi.com"
              category={t('cards.whoisxml.category')}
              icon={Globe}
              tags={t("cards.whoisxml.tags", {returnObjects: true}) as string[]}
            />
            <ResourceCard
              title="Have I Been Pwned"
              description={t('cards.hibp.description')}
              url="https://haveibeenpwned.com"
              category={t('cards.hibp.category')}
              icon={AlertTriangle}
              tags={t("cards.hibp.tags", {returnObjects: true}) as string[]}
            />
            <ResourceCard
              title="Hunter.io"
              description={t('cards.hunter.description')}
              url="https://hunter.io"
              category={t('cards.hunter.category')}
              icon={Search}
              tags={t("cards.hunter.tags", {returnObjects: true}) as string[]}
            />
            <ResourceCard
              title="Social Searcher"
              description={t('cards.socialSearcher.description')}
              url="https://www.social-searcher.com"
              category={t('cards.socialSearcher.category')}
              icon={Search}
              tags={t("cards.socialSearcher.tags", {returnObjects: true}) as string[]}
            />
            <ResourceCard
              title="Wayback Machine"
              description={t('cards.wayback.description')}
              url="https://web.archive.org"
              category={t('cards.wayback.category')}
              icon={Globe}
              tags={t("cards.wayback.tags", {returnObjects: true}) as string[]}
            />
          </div>
        </div>
      </section>

      {/* Digital Safety & Security */}
      <section className="px-8 py-28 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-6 mb-16 pb-6 border-b-4 border-red-500">
            <div className="bg-red-500/20 p-5 rounded-2xl backdrop-blur-sm border border-red-500/30">
              <Lock className="w-12 h-12 text-red-400" strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="text-white mb-2">{t('sections.safetySecurity.title')}</h2>
              <p className="text-gray-300 text-lg">{t('sections.safetySecurity.subtitle')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title="Signal"
              description={t('cards.signal.description')}
              url="https://signal.org"
              category={t('cards.signal.category')}
              icon={Lock}
              tags={t("cards.signal.tags", {returnObjects: true}) as string[]}
              featured={true}
            />
            <ResourceCard
              title="ProtonMail"
              description={t('cards.protonmail.description')}
              url="https://proton.me/mail"
              category={t('cards.protonmail.category')}
              icon={Shield}
              tags={t("cards.protonmail.tags", {returnObjects: true}) as string[]}
              featured={true}
            />
            <ResourceCard
              title="Tor Browser"
              description={t('cards.tor.description')}
              url="https://www.torproject.org"
              category={t('cards.tor.category')}
              icon={Globe}
              tags={t("cards.tor.tags", {returnObjects: true}) as string[]}
            />
            <ResourceCard
              title="NordVPN"
              description={t('cards.nordvpn.description')}
              url="https://nordvpn.com"
              category={t('cards.nordvpn.category')}
              icon={Shield}
              tags={t("cards.nordvpn.tags", {returnObjects: true}) as string[]}
            />
            <ResourceCard
              title="1Password"
              description={t('cards.onePassword.description')}
              url="https://1password.com"
              category={t('cards.onePassword.category')}
              icon={Lock}
              tags={t("cards.onePassword.tags", {returnObjects: true}) as string[]}
            />
            <ResourceCard
              title="VeraCrypt"
              description={t('cards.veracrypt.description')}
              url="https://www.veracrypt.fr"
              category={t('cards.veracrypt.category')}
              icon={Lock}
              tags={t("cards.veracrypt.tags", {returnObjects: true}) as string[]}
            />
            <ResourceCard
              title="SecureDrop"
              description={t('cards.securedrop.description')}
              url="https://securedrop.org"
              category={t('cards.securedrop.category')}
              icon={Shield}
              tags={t("cards.securedrop.tags", {returnObjects: true}) as string[]}
            />
            <ResourceCard
              title="HTTPS Everywhere"
              description={t('cards.httpsEverywhere.description')}
              url="https://www.eff.org/https-everywhere"
              category={t('cards.httpsEverywhere.category')}
              icon={Lock}
              tags={t("cards.httpsEverywhere.tags", {returnObjects: true}) as string[]}
            />
          </div>
        </div>
      </section>

      {/* Verification Best Practices */}
      <section className="px-8 py-28 bg-emerald-600">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-white mb-6">{t('sections.bestPractices.title')}</h2>
            <p className="text-white/90 text-xl max-w-3xl mx-auto">
              {t('sections.bestPractices.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="w-10 h-10" />,
                title:  t('bestPracticeItems.verifyBeforePublish.title'),
                description: t('bestPracticeItems.verifyBeforePublish.description'),
              },
              {
                icon: <Eye className="w-10 h-10" />,
                title: t('bestPracticeItems.checkImageProvenance.title'),
                description: t('bestPracticeItems.checkImageProvenance.description'),
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: t('bestPracticeItems.authenticateSources.title'),
                description: t('bestPracticeItems.authenticateSources.description'),
              },
              {
                icon: <Fingerprint className="w-10 h-10" />,
                title: t('bestPracticeItems.documentProcess.title'),
                description: t('bestPracticeItems.documentProcess.description'),
              },
              {
                icon: <AlertTriangle className="w-10 h-10" />,
                title: t('bestPracticeItems.bewareViral.title'),
                description: t('bestPracticeItems.bewareViral.description'),
              },
              {
                icon: <Lock className="w-10 h-10" />,
                title: t('bestPracticeItems.protectSourceSecurity.title'),
                description: t('bestPracticeItems.protectSourceSecurity.description'),
              }
            ].map((practice, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border-2 border-white/20 p-8 rounded-2xl hover:bg-white/20 transition-all hover:border-white/40">
                <div className="text-white mb-5">{practice.icon}</div>
                <h3 className="text-white text-xl mb-4 font-semibold">{practice.title}</h3>
                <p className="text-white/90 leading-relaxed">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 bg-white">
        <div className="max-w-[1280px] mx-auto text-center">
          <Link 
            href="/tools" 
            className="inline-flex items-center gap-4 bg-emerald-600 text-white px-12 py-6 rounded-2xl hover:bg-emerald-700 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 text-lg font-semibold"
          >
            <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
            <span>{t('sections.ctaBack')}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
