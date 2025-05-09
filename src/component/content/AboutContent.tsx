import React from "react";

import { motion } from "framer-motion";
import KevinYihImage from "../../assets/KevinYih.jpg";
import { Github, Linkedin, Mail } from "lucide-react";

const AboutContent: React.FC = () => {
  return (
    <div className=" p-6 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-explorerbg dark:bg-explorerbgd text-gray-300 dark:text-gray-700 rounded-lg p-6">
        <h2 className=" text-2xl font-bold mb-4 ">About Me</h2>

        <div className="flex justify-center mb-9">
          <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md ">
            <img src={KevinYihImage} alt="KevinYih" className="w-full h-full object-cover object-center" />
          </div>
          <div>
            <div className="pl-8 pt-3">
              <a href="https://github.com/KevinYih" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-500">
                <Github className="m-2" size={25} />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/kevin-kun-yi/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-500">
                <Linkedin className="m-2" size={25} />
                LinkedIn
              </a>
              <a href="mailto:kevinyih2022@gmail.com" className="flex items-center hover:text-blue-500">
                <Mail className="m-2" size={25} />
                Email
              </a>
            </div>
          </div>
        </div>

        <p className="mb-6">I'm a full-stack developer with expertise in web technologies. </p>

        <h3 className="text-xl font-semibold mb-3 ">Experience</h3>
        <div className="space-y-4 mb-6">
          <div className="border-l-2 border-blue-500 pl-4">
            <h4 className="font-semibold ">Full Stack Developer</h4>
            <p className="">Tech Company • 2024 - Present</p>
            <p className=" mt-2">Development of enterprise applications using React, Java, and cloud technologies.</p>
          </div>
          <div className="border-l-2 border-blue-500 pl-4">
            <h4 className="font-semibold ">Full Stack Developer Intern</h4>
            <p className="">Digital Agency • 2022 - 2023</p>
            <p className=" mt-2">Developed and maintained multiple client projects using modern web technologies.</p>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3 ">Education</h3>
        <div className="space-y-4 mb-6">
          <div className="border-l-2 border-blue-500 pl-4">
            <h4 className="font-semibold ">Master of Science in Computer Science</h4>
            <p className="">2025 - Present</p>
            <p className="mt-2 ">Georgia Institute of Technology</p>
          </div>
          <div className="border-l-2 border-blue-500 pl-4">
            <h4 className="font-semibold ">Master of Science in Applied Computer Science</h4>
            <p>2023 - 2024</p>
            <p className="mt-2 ">Fairleigh Dickinson University</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutContent;
