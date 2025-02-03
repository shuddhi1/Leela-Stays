import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapboxNavigationExample = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null); // Map instance
  const markerRef = useRef(null); // Marker instance
  const directionsRef = useRef(null); // Popup or directions instance

  // Marker position [lng, lat]
  const markerPosition = [78.06021, 30.45460];

  useEffect(() => {
    // Set your Mapbox access token
    mapboxgl.accessToken = "pk.eyJ1Ijoic2lkZGhhcnRoMTAxMCIsImEiOiJjbTVueGdhbTQwZ3BqMnFzNmVhbGZoN3N3In0.KGvLklKxGhygGklPCpmTvw";

    // Initialize the map
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: markerPosition,
      zoom: 9,
    });

    // Add navigation controls
    mapRef.current.addControl(new mapboxgl.NavigationControl());

    // Add the marker
    markerRef.current = new mapboxgl.Marker()
      .setLngLat(markerPosition)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // Optional popup for extra information
          .setHTML("<h3>Start Navigation</h3><p>Click to navigate</p>")
      )
      .addTo(mapRef.current);

    // Add click event to the marker
    markerRef.current.getElement().addEventListener("click", () => {
      // Trigger navigation or display routing UI
      if (mapRef.current) {
        const origin = [mapRef.current.getCenter().lng, mapRef.current.getCenter().lat]; // Current map center as origin
        const destination = markerPosition;

        // Open directions link in a new tab
        const url = `https://www.google.com/maps/dir/?api=1&origin=${origin[1]},${origin[0]}&destination=${destination[1]},${destination[0]}`;
        window.open(url, "_blank");
      }
    });

    return () => mapRef.current.remove(); // Cleanup on unmount
  }, []);

  return (
    <div
    className="three-d-border"
      ref={mapContainerRef}
   
    />
  );
};

export default MapboxNavigationExample;
