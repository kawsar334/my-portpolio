import { useEffect, useState } from "react";
import { frontend, fullstack, mobilePortfolio } from "../../Data";
import ProjectList from "./ProjectList";
import "./projects.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {
    const [data, setData] = useState([])
    const [selected, setSelected] = useState("frontend")
    useEffect(() => {
        AOS.init();
    }, [])

    const type = [
        {type:"frontend"},
        {type:"Fullstack"},
        {type:"React Native"}
    ]
    

    useEffect(()=>{
        switch (selected) {
            case "frontend":
                setData(frontend);
                break;
            case "Fullstack":
                setData(fullstack);
                break;
            case "React Native":
                setData(mobilePortfolio);
                break;
            default:
                setData(frontend)
        }
    },[selected])
  return (
    <div className="projects" id="projects">
        <div className="projectTop">
              <ul data-aos="fade-left">
               {type.map((i)=>(
                   <ProjectList item={i} active={selected === i.type} setSelected={setSelected} key={i.type}/>
               ))}
            </ul>
        </div>
        <div className="projectbottom">
           {data.map((item)=>(

               <div className="pitem" data-aos="fade-right">

            <img src={item.img} alt="Loading..." />
            <div className="desc">
                <a href="#" className="title">{item.title}</a>
                <div className="links">
                    <a href={item.demo}>Demo</a>
                     <a href={item.github}>Code</a>
                </div>
            </div>
         </div>
               )) }

        </div>
    </div>
  )
}

export default Projects