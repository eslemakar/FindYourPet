import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Marker simgesi fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Polaroid Component (mühürlü)
// Polaroid Component (mektup mührü gibi badge ile)
const Polaroid = ({ src, alt, status }) => {
  const getStatusStyles = (status) => {
    switch (status?.toLowerCase()) {
      case "found":
        return "bg-green-600";
      case "stolen":
        return "bg-red-700";
      case "lost":
        return "bg-yellow-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="relative w-[390px] h-150 bg-white p-2 shadow-lg rounded-sm transform -rotate-1 hover:rotate-0 transition-all duration-300">
      <img
        src={src}
        alt={alt}
        className="w-[400px] object-cover rounded-sm border border-gray-300"
      />

      {/* Sağ alt köşede mühür */}
      <div
        className={`absolute bottom-4 right-4 w-27 h-27 rounded-full flex items-center justify-center 
        text-white font-extrabold text-lg 
        ${getStatusStyles(status)}
        border-[6px] border-white
        shadow-[inset_4px_4px_10px_rgba(0,0,0,0.4),inset_-4px_-4px_10px_rgba(255,255,255,0.4),0_6px_12px_rgba(0,0,0,0.6)] 
        `}
      >
        {status?.toUpperCase()}
      </div>
    </div>
  );
};


const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5052/pets/${id}`)
      .then((res) => res.json())
      .then((data) => setPet(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!pet) return <p>Loading...</p>;

  const position = [pet.lat || 37.0, pet.lng || 35.0];

  return (
    <div className="min-h-screen p-6 bg-[#27277d] text-white">
      <button
        className="mb-4 px-4 py-2 bg-gray-300 text-black rounded cursor-pointer"
        onClick={() => navigate(-1)}
      >
        Geri
      </button>

      <div className="flex flex-col md:flex-row gap-6 p-4">
        {/* Polaroid Fotoğraf */}
        <Polaroid src={pet.image || "/Milo-puppy.jpg"} alt={pet.name} status={pet.status}/>

        {/* Detaylar */}
        <div className="flex flex-col relative border border-black rounded-lg p-4 shadow-md w-180 h-170
                        drop-shadow-[4px_4px_2px_rgba(0,0,0,0.6)] hover:shadow-lg transition-shadow duration-300">
          <h1 className="text-4xl font-bold text-[#f158a4] mb-2">{pet.name}</h1>
          <p className="text-lg mb-1"><strong>Tür:</strong> {pet.type}</p>
          <p className="text-lg mb-1"><strong>Durum:</strong> {pet.status}</p>
          {pet.city && <p className="text-lg mb-1"><strong>Şehir:</strong> {pet.city}</p>}
          {pet.gender && <p className="text-lg mb-1"><strong>Cinsiyet:</strong> {pet.gender}</p>}
          <p className="text-md mb-2">{pet.description}</p>
          {pet.ownerNote && <p className="text-md mb-2 text-purple-300"><strong>Owner Note:</strong> {pet.ownerNote}</p>}

          {(pet.phone || pet.email) && (
            <div className="mt-4">
              <h2 className="text-2xl font-semibold mb-2">İletişim</h2>
              {pet.phone && <p>📞 {pet.phone}</p>}
              {pet.email && <p>✉️ {pet.email}</p>}
            </div>
          )}

          {/* Leaflet Harita */}
          <div className="mt-6 h-[400px] w-full">
            <MapContainer center={position} zoom={12} style={{ height: "100%", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>{pet.name} burada bulundu!</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
