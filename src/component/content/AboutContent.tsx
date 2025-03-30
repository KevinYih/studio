import React from "react";

import { motion } from "framer-motion";

const AboutContent: React.FC = () => {
  return (
    <div className=" p-6 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-gray-800 rounded-lg p-6">
        <div className="text-gray-300">
          <h2 className=" text-2xl font-bold mb-4 text-gray-300">About Me</h2>
          <p className="mb-6">I'm a full-stack developer with expertise in web technologies. With several years of experience in building scalable applications, I focus on creating efficient, maintainable, and user-friendly solutions.</p>
          <h3 className="text-xl font-semibold mb-3 text-gray-300">Experience</h3>
          <div className="space-y-4 mb-6">
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-300">Senior Full Stack Developer</h4>
              <p className="">Tech Company • 2020 - Present</p>
              <p className=" mt-2">Leading development of enterprise applications using React, Node.js, and cloud technologies.</p>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-300">Full Stack Developer</h4>
              <p className="">Digital Agency • 2018 - 2020</p>
              <p className=" mt-2">Developed and maintained multiple client projects using modern web technologies.</p>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-300">Education</h3>
          <div className="space-y-4 mb-6">
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-300">Master of Science in Computer Science</h4>
              <p className="text-gray-300">2025 - Present</p>
              <p className="mt-2 text-gray-300">Georgia Institute of Technology</p>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-300">Master of Science in Applied Computer Science</h4>
              <p>2023 - 2024</p>
              <p className="mt-2 text-gray-300">Fairleigh Dickinson University</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutContent;
