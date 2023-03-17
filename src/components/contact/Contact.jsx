import "./contact.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Contact = () => {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <div className="contact" id="contact">
        <div className="contactwrapper">
              <div className="contacttop" data-aos="fade-left">
            <h1>Contact</h1>
            <p>Submit the form below or shoot me an email- myself@gmail.com</p>
        </div>
              <form className="contactbottom" data-aos="fade-right">
            <input type="text" name="name" placeholder="Name" required />
            <input type="text" name="name" placeholder="Email" required />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Let's collaborate</button>
        </form>

        </div>
    </div>
  )
}

export default Contact