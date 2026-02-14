import { ResourceCard } from "../../components/ResourceCard";
import { PenTool, FileText, Sparkles, BookOpen, Zap, Target } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function AIWritingToolsPage() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-gradient-to-br from-white via-purple-50 to-blue-50">
      {/* Hero Section with Gradient */}
      <section className="relative px-8 py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="text-center flex flex-col gap-8 items-center">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-3xl shadow-2xl">
              <PenTool className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-6">
              <div className="mb-10 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full mx-auto shadow-lg border border-purple-200">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-purple-600 font-semibold tracking-wide">{t('tools.digital.aiWriting.hero.badge')}</span>
              </div>
              <h1 className="text-[#0c0c09] tracking-tight leading-tight max-w-4xl">
                {t('tools.digital.aiWriting.hero.title')}
              </h1>
              <p className="text-[#0c0c09] text-xl max-w-3xl mx-auto leading-relaxed">
                {t('tools.digital.aiWriting.hero.subtitle')}
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 mt-8">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-100">
                <div className="text-4xl text-purple-600 mb-2">24+</div>
                <div className="text-[#0c0c09]">{t('tools.digital.aiWriting.stats.tools')}</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-100">
                <div className="text-4xl text-blue-600 mb-2">4</div>
                <div className="text-[#0c0c09]">{t('tools.digital.aiWriting.stats.categories')}</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-100">
                <div className="text-4xl text-purple-600 mb-2">100%</div>
                <div className="text-[#0c0c09]">{t('tools.digital.aiWriting.stats.verified')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Writing Tools Section */}
      <section className="px-8 py-24 bg-white/70 backdrop-blur-sm">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-3 mb-6 bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-2xl">
              <FileText className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <h2 className="text-[#0c0c09] mb-4">{t('tools.digital.aiWriting.sections.assistants.title')}</h2>
            <p className="text-[#0c0c09] text-lg max-w-2xl mx-auto">
              {t('tools.digital.aiWriting.sections.assistants.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title="ChatGPT"
              description={t('tools.digital.aiWriting.cards.chatgpt.description')}
              url="https://chat.openai.com"
              category={t('tools.digital.aiWriting.cards.chatgpt.category')}
              icon={Sparkles}
              tags={t('tools.digital.aiWriting.cards.chatgpt.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="Claude"
              description={t('tools.digital.aiWriting.cards.claude.description')}
              url="https://claude.ai"
              category={t('tools.digital.aiWriting.cards.claude.category')}
              icon={FileText}
              tags={t('tools.digital.aiWriting.cards.claude.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="Google Gemini"
              description={t('tools.digital.aiWriting.cards.gemini.description')}
              url="https://gemini.google.com"
              category={t('tools.digital.aiWriting.cards.gemini.category')}
              icon={Sparkles}
              tags={t('tools.digital.aiWriting.cards.gemini.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Jasper"
              description={t('tools.digital.aiWriting.cards.jasper.description')}
              url="https://www.jasper.ai"
              category={t('tools.digital.aiWriting.cards.jasper.category')}
              icon={PenTool}
              tags={t('tools.digital.aiWriting.cards.jasper.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Copy.ai"
              description={t('tools.digital.aiWriting.cards.copyai.description')}
              url="https://www.copy.ai"
              category={t('tools.digital.aiWriting.cards.copyai.description')}
              icon={Zap}
              tags={t('tools.digital.aiWriting.cards.copyai.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Writesonic"
              description={t('tools.digital.aiWriting.cards.writesonic.description')}
              url="https://writesonic.com"
              category={t('tools.digital.aiWriting.cards.writesonic.category')}
              icon={FileText}
              tags={t('tools.digital.aiWriting.cards.writesonic.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Rytr"
              description={t('tools.digital.aiWriting.cards.rytr.description')}
              url="https://rytr.me"
              category={t('tools.digital.aiWriting.cards.rytr.category')}
              icon={PenTool}
              tags={t('tools.digital.aiWriting.cards.rytr.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Writer"
              description={t('tools.digital.aiWriting.cards.writer.description')}
              url="https://writer.com"
              category={t('tools.digital.aiWriting.cards.writer.category')}
              icon={FileText}
              tags={t('tools.digital.aiWriting.cards.writer.tags', { returnObjects: true }) as string[]}
            />
          </div>
        </div>
      </section>

      {/* AI Editing & Grammar Section */}
      <section className="px-8 py-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-3 mb-6 bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-2xl">
              <Target className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <h2 className="text-[#0c0c09] mb-4">{t('tools.digital.aiWriting.sections.editing.title')}</h2>
            <p className="text-[#0c0c09] text-lg max-w-2xl mx-auto">
              {t('tools.digital.aiWriting.sections.editing.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title="Grammarly"
              description={t('tools.digital.aiWriting.cards.grammarly.description')}
              url="https://www.grammarly.com"
              category={t('tools.digital.aiWriting.cards.grammarly.category')}
              icon={Sparkles}
              tags={t('tools.digital.aiWriting.cards.grammarly.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="ProWritingAid"
              description={t('tools.digital.aiWriting.cards.proWritingAid.description')}
              url="https://prowritingaid.com"
              category={t('tools.digital.aiWriting.cards.proWritingAid.category')}
              icon={FileText}
              tags={t('tools.digital.aiWriting.cards.proWritingAid.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Hemingway Editor"
              description={t('tools.digital.aiWriting.cards.hemingway.description')}
              url="https://hemingwayapp.com"
              category={t('tools.digital.aiWriting.cards.hemingway.category')}
              icon={PenTool}
              tags={t('tools.digital.aiWriting.cards.hemingway.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="QuillBot"
              description={t('tools.digital.aiWriting.cards.quillbot.description')}
              url="https://quillbot.com"
              category={t('tools.digital.aiWriting.cards.quillbot.category')}
              icon={Sparkles}
              tags={t('tools.digital.aiWriting.cards.quillbot.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="LanguageTool"
              description={t('tools.digital.aiWriting.cards.languageTool.description')}
              url="https://languagetool.org"
              category={t('tools.digital.aiWriting.cards.languageTool.category')}
              icon={FileText}
              tags={t('tools.digital.aiWriting.cards.languageTool.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Wordtune"
              description={t('tools.digital.aiWriting.cards.wordtune.description')}
              url="https://www.wordtune.com"
              category={t('tools.digital.aiWriting.cards.wordtune.category')}
              icon={PenTool}
              tags={t('tools.digital.aiWriting.cards.wordtune.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Ginger Software"
              description={t('tools.digital.aiWriting.cards.ginger.description')}
              url="https://www.gingersoftware.com"
              category={t('tools.digital.aiWriting.cards.ginger.category')}
              icon={Sparkles}
              tags={t('tools.digital.aiWriting.cards.ginger.tags', { returnObjects: true }) as string[]}
            />
          </div>
        </div>
      </section>

      {/* Summarization Tools Section */}
      <section className="px-8 py-24 bg-white/70 backdrop-blur-sm">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-3 mb-6 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl">
              <BookOpen className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <h2 className="text-[#0c0c09] mb-4">{t('tools.digital.aiWriting.sections.summarization.title')}</h2>
            <p className="text-[#0c0c09] text-lg max-w-2xl mx-auto">
              {t('tools.digital.aiWriting.sections.summarization.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title="TL;DR This"
              description={t('tools.digital.aiWriting.cards.tldr.description')}
              url="https://tldrthis.com"
              category={t('tools.digital.aiWriting.cards.tldr.category')}
              icon={BookOpen}
              tags={t('tools.digital.aiWriting.cards.tldr.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="SMMRY"
              description={t('tools.digital.aiWriting.cards.smmry.description')}
              url="https://smmry.com"
              category={t('tools.digital.aiWriting.cards.smmry.category')}
              icon={FileText}
              tags={t('tools.digital.aiWriting.cards.smmry.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Resoomer"
              description={t('tools.digital.aiWriting.cards.resoomer.description')}
              url="https://resoomer.com"
              category={t('tools.digital.aiWriting.cards.resoomer.category')}
              icon={BookOpen}
              tags={t('tools.digital.aiWriting.cards.resoomer.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="SummarizeBot"
              description={t('tools.digital.aiWriting.cards.summarizebot.description')}
              url="https://www.summarizebot.com"
              category={t('tools.digital.aiWriting.cards.summarizebot.category')}
              icon={Sparkles}
              tags={t('tools.digital.aiWriting.cards.summarizebot.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Scholarcy"
              description={t('tools.digital.aiWriting.cards.scholarcy.description')}
              url="https://www.scholarcy.com"
              category={t('tools.digital.aiWriting.cards.scholarcy.category')}
              icon={BookOpen}
              tags={t('tools.digital.aiWriting.cards.scholarcy.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Otter.ai"
              description={t('tools.digital.aiWriting.cards.otter.description')}
              url="https://otter.ai"
              category={t('tools.digital.aiWriting.cards.otter.category')}
              icon={FileText}
              tags={t('tools.digital.aiWriting.cards.otter.tags', { returnObjects: true }) as string[]}
            />
          </div>
        </div>
      </section>

      {/* Prompt Engineering Section */}
      <section className="px-8 py-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-3 mb-6 bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-2xl">
              <Zap className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <h2 className="text-[#0c0c09] mb-4">{t('tools.digital.aiWriting.sections.prompting.title')}</h2>
            <p className="text-[#0c0c09] text-lg max-w-2xl mx-auto">
              {t('tools.digital.aiWriting.sections.prompting.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title="PromptPerfect"
              description={t('tools.digital.aiWriting.cards.promptperfect.description')}
              url="https://promptperfect.jina.ai"
              category={t('tools.digital.aiWriting.cards.promptperfect.category')}
              icon={Sparkles}
              tags={t('tools.digital.aiWriting.cards.promptperfect.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="OpenAI Prompt Engineering Guide"
              description={t('tools.digital.aiWriting.cards.openaiGuide.description')}
              url="https://platform.openai.com/docs/guides/prompt-engineering"
              category={t('tools.digital.aiWriting.cards.openaiGuide.category')}
              icon={BookOpen}
              tags={t('tools.digital.aiWriting.cards.openaiGuide.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="PromptBase"
              description={t('tools.digital.aiWriting.cards.promptbase.description')}
              url="https://promptbase.com"
              category={t('tools.digital.aiWriting.cards.promptbase.category')}
              icon={PenTool}
              tags={t('tools.digital.aiWriting.cards.promptbase.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="FlowGPT"
              description={t('tools.digital.aiWriting.cards.flowgpt.description')}
              url="https://flowgpt.com"
              category={t('tools.digital.aiWriting.cards.flowgpt.category')}
              icon={Sparkles}
              tags={t('tools.digital.aiWriting.cards.flowgpt.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="AIPRM"
              description={t('tools.digital.aiWriting.cards.aiprm.description')}
              url="https://www.aiprm.com"
              category={t('tools.digital.aiWriting.cards.aiprm.category')}
              icon={Zap}
              tags={t('tools.digital.aiWriting.cards.aiprm.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Learn Prompting"
              description={t('tools.digital.aiWriting.cards.learnPrompting.description')}
              url="https://learnprompting.org"
              category={t('tools.digital.aiWriting.cards.learnPrompting.category')}
              icon={BookOpen}
              tags={t('tools.digital.aiWriting.cards.learnPrompting.tags', { returnObjects: true }) as string[]}
            />
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="px-8 py-24 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white mb-6">{t('tools.digital.aiWriting.sections.bestPractices.title')}</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              {t('tools.digital.aiWriting.sections.bestPractices.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: t('tools.digital.aiWriting.bestPracticeItems.alwaysVerifyFacts.title'),
                description: t('tools.digital.aiWriting.bestPracticeItems.alwaysVerifyFacts.description')
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: t('tools.digital.aiWriting.bestPracticeItems.editorialOversight.title'),
                description: t('tools.digital.aiWriting.bestPracticeItems.editorialOversight.description')
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: t('tools.digital.aiWriting.bestPracticeItems.discloseAIUse.title'),
                description: t('tools.digital.aiWriting.bestPracticeItems.discloseAIUse.description')
              },
              {
                icon: <PenTool className="w-8 h-8" />,
                title:  t('tools.digital.aiWriting.bestPracticeItems.protectSources.title'),
                description: t('tools.digital.aiWriting.bestPracticeItems.protectSources.description')
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title:  t('tools.digital.aiWriting.bestPracticeItems.checkBias.title'),
                description: t('tools.digital.aiWriting.bestPracticeItems.checkBias.description')
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title:  t('tools.digital.aiWriting.bestPracticeItems.verifyCurrency.title'),
                description: t('tools.digital.aiWriting.bestPracticeItems.verifyCurrency.description')
              }
            ].map((practice, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl hover:bg-white/20 transition-colors">
                <div className="text-white mb-4">{practice.icon}</div>
                <h3 className="text-white text-xl mb-3">{practice.title}</h3>
                <p className="text-white/80 leading-relaxed">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-20 bg-white">
        <div className="max-w-[1280px] mx-auto text-center">
          <Link 
            href="/tools" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-5 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-lg">{t('tools.digital.aiWriting.sections.ctaBack')}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
