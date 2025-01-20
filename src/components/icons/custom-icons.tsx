import { cn } from "@/lib/utils";
import { siInstagram } from "simple-icons";
export const InstagramIcon = ({ className }: { className: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    className={cn("fill-current", className)}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={siInstagram.path} />
  </svg>
);
