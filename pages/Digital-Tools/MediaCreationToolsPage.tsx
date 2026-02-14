import { ResourceCard } from "../../components/ResourceCard";
import { Image, Video, Mic, Palette, Camera, Film, Music, Wand2 } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
export default function MediaCreationToolsPage() {
  const { t } = useTranslation(undefined, { keyPrefix: "tools.digital.mediaCreation" });

  return (
    <div className="w-full bg-[#0c0c09]">
      {/* Hero Section - Dark with Image Focus */}
      <section className="relative px-8 py-40 bg-gradient-to-b from-[#0c0c09] via-gray-900 to-[#0c0c09]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center flex flex-col gap-10 items-center">
            <div className="flex gap-4">
              <div className="bg-[#f65d5d] p-5 rounded-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                <Camera className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
              <div className="bg-[#f65d5d] p-5 rounded-2xl animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.2s' }}>
                <Video className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
              <div className="bg-[#f65d5d] p-5 rounded-2xl animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.4s' }}>
                <Mic className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 bg-[#f65d5d] px-8 py-3 rounded-full mx-auto shadow-2xl">
                <Palette className="w-5 h-5 text-white" />
                <span className="text-white font-semibold tracking-widest">{t("hero.badge")}</span>
              </div>
              <h1 className="text-white tracking-tight leading-tight max-w-5xl">
                {t("hero.title")}
              </h1>
              <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
                {t("hero.subtitle")}
              </p>
            </div>
            
            {/* Visual Categories Grid */}
            <div className="grid grid-cols-4 gap-6 mt-12 w-full max-w-4xl">
              <div className="bg-gradient-to-br from-red-500 to-pink-500 p-6 rounded-xl text-center">
                <Image className="w-10 h-10 text-white mx-auto mb-3" />
                <div className="text-white font-semibold">{t("categories.images")}</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-6 rounded-xl text-center">
                <Video className="w-10 h-10 text-white mx-auto mb-3" />
                <div className="text-white font-semibold">{t("categories.videos")}</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-6 rounded-xl text-center">
                <Mic className="w-10 h-10 text-white mx-auto mb-3" />
                <div className="text-white font-semibold">{t("categories.audio")}</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-xl text-center">
                <Palette className="w-10 h-10 text-white mx-auto mb-3" />
                <div className="text-white font-semibold">{t("categories.design")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image & Graphics Tools */}
      <section className="px-8 py-32 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-start gap-12 mb-20">
            <div className="bg-gradient-to-br from-red-500 to-pink-500 p-8 rounded-3xl shadow-2xl">
              <Image className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h2 className="text-[#0c0c09] mb-4">{t("sections.imageGraphics.title")}</h2>
              <p className="text-[#0c0c09] text-xl leading-relaxed">
                {t("sections.imageGraphics.subtitle")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <ResourceCard
              title="Canva"
              description={t("cards.canva.description")}
              url="https://www.canva.com"
              category={t("cards.canva.category")}
              icon={Palette}
              tags={t('cards.canva.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="Adobe Express"
              description={t("cards.adobeExpress.description")}
              url="https://www.adobe.com/express/"
              category={t("cards.adobeExpress.category")}
              icon={Wand2}
              tags={t('cards.adobeExpress.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Figma"
              description={t("cards.figma.description")}
              url="https://www.figma.com"
              category={t("cards.figma.category")}
              icon={Palette}
              tags={t('cards.figma.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="DALL-E 3"
              description={t("cards.dalle3.description")}
              url="https://openai.com/dall-e-3"
              category={t("cards.dalle3.category")}
              icon={Wand2}
              tags={t('cards.dalle3.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Midjourney"
              description={t("cards.midjourney.description")}
              url="https://www.midjourney.com"
              category={t("cards.midjourney.category")}
              icon={Image}
              tags={t('cards.midjourney.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Piktochart"
              description={t("cards.piktochart.description")}
              url="https://piktochart.com"
              category={t("cards.piktochart.category")}
              icon={Palette}
              tags={t('cards.piktochart.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Visme"
              description={t("cards.visme.description")}
              url="https://www.visme.co"
              category={t("cards.visme.category")}
              icon={Image}
              tags={t('cards.visme.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Crello (VistaCreate)"
              description={t("cards.crello.description")}
              url="https://create.vista.com"
              category={t("cards.crello.category")}
              icon={Palette}
              tags={t('cards.crello.tags', { returnObjects: true }) as string[]}
            />
          </div>
        </div>
      </section>

      {/* Video Editing Tools */}
      <section className="px-8 py-32 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-start gap-12 mb-20">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-8 rounded-3xl shadow-2xl">
              <Video className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h2 className="text-[#0c0c09] mb-4">{t("sections.videoEditing.title")}</h2>
              <p className="text-[#0c0c09] text-xl leading-relaxed">
                {t("sections.videoEditing.subtitle")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <ResourceCard
              title="DaVinci Resolve"
              description={t("cards.davinciResolve.description")}
              url="https://www.blackmagicdesign.com/products/davinciresolve"
              category={t("cards.davinciResolve.category")}
              icon={Film}
              tags={t('cards.davinciResolve.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="Adobe Premiere Pro"
              description={t("cards.premierePro.description")}
              url="https://www.adobe.com/products/premiere.html"
              category={t("cards.premierePro.category")}
              icon={Video}
              tags={t('cards.premierePro.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="CapCut"
              description={t("cards.capcut.description")}
              url="https://www.capcut.com"
              category={t("cards.capcut.category")}
              icon={Video}
              tags={t('cards.capcut.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Final Cut Pro"
              description={t("cards.finalCutPro.description")}
              url="https://www.apple.com/final-cut-pro/"
              category={t("cards.finalCutPro.category")}
              icon={Film}
              tags={t('cards.finalCutPro.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="iMovie"
              description={t("cards.imovie.description")}
              url="https://www.apple.com/imovie/"
              category={t("cards.imovie.category")}
              icon={Video}
              tags={t('cards.imovie.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Filmora"
              description={t("cards.filmora.description")}
              url="https://filmora.wondershare.com"
              category={t("cards.filmora.category")}
              icon={Film}
              tags={t('cards.filmora.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="OpenShot"
              description={t("cards.openshot.description")}
              url="https://www.openshot.org"
              category={t("cards.openshot.category")}
              icon={Video}
              tags={t('cards.openshot.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Descript"
              description={t("cards.descriptVideo.description")}
              url="https://www.descript.com"
              category={t("cards.descriptVideo.category")}
              icon={Film}
              tags={t('cards.descriptVideo.tags', { returnObjects: true }) as string[]}
            />
          </div>
        </div>
      </section>

      {/* Audio & Podcast Tools */}
      <section className="px-8 py-32 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-start gap-12 mb-20">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-8 rounded-3xl shadow-2xl">
              <Mic className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h2 className="text-[#0c0c09] mb-4">{t("sections.audioPodcast.title")}</h2>
              <p className="text-[#0c0c09] text-xl leading-relaxed">
                {t("sections.audioPodcast.subtitle")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <ResourceCard
              title="Audacity"
              description={t("cards.audacity.description")}
              url="https://www.audacityteam.org"
              category={t("cards.audacity.category")}
              icon={Mic}
              tags={t('cards.audacity.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="Adobe Audition"
              description={t("cards.audition.description")}
              url="https://www.adobe.com/products/audition.html"
              category={t("cards.audition.category")}
              icon={Music}
              tags={t('cards.audition.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Descript (Audio)"
              description={t("cards.descriptAudio.description")}
              url="https://www.descript.com"
              category={t("cards.descriptAudio.category")}
              icon={Mic}
              tags={t('cards.descriptAudio.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="GarageBand"
              description={t("cards.garageband.description")}
              url="https://www.apple.com/mac/garageband/"
              category={t("cards.garageband.category")}
              icon={Music}
              tags={t('cards.garageband.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Anchor (Spotify for Podcasters)"
              description={t("cards.anchor.description")}
              url="https://podcasters.spotify.com"
              category={t("cards.anchor.category")}
              icon={Mic}
              tags={t('cards.anchor.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Riverside.fm"
              description={t("cards.riverside.description")}
              url="https://riverside.fm"
              category={t("cards.riverside.category")}
              icon={Mic}
              tags={t('cards.riverside.tags', { returnObjects: true }) as string[]}
            />
          </div>
        </div>
      </section>

      {/* Design & Layout Tools */}
      <section className="px-8 py-32 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-start gap-12 mb-20">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 p-8 rounded-3xl shadow-2xl">
              <Palette className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h2 className="text-[#0c0c09] mb-4">{t("sections.designLayout.title")}</h2>
              <p className="text-[#0c0c09] text-xl leading-relaxed">
                {t("sections.designLayout.subtitle")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <ResourceCard
              title="Adobe Illustrator"
              description={t("cards.illustrator.description")}
              url="https://www.adobe.com/products/illustrator.html"
              category={t("cards.illustrator.category")}
              icon={Palette}
              tags={t('cards.illustrator.tags', { returnObjects: true }) as string[]}
              featured={true}
            />
            <ResourceCard
              title="Adobe Photoshop"
              description={t("cards.photoshop.description")}
              url="https://www.adobe.com/products/photoshop.html"
              category={t("cards.photoshop.category")}
              icon={Image}
              tags={t('cards.photoshop.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Affinity Designer"
              description={t("cards.affinityDesigner.description")}
              url="https://affinity.serif.com/designer/"
              category={t("cards.affinityDesigner.category")}
              icon={Palette}
              tags={t('cards.affinityDesigner.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Affinity Photo"
              description={t("cards.affinityPhoto.description")}
              url="https://affinity.serif.com/photo/"
              category={t("cards.affinityPhoto.category")}
              icon={Image}
              tags={t('cards.affinityPhoto.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="GIMP"
              description={t("cards.gimp.description")}
              url="https://www.gimp.org"
              category={t("cards.gimp.category")}
              icon={Image}
              tags={t('cards.gimp.tags', { returnObjects: true }) as string[]}
            />
            <ResourceCard
              title="Inkscape"
              description={t("cards.inkscape.description")}
              url="https://inkscape.org"
              category={t("cards.inkscape.category")}
              icon={Palette}
              tags={t('cards.inkscape.tags', { returnObjects: true }) as string[]}
            />
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="px-8 py-32 bg-[#0c0c09]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-white mb-6">{t("sections.bestPractices.title")}</h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              {t("sections.bestPractices.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera className="w-10 h-10" />,
                title: t('bestPracticeItems.verifyImageAuthenticity.title'),
                description: t('bestPracticeItems.verifyImageAuthenticity.description'),
              },
              {
                icon: <Image className="w-10 h-10" />,
                title: t('bestPracticeItems.respectDignity.title'),
                description: t('bestPracticeItems.respectDignity.description'),
              },
              {
                icon: <Palette className="w-10 h-10" />,
                title: t('bestPracticeItems.maintainAccuracy.title'),
                description: t('bestPracticeItems.respectDignity.description'),
              },
              {
                icon: <Video className="w-10 h-10" />,
                title: t('bestPracticeItems.creditProperly.title'),
                description:t('bestPracticeItems.respectDignity.description'),
              },
              {
                icon: <Mic className="w-10 h-10" />,
                title: t('bestPracticeItems.clearAudio.title'),
                description: t('bestPracticeItems.respectDignity.description'),
              },
              {
                icon: <Film className="w-10 h-10" />,
                title: t('bestPracticeItems.contextMatters.title'),
                description: t('bestPracticeItems.respectDignity.description')
              }
            ].map((practice, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all">
                <div className="text-[#f65d5d] mb-4">{practice.icon}</div>
                <h3 className="text-white text-xl mb-4">{practice.title}</h3>
                <p className="text-gray-300 leading-relaxed">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 bg-gradient-to-br from-[#f65d5d] to-red-600">
        <div className="max-w-[1400px] mx-auto text-center">
          <Link 
            href="/tools" 
            className="inline-flex items-center gap-3 bg-white text-[#f65d5d] px-12 py-6 rounded-full hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 text-lg"
          >
            <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span>{t("sections.ctaBack")}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
