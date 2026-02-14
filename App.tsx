import { Route, Switch } from "wouter";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { BackToTop } from "./components/BackToTop";
import { QuickAccess } from "./components/QuickAccess";
import CrisisReportingPage from "./pages/CrisisReportingPage";
import VerificationPage from "./pages/VerificationPage";
import ToolsPage from "./pages/ToolsPage";
import DataMapsPage from "./pages/DataMapsPage";
import SafetyPage from "./pages/SafetyPage";
import TrainingPage from "./pages/TrainingPage";
import RiskCommunicationPage from "./pages/RiskCommunicationPage";
import InfluencersPage from "./pages/InfluencersPage";
import CitizensPage from "./pages/CitizensPage";
import AboutPage from "./pages/AboutPage.tsx";
import SubmitPage from "./pages/SubmitPage";
import BreakingNewsPage from "./pages/BreakingNewsPage";
import AIWritingToolsPage from "./pages/Digital-Tools/AIWritingToolsPage";
import MediaCreationToolsPage from "./pages/Digital-Tools/MediaCreationToolsPage";
import ResearchDiscoveryToolsPage from "./pages/Digital-Tools/ResearchDiscoveryToolsPage";
import VerificationSafetyToolsPage from "./pages/Digital-Tools/VerificationSafetyToolsPage";
import AutomationProductivityToolsPage from "./pages/Digital-Tools/AutomationProductivityToolsPage";
import TechnicalToolsPage from "./pages/Digital-Tools/TechnicalToolsPage";
import ImageVerificationPage from "./pages/Verification-Tools/ImageVerificationPage";
import VideoAnalysisPage from "./pages/Verification-Tools/VideoAnalysisPage";
import GeolocationToolsPage from "./pages/Verification-Tools/GeolocationToolsPage";
import AccountVerificationPage from "./pages/Verification-Tools/AccountVerificationPage";
import FactCheckDatabasesPage from "./pages/Verification-Tools/FactCheckDatabasesPage";
import AIDetectionPage from "./pages/Verification-Tools/AIDetectionPage";
import SiteClassificationPage from "./pages/SiteClassificationPage";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">      
      <Navigation />
      <Breadcrumbs />
      <main className="flex-1">
        <Switch>
          <Route path="/">
            <CrisisReportingPage />
          </Route>
          <Route path="/crisis-reporting">
            <CrisisReportingPage />
          </Route>
          <Route path="/breaking-news">
            <BreakingNewsPage />
          </Route>
          <Route path="/verification">
            <VerificationPage />
          </Route>
          {/* Verification Tool Pages */}
          <Route path="/verification/image-verification">
            <ImageVerificationPage />
          </Route>
          <Route path="/verification/video-analysis">
            <VideoAnalysisPage />
          </Route>
          <Route path="/verification/geolocation-tools">
            <GeolocationToolsPage />
          </Route>
          <Route path="/verification/account-verification">
            <AccountVerificationPage />
          </Route>
          <Route path="/verification/fact-check-databases">
            <FactCheckDatabasesPage />
          </Route>
          <Route path="/verification/ai-detection">
            <AIDetectionPage />
          </Route>
          <Route path="/tools">
            <ToolsPage />
          </Route>
          {/* Tool Category Pages - New Routes from Navigation */}
          <Route path="/ai-writing-tools">
            <AIWritingToolsPage />
          </Route>
          <Route path="/verification-safety-tools">
            <VerificationSafetyToolsPage />
          </Route>
          <Route path="/media-creation-tools">
            <MediaCreationToolsPage />
          </Route>
          <Route path="/automation-productivity-tools">
            <AutomationProductivityToolsPage />
          </Route>
          <Route path="/research-discovery-tools">
            <ResearchDiscoveryToolsPage />
          </Route>
          <Route path="/technical-tools">
            <TechnicalToolsPage />
          </Route>
          <Route path="/data-maps">
            <DataMapsPage />
          </Route>
          <Route path="/safety">
            <SafetyPage />
          </Route>
          <Route path="/training">
            <TrainingPage />
          </Route>
          <Route path="/risk-communication">
            <RiskCommunicationPage />
          </Route>
          <Route path="/influencers">
            <InfluencersPage />
          </Route>
          <Route path="/citizens">
            <CitizensPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/submit">
            <SubmitPage />
          </Route>
          <Route path="/site-classification">
            <SiteClassificationPage />
          </Route>
        </Switch>
      </main>
      <Footer />
      <BackToTop />
      <QuickAccess />
    </div>
  );
}
