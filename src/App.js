// src/App.js
import React from "react";
// import Navbar from "./Component/nav.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Component/header.js"; 
import About from "./Component/about.js";
import Projects from "./Component/projects.js";
// import Contact from "./Component/contact(not used).js";
import Logocloud from "./Component/logocloud.js";
import Footer from "./Component/footer.js";
import Contact2 from "./Component/contact2.js";

function App() {
  return (
    <Router>
      <div>
        {/* <Header />

        {/* Define the routes for different components 
        <Routes>
          <Route path="/" element={<Header/>} />  {/* Default route 
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact2" element={<Contact2/>} /> 
           <Route path="/" element={<Logocloud />} />
          <Route path="/" element={<Footer />} />
        </Routes>
      
          <About/>
          <Projects/>
            <Logocloud />
            <Contact2/>
            <Footer /> */}


      {/* Define the routes for different components */}
      <Header />
      {/* Other components or content */}
      <About />
      <Projects/>
      <Logocloud/>
      {/* <Contact/> */}
      <Contact2 /> 

      <Footer/> 

      </div>
    </Router>
  );
}

export default App;
