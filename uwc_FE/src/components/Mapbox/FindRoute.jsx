import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { useMap, useMapEvents } from 'react-leaflet';

const MCP_local = [
  [10.775911446842391, 106.66257956965325],
  [10.807082147705916, 106.71306272574583],
  [10.790611, 106.715501],
];

const Routing = () => {
  const map = useMap();

  useEffect(() => {
    const control = L.Routing.control({
      waypoints: [L.latLng(10.880758675454759, 106.80538629714444), L.latLng(MCP_local[0][0], MCP_local[0][1])],
      router: L.Routing.mapbox(import.meta.env.VITE_ACCESS_TOKEN),
    }).addTo(map);

    control.on('routesfound', function (e) {
      const routes = e.routes;
      const summary = routes[0].summary;

      // Hiển thị khoảng cách đường đi trên giao diện
      const distance = summary.totalDistance;
      // Làm gì đó với khoảng cách, ví dụ: cập nhật state hoặc hiển thị trực tiếp trên giao diện
      console.log(distance);
    });

    return () => {
      map.removeControl(control);
    };
  }, [map]);

  return null;
};

export default Routing;
