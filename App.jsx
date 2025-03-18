import logo from "./images/logo.png";
import { FaSearch } from "react-icons/fa";
import {useState} from "react";

export default function MyApp() {
  return (
  <>
  <div className="header">
   <Header />
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
              backgroundColor: index === 3 ? "#1f1f1d" : "transparent", marginleft: "20px"
            }}
          >
            {item}
            {index === 3 && <FaSearch className="searchicon" size={20} color="white" /> }
          </h2>
        ))}
        
    </>
  );
}



