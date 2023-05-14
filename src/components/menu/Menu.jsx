import "./menu.scss"

const Menu = ({ open, setOpen }) => {
  return (
    <>
      {
        <div className={open ? "menu activemenu" : "menu"}>
          <i className="fa-solid fa-xmark " onClick={() => setOpen(!open)}></i>
          <img src="/imgs/mee.png" alt="" />
          <ul>
            <li><a href="#intro" onClick={() => setOpen(!open)}>Home</a></li>
            <li><a href="#projects" onClick={() => setOpen(!open)}>Projects</a></li>
            <li><a href="#about" onClick={() => setOpen(!open)}>About me</a></li>
            <li><a href="#skills" onClick={() => setOpen(!open)}>skills</a></li>
            <li><a href="#contact" onClick={() => setOpen(!open)}>contact</a></li>
            <li><a href="#" onClick={() => setOpen(!open)}>Blog</a></li>
          </ul>
        </div>}
    </>
  )
}

export default Menu