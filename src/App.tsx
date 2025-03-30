import { useState } from "react";
import "./App.css";
import Sidebar from "./component/Sidebar";
import Explorer from "./component/Explorer";
import Content from "./component/Content";

function App() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="flex bg-slate-900 h-screen text-teal-50 overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Explorer activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 overflow-auto">
        <Content activeTab={activeTab} />
      </div>
    </div>
  );
}

export default App;
