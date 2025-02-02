import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/projects";

type Props = {
  autoplay: boolean;
};

export default function ProjectsCarousel({ autoplay }: Props) {
  const [isHovering, setIsHovering] = useState(false);
  const onMouseEnter = () => {
    setIsHovering(true);
  };
  const onMouseLeave = () => {
    setTimeout(() => {
      setIsHovering(false);
    }, 300);
  };
  return (
    <Carousel
      className="w-full"
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 2000,
          active: autoplay && !isHovering,
        }),
      ]}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem
            key={project.id}
            className="mx-auto basis-1/3 pl-2 md:pl-4"
          >
            <div className="h-full">
              <ProjectCard project={project} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <CarouselNext onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
    </Carousel>
  );
}
