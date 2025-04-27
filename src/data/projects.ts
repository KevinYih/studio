import { Project } from "../types";
import filmportPoster from "../assets/filmportPoster.jpg";
import yihhomes from "../assets/yihhomes.jpg";

export const projects: Project[] = [
  {
    title: "Film Port",
    description: "A modern movie browsing application built using the TMDB API. This React-based project allows users to explore movies, view actor details.",
    technologies: ["React", "Tailwind", "Router", "Redux"],
    githubUrl: "https://github.com/KevinYih/FilmPortRedux",
    liveUrl: "https://filmport.netlify.app/",
    image: filmportPoster,
  },
  {
    title: "Find The Perfect Rental",
    description: "Property Rental Website in Vancouver.",
    technologies: ["Next.js", "Javascript", "MongoDB", "Next Auth & Google", "Cloudinary"],
    githubUrl: "https://github.com/KevinYih/yih-homes-nextjs",
    liveUrl: "https://yihhomes.netlify.app/",
    image: yihhomes,
  },
  {
    title: "AI Image Generator",
    description: "An AI-powered image generation tool using machine learning models and real-time processing",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    githubUrl: "https://github.com/yourusername/ai-image-gen",
    liveUrl: "https://ai-image-gen-demo.com",
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3",
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory management and secure payment processing",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
  },
  {
    title: "Task Management System",
    description: "A collaborative task management system with real-time updates and team collaboration features",
    technologies: ["TypeScript", "Next.js", "PostgreSQL", "Prisma"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager-demo.com",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
  },
  {
    title: "AI Image Generator",
    description: "An AI-powered image generation tool using machine learning models and real-time processing",
    technologies: ["Java", "TensorFlow", "React", "FastAPI"],
    githubUrl: "https://github.com/yourusername/ai-image-gen",
    liveUrl: "https://ai-image-gen-demo.com",
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3",
  },
];
