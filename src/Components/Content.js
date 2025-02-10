import React from "react";

function Content() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "40px 20px",
        background: "#f9f9f9",
        color: "#333",
        fontFamily: "'Poppins', sans-serif",
        lineHeight: "1.8",
        maxWidth: "900px",
        margin: "auto",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        overflow: "auto",
        flex:1
      }}
    >
      <section style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "16px" }}>
        Welcome to Leela Stays
      </section>
      <section style={{ fontSize: "24px", fontWeight: "600", marginBottom: "24px", color: "#2c7a7b" }}>
        Your Cozy Retreat in the Hills
      </section>
      <section  style={{ textAlign: "justify", marginBottom: "24px", fontSize: "18px" }}>
        Escape to the serene beauty of the hills with Leela Stays, where comfort meets nature.
        Whether you're seeking a peaceful getaway, a romantic escape, or a family vacation, our
        homestay offers an unforgettable experience surrounded by lush greenery and breathtaking
        views. From peaceful nature trails to nearby cultural spots, Leela Stays is your gateway
        to the treasures of the hills. Let us guide you to the best local experiences.
      </section>
      <section style={{ textAlign: "justify", fontSize: "18px" }}>
        Ready to Unwind? Discover your home in the hills at Leela Stays. Book your stay today
        and let the mountains work their magic!
      </section>
    </div>
  );
}

export default Content;
