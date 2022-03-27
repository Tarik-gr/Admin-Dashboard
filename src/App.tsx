import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div style={{ flex: 4, backgroundColor: "red" }}>doother pages</div>
      </div>
    </div>
  );
}

export default App;
