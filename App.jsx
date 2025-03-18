import logo from "./images/logo.png";
import { FaSearch } from "react-icons/fa";
import { SocialIcon } from 'react-social-icons';
import {useState} from "react";

const name = "Islam Achrouf" ;
const desc = "Information Systems & Software Engineering";
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

  </>
  );
}
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




