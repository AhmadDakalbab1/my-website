import { ResourceCard } from "../../components/ResourceCard";
import { Search, BookOpen, Database, Globe, FileSearch, Library, Microscope, GraduationCap } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function ResearchDiscoveryToolsPage() {
  const { t } = useTranslation(undefined, { keyPrefix: "tools.digital.researchDiscovery" });

  return (
    <div className="w-full bg-white">
      {/* Hero Section - Academic Clean */}
      <section className="px-8 py-28 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 border-b-4 border-indigo-600">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="flex-1 flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg w-fit shadow-lg">
                <Search className="w-5 h-5" />
                <span className="font-semibold tracking-wide">{t("hero.badge")}</span>
              </div>
              <h1 className="text-[#0c0c09] tracking-tight leading-tight">
                {t("hero.title")}
              </h1>
              <p className="text-[#0c0c09] text-xl leading-relaxed">
                {t("hero.subtitle")}
              </p>
              
              {/* Quick Access Navigation */}
              <div className="flex flex-wrap gap-3 mt-4">
                <a href="#academic" className="bg-white border-2 border-indigo-600 text-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors font-semibold">
                  {t("quickNav.academic")}
                </a>
                <a href="#search" className="bg-white border-2 border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold">
                  {t("quickNav.search")}
                </a>
                <a href="#factfinding" className="bg-white border-2 border-purple-600 text-purple-600 px-5 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-colors font-semibold">
                  {t("quickNav.factfinding")}
                </a>
                <a href="#databases" className="bg-white border-2 border-cyan-600 text-cyan-600 px-5 py-2 rounded-lg hover:bg-cyan-600 hover:text-white transition-colors font-semibold">
                  {t("quickNav.databases")}
                </a>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-indigo-600">
                <Database className="w-12 h-12 text-indigo-600 mb-4" />
                <div className="text-3xl text-[#0c0c09] mb-2">{t('stats.dataSources.value')}</div>
                <div className="text-gray-600">{t('stats.dataSources.label')}</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-600">
                <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
                <div className="text-3xl text-[#0c0c09] mb-2">{t('stats.articles.value')}</div>
                <div className="text-gray-600">{t('stats.articles.label')}</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-purple-600">
                <Search className="w-12 h-12 text-purple-600 mb-4" />
                <div className="text-3xl text-[#0c0c09] mb-2">{t('stats.searchTools.value')}</div>
                <div className="text-gray-600">{t('stats.searchTools.label')}</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-cyan-600">
                <Globe className="w-12 h-12 text-cyan-600 mb-4" />
                <div className="text-3xl text-[#0c0c09] mb-2">{t('stats.coverage.value')}</div>
                <div className="text-gray-600">{t('stats.coverage.label')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Research Tools */}
      <section id="academic" className="px-8 py-24 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-indigo-100 p-4 rounded-xl">
                <GraduationCap className="w-10 h-10 text-indigo-600" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-[#0c0c09]">{t("sections.academic.title")}</h2>
                <p className="text-gray-600 text-lg">{t("sections.academic.subtitle")}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title="Google Scholar"
              description={t("cards.googleScholar.description")}
              url="https://scholar.google.com"
              category={t("cards.googleScholar.category")}
              icon={GraduationCap}
              tags={t('cards.googleScholar.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="PubMed"
              description={t("cards.pubmed.description")}
              url="https://pubmed.ncbi.nlm.nih.gov"
              category={t("cards.pubmed.category")}
              icon={Microscope}
              tags={t('cards.pubmed.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="JSTOR"
              description={t("cards.jstor.description")}
              url="https://www.jstor.org"
              category={t("cards.jstor.category")}
              icon={Library}
              tags={t('cards.jstor.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="arXiv"
              description={t("cards.arxiv.description")}
              url="https://arxiv.org"
              category={t("cards.arxiv.category")}
              icon={FileSearch}
              tags={t('cards.arxiv.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="ResearchGate"
              description={t("cards.researchGate.description")}
              url="https://www.researchgate.net"
              category={t("cards.researchGate.category")}
              icon={Globe}
              tags={t('cards.researchGate.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="ScienceDirect"
              description={t("cards.scienceDirect.description")}
              url="https://www.sciencedirect.com"
              category={t("cards.scienceDirect.category")}
              icon={BookOpen}
              tags={t('cards.scienceDirect.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="CORE"
              description={t("cards.core.description")}
              url="https://core.ac.uk"
              category={t("cards.core.category")}
              icon={Database}
              tags={t('cards.core.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Semantic Scholar"
              description={t("cards.semanticScholar.description")}
              url="https://www.semanticscholar.org"
              category={t("cards.semanticScholar.category")}
              icon={Search}
              tags={t('cards.semanticScholar.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="WorldCat"
              description={t("cards.worldCat.description")}
              url="https://www.worldcat.org"
              category={t("cards.worldCat.category")}
              icon={Library}
              tags={t('cards.worldCat.tags', { returnObjects: true }) as string[]}
            />
          </div>
        </div>
      </section>

      {/* Specialized Search Engines */}
      <section id="search" className="px-8 py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-4 rounded-xl">
                <Search className="w-10 h-10 text-blue-600" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-[#0c0c09]">{t("sections.search.title")}</h2>
                <p className="text-gray-600 text-lg">{t("sections.search.subtitle")}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title="DuckDuckGo"
              description={t("cards.duckDuckGo.description")}
              url="https://duckduckgo.com"
              category={t("cards.duckDuckGo.category")}
              icon={Search}
              tags={t('cards.duckDuckGo.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="Yandex"
              description={t("cards.yandex.description")}
              url="https://yandex.com"
              category={t("cards.yandex.category")}
              icon={Globe}
              tags={t('cards.yandex.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Baidu"
              description={t("cards.baidu.description")}
              url="https://www.baidu.com"
              category={t("cards.baidu.category")}
              icon={Globe}
              tags={t('cards.baidu.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Wolfram Alpha"
              description={t("cards.wolframAlpha.description")}
              url="https://www.wolframalpha.com"
              category={t("cards.wolframAlpha.category")}
              icon={Database}
              tags={t('cards.wolframAlpha.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Internet Archive"
              description={t("cards.internetArchive.description")}
              url="https://archive.org"
              category={t("cards.internetArchive.category")}
              icon={Library}
              tags={t('cards.internetArchive.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Wayback Machine"
              description={t("cards.waybackMachine.description")}
              url="https://web.archive.org"
              category={t("cards.waybackMachine.category")}
              icon={FileSearch}
              tags={t('cards.waybackMachine.tags', { returnObjects: true }) as string[]}
            />
          </div>
        </div>
      </section>

      {/* Fact-Finding & Verification */}
      <section id="factfinding" className="px-8 py-24 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-100 p-4 rounded-xl">
                <FileSearch className="w-10 h-10 text-purple-600" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-[#0c0c09]">{t("sections.factfinding.title")}</h2>
                <p className="text-gray-600 text-lg">{t("sections.factfinding.title")}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title="Bellingcat Online Investigation Toolkit"
              description={t("cards.bellingcatToolkit.description")}
              url="https://docs.google.com/spreadsheets/d/18rtqh8EG2q1xBo2cLNyhIDuK9jrPGwYr9DI2UncoqJQ"
              category={t("cards.bellingcatToolkit.category")}
              icon={FileSearch}
              tags={t('cards.bellingcatToolkit.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="DocumentCloud"
              description={t("cards.documentCloud.description")}
              url="https://www.documentcloud.org"
              category={t("cards.documentCloud.category")}
              icon={Database}
              tags={t('cards.documentCloud.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="WikiLeaks"
              description={t("cards.wikiLeaks.description")}
              url="https://wikileaks.org"
              category={t("cards.wikiLeaks.category")}
              icon={FileSearch}
              tags={t('cards.wikiLeaks.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="FOIA.gov"
              description={t("cards.foiaGov.description")}
              url="https://www.foia.gov"
              category={t("cards.foiaGov.category")}
              icon={Library}
              tags={t('cards.foiaGov.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="OpenCorporates"
              description={t("cards.openCorporates.description")}
              url="https://opencorporates.com"
              category={t("cards.openCorporates.category")}
              icon={Database}
              tags={t('cards.openCorporates.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="ICIJ Offshore Leaks Database"
              description={t("cards.icijOffshore.description")}
              url="https://offshoreleaks.icij.org"
              category={t("cards.icijOffshore.category")}
              icon={FileSearch}
              tags={t('cards.icijOffshore.tags', { returnObjects: true }) as string[]}
            />
          </div>
        </div>
      </section>

      {/* Data & Statistical Databases */}
      <section id="databases" className="px-8 py-24 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-cyan-100 p-4 rounded-xl">
                <Database className="w-10 h-10 text-cyan-600" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-[#0c0c09]">{t("sections.databases.title")}</h2>
                <p className="text-gray-600 text-lg">{t("sections.databases.title")}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title="World Bank Open Data"
              description={t("cards.worldBank.description")}
              url="https://data.worldbank.org"
              category={t("cards.worldBank.category")}
              icon={Globe}
              tags={t('cards.worldBank.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="UN Data"
              description={t("cards.unData.description")}
              url="https://data.un.org"
              category={t("cards.unData.category")}
              icon={Database}
              tags={t('cards.unData.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Our World in Data"
              description={t("cards.ourWorldInData.description")}
              url="https://ourworldindata.org"
              category={t("cards.ourWorldInData.category")}
              icon={Globe}
              tags={t('cards.ourWorldInData.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="U.S. Census Bureau"
              description={t("cards.usCensus.description")}
              url="https://www.census.gov"
              category={t("cards.usCensus.category")}
              icon={Database}
              tags={t('cards.usCensus.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Eurostat"
              description={t("cards.eurostat.description")}
              url="https://ec.europa.eu/eurostat"
              category={t("cards.eurostat.category")}
              icon={Globe}
              tags={t('cards.eurostat.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Statista"
              description={t("cards.statista.description")}
              url="https://www.statista.com"
              category={t("cards.statista.category")}
              icon={Database}
              tags={t('cards.statista.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Gapminder"
              description={t("cards.gapminder.description")}
              url="https://www.gapminder.org"
              category={t("cards.gapminder.category")}
              icon={Globe}
              tags={t('cards.gapminder.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Google Public Data Explorer"
              description={t("cards.googlePublicData.description")}
              url="https://www.google.com/publicdata/directory"
              category={t("cards.googlePublicData.category")}
              icon={Search}
              tags={t('cards.googlePublicData.tags', { returnObjects: true }) as string[]}
            />
          </div>
        </div>
      </section>

      {/* Research Best Practices */}
      <section className="px-8 py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white mb-6">{t("sections.bestPractices.title")}</h2>
            <p className="text-white/90 text-xl max-w-3xl mx-auto">
              {t("sections.bestPractices.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: t('bestPracticeItems.crossReference.title'),
                description: t('bestPracticeItems.crossReference.description'),
              },
              {
                title: t('bestPracticeItems.checkDates.title'),
                description: t('bestPracticeItems.checkDates.description'),
              },
              {
                title: t('bestPracticeItems.evaluateCredibility.title'),
                description: t('bestPracticeItems.evaluateCredibility.description'),
              },
              {
                title: t('bestPracticeItems.documentResearch.title'),
                description: t('bestPracticeItems.documentResearch.description'),
              },
              {
                title: t('bestPracticeItems.understandLimitations.title'),
                description: t('bestPracticeItems.understandLimitations.description'),
              },
              {
                title: t('bestPracticeItems.respectCopyright.title'),
                description: t('bestPracticeItems.respectCopyright.description'),
              }
            ].map((practice, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl hover:bg-white/20 transition-colors">
                <h3 className="text-white text-xl mb-4">{practice.title}</h3>
                <p className="text-white/80 leading-relaxed">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-20 bg-white border-t-4 border-indigo-600">
        <div className="max-w-[1200px] mx-auto text-center">
          <Link 
            href="/tools" 
            className="inline-flex items-center gap-3 bg-indigo-600 text-white px-10 py-5 rounded-lg hover:bg-indigo-700 transition-all shadow-xl hover:shadow-2xl text-lg"
          >
            <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span>{t('sections.ctaBack')}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
