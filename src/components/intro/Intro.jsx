import Social from "../soical/Social"
import "./intro.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Typed from "react-typed"

const Intro = () => {

    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <div className="intro" id="intro">
         
          <Social />
          <div className="intromain">
              <h1 data-aos="fade-left">Hi i'm</h1>
              <h2 data-aos="fade-left">kawsar firoz</h2>
            <h3 className="type">
          <Typed
            strings={[
              "I'm a Full Stack web Developer",
              "React.js & Node js",
              "Mongo db",

            ]}
            typeSpeed={150}
            backSpeed={100}
            loop
          />
               </h3>
              <p data-aos="fade-right">A self-motivated and enthusiastic web developer. To gain confidence and fame using my potential in
               the field of web development and express my innovative creative skills for self and company growth. I always like to learn new things and have experience with new stuff.</p>
              <a href="#projects" data-aos="fade-left">View Work <i className="fa-solid fa-chevron-down"></i></a>
          </div>

    </div>
  )
}

export default Intro