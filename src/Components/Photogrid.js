import React, { useState, useRef } from 'react';
import './Photogrid.css';

import photo1 from '../media/Rainy1.jpeg';
import photo2 from '../media/out7.jpeg';
import photo3 from '../media/mall.jpg';
import photo4 from '../media/Outside_morning.jpeg';
import photo5 from '../media/out6.jpeg';
import photo6 from '../media/Cloud.jpeg';
import photo7 from '../media/out5.jpeg';
import photo8 from '../media/sunset.jpg';
import photo9 from '../media/out4.jpeg';
import photo10 from '../media/out.jpeg';
import photo11 from '../media/out2.jpeg';
import photo12 from '../media/out3.jpeg';

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12];

function Photogrid() {
  const [zoomedPhoto, setZoomedPhoto] = useState(null);
  const timerRef = useRef(null);

  // Long press detection: starts timer on mouse/touch down, clears on up or leave
  const startPressTimer = (photo) => {
    timerRef.current = setTimeout(() => {
      setZoomedPhoto(photo);
    }, 500); // 500ms for long press
  };

  const clearPressTimer = () => {
    clearTimeout(timerRef.current);
  };

  const closeZoom = () => setZoomedPhoto(null);

  return (
    <>
      <div className="photogrid-container">
       <div className="photogrid-header">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#2c3e50"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="40"
    height="40"
    viewBox="0 0 24 24"
  >
    <path d="M1 21h22L12 2 1 21z" />
    <path d="M9 17l3-3 3 3" />
  </svg>
  <h2 className="photogrid-title">Experience the Beauty of Mussoorie</h2>
</div>

        <div className="grid-gallery">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className="grid-item"
              onMouseDown={() => startPressTimer(photo)}
              onTouchStart={() => startPressTimer(photo)}
              onMouseUp={clearPressTimer}
              onMouseLeave={clearPressTimer}
              onTouchEnd={clearPressTimer}
              onTouchCancel={clearPressTimer}
              tabIndex={0}
              role="button"
              aria-label={`Zoom view of photo ${idx + 1}`}
            >
              <img src={photo} alt={`Leela Stays View ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {zoomedPhoto && (
        <div className="zoom-overlay" onClick={closeZoom} role="dialog" aria-modal="true">
          <img src={zoomedPhoto} alt="Zoomed view" className="zoomed-image" />
          <button className="close-btn" onClick={closeZoom} aria-label="Close zoom view">
            &times;
          </button>
        </div>
      )}
    </>
  );
}

export default Photogrid;
