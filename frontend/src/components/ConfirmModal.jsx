export default function ConfirmModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-trasparent backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-80 text-center">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Sei sicuro di voler eliminare questo elemento?
        </h2>
        <div className="flex justify-center gap-4 mt-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition"
            onClick={onConfirm}
          >
            Elimina
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md shadow-md hover:bg-gray-400 transition"
            onClick={onClose}
          >
            Annulla
          </button>
        </div>
      </div>
    </div>
  );
}
