import React, { useState } from "react";
import RoomCard from "../src/Components/RoomCard"
import Navbar from "./Components/navbar";
import sampleRooms from "./Components/data";
import Footer from "./Components/Footer";
// helper to build WhatsApp URL
const buildWhatsAppUrl = ({ phone, roomName, guestName = "", checkIn = "", checkOut = "" }) => {
  let msg = `Hi, I'm interested in booking the "${roomName}" room at Leela Stays.`;
  if (guestName) msg += ` Name: ${guestName}.`;
  if (checkIn) msg += ` Check-in: ${checkIn}.`;
  if (checkOut) msg += ` Check-out: ${checkOut}.`;
  msg += " Please share availability and price.";
  const encoded = encodeURIComponent(msg);
  const normalizedPhone = phone.replace(/\D/g, "");
  return `https://wa.me/${normalizedPhone}?text=${encoded}`;
};


function EnquiryModal({ room, onClose }) {
  const [guestName, setGuestName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const isValid = () => {
    if (!checkIn) return false;
    if (checkOut && checkOut < checkIn) return false;
    return true;
  };

  const handleSend = () => {
    if (!isValid()) return;
    const waUrl = buildWhatsAppUrl({
      phone: "+917906734034",
      roomName: room.name,
      guestName: guestName.trim(),
      checkIn,
      checkOut,
    });
    window.open(waUrl, "_blank");
    onClose();
  };

  return (<>
      
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <button onClick={onClose} className="close-btn" aria-label="Close form">
          ×
        </button>
        <h2 className="modal-title">Enquire:{room.name}</h2>
        <p className="subtext">Fill details and send via WhatsApp</p>
        <div className="field">
          <label>Guest Name</label>
          <input
            type="text"
            placeholder="Your name"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
          />
        </div>
        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div className="field">
            <label>Check-in</label>
            <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
          </div>
          <div className="field">
            <label>Check-out</label>
            <input
              type="date"
              value={checkOut}
              min={checkIn || undefined}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>
        <div className="modal-actions">
          <button onClick={onClose} className="btn-secondary">
            Cancel
          </button>
          <button onClick={handleSend} disabled={!isValid()} className="btn-primary">
            Send via WhatsApp
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

<RoomCard/>
function Rooms({ rooms = sampleRooms }) {
  <Navbar/>
   
  const [activeRoom, setActiveRoom] = useState(null);
  const grouped = rooms.reduce((acc, r) => {
    acc[r.category] = acc[r.category] || [];
    acc[r.category].push(r);
    return acc;
  }, {});
 <Navbar/>
  return (<>
  <Navbar/>
    <div className="container" style={{marginTop:"50px"}}>
      {Object.entries(grouped).map(([category, roomList]) => (
        <div key={category}>
          <h2 className="section-title">
            {category === "Scenic" ? "Scenic Rooms" : "Comfort Rooms"}
          </h2>
          <div className="grid grid-2">
            {roomList.map((room) => (
              <RoomCard key={room.id} room={room} onRequestEnquiry={(r) => setActiveRoom(r)} />
            ))}
          </div>
        </div>
      ))}
      {activeRoom && <EnquiryModal room={activeRoom} onClose={() => setActiveRoom(null)} />}
    </div>
      <Footer/>
    </>
  );
}

export default Rooms;
