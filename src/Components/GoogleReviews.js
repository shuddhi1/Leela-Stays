import React, { useEffect, useRef, useState } from "react";
import "./GoogleReviews.css"; // Add this CSS file

const GoogleReviews = ({ apiKey, placeId }) => {
  const mapRef = useRef(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.body.appendChild(script);
    } else {
      initMap();
    }

    function initMap() {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 0, lng: 0 },
        zoom: 15
      });

      const service = new window.google.maps.places.PlacesService(map);
      service.getDetails(
        {
          placeId,
          fields: ["name", "rating", "reviews", "url"]
        },
        (place, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setReviews(place.reviews);
          } else {
            console.error("Error fetching place details:", status);
          }
        }
      );
    }
  }, [apiKey, placeId]);

  return (
    <div className="google-reviews">
      <h2 >Google Reviews</h2>
      <div ref={mapRef} style={{ display: "none" }} />
      {reviews.length-1 > 0 ? (
        reviews.map((review, index) => (
          <div
            key={index}
            className="review-card"
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <div className="review-header">
              <strong>{review.author_name}</strong>
              <span className="review-rating">⭐ {review.rating}</span>
            </div>
            <p className="review-text">{review.text}</p>
          </div>
        ))
      ) : (
        <p>No reviews found.</p>
      )}
    </div>
  );
};

export default GoogleReviews;
