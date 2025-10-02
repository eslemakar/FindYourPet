import { useState, useEffect } from "react";
import PetCard from "../components/petCard";
import PetModal from "../components/petModal";
import { LuPawPrint } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({
    type: "all",
    status: "all",
    city: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [newPet, setNewPet] = useState({
    name: "",
    type: "",
    status: "",
    city: "",
    gender: "",
    description: "",
    image: "",
  });
  const [editPet, setEditPet] = useState(null);

  // Pets'i fetch et
  useEffect(() => {
    fetch("http://localhost:5052/pets")
      .then((res) => res.json())
      .then((data) => setPets(data))
      .catch((err) => console.error(err));
  }, []);

  // Yeni ilan ekle
  const handleAddPet = () => {
    fetch("http://localhost:5052/pets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newPet, owner: "me" }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPets([...pets, data]);
        setShowModal(false);
        setNewPet({
          name: "",
          type: "",
          status: "",
          city: "",
          gender: "",
          description: "",
          image: "",
        });
      })
      .catch((err) => console.error(err));
  };

  // İlan güncelle
  const handleUpdatePet = () => {
    if (!editPet?.id) return;
    fetch(`http://localhost:5052/pets/${editPet.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editPet),
    })
      .then((res) => res.json())              
      .then((data) => {
        setPets(pets.map((pet) => (pet.id === data.id ? data : pet)));
        setEditPet(null);
        setShowModal(false);
      })
      .catch((err) => console.error(err));
  };

  // İlan sil
  const handleDeletePet = (id) => {
    if (!id) return;
    fetch(`http://localhost:5052/pets/${id}`, { method: "DELETE" })
      .then((res) => {
        if (res.ok) {
          setPets(pets.filter((pet) => pet.id !== id));
        } else {
          console.error("Silme işlemi başarısız");
        }
      })
      .catch((err) => console.error(err));
  };

  const handleEditPet = (pet) => {
    setEditPet(pet);
    setShowModal(true);
  };
  const handleCardClick = (pet) => {
    navigate(`/pets/${pet.id}`); // id ile detail sayfasına git
  };

  // Filtreleme
  const filteredPets = pets.filter(
    (pet) =>
      (filters.type === "all" || pet.type === filters.type) &&
      (filters.status === "all" || pet.status === filters.status) &&
      (filters.city === "" || (pet.city && pet.city.includes(filters.city)))
  );

  const myPets = filteredPets.filter((pet) => pet.owner === "me");
  const otherPets = filteredPets.filter((pet) => pet.owner !== "me");

  return (
    <div className="min-h-screen p-6 bg-[#27277d]">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[#f158a4] flex items-center text-4xl font-bold drop-shadow-[4px_4px_2px_rgba(0,0,0,0.3)]">
          Find Your Pet
          <LuPawPrint className="ml-2 text-5xl" />
        </h1>
        <button
          className="bg-white text-[#f158a4] px-4 py-2 rounded  cursor-pointer hover:bg-amber-100"
          onClick={() => setShowModal(true)}
        >
          İlan Ekle
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6 cursor-pointer">
        <select
          className="border border-white text-white p-2 rounded bg-[#27277d]  cursor-pointer"
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        >
          <option value="all">All Types</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Bird">Bird</option>
        </select>
        <select
          className="border border-white text-white p-2 rounded bg-[#27277d]  cursor-pointer"
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        >
          <option value="all">All Status</option>
          <option value="lost">Lost</option>
          <option value="found">Found</option>
          <option value="stolen">Stolen</option>
        </select>
        <input
          type="text"
          placeholder="City"
          className="border border-white text-white p-2 rounded bg-[#27277d]"
          value={filters.city}
          onChange={(e) => setFilters({ ...filters, city: e.target.value })}
        />
      </div>

      {/* My Pets */}
      {myPets.length > 0 && (
        <>
          <h2 className="text-2xl font-bold text-[#f158a4] mb-4">
            Senin İlanların
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            {myPets.map((pet) => (
              <PetCard
                key={pet.id}
                animal={pet}
                onClick={() => handleCardClick(pet)}
                onEdit={() => handleEditPet(pet)}
                onDelete={() => handleDeletePet(pet.id)}
              />
            ))}
          </div>
        </>
      )}

      {/* Other Pets */}
      <h2 className="text-3xl text-white mb-4">Mevcut ilanlar</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {otherPets.map((pet) => (
          <PetCard
            key={pet.id}
            animal={pet}
            onClick={() => handleCardClick(pet)}
          />
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <PetModal
          show={showModal}
          onClose={() => setShowModal(false)}
          onSave={editPet ? handleUpdatePet : handleAddPet}
          petData={editPet || newPet}
          setPetData={editPet ? setEditPet : setNewPet}
        />
      )}
    </div>
  );
};

export default HomePage;
