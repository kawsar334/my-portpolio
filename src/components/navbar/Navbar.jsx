import { useEffect, useState } from "react";
import "./navbar.scss";

const Navbar = ({ open, setOpen }) => {
    const [active, setActive] = useState(false);

    const isScroll = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isScroll);

        return () => {
            window.removeEventListener('scroll', isScroll)
        }
    }, [])
    return (
        <div className={active ? "active navbar" : "navbar"}>
            <div className="navWrapper">
                <a href="/" className="logo">kawsar firoz</a>
                <div className="navright">
                    <a href="/imgs/kf.pdf" target="_blank">Resume</a>
                    {!open && <i class="fa-solid fa-bars" onClick={() => setOpen(!open)}></i>}
                </div>
            </div>
        </div>
    )
}

export default Navbar