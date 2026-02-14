import HomeDesktop from "../imports/HomeDesktop";
import { DynamicNewsFeed } from "../components/DynamicNewsFeed";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  return (
    <>
      <HomeDesktop />
      {/* Dynamic News Feed - Auto-updates from reliable sources */}
      <DynamicNewsFeed
        title="Breaking News & Crisis Updates"
        subtitle="Live updates from UN OCHA ReliefWeb, WHO, IFRC, CDC, Reuters, and CPJ. Content automatically refreshes every 30 minutes from verified sources."
        maxItems={6}
        sources={["all"]}
      />
    </>
  );
}
