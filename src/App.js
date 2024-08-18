// src/App.js
import React from "react";
// import Navbar from "./Component/nav.js";
import Header from "./Component/header.js"; 
import About from "./Component/about.js";
import Projects from "./Component/projects.js";

function App() {
  return (
    <div>
      <Header />
      {/* Other components or content */}
      <About />
      <Projects/>
    </div>
  );
}

export default App;
