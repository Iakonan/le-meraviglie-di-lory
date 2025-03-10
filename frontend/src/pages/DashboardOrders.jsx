import { useState, useEffect } from "react";
import DashboardLayout from "../components/DashboardLayout";
import ConfirmModal from "../components/ConfirmModal"; // Importiamo la modale
import { FaTimes } from "react-icons/fa";

export default function DashboardOrders() {
  const [orders, setOrders] = useState([]);
  const [customerFilter, setCustomerFilter] = useState("");
  const [orderIdFilter, setOrderIdFilter] = useState("");
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fakeOrders = [
      { id: 1, customer: "Mario Rossi", status: "pending", price: "50.00" },
      { id: 2, customer: "Giulia Verdi", status: "confirmed", price: "80.00" },
      { id: 3, customer: "Luca Bianchi", status: "delivered", price: "120.00" },
      { id: 4, customer: "Elena Neri", status: "pending", price: "65.00" },
    ];
    setOrders(fakeOrders);
  }, []);

  // 🔍 Filtriamo gli ordini per nome cliente e ID
  const filteredOrders = orders.filter(order =>
    order.customer.toLowerCase().includes(customerFilter.toLowerCase()) &&
    (orderIdFilter === "" || order.id.toString().includes(orderIdFilter))
  );

  // Funzione per cambiare lo stato dell'ordine
  const handleStatusChange = (id, newStatus) => {
    setOrders(orders.map(order =>
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  // Funzione per aprire il modale di conferma eliminazione
  const openDeleteModal = (id) => {
    setSelectedOrderId(id);
    setIsModalOpen(true);
  };

  // Funzione per eliminare un ordine dopo la conferma
  const confirmDelete = () => {
    setOrders(orders.filter(order => order.id !== selectedOrderId));
    setIsModalOpen(false);
    setSelectedOrderId(null);
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
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-4">{order.id}</td>
                  <td className="py-3 px-4">{order.customer}</td>
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

      {/* 📱 Sezione Card Mobile */}
      <div className="md:hidden flex flex-col gap-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div key={order.id} className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-lg font-semibold">Ordine #{order.id}</p>
              <p className="text-text-500">👤 <span className="font-semibold">{order.customer}</span></p>
              <p className="text-text-500">💰 Prezzo: <span className="font-semibold">€{order.price}</span></p>
              <p className="text-text-500">
                📌 Stato:{" "}
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  className="px-2 py-1 rounded-md text-sm border"
                >
                  <option value="pending">In attesa</option>
                  <option value="confirmed">Confermato</option>
                  <option value="delivered">Ritirato</option>
                </select>
              </p>
              <div className="flex justify-center mt-4">
                <button
                  className="bg-red-500 text-white px-6 py-2 rounded-md shadow hover:bg-red-600 transition"
                  onClick={() => openDeleteModal(order.id)}
                >
                  <FaTimes size={24} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Nessun ordine trovato.</p>
        )}
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
