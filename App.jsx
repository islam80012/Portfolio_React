import logo from "./images/logo.png";
import { FaSearch } from "react-icons/fa";
import { SocialIcon } from 'react-social-icons';
import {useState} from "react";
import { FaPython, FaJs, FaJava, FaReact, FaHtml5, FaCss3Alt ,FaGithub} from "react-icons/fa";
import { SiC, SiMysql } from "react-icons/si"; 

const name = "Islam Achrouf" ;
const desc = "Information Systems & Software Engineering";

//===================== Main Component ===================== 

export default function MyApp() {
  return (
  <>
   <div className="header">
   <Header />
   </div>
   <div className="container">
      <p className="desc"  style={{ whiteSpace: "pre-line" }}>
        I'M <span>{name}</span> {"\n"}
        {desc} {"\n"}
       </p> 
    </div>
      <MyBtn />
      <div className="About">
      <h2>About Me</h2>
      <p>Hi, I am {name}, a 20 years old Computer Science student specializing in Software Engineering. I have some
        experience in graphical user interfaces and front-end development , Basically i speak 3 languages : Arabic, French and English .</p>
    </div>
    <div className="container">
      <h2>My Skills</h2>
      <div className="MySkills">
          <TechIcons />
      </div>  
    </div>
   </>
  );
}
// ===================== Header function =====================
const menuItems = ["About", "Portfolio", "Contact","Search"];

function Header(){
  const [hoveredId, setHoveredId] = useState(null);
  return (
    <>
  <img className='mylogo' src={logo} alt="logo of Islam" />
   {menuItems.map((item, index) => (
          <h2 
            key={index} 
            onMouseEnter={() => setHoveredId(index)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              color: hoveredId === index && index !== 3 ? "#ffc668" : "WHITE",
              padding : "10px",borderRadius: "8px",
              transition: "all 0.3s ease-in-out",
              backgroundColor: index === 3 ? "#1f1f1d" : "transparent", marginLeft: "20px",
              boxShadow:  hoveredId === index && index === 3 ? " 0 0 5px #ffc668" : "none",
            }}
          >
            {item}
            {index === 3 && <FaSearch className="searchicon" size={20} color="white" /> }
          </h2>
        ))}
        
    </>
  );
}
// ===================== Contact me function =====================
const mylinks = [
  { id: 1, name: "Github", url: "https://github.com/islam80012" },
  { id: 2, name: "Linkedin", url: "https://www.linkedin.com/in/islam-achrouf-8902742b9" },
  { id: 3, name: "Instagram", url: "https://www.instagram.com/achroufislam" },
  { id: 4, name: "Email", url: "mailto:islamachrouf2004@gmail.com" },
];
function MyBtn() {
  const [selectedId, setSelectedId] = useState(null); // Déclaration de l'état
  const [setActive, setIsActive] = useState(null); // Déclaration de l'état
  const div = document.querySelector(".contactme");

  return (
    <>
    <div className={ setActive ? "active" : "inactive"}>
      <button
        className ="btn"       
        onClick={() => {
          setSelectedId((prev) => (prev === null ? 1 : null)); // Active/Désactive l'affichage
          setIsActive(!setActive);
        }}
      >
        Contact Me
      </button>
  
      {/* Affichage des liens si un élément est sélectionné */}
      {selectedId !== null && (
        <div className="links">
          <ul>
            {mylinks.map((link) => (
                <li key={link.id} onClick={() => setSelectedId(link.id)}>
                <SocialIcon className ='socIcons'url={link.url} />             
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
  );
}
// ===================== My skills  function =====================
const icons = [
  { id: 1, component: <FaPython title="Python" color="#3776AB" />, name: "Python" },
  { id: 2, component: <FaJs title="JavaScript" color="#F7DF1E" />, name: "JavaScript" },
  { id: 3, component: <FaJava title="Java" color="#007396" />, name: "Java" },
  { id: 4, component: <FaReact title="React" color="#61DAFB" />, name: "React" },
  { id: 5, component: <FaHtml5 title="HTML5" color="#E34F26" />, name: "HTML5" },
  { id: 6, component: <FaCss3Alt title="CSS3" color="#1572B6" />, name: "CSS3" },
  { id: 7, component: <FaGithub title="GitHub" />, name: "GitHub" },
  { id: 8, component: <SiC title="C Programming" />, name: "C" },
  { id: 9, component: <SiMysql title="SQL" />, name: "SQL" }
];

function TechIcons() {
  return (
    <>
      {icons.map((icon) => (
        <div key={icon.id} className="tech">
          {icon.component}
        </div>
      ))}
  </>
  );
}




