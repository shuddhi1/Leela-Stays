
import React, { useRef, useState, useEffect } from "react";
import Navbar from "./navbar";
function RoomCard({ room, onRequestEnquiry }) {
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = room.images || [room.imageUrl]; // expecting room.images array

  // sync dot on scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const slideWidth = track.offsetWidth;
      const idx = Math.round(track.scrollLeft / slideWidth);
      setCurrentIndex(idx);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const slideWidth = track.offsetWidth;
    track.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    scrollTo(Math.max(0, currentIndex - 1));
  };
  const handleNext = () => {
    scrollTo(Math.min(images.length - 1, currentIndex + 1));
  };
<Navbar/>
  return (
    <div className="room-card">
      <div className="carousel">
        <div ref={trackRef} className="carousel-track">
          {images.map((src, i) => (
            <div key={i} className="carousel-slide">
              <img src={src} alt={`${room.name} ${i + 1}`} loading="lazy" />
              {i === 0 && (
                <div className="badge">{room.category}</div>
              )}
            </div>
          ))}
        </div>
        {images.length > 1 && (
          <>
            <button
              className="carousel-arrow left"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="carousel-arrow right"
              onClick={handleNext}
              disabled={currentIndex === images.length - 1}
              aria-label="Next image"
            >
              ›
            </button>
            <div className="carousel-dots">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`dot ${i === currentIndex ? "active" : ""}`}
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="card-body">
        <div className="room-header">
          <div>
            <h3 className="room-name">{room.name}</h3>
            {room.area && <p className="room-area">{room.area}</p>}
          </div>
          <div className="price-block">
            <p className="price">{room.pricePerNight}</p>
            <p className="per-night">per night</p>
          </div>
        </div>
        <div className="amenities">
          {room.amenities.map((a) => (
            <span key={a} className="amenity">
              {a}
            </span>
          ))}
        </div>
        <button
          onClick={() => onRequestEnquiry(room)}
          className="enquire-btn"
          aria-label={`Send enquiry for ${room.name}`}
        >
          Send Enquiry
        </button>
      </div>
    </div>
  );

}
  export default RoomCard;