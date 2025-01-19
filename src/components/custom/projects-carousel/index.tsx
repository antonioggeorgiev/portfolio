"use client";

import { useState } from "react";
import ProjectsCarousel from "./ProjectsCarousel";
import ProjectsAutoplaySwitch from "./ProjectsAutoplaySwitch";

export default function ProjectsCarouselSection() {
  const [autoplay, setAutoplay] = useState(true);

  return (
    <section className="w-full">
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Projects</h1>
          <ProjectsAutoplaySwitch
            autoplay={autoplay}
            setAutoplay={setAutoplay}
          />
        </div>
      </div>
      <ProjectsCarousel autoplay={autoplay} />
    </section>
  );
}
