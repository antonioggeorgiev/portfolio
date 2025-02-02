export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: "social-media-analytics",
    title: "Social Media Analytics",
    description:
      "Analytics dashboard for social media managers with AI-powered insights and reporting.",
    technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
  },
  {
    id: "ai-image-generator",
    title: "AI Image Generator",
    description:
      "A full-stack application that generates images using OpenAI's DALL-E API. Features user authentication, image history, and sharing capabilities.",
    technologies: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "Tailwind CSS",
      "Prisma",
    ],
  },
  {
    id: "e-commerce-platform",
    title: "E-commerce Platform",
    description:
      "Modern e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "Stripe", "MongoDB", "Redux"],
  },
  {
    id: "real-time-chat",
    title: "Real-time Chat Application",
    description:
      "Feature-rich chat platform with real-time messaging, file sharing, and end-to-end encryption support.",
    technologies: ["React", "Socket.io", "Express", "Redis", "WebRTC"],
  },
  {
    id: "task-management",
    title: "Task Management System",
    description:
      "Collaborative project management tool with Kanban boards, time tracking, and team collaboration features.",
    technologies: ["Vue.js", "GraphQL", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracking Platform",
    description:
      "Mobile-first fitness application with workout planning, progress tracking, and social features.",
    technologies: ["React Native", "Firebase", "TypeScript", "Redux", "Jest"],
  },
];
