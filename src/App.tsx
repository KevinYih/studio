import { useState } from "react";

import Sidebar from "./component/Sidebar";
import Explorer from "./component/Explorer";
import Content from "./component/Content";
import Topbar from "./component/Topbar";

function App() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <>
      <Topbar />
      <div className="flex bg-contentbg dark:bg-contentbgd h-screen text-teal-50 overflow-hidden pt-8">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <Explorer activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 overflow-auto">
          <Content activeTab={activeTab} />
        </div>
      </div>
    </>
  );
}

export default App;
