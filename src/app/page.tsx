import ProjectsCarousel from "@/components/custom/projects-carousel/index";
import MeCard from "@/components/custom/me-section/index";
export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center gap-16 sm:items-start">
        <section className="h-screen w-full p-8">
          <MeCard />
        </section>
        <section className="h-screen w-full p-8">
          <ProjectsCarousel />
        </section>
      </main>
    </div>
  );
}
