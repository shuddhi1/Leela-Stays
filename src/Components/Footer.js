import React from "react";
import backgroundImage from "../media/out4.jpeg";
import GoogleReviews from "./GoogleReviews";

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





  return (
    <footer style={footerStyle}>
      <div   className='dancing-script' style={containerStyle}>
        {/* About Section */}
        <div className="reviews">
       <GoogleReviews 
  apiKey="AIzaSyDPmUO04XNAho96DQxacgRSk6GNFUXu9Pg" 
  placeId="ChIJRXDiAwDRCDkRXptF1zPmvCI" 
/>
        </div>
      
    
      </div>
     
    </footer>
  );
}

export default Footer;
