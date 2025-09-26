import { MapContainer, TileLayer } from "react-leaflet";
import { useCurrentPosition } from "../../../hooks/useCurrentPosition";
import "leaflet/dist/leaflet.css";
import "./map.scss";
import { memo } from "react";
import { EcoGardenMarker } from "../../markers/ecoGardenMarker";

function EcoGardenMapComp() {
  const { position, loading } = useCurrentPosition();
  console.log(loading);

  if (!position) {
    return;
  }

  return (
    <MapContainer
      center={[position.lat, position.lng]}
      zoom={16}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <EcoGardenMarker
        position={[position.lat, position.lng]}
        imageUrl="https://123ecos.com.br/wp-content/uploads/2024/06/Horta-comunitaria.jpg"
        title="Horta 01"
        gardenId={1}
      />
    </MapContainer>
  );
}

export const EcoGardenMap = memo(EcoGardenMapComp);
