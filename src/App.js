// src/App.js
import React from "react";
// import Navbar from "./Component/nav.js";
import Header from "./Component/header.js"; 
import About from "./Component/about.js";
import Projects from "./Component/projects.js";
import Contact from "./Component/contact(not used).js";
import Logocloud from "./Component/logocloud.js";
import Footer from "./Component/footer.js";
import Contact2 from "./Component/contact2.js";

function App() {
  return (
    <div>
      <Header />
      {/* Other components or content */}
      <About />
      <Projects/>
      <Logocloud/>
      {/* <Contact/> */}
      <Contact2 /> 

      <Footer/>
    </div>
  );
}

export default App;
