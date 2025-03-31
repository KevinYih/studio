import React from "react";
import techIcons from "../../data/techIcons";
import { motion } from "framer-motion";

const SkillsContent: React.FC = () => {
  const frontendSkills = ["HTML5", "CSS3", "React", "Next.js", "JavaScript", "ES6+", "TypeScript", "Tailwind CSS", "Material-UI"];

  const backendSkills = ["Java", "Spring Boot", "MySQL", "PostgreSQL", "MongoDB", "Hibernate", "Redis"];

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
        {/* <h3 className="text-xl font-semibold mb-3">Certificate</h3>
        <div className="space-y-4 mb-6">
          <div className="border-l-2 border-blue-500 pl-5">
            <motion.div whileHover={{ scale: 1.03 }}>
              <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=0213A9A0D74F7C60FDFB7C863B92C5AE12DF4CBB6DA9B5178919DB2E651E5DA1" target="_blank" rel="noopener noreferrer">
                <p className=" mt-2 flex gap-2 hover:text-blue-500">
                  <img src={techIcons[0].icon} alt={techIcons[0].name} className="w-5 h-5" />
                  <span>Oracle Database SQL Certified Associate</span>
                </p>
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }}>
              <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=0213A9A0D74F7C60FDFB7C863B92C5AE12DF4CBB6DA9B5178919DB2E651E5DA1" target="_blank" rel="noopener noreferrer">
                <p className=" mt-2 flex gap-2 hover:text-blue-500">
                  <img src={techIcons[0].icon} alt={techIcons[0].name} className="w-5 h-5" />
                  <span>Oracle Database SQL Certified Associate</span>
                </p>
              </a>
            </motion.div>
          </div>
        </div> */}

        {/* Backend */}
        <h3 className="text-xl font-semibold mb-3">Backend</h3>
        {renderIcons(backendSkills)}
        <h3 className="text-xl font-semibold mb-3">Certificate</h3>
        <div className="space-y-4 mb-6">
          <div className="border-l-2 border-blue-500 pl-5">
            <motion.div whileHover={{ scale: 1.02 }}>
              <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=7D2344A92BE16AFBFFBCF4A770CBBC7D1C1A857F63A3674B2F18EC63C9B63FE5" target="_blank" rel="noopener noreferrer">
                <p className=" mt-2 flex gap-2 hover:text-blue-500">
                  <img src={techIcons[0].icon} alt={techIcons[0].name} className="w-5 h-5" />
                  <span>Oracle Certified Associate, Java SE 8 Programmer</span>
                </p>
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=0213A9A0D74F7C60FDFB7C863B92C5AE12DF4CBB6DA9B5178919DB2E651E5DA1" target="_blank" rel="noopener noreferrer">
                <p className=" mt-2 flex gap-2 hover:text-blue-500">
                  <img src={techIcons[2].icon} alt={techIcons[2].name} className="w-5 h-5" />
                  <span>Oracle Database SQL Certified Associate</span>
                </p>
              </a>
            </motion.div>
          </div>
        </div>
        {/* DevOps */}
        <h3 className="text-xl font-semibold mb-3">DevOps</h3>
        {renderIcons(devopsSkills)}
        <h3 className="text-xl font-semibold mb-3">Certificate</h3>
        <div className="space-y-4 mb-6">
          <div className="border-l-2 border-blue-500 pl-5">
            <motion.div whileHover={{ scale: 1.02 }}>
              <a href="https://www.credly.com/badges/9f235c4e-f69b-43bb-a471-077529cdf959/linked_in_profile" target="_blank" rel="noopener noreferrer">
                <p className=" mt-2 flex gap-2 hover:text-blue-500">
                  <img src={techIcons[1].icon} alt={techIcons[1].name} className="w-5 h-5" />
                  <span>AWS Certified Solutions Architect – Associate</span>
                </p>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsContent;
