

import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const Maps = () => {
  // eslint-disable-nex
  // 
  // t-line react-hooks/rules-of-hooks
  <h1>maps</h1>
  const mapContainerRef = useRef();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const mapRef = useRef();
 // eslint-disable-next-line react-hooks/rules-of-hooks
 useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2lkZGhhcnRoMTAxMCIsImEiOiJjbTVueGdhbTQwZ3BqMnFzNmVhbGZoN3N3In0.KGvLklKxGhygGklPCpmTvw';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 12 // starting zoom
    });
  });

  return (
    <div
      style={{ height: '100%', width:"100%" }}
      ref={mapContainerRef}
      className="map-container"
    />
  );
};

export default Maps;