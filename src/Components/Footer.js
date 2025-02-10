import React from "react";
import {  Instagram } from "lucide-react";
import backgroundImage from "../media/nightsky.jpg";
function Footer() {
  const footerStyle = {
    //  backgroundColor: "#D4C9AB",
    color: "white",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    
    
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
 
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const headingStyle = {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: "16px",
    display: "grid", 
    placeItems: "center",
  };

  const paragraphStyle = {
    fontSize: "1.1rem",
    opacity: "0.9",
    display: "grid", 
    placeItems: "center",
  
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 0.3s",
  };

  const hoverEffect = {
    color: "#38b2ac",
  };

  const iconListStyle = {
    display: "flex",
 
  };
  return (
    <footer style={footerStyle}>
      <div   className='dancing-script' style={containerStyle}>
        {/* About Section */}
        <div>
          <p style={paragraphStyle}>
            Escape to serenity with Leela Stays, nestled in the picturesque hills of Mussoorie.
          </p>
        </div>
        <div>
          <ul style={{ listStyle: "none", padding: "0" ,display: "grid",
  placeItems: "center" }}>
            <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>📍 Mussoorie, Uttarakhand</li>
            <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              📞 <a href="tel:+917906734034" style={{ ...linkStyle }}>+917906734034</a>
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              📧 <a href="mailto:contact@leelastays.com" style={{ ...linkStyle }}>contact@leelastays.com</a>
            </li>
          </ul>
        </div>

        {/* Social Section */}
        <div style={{display: "grid",
  placeItems: "center" ,marginBottom:"10px"}}>
          <h3 style={headingStyle}>Follow Us</h3>
          <div style={iconListStyle}>
          
            <a href="https://www.instagram.com/leelastays/" style={{ ...linkStyle }} onMouseOver={(e) => (e.target.style.color = hoverEffect.color)} onMouseOut={(e) => (e.target.style.color = linkStyle.color)}>
              <Instagram />
            </a>
         
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
