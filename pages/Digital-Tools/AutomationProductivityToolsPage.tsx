import { ResourceCard } from "../../components/ResourceCard";
import { Zap, Clock, Target, TrendingUp, Workflow, Calendar, CheckSquare, Users, Globe } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function AutomationProductivityToolsPage() {
  const { t } = useTranslation(undefined, {keyPrefix: "tools.digital.automationProductivity"});

  return (
    <div className="w-full bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section - Dashboard Style */}
      <section className="px-8 py-28">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-full w-fit shadow-lg">
                <Zap className="w-5 h-5" />
                <span className="font-bold tracking-wide">{t("hero.badge")}</span>
              </div>
              <h1 className="text-[#0c0c09] tracking-tight leading-tight">
                {t("hero.title")}
              </h1>
              <p className="text-[#0c0c09] text-xl leading-relaxed">
                {t("hero.subtitle")}
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white border-l-4 border-orange-500 p-5 rounded-lg shadow-md">
                  <Clock className="w-8 h-8 text-orange-500 mb-2" />
                  <div className="text-2xl text-[#0c0c09] mb-1">50%</div>
                  <div className="text-gray-600 text-sm">{t("benefits.timeSaved")}</div>
                </div>
                <div className="bg-white border-l-4 border-amber-500 p-5 rounded-lg shadow-md">
                  <TrendingUp className="w-8 h-8 text-amber-500 mb-2" />
                  <div className="text-2xl text-[#0c0c09] mb-1">3x</div>
                  <div className="text-gray-600 text-sm">{t("benefits.fasterOutput")}</div>
                </div>
                <div className="bg-white border-l-4 border-yellow-500 p-5 rounded-lg shadow-md">
                  <Target className="w-8 h-8 text-yellow-600 mb-2" />
                  <div className="text-2xl text-[#0c0c09] mb-1">100%</div>
                  <div className="text-gray-600 text-sm">{t("benefits.focusOnStories")}</div>
                </div>
                <div className="bg-white border-l-4 border-orange-600 p-5 rounded-lg shadow-md">
                  <Users className="w-8 h-8 text-orange-600 mb-2" />
                  <div className="text-2xl text-[#0c0c09] mb-1">∞</div>
                  <div className="text-gray-600 text-sm">{t("benefits.teamSync")}</div>
                </div>
              </div>
            </div>

            {/* Right Dashboard Preview */}
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-200">
              <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-gray-100">
                <h3 className="text-[#0c0c09] text-2xl">{t("dashboard.title")}</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { label: t("dashboard.metrics.contentCreation"), value: 85, color: "bg-orange-500" },
                  { label: t("dashboard.metrics.teamCollaboration"), value: 92, color: "bg-amber-500" },
                  { label: t("dashboard.metrics.workflowAutomation"), value: 78, color: "bg-yellow-500" },
                  { label: t("dashboard.metrics.timeManagement"), value: 88, color: "bg-orange-600" }
                ].map((metric, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{metric.label}</span>
                      <span className="text-gray-900 font-bold">{metric.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`${metric.color} h-3 rounded-full transition-all duration-1000`} 
                        style={{ width: `${metric.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Automation Tools */}
      <section className="px-8 py-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-5 rounded-2xl shadow-lg">
                <Workflow className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-[#0c0c09]">{t("sections.workflowAutomation.title")}</h2>
                <p className="text-gray-600 text-lg">{t("sections.workflowAutomation.subtitle")}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title="Zapier"
              description={t("cards.zapier.description")}
              url="https://zapier.com"
              category={t("cards.zapier.category")}
              icon={Zap}
              tags={t('cards.zapier.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="Make (Integromat)"
              description={t("cards.make.description")}
              url="https://www.make.com"
              category={t("cards.make.category")}
              icon={Workflow}
              tags={t('cards.make.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="IFTTT"
              description={t("cards.ifttt.description")}
              url="https://ifttt.com"
              category={t("cards.ifttt.category")}
              icon={Zap}
              tags={t('cards.ifttt.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="n8n"
              description={t("cards.n8n.description")}
              url="https://n8n.io"
              category={t("cards.n8n.category")}
              icon={Workflow}
              tags={t('cards.n8n.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Automate.io"
              description={t("cards.automateio.description")}
              url="https://automate.io"
              category={t("cards.automateio.category")}
              icon={Zap}
              tags={t('cards.automateio.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Microsoft Power Automate"
              description={t("cards.powerAutomate.description")}
              url="https://powerautomate.microsoft.com"
              category={t("cards.powerAutomate.category")}
              icon={Workflow}
              tags={t('cards.powerAutomate.tags', { returnObjects: true }) as string[]}
            />
          </div>
        </div>
      </section>

      {/* Project & Task Management */}
      <section className="px-8 py-24 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-amber-500 to-yellow-500 p-5 rounded-2xl shadow-lg">
                <CheckSquare className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-[#0c0c09]">{t("sections.projectTask.title")}</h2>
                <p className="text-gray-600 text-lg">{t("sections.projectTask.subtitle")}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title="Asana"
              description={t("cards.asana.description")}
              url="https://asana.com"
              category={t("cards.asana.category")}
              icon={CheckSquare}
              tags={t('cards.asana.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="Trello"
              description={t("cards.trello.description")}
              url="https://trello.com"
              category={t("cards.trello.category")}
              icon={Target}
              tags={t('cards.trello.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="Monday.com"
              description={t("cards.monday.description")}
              url="https://monday.com"
              category={t("cards.monday.category")}
              icon={TrendingUp}
              tags={t('cards.monday.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="ClickUp"
              description={t("cards.clickup.description")}
              url="https://clickup.com"
              category={t("cards.clickup.category")}
              icon={Zap}
              tags={t('cards.clickup.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Notion"
              description={t("cards.notion.description")}
              url="https://www.notion.so"
              category={t("cards.notion.category")}
              icon={CheckSquare}
              tags={t('cards.notion.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Basecamp"
              description={t("cards.basecamp.description")}
              url="https://basecamp.com"
              category={t("cards.basecamp.category")}
              icon={Users}
              tags={t('cards.basecamp.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Airtable"
              description={t("cards.airtable.description")}
              url="https://www.airtable.com"
              category={t("cards.airtable.category")}
              icon={Target}
              tags={t('cards.airtable.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Todoist"
              description={t("cards.todoist.description")}
              url="https://todoist.com"
              category={t("cards.todoist.category")}
              icon={CheckSquare}
              tags={t('cards.todoist.tags', { returnObjects: true }) as string[]}
            />
          </div>
        </div>
      </section>

      {/* Team Collaboration */}
      <section className="px-8 py-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-5 rounded-2xl shadow-lg">
                <Users className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-[#0c0c09]">{t("sections.teamCollaboration.title")}</h2>
                <p className="text-gray-600 text-lg">{t("sections.teamCollaboration.subtitle")}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title="Slack"
              description={t("cards.slack.description")}
              url="https://slack.com"
              category={t("cards.slack.category")}
              icon={Users}
              tags={t('cards.slack.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="Microsoft Teams"
              description={t("cards.microsoftTeams.description")}
              url="https://www.microsoft.com/microsoft-teams"
              category={t("cards.microsoftTeams.category")}
              icon={Users}
              tags={t('cards.microsoftTeams.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Google Workspace"
              description={t("cards.googleWorkspace.description")}
              url="https://workspace.google.com"
              category={t("cards.googleWorkspace.category")}
              icon={Target}
              tags={t('cards.googleWorkspace.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Zoom"
              description={t("cards.zoom.description")}
              url="https://zoom.us"
              category={t("cards.zoom.category")}
              icon={Users}
              tags={t('cards.zoom.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Discord"
              description={t("cards.discord.description")}
              url="https://discord.com"
              category={t("cards.discord.category")}
              icon={Users}
              tags={t('cards.discord.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Miro"
              description={t("cards.miro.description")}
              url="https://miro.com"
              category={t("cards.miro.category")}
              icon={Target}
              tags={t('cards.miro.tags', { returnObjects: true }) as string[]}
            />
          </div>
        </div>
      </section>

      {/* Time Management & Scheduling */}
      <section className="px-8 py-24 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-orange-600 to-red-600 p-5 rounded-2xl shadow-lg">
                <Calendar className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-[#0c0c09]">{t("sections.timeScheduling.title")}</h2>
                <p className="text-gray-600 text-lg">{t("sections.timeScheduling.subtitle")}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title="Calendly"
              description={t("cards.calendly.description")}
              url="https://calendly.com"
              category={t("cards.calendly.category")}
              icon={Calendar}
              tags={t('cards.calendly.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="Google Calendar"
              description={t("cards.googleCalendar.description")}
              url="https://calendar.google.com"
              category={t("cards.googleCalendar.category")}
              icon={Calendar}
              tags={t('cards.googleCalendar.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="RescueTime"
              description={t("cards.rescueTime.description")}
              url="https://www.rescuetime.com"
              category={t("cards.rescueTime.category")}
              icon={Clock}
              tags={t('cards.rescueTime.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Toggl Track"
              description={t("cards.togglTrack.description")}
              url="https://toggl.com/track"
              category={t("cards.togglTrack.category")}
              icon={Clock}
              tags={t('cards.togglTrack.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="World Time Buddy"
              description={t("cards.worldTimeBuddy.description")}
              url="https://www.worldtimebuddy.com"
              category={t("cards.worldTimeBuddy.category")}
              icon={Globe}
              tags={t('cards.worldTimeBuddy.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Focus@Will"
              description={t("cards.focusAtWill.description")}
              url="https://www.focusatwill.com"
              category={t("cards.focusAtWill.category")}
              icon={Target}
              tags={t('cards.focusAtWill.tags', { returnObjects: true }) as string[]}
            />
          </div>
        </div>
      </section>

      {/* Productivity Best Practices */}
      <section className="px-8 py-28 bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-white mb-6">{t("sections.bestPractices.title")}</h2>
            <p className="text-white/90 text-xl max-w-3xl mx-auto">
              {t("sections.bestPractices.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-10 h-10" />,
                title: t('bestPracticeItems.automateRepetitive.title'),
                description: t('bestPracticeItems.automateRepetitive.description'),
              },
              {
                icon: <Clock className="w-10 h-10" />,
                title: t('bestPracticeItems.timeBlock.title'),
                description: t('bestPracticeItems.timeBlock.description'),
              },
              {
                icon: <CheckSquare className="w-10 h-10" />,
                title: t('bestPracticeItems.usePM.title'),
                description: t('bestPracticeItems.usePM.description'),
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: t('bestPracticeItems.centralizeComms.title'),
                description: t('bestPracticeItems.centralizeComms.description'),
              },
              {
                icon: <Workflow className="w-10 h-10" />,
                title: t('bestPracticeItems.createStandardWorkflows.title'),
                description: t('bestPracticeItems.createStandardWorkflows.description'),
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: t('bestPracticeItems.reviewOptimize.title'),
                description: t('bestPracticeItems.reviewOptimize.description'),
              }
            ].map((practice, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-8 rounded-2xl hover:bg-white/20 transition-all">
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
        <div className="max-w-[1400px] mx-auto text-center">
          <Link 
            href="/tools" 
            className="inline-flex items-center gap-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white px-12 py-6 rounded-full hover:from-orange-700 hover:to-amber-700 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 text-lg font-semibold"
          >
            <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
            <span>{t("sections.ctaBack")}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
