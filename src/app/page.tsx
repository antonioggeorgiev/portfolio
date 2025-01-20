import ProjectsCarousel from "@/components/custom/projects-carousel/index";
import MeSection from "@/components/custom/me-section/index";
import LayoutSection from "@/components/custom/layout/LayoutSection";
import { LayoutSections } from "@/lib/layout";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center gap-16 sm:items-start">
        <LayoutSection
          id={LayoutSections.Me}
          sectionBelowId={LayoutSections.Projects}
        >
          <MeSection />
        </LayoutSection>
        <LayoutSection
          id={LayoutSections.Projects}
          sectionAboveId={LayoutSections.Me}
        >
          <ProjectsCarousel />
        </LayoutSection>
      </main>
    </div>
  );
}
