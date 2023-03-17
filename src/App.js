
import './App.scss';

import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Foote';
import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  const [open, setOpen] = useState(true)
  return (
    <div className='app'>
   <Navbar open={open} setOpen={setOpen}/>
   <Menu open={open} setOpen={setOpen} />
   <div class="container">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contact />    
   </div>
   <Footer />
    </div>
  );
}

export default App;
