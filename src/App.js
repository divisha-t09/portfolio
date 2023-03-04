import React from "react";
// import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Project from "./components/Project/project";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;