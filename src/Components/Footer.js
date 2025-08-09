import React from "react";
import backgroundImage from "../media/out4.jpeg";

function Footer() {
  const footerStyle = {
    //  backgroundColor: "#D4C9AB",
    borderRadius: "30px",
    color: "white",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',  
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
     height:"300px",
    maxWidth: "1200px",
    margin: "0 auto",
  };



  const paragraphStyle = {
    fontSize: "2.1rem",
    opacity: "0.9",
    display: "grid", 
    placeItems: "center",
};

  return (
    <footer style={footerStyle}>
      <div   className='dancing-script' style={containerStyle}>
        {/* About Section */}
        <div className="footnote">
          <p style={paragraphStyle}>
            Escape to serenity with Leela Stays!
         
          </p>
        </div>
      
    
      </div>
     
    </footer>
  );
}

export default Footer;
