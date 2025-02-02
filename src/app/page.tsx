import ProjectsCarouselSection from "@/components/custom/projects-carousel/ProjectsCarouselSection";
import MeSection from "@/components/custom/me-section/MeSection";
import Layout from "@/components/custom/layout/LayoutSection";
import { LayoutSections } from "@/lib/layout";
import ExperienceSection from "@/components/custom/experience/ExperienceSection";

export default function Home() {
  return (
    <div className="h-screen max-h-screen snap-y snap-mandatory overflow-y-auto">
      <main className="flex flex-col items-center sm:items-start">
        <Layout
          id={LayoutSections.Me}
          sectionBelowId={LayoutSections.WorkingExperience}
        >
          <MeSection />
        </Layout>
        <Layout
          id={LayoutSections.WorkingExperience}
          sectionAboveId={LayoutSections.Me}
          sectionBelowId={LayoutSections.Projects}
        >
          <ExperienceSection />
        </Layout>
        <Layout
          id={LayoutSections.Projects}
          sectionAboveId={LayoutSections.WorkingExperience}
        >
          <ProjectsCarouselSection />
        </Layout>
      </main>
    </div>
  );
}
