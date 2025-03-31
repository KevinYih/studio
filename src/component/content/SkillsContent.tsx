import React from "react";
import techIcons from "../../data/techIcons";
import { motion } from "framer-motion";

const SkillsContent: React.FC = () => {
  const frontendSkills = ["HTML5", "CSS3", "React", "Next.js", "JavaScript", "ES6+", "TypeScript", "Tailwind CSS", "Material-UI"];

  const backendSkills = ["Java", "Spring Boot", "MySQL", "PostgreSQL", "MongoDB", "Hibernate", "MyBatis", "Redis"];

  const devopsSkills = ["AWS", "Docker", "Kubernetes", "CI/CD"];

  const renderIcons = (skills: string[]) => (
    <div className="flex flex-wrap gap-3 mb-6">
      {techIcons
        .filter((tech) => skills.includes(tech.name))
        .map((tech) => (
          <div key={tech.name} className="flex items-center gap-2 bg-contentbg dark:bg-contentbgd text-white px-3 py-1 rounded shadow">
            <img src={tech.icon} alt={tech.name} className="w-5 h-5" title={tech.name} />
            <span className="text-sm text-slate-300 dark:text-slate-700">{tech.name}</span>
          </div>
        ))}
    </div>
  );

  return (
    <div className="text-slate-300 dark:text-slate-700 p-6 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-explorerbg dark:bg-explorerbgd rounded-lg p-6">
        <h2 className=" text-2xl font-bold mb-4">Skills</h2>
        <p className="mb-6">I'm a full-stack developer with expertise in modern web technologies. With several years of experience in building scalable applications, I focus on creating efficient, maintainable, and user-friendly solutions.</p>

        {/* Frontend */}
        <h3 className="text-xl font-semibold mb-3">Frontend</h3>
        {renderIcons(frontendSkills)}
        <h3 className="text-xl font-semibold mb-3">Certificate</h3>
        <div className="space-y-4 mb-6">
          <div className="border-l-2 border-blue-500 pl-4">
            <p className=" mt-2">certificate 1.</p>
            <p className=" mt-2">certificate 2.</p>
          </div>
        </div>

        {/* Backend */}
        <h3 className="text-xl font-semibold mb-3">Backend</h3>
        {renderIcons(backendSkills)}
        <h3 className="text-xl font-semibold mb-3">Certificate</h3>
        <div className="space-y-4 mb-6">
          <div className="border-l-2 border-blue-500 pl-4">
            <p className="mt-2">certificate 1.</p>
            <p className="mt-2">certificate 2.</p>
          </div>
        </div>
        {/* DevOps */}
        <h3 className="text-xl font-semibold mb-3">DevOps</h3>
        {renderIcons(devopsSkills)}
        <h3 className="text-xl font-semibold mb-3">Certificate</h3>
        <div className="space-y-4 mb-6">
          <div className="border-l-2 border-blue-500 pl-4">
            <p className=" mt-2">certificate 1.</p>
            <p className=" mt-2">certificate 2.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsContent;
