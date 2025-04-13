import React from "react";
import { Github, TvMinimalPlay } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import filmportPoster from "../../assets/filmportPoster.jpg";

const ProjectsContent: React.FC = () => {
  return (
    <div className="min-h-screen  text-slate-400 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8  ">
        {projects.map((project, index) => (
          <motion.div key={index} whileHover={{ scale: 1.02 }} className="bg-explorerbg dark:bg-explorerbgd flex flex-col rounded-lg overflow-hidden shadow-md text-slate-400 dark:text-slate-600 hover:text-slate-200 dark:hover:text-slate-800">
            {!project.image ? <img src={filmportPoster} alt="filmport" className="w-full h-55 object-cover" /> : <img src={project.image} alt={project.title} className="w-full h-55 object-cover" />}
            <div className="p-4 flex flex-col flex-1 min-w-0">
              <h3 className="text-lg font-semibold break-words mb-2">{project.title}</h3>
              <p className="text-sm break-words mb-3 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs bg-sidebarbg dark:bg-sidebarbgd px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-400">
                    <Github className="mr-1" size={20} />
                    <span className="text-sm hidden sm:inline">GitHub</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-400">
                    <TvMinimalPlay className="mr-1" size={20} />
                    <span className="text-sm hidden sm:inline">Live</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsContent;
