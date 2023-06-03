import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import React, { useEffect } from 'react';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.js';
import './Mapbox.scss';

const MCP_local = [
  [10.775911446842391, 106.66257956965325],
  [10.807082147705916, 106.71306272574583],
  [10.790611, 106.715501],
];

const Mapbox = () => {
  const position = [10.880758675454759, 106.80538629714444];

  const addRouting = (map) => {
    L.Routing.control({
      waypoints: MCP_local.map((point) => L.latLng(point[0], point[1])),
      lineOptions: {
        styles: [{ color: 'blue', opacity: 1, weight: 4 }],
      },
    }).addTo(map);
  };

  function RoutingComponent() {
    const map = useMap();

    useEffect(() => {
      addRouting(map);
    }, [map]);

    return null;
  }

  return (
    <div className="Mapbox">
      <div className="header"></div>
      <MapContainer center={position} zoom={14} scrollWheelZoom={false} style={{ minHeight: '75vh', minWidth: '75vw' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RoutingComponent />
      </MapContainer>
    </div>
  );
};

export default Mapbox;
