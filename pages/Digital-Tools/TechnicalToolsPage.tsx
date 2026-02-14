import { ResourceCard } from "../../components/ResourceCard";
import {
  Code,
  Terminal,
  GitBranch,
  Database,
  Server,
  Boxes,
  Laptop,
  FileCode,
} from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function TechnicalToolsPage() {
  const { t } = useTranslation(undefined, { keyPrefix: "tools.digital.technical" });

  return (
    <div className="w-full bg-[#0a0a0a]">
      {/* Hero Section - Developer Dark Theme */}
      <section className="relative px-8 py-36 bg-gradient-to-b from-[#0a0a0a] via-gray-950 to-[#0a0a0a] overflow-hidden">
        {/* Code Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 font-mono text-xs text-green-400 leading-relaxed p-8 overflow-hidden">
            <pre>
              {`
const verifySource = async (url) => {
  const response = await fetch(url);
  const metadata = extractMetadata(response);
  return validateCredentials(metadata);
};

function analyzeData(dataset) {
  return dataset.map(item => ({
    verified: checkFacts(item),
    trustScore: calculateTrust(item)
  }));
}

class InvestigativeTools {
  constructor() {
    this.scraper = new WebScraper();
    this.analyzer = new DataAnalyzer();
  }
}
            `.repeat(10)}
            </pre>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center flex flex-col gap-10">
            {/* Terminal Window */}
            <div className="max-w-4xl mx-auto w-full bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
              <div className="bg-gray-800 px-6 py-3 flex items-center gap-2 border-b border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center text-gray-400 text-sm font-mono">
                  ~/journalism-tools
                </div>
              </div>
              <div className="p-8 font-mono text-left">
                <div className="text-green-400 mb-2">
                  $ npm install @journalism/technical-tools
                </div>
                <div className="text-gray-400 mb-2">
                  ✓ Installing developer tools...
                </div>
                <div className="text-gray-400 mb-2">
                  ✓ Setting up data scrapers...
                </div>
                <div className="text-gray-400 mb-6">
                  ✓ Ready for investigative journalism
                </div>
                <div className="text-blue-400 flex items-center gap-2">
                  <span className="animate-pulse">▊</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-3 bg-green-500 px-8 py-3 rounded-lg mx-auto shadow-xl">
                <Terminal className="w-6 h-6 text-black" />
                <span className="text-black font-bold tracking-widest">{t("hero.badge")}</span>
              </div>
              <h1 className="text-white tracking-tight leading-tight max-w-5xl mx-auto text-center mt-10 mb-3">
                {t("hero.title")}
              </h1>
              <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed text-center">
                {t("hero.subtitle")}
              </p>
            </div>

            {/* Tech Stack Grid */}
            <div className="grid grid-cols-4 gap-6 max-w-4xl mx-auto mt-8 -mb-5">
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-green-500 transition-colors">
                <Code className="w-10 h-10 text-green-400 mx-auto mb-3" />
                <div className="text-white font-mono text-sm">{t("stack.scraping")}</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-blue-500 transition-colors">
                <Database className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                <div className="text-white font-mono text-sm">{t("stack.databases")}</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-purple-500 transition-colors">
                <GitBranch className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                <div className="text-white font-mono text-sm">
                  {t("stack.versionControl")}
                </div>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-orange-500 transition-colors">
                <Server className="w-10 h-10 text-orange-400 mx-auto mb-3" />
                <div className="text-white font-mono text-sm">{t("stack.apis")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Scraping & Data Collection */}
      <section className="px-8 py-28 bg-gray-950">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 pb-6 border-b-2 border-green-500/30">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-500/10 border border-green-500/30 p-5 rounded-xl">
                <Code className="w-12 h-12 text-green-400" strokeWidth={2} />
              </div>
              <div>
                <div className="text-green-400 font-mono text-sm mb-1">
                  {t("comments.c1")}
                </div>
                <h2 className="text-white mb-2">
                  {t("sections.scraping.title")}
                </h2>
                <p className="text-gray-400 text-lg">
                  {t("sections.scraping.subtitle")}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title="Beautiful Soup (Python)"
              description={t("cards.beautifulSoup.description")}
              url="https://www.crummy.com/software/BeautifulSoup/"
              category={t("cards.beautifulSoup.category")}
              icon={Code}
              tags={t('cards.beautifulSoup.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="Scrapy"
              description={t("cards.scrapy.description")}
              url="https://scrapy.org"
              category={t("cards.scrapy.category")}
              icon={Terminal}
              tags={t('cards.scrapy.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="Selenium"
              description={t("cards.selenium.description")}
              url="https://www.selenium.dev"
              category={t("cards.selenium.category")}
              icon={Laptop}
              tags={t('cards.selenium.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Puppeteer"
              description={t("cards.puppeteer.description")}
              url="https://pptr.dev"
              category={t("cards.puppeteer.category")}
              icon={Code}
              tags={t('cards.puppeteer.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Octoparse"
              description={t("cards.octoparse.description")}
              url="https://www.octoparse.com"
              category={t("cards.octoparse.category")}
              icon={Boxes}
              tags={t('cards.octoparse.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="ParseHub"
              description={t("cards.parseHub.description")}
              url="https://www.parsehub.com"
              category={t("cards.parseHub.category")}
              icon={Code}
              tags={t('cards.parseHub.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Import.io"
              description={t("cards.importIo.description")}
              url="https://www.import.io"
              category={t("cards.importIo.category")}
              icon={Database}
              tags={t('cards.importIo.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Apify"
              description={t("cards.apify.description")}
              url="https://apify.com"
              category={t("cards.apify.category")}
              icon={Server}
              tags={t('cards.apify.tags', { returnObjects: true }) as string[]}
            />
          </div>
        </div>
      </section>

      {/* Data Analysis & Databases */}
      <section className="px-8 py-28 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 pb-6 border-b-2 border-blue-500/30">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-500/10 border border-blue-500/30 p-5 rounded-xl">
                <Database className="w-12 h-12 text-blue-400" strokeWidth={2} />
              </div>
              <div>
                <div className="text-blue-400 font-mono text-sm mb-1">
                  {t("comments.c2")}
                </div>
                <h2 className="text-white mb-2">{t("sections.data.title")}</h2>
                <p className="text-gray-400 text-lg">
                  {t("sections.data.subtitle")}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title="Python pandas"
              description={t("cards.pandas.description")}
              url="https://pandas.pydata.org"
              category={t("cards.pandas.category")}
              icon={Code}
              tags={t('cards.pandas.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="PostgreSQL"
              description={t("cards.postgresql.description")}
              url="https://www.postgresql.org"
              category={t("cards.postgresql.category")}
              icon={Database}
              tags={t('cards.postgresql.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="Jupyter Notebook"
              description={t("cards.jupyter.description")}
              url="https://jupyter.org"
              category={t("cards.jupyter.category")}
              icon={FileCode}
              tags={t('cards.jupyter.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="MySQL"
              description={t("cards.mysql.description")}
              url="https://www.mysql.com"
              category={t("cards.mysql.category")}
              icon={Database}
              tags={t('cards.mysql.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="MongoDB"
              description={t("cards.mongodb.description")}
              url="https://www.mongodb.com"
              category={t("cards.mongodb.category")}
              icon={Database}
              tags={t('cards.mongodb.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="SQLite"
              description={t("cards.sqlite.description")}
              url="https://www.sqlite.org"
              category={t("cards.sqlite.category")}
              icon={Database}
              tags={t('cards.sqlite.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Apache Superset"
              description={t("cards.apacheSuperset.description")}
              url="https://superset.apache.org"
              category={t("cards.apacheSuperset.category")}
              icon={Terminal}
              tags={t('cards.apacheSuperset.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Metabase"
              description={t("cards.metabase.description")}
              url="https://www.metabase.com"
              category={t("cards.metabase.category")}
              icon={Database}
              tags={t('cards.metabase.tags', { returnObjects: true }) as string[]}
            />
          </div>
        </div>
      </section>

      {/* Version Control & Collaboration */}
      <section className="px-8 py-28 bg-gray-950">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 pb-6 border-b-2 border-purple-500/30">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-purple-500/10 border border-purple-500/30 p-5 rounded-xl">
                <GitBranch
                  className="w-12 h-12 text-purple-400"
                  strokeWidth={2}
                />
              </div>
              <div>
                <div className="text-purple-400 font-mono text-sm mb-1">
                  {t("comments.c3")}
                </div>
                <h2 className="text-white mb-2">
                  {t("sections.version.title")}
                </h2>
                <p className="text-gray-400 text-lg">
                  {t("sections.version.subtitle")}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title="GitHub"
              description={t("cards.github.description")}
              url="https://github.com"
              category={t("cards.github.category")}
              icon={GitBranch}
              tags={t('cards.github.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="Git"
              description={t("cards.git.description")}
              url="https://git-scm.com"
              category={t("cards.git.category")}
              icon={Terminal}
              tags={t('cards.git.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="GitLab"
              description={t("cards.gitlab.description")}
              url="https://gitlab.com"
              category={t("cards.gitlab.category")}
              icon={GitBranch}
              tags={t('cards.gitlab.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Bitbucket"
              description={t("cards.bitbucket.description")}
              url="https://bitbucket.org"
              category={t("cards.bitbucket.category")}
              icon={Code}
              tags={t('cards.bitbucket.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="VS Code"
              description={t("cards.vsCode.description")}
              url="https://code.visualstudio.com"
              category={t("cards.vsCode.category")}
              icon={FileCode}
              tags={t('cards.vsCode.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Sourcetree"
              description={t("cards.sourcetree.description")}
              url="https://www.sourcetreeapp.com"
              category={t("cards.sourcetree.category")}
              icon={GitBranch}
              tags={t('cards.sourcetree.tags', { returnObjects: true }) as string[]}
            />
          </div>
        </div>
      </section>

      {/* API & Integration Tools */}
      <section className="px-8 py-28 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 pb-6 border-b-2 border-orange-500/30">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-orange-500/10 border border-orange-500/30 p-5 rounded-xl">
                <Server className="w-12 h-12 text-orange-400" strokeWidth={2} />
              </div>
              <div>
                <div className="text-orange-400 font-mono text-sm mb-1">
                  {t("comments.c4")}
                </div>
                <h2 className="text-white mb-2">{t("sections.api.title")}</h2>
                <p className="text-gray-400 text-lg">
                  {t("sections.api.subtitle")}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title="Postman"
              description={t("cards.postman.description")}
              url="https://www.postman.com"
              category={t("cards.postman.category")}
              icon={Server}
              tags={t('cards.postman.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="Insomnia"
              description={t("cards.insomnia.description")}
              url="https://insomnia.rest"
              category={t("cards.insomnia.category")}
              icon={Terminal}
              tags={t('cards.insomnia.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="RapidAPI"
              description={t("cards.rapidapi.description")}
              url="https://rapidapi.com"
              category={t("cards.rapidapi.category")}
              icon={Server}
              tags={t('cards.rapidapi.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Swagger / OpenAPI"
              description={t("cards.swagger.description")}
              url="https://swagger.io"
              category={t("cards.swagger.category")}
              icon={FileCode}
              tags={t('cards.swagger.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="requests (Python)"
              description={t("cards.requests.description")}
              url="https://requests.readthedocs.io"
              category={t("cards.requests.category")}
              icon={Code}
              tags={t('cards.requests.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="axios (JavaScript)"
              description={t("cards.axios.description")}
              url="https://axios-http.com"
              category={t("cards.axios.category")}
              icon={Code}
              tags={t('cards.axios.tags', { returnObjects: true }) as string[]}
            />
          </div>
        </div>
      </section>

      {/* Developer Best Practices */}
      <section className="px-8 py-28 bg-gray-900">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-white mb-6">
              {t("sections.bestPractices.title")}
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              {t("sections.bestPractices.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-10 h-10" />,
                title: t('bestPracticeItems.respectRobots.title'),
                description:
                  t('bestPracticeItems.respectRobots.description'),
              },
              {
                icon: <Database className="w-10 h-10" />,
                title: t('bestPracticeItems.secureData.title'),
                description:
                  t('bestPracticeItems.secureData.description'),
              },
              {
                icon: <GitBranch className="w-10 h-10" />,
                title: t('bestPracticeItems.versionControl.title'),
                description:
                  t('bestPracticeItems.versionControl.description'),
              },
              {
                icon: <Terminal className="w-10 h-10" />,
                title: t('bestPracticeItems.documentCode.title'),
                description:
                  t('bestPracticeItems.documentCode.description'),
              },
              {
                icon: <Server className="w-10 h-10" />,
                title: t('bestPracticeItems.validateSources.title'),
                description:
                  t('bestPracticeItems.validateSources.description'),
              },
              {
                icon: <FileCode className="w-10 h-10" />,
                title: t('bestPracticeItems.shareOpenSource.title'),
                description:
                  t('bestPracticeItems.shareOpenSource.description'),
              },
            ].map((practice, index) => (
              <div
                key={index}
                className="bg-gray-950 border-2 border-gray-800 p-8 rounded-2xl hover:border-green-500/50 transition-all"
              >
                <div className="text-green-400 mb-5">{practice.icon}</div>
                <h3 className="text-white text-xl mb-4 font-semibold">
                  {practice.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {practice.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 bg-[#0a0a0a] border-t border-gray-900">
        <div className="max-w-[1400px] mx-auto text-center">
          <Link
            href="/tools"
            className="inline-flex items-center gap-4 bg-green-500 text-black px-12 py-6 rounded-xl hover:bg-green-400 transition-all shadow-2xl hover:shadow-green-500/20 hover:scale-105 text-lg font-bold font-mono"
          >
            <svg
              className="w-6 h-6 rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span>{t('sections.ctaBack')}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
