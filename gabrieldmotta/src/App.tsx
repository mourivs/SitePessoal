import { HomeSection } from "./components/sections/home/HomeSection";
import { MoreThanDevSection } from "./components/sections/more-than-dev/MoreThanDevSection";
import { BioSection } from "./components/sections/bio/BioSection";
import { SkillsSection } from "./components/sections/skills/SkillsSection";
import { WorkSection } from "./components/sections/work/WorkSection";
import { ServicesSection } from "./components/sections/services/ServicesSection";
import { PartnersSection } from "./components/sections/partners/PartnersSection";
import { LanguageSwitcher } from "./components/LanguageSwitcher/LanguageSwitcher";
import "./styles/globals.css";

function App() {
  return (
    <>
      <LanguageSwitcher />
      <HomeSection />
      <MoreThanDevSection />
      <BioSection />
      <SkillsSection />
      <WorkSection />
      <ServicesSection />
      <PartnersSection />
    </>
  );
}

export default App;
