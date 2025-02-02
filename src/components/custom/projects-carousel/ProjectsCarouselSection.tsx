"use client";

import { useState } from "react";
import ProjectsCarousel from "./ProjectsCarousel";
import ProjectsAutoplaySwitch from "./ProjectsAutoplaySwitch";

export default function ProjectsCarouselSection() {
  const [autoplay, setAutoplay] = useState(true);

  return (
    <div
      id="projects-section"
      className="flex w-full flex-col space-y-6 px-8 py-16"
    >
      <div className="flex w-full flex-col items-center">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">
            Showcase of my personal and professional projects.
          </p>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <ProjectsAutoplaySwitch autoplay={autoplay} setAutoplay={setAutoplay} />
      </div>
      <div className="w-full">
        <ProjectsCarousel autoplay={autoplay} />
      </div>
    </div>
  );
}
