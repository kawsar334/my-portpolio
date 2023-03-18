import "./about.scss";
import AOS from 'aos';
 import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <div className="about" id="about">
        <div className="aboutwrapper">
        <div className="aboutleft">
                  <img src="/imgs/mee.png" alt="Loading..." data-aos="fade-right" />
        </div>
              <div className="aboutright" data-aos="fade-left">
            
              <h1 className="aboutHeader">About Me</h1>
                  <p className="desc">
                      I am a MERN-Stack WEB Developer. I am working with React, Node.js and MongoDB. I also have experience in developing <b>Static</b> & <b>Dynamic</b> websites using HTML5, CSS3 and JavaScript (ES6). I am a quick learner. I believe in hard work and efficiency.  I always focus on learning new technology. My goal is to become A World-Class Professional Web Developer.Here are a few technologies I've been working with recently
                  </p>
                  <hr />

                  <div className="items">
                      <div className="item">
                          <h3 className="itemheader">Front-end</h3>
                          <p className="itemdesc"> HTML5, css3, Sass, JavaScript(ES6) , React.js, Bootstrap, React-router-dom , context api,</p>
                      </div>
                      <div className="item">
                          <h3 className="itemheader">Back-end</h3>
                          <p className="itemdesc"> Node.js, Express.js, Mongo DB, jwt, bcrypt, </p>
                      </div>
                      <div className="item">
                          <h3 className="itemheader">Tools</h3>
                          <p className="itemdesc">Vs Code, git , Npm & Yearn , Netlify, </p>
                      </div>
                  </div>
        </div>
        </div>
    </div>
  )
}

export default About