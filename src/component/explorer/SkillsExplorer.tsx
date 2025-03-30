// import React from "react";

// import  { useState } from "react";
// import { Folder, FolderOpen } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const FolderItem = ({ label, children, active, onClick }) => {
//   const [open, setOpen] = useState(false);

//   const toggle = () => {
//     setOpen(!open);
//     onClick?.();
//   };

//   return (
//     <div>
//       <button
//         onClick={toggle}
//         className={`flex items-center px-2 py-1 w-full text-left hover:bg-slate-700 ${
//           active ? "bg-slate-600 text-white" : "text-slate-300"
//         }`}
//       >
//         {open ? <FolderOpen size={16} className="mr-2" /> : <Folder size={16} className="mr-2" />}
//         {label}
//       </button>

//       <AnimatePresence initial={false}>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="ml-6"
//           >
//             {children}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const SkillsExplorer: React.FC = () => {
//   const [activeTab, setActiveTab] = useState("Projects");

//   return (
//     <div className="w-64 bg-slate-800 text-sm p-3 border-r border-slate-700 overflow-auto">
//       <div className="text-xs text-gray-400 font-bold mb-2">EXPLORER</div>
//       <div className="text-xs mb-1 text-gray-300">KevinYih</div>

//       <div className="ml-1 space-y-1">
//         <FolderItem label="AboutMe">
//           <div className="text-slate-400 pl-6 py-0.5">Experience</div>
//           <div className="text-slate-400 pl-6 py-0.5">Education</div>
//           <div className="text-slate-400 pl-6 py-0.5">Connect</div>
//         </FolderItem>

//         <FolderItem
//           label="Projects"
//           active={activeTab === "Projects"}
//           onClick={() => setActiveTab("Projects")}
//         >
//           <div className="text-slate-400 pl-6 py-0.5">project1</div>
//           <div className="text-slate-400 pl-6 py-0.5">project2</div>
//         </FolderItem>

//         <FolderItem label="Skills">
//           <div className="text-slate-400 pl-6 py-0.5">frontend</div>
//           <div className="text-slate-400 pl-6 py-0.5">backend</div>
//           <div className="text-slate-400 pl-6 py-0.5">devops</div>
//         </FolderItem>

//         <FolderItem label="Contact">
//           <div className="text-slate-400 pl-6 py-0.5">email</div>
//         </FolderItem>
//       </div>
//     </div>
//   );

// };

// export default SkillsExplorer;
