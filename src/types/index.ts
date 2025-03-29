export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
}

export interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
    icon?: string;
  }[];
}

export interface FileItem {
  name: string;
  type: "file" | "folder";
  children?: FileItem[];
  content?: string;
  language?: string;
  isOpen?: boolean;
}
