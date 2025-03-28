import { useState } from "react";
import "./App.css";
import Sidebar from "./component/Sidebar";

function App() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="bg-slate-800 h-screen text-teal-50">
      <Sidebar />
    </div>
  );
}

export default App;
