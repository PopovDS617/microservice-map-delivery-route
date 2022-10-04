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
  const mapRef = useRef(null);
  const [center, setCenter] = useState({ lat: 36.460353, lng: 126.440674 });
  const [map, setMap] = useState(null);

  const pos: Location[] = [
    [22.33985632172995, 114.1264425702135],
    [33.75425930388873, -118.21881979952026], //to jpn
  ];

  return (
    <div className="app-container">
      <MapContainer
        style={{ height: '600px', width: '100%' }}
        zoom={6}
        center={center}
        ref={mapRef}
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
  iconSize: [15, 20],
  iconAnchor: [5, 20],
  popupAnchor: [2, -40],
});
