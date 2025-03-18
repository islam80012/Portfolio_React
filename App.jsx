import logo from "./images/logo.png";
import { FaSearch } from "react-icons/fa";
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
    <MyBtn />
 </div>
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
  { id: 1, name: "GitHub", url: "https://github.com/islam80012" },
  { id: 2, name: "Linkedin", url: "www.linkedin.com/in/islam-achrouf-8902742b9" },
  { id: 3, name: "Instagram", url: "https://www.instagram.com/achroufislam" },
  { id: 4, name: "Email", url: "mailto:islamachrouf20042gmail.com" },
];
function MyBtn(){
  function MyLinks(){
    return(
      <ul>
        {mylinks.map((link) => (
          <li 
          key = {link.id}> <a href={link.url} target="_blank" rel="noreferrer">{link}</a> 
          </li>
        ))}
      </ul>
    );
  }
  return(
    <button  className="btn"
    style={{
      backgroundColor: "transparent",
      color: "#ffc668",
      padding: "15px",
      borderRadius: "5px",
      cursor: "pointer",
      boxShadow: "0 0 4px #ffc668",
      }}
      Onlick= {MyLinks()}>
        Contact Me </button>
  );
}




