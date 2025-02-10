
import { useState } from "react";
import zoom from "../media/Cloud.jpeg";
export default function ZoomableImage({ src, alt }) {
  const [isZoomed, setIsZoomed] = useState(false);

  // Handle zoom on mouse or touch events
  const handleZoomIn = () => setIsZoomed(true);
  const handleZoomOut = () => setIsZoomed(false);

  return (
    <div
      className={`relative inline-block overflow-hidden cursor-zoom-in ${
        isZoomed ? "cursor-zoom-out" : ""
      }`}
      style={{ width: "300px", height: "200px" }}
    >
      <img
        src={zoom}
        alt={alt}
        className={`transition-transform duration-300 ${
          isZoomed ? "scale-150" : "scale-100"
        }`}
        onMouseDown={handleZoomIn}
        onMouseUp={handleZoomOut}
        onTouchStart={handleZoomIn}
        onTouchEnd={handleZoomOut}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
    </div>
  );
}



