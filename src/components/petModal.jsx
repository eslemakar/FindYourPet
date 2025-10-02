const PetModal = ({ show, onClose, onSave, petData, setPetData }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50  cursor-pointer">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4 cursor-pointer">
          Yeni İlan Ekle
        </h2>

        {/* Hayvan Adı */}
        <input
          type="text"
          placeholder="Hayvan Adı"
          className="border p-2 w-full mb-2 rounded"
          value={petData.name}
          onChange={(e) => setPetData({ ...petData, name: e.target.value })}
        />

        {/* Tür */}
        <input
          type="text"
          placeholder="Tür (Dog/Cat/Bird)"
          className="border p-2 w-full mb-2 rounded"
          value={petData.type}
          onChange={(e) => setPetData({ ...petData, type: e.target.value })}
        />

        {/* Durum */}
        <input
          type="text"
          placeholder="Durum (Lost/Found/Stolen)"
          className="border p-2 w-full mb-2 rounded"
          value={petData.status}
          onChange={(e) => setPetData({ ...petData, status: e.target.value })}
        />

        {/* Şehir */}
        <input
          type="text"
          placeholder="Şehir"
          className="border p-2 w-full mb-2 rounded"
          value={petData.city}
          onChange={(e) => setPetData({ ...petData, city: e.target.value })}
        />

        {/* Cinsiyet */}
        <input
          type="text"
          placeholder="Cinsiyet"
          className="border p-2 w-full mb-2 rounded"
          value={petData.gender}
          onChange={(e) => setPetData({ ...petData, gender: e.target.value })}
        />

        {/* Fotoğraf */}
        <input
          type="text"
          placeholder="Fotoğraf URL"
          className="border p-2 w-full mb-2 rounded"
          value={petData.image}
          onChange={(e) => setPetData({ ...petData, image: e.target.value })}
        />

        {/* Açıklama */}
        <textarea
          placeholder="Açıklama"
          className="border p-2 w-full mb-2 rounded"
          value={petData.description}
          onChange={(e) =>
            setPetData({ ...petData, description: e.target.value })
          }
        />

        {/* 📞 İletişim Bilgileri */}
        <input
          type="text"
          placeholder="Telefon"
          className="border p-2 w-full mb-2 rounded"
          value={petData.phone || ""}
          onChange={(e) => setPetData({ ...petData, phone: e.target.value })}
        />
        <input
          type="email"
          placeholder="E-posta"
          className="border p-2 w-full mb-2 rounded"
          value={petData.email || ""}
          onChange={(e) => setPetData({ ...petData, email: e.target.value })}
        />

        <div className="flex justify-end gap-2 mt-4">
          <button className="px-4 py-2 bg-gray-300 rounded  cursor-pointer" onClick={onClose}>
            İptal
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            onClick={onSave}
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetModal;
