import React, { useState } from "react";
import City1 from '../src/media/City1.jpeg';
import City2 from '../src/media/City2.jpeg';
import City3 from '../src/media/City3.jpeg';
import City4 from '../src/media/City4.jpeg';

const images = [City1, City2, City3, City4];

const RoomsPage = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (image) => {
    setPreviewImage(image);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.5 }}>
      {/* Page Title */}
      <header style={{ backgroundColor: "#f8f9fa", padding: "10px", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#333" ,fontFamily: "Dancing Script" }}>Rooms at Leela Stays</h1>
      </header>

      {/* Scenic Rooms Section */}
      <section style={{ padding: "20px" }}>
        <h1
          style={{ fontSize: "2rem", color: "#444", borderBottom: "2px solid #ddd", paddingBottom: "10px",    display: "grid", justifyContent:" space-around" ,fontFamily: "Dancing Script"}}
        >
          Scenic Rooms
        </h1>

        {/* City Room */}
        <div  className='City View Room' style={{ marginTop: "2", padding: "10px",  display:"flex", flexWrap:"wrap",border: "1px solid #ddd", borderRadius: "8px" }}>
   
          <div style={{ display: "flex", gap: "20px",  flexWrap:"wrap" }}>

          {/* Garden & City Room */}
          <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ddd", borderRadius: "8px" }}>
          <h4 style={{ fontSize: "1.8rem", color: "#555" }}>Garden & City View Room</h4>
          <div style={{ display: "flex", gap: "20px", marginTop: "10px",justifyContent: "space-around" }}>

            <div>
              <p style={{ margin: "5px 0" }}>
                Price: <strong>₹3300/night</strong>
              </p>
              <p style={{ margin: "5px 0" }}>
                Room Area: <strong>500 sq. ft.</strong>
              </p>
              <p style={{ margin: "5px 0" }}>Amenities:</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>🌟 King-size bed</li>
                <li>🌟 Scenic garden view</li>
                <li>🌟 Free WiFi</li>
              </ul>
              <button
                style={{
                  marginTop: "10px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  padding: "10px 15px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Room Preview ${index + 1}`}
                  style={{
                       width: "10vw",
                    height: "10vw",
                    padding:"10px",
                    borderRadius: "20px",
                    cursor: "pointer", 
                    objectFit: "cover",
                  }}
                  onMouseEnter={() => handleMouseEnter(image)}
                  onMouseLeave={handleMouseLeave}
                />
              ))}
            </div>

            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                backgroundColor: "#f0f0f0",
                borderRadius: "8px",
                display: "flex",
      
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  style={{
                    width: "45vw",
                    height: "45vw",
                    objectFit: "cover",
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                  }}
                />
              )}
            </div>
          </div>
       
          <div>
     
          </div>
        </div>

     
      </section>

      {/* Comfort Rooms Section */}
      {/* <section style={{ padding: "20px" }}>
        <h1
          style={{ fontSize: "2rem", color: "#444", borderBottom: "2px solid #ddd", paddingBottom: "10px" }}
        >
          Comfort Rooms
        </h1> */}

        {/* Cozy Room */}
        {/* <div style={{ marginTop: "20px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
          <h4 style={{ fontSize: "1.8rem", color: "#555" }}>Cozy Room</h4>
          <p style={{ margin: "5px 0" }}>
            Price: <strong>₹2000/night</strong>
          </p>
          <p style={{ margin: "5px 0" }}>
            Room Area: <strong>350 sq. ft.</strong>
          </p>
          <p style={{ margin: "5px 0" }}>Amenities:</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>🌟 King Size Double bed</li>
            <li>🌟 Tea/coffee maker</li>
          </ul>
          <button
            style={{
              marginTop: "10px",
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "10px 15px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Send Enquiry
          </button>
        </div> */}

        {/* Grand Room
        <div style={{ marginTop: "20px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
          <h4 style={{ fontSize: "1.8rem", color: "#555" }}>Grand Room</h4>
          <p style={{ margin: "5px 0" }}>
            Price: <strong>₹2500/night</strong>
          </p>
          <p style={{ margin: "5px 0" }}>
            Room Area: <strong>600 sq. ft.</strong>
          </p>
          <p style={{ margin: "5px 0" }}>Amenities:</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>🌟 King-size bed</li>
            <li>🌟 Private Seating Area</li>
            <li>🌟 Luxury bath amenities</li>
          </ul>
          <button
            style={{
              marginTop: "10px",
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "10px 15px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Send Enquiry
          </button>
        </div> */}
      {/* </section> */}

   

    </div>
  );
};

export default RoomsPage;
