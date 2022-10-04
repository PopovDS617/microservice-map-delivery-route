import React, { useState, useRef } from 'react';
import {
  FeatureGroup,
  MapContainer,
  Marker,
  Polyline,
  TileLayer,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

type Location = [number, number];

const CustomPoliLine = () => {
  const [center, setCenter] = useState({ lat: 36.460353, lng: 126.440674 });

  const pos: Location[] = [
    [36.460353, 126.440674],
    [34.789594, 135.438084],
    [36.460353, 126.440674],
    [55.410343, 37.902312],
    [36.460353, 126.440674],
    [40.085148, 116.552407],
  ];

  return (
    <div className="app-container">
      <MapContainer
        style={{ height: '100vh', width: '100vw' }}
        zoom={3}
        center={center}
        scrollWheelZoom={true}
      >
        <FeatureGroup>
          {pos?.map((mark, i) => (
            <Marker key={i} position={mark} icon={customMarkerUserPos} />
          ))}

          <Polyline positions={pos} color="red" />
        </FeatureGroup>

        <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
};

export default CustomPoliLine;

export const customMarkerUserPos = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
  iconSize: [12, 20],
  iconAnchor: [5, 20],
  popupAnchor: [2, -40],
});
