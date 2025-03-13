import { useState, useEffect } from "react";
import DashboardLayout from "../components/DashboardLayout";
import ConfirmModal from "../components/ConfirmModal";
import { FaTimes, FaCaretLeft, FaCaretRight } from "react-icons/fa";

export default function DashboardOrders() {
  const [orders, setOrders] = useState([]);
  const [customerFilter, setCustomerFilter] = useState("");
  const [orderIdFilter, setOrderIdFilter] = useState("");
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 🔹 Stato per la paginazione
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // 📡 Funzione per recuperare gli ordini dal backend con filtri e paginazione
  const fetchOrders = async (page = 1) => {
    try {
      let url = `http://localhost:8000/api/orders?page=${page}&per_page=15`;

      if (customerFilter) {
        url += `&customer_name=${encodeURIComponent(customerFilter)}`;
      }
      if (orderIdFilter) {
        url += `&id=${orderIdFilter}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      setOrders(data.data);
      setTotalPages(data.last_page);
    } catch (error) {
      console.error("Errore nel recupero degli ordini:", error);
    }
  };

  // 🟢 Effettua la richiesta all'API quando cambia la pagina o i filtri
  useEffect(() => {
    fetchOrders(currentPage);
  }, [currentPage, customerFilter, orderIdFilter]);

  // 🔄 Funzione per cambiare lo stato dell'ordine
  const handleStatusChange = (id, newStatus) => {
    setOrders(orders.map(order =>
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  // 🗑️ Aprire il modale di conferma eliminazione
  const openDeleteModal = (id) => {
    setSelectedOrderId(id);
    setIsModalOpen(true);
  };

  // ✅ Confermare ed eliminare un ordine
  const confirmDelete = async () => {
    if (!selectedOrderId) return;
  
    try {
      const response = await fetch(`http://localhost:8000/api/orders/${selectedOrderId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
  
      if (!response.ok) {
        throw new Error("Errore durante l'eliminazione dell'ordine");
      }
  
      // Rimuove l'ordine eliminato dalla lista
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== selectedOrderId));
  
      console.log(`✅ Ordine #${selectedOrderId} eliminato con successo`);
    } catch (error) {
      console.error("❌ Errore eliminazione ordine:", error);
    } finally {
      setIsModalOpen(false);
      setSelectedOrderId(null);
    }
  };
  

  return (
    <DashboardLayout>
      <h1 className="text-3xl md:text-5xl font-bold mb-6">📦 Gestione Ordini</h1>

      {/* 🛠 Sezione Filtri */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6 w-full text-lg">
        <input
          type="text"
          placeholder="Filtra per nome cliente"
          className="text-2xl px-4 py-2 border border-gray-300 rounded-md w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-secondary-500 bg-white"
          value={customerFilter}
          onChange={(e) => setCustomerFilter(e.target.value)}
        />
        <input
          type="number"
          placeholder="Filtra per ID ordine"
          className="text-2xl px-4 py-2 border border-gray-300 rounded-md w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-secondary-500 bg-white"
          value={orderIdFilter}
          onChange={(e) => setOrderIdFilter(e.target.value)}
        />
      </div>

      {/* 🖥 Sezione Tabella Desktop */}
      <div className="hidden md:block w-full overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead className="bg-primary-500 text-black">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Cliente</th>
              <th className="py-3 px-4 text-left">Stato</th>
              <th className="py-3 px-4 text-left">Prezzo</th>
              <th className="py-3 px-4 text-left">Azioni</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-4">{order.id}</td>
                  <td className="py-3 px-4">{order.customer_name}</td>
                  <td className="py-3 px-4 capitalize text-center">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      className="px-2 py-1 rounded-md text-lg border"
                    >
                      <option value="pending">In attesa</option>
                      <option value="confirmed">Confermato</option>
                      <option value="delivered">Ritirato</option>
                    </select>
                  </td>
                  <td className="py-3 px-4">€{order.price}</td>
                  <td className="py-3 px-4">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-md shadow hover:bg-red-600 transition"
                      onClick={() => openDeleteModal(order.id)}
                    >
                      <FaTimes size={24} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  Nessun ordine trovato.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 🔄 Paginazione */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-secondary-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-text-500 transition"
        >
          <FaCaretLeft />
        </button>
        <span className="text-black font-semibold">Pagina {currentPage} di {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="bg-secondary-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-text-500 transition"
        >
          <FaCaretRight />
        </button>
      </div>

      {/*  Modale di conferma eliminazione */}
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
        orderId={selectedOrderId}
      />
    </DashboardLayout>
  );
}
