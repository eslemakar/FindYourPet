import { MdModeEdit, MdDelete } from "react-icons/md";

const PetCard = ({ animal, onClick, onDelete, onEdit }) => {
  if (!animal) return null;

  return (
    <div
      className="relative border border-black bg-gray-200 rounded-lg p-4 shadow-md cursor-pointer
                 drop-shadow-[4px_4px_2px_rgba(0,0,0,0.3)] hover:shadow-lg transition-shadow duration-200"
      onClick={() => onClick && onClick(animal)}
    >
      {/* Resim */}
      <img
        src={animal.image || "/Milo-puppy.jpg"}
        alt={animal.name || "No Name"}
        className="w-full h-60 object-cover rounded-md mb-2"
      />

      {/* Başlık ve Açıklama */}
      <h3 className="text-lg font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>
        {animal.name}
      </h3>
      <p className="text-sm text-gray-600">{animal.type}</p>
      <p
        className="text-sm mt-1"
        style={{
          fontFamily: '"Zalando Sans Expanded", sans-serif',
          fontWeight: 500,
          fontStyle: "oblique",
          letterSpacing: "0.3px",
        }}
      >
        {animal.description}
      </p>

      {/* Düzenle ve Sil Butonları */}
      {(onEdit || onDelete) && (
        <div className="absolute bottom-1 right-1 flex gap-1">
          {onEdit && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit();
              }}
              className="px-2 py-1 bg-blue-300 text-black rounded hover:bg-blue-900 transition-colors cursor-pointer"
            >
              <MdModeEdit />
            </button>
          )}
          {onDelete && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
              className="px-2 py-1 bg-red-400 text-white rounded hover:bg-red-700 transition-colors cursor-pointer"
            >
              <MdDelete />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PetCard;
