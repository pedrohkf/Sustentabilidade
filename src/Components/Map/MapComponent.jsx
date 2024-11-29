import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapComponent.css";

const MapComponent = () => {
  const position = [-23.55052, -46.633308]; // Coordenadas de São Paulo

  return (
    <div className="map-wrapper">
      <h1 className="map-title">Ponto de Descarte de Lixo Eletrônico</h1>
      <div className="map-content">
        {/* Mapa à esquerda */}
        <div className="map-section">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            className="map-container"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                Ponto de descarte autorizado <br /> Faça sua parte!
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Texto e imagem à direita */}
        <div className="tips">
          <h3>Dicas para o Descarte de Lixo Eletrônico:</h3>
          <ul>
            <li>
              <strong>Recicle baterias:</strong> Não jogue pilhas e baterias no
              lixo comum. Leve-as aos pontos de coleta adequados.
            </li>
            <li>
              <strong>Deixe os aparelhos funcionando:</strong> Aparelhos que
              ainda funcionam podem ser doados ou revendidos.
            </li>
            <li>
              <strong>Proteja o meio ambiente:</strong> Descartar corretamente
              impede a contaminação do solo e da água com metais pesados.
            </li>
            <li>
              <strong>Recicle em pontos especializados:</strong> Use os pontos
              de descarte específicos para garantir que o material será tratado
              adequadamente.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
