import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

import { ChevronUp } from "lucide-react";

export enum ChevronSectionDirection {
  Down = "down",
  Up = "up",
  Left = "left",
  Right = "right",
}

export const ChevronSectionDirectionIcon = {
  [ChevronSectionDirection.Down]: ChevronDown,
  [ChevronSectionDirection.Up]: ChevronUp,
  [ChevronSectionDirection.Left]: ChevronLeft,
  [ChevronSectionDirection.Right]: ChevronRight,
};

export enum LayoutSections {
  Me = "me-section",
  WorkingExperience = "working-experience-section",
  Projects = "projects-section",
}
