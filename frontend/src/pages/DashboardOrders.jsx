import { useState, useEffect } from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function DashboardOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simuliamo il recupero degli ordini dal backend (lo collegheremo più avanti)
    const fakeOrders = [
      { id: 1, customer: "Mario Rossi", status: "pending", price: "50.00" },
      { id: 2, customer: "Giulia Verdi", status: "confirmed", price: "80.00" },
      { id: 3, customer: "Luca Bianchi", status: "delivered", price: "120.00" },
    ];
    setOrders(fakeOrders);
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">📦 Gestione Ordini</h1>

      {/* Visualizzazione tabella su desktop */}
      <div className="hidden md:block">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-primary-500 text-white">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Cliente</th>
              <th className="py-3 px-4 text-left">Stato</th>
              <th className="py-3 px-4 text-left">Prezzo</th>
              <th className="py-3 px-4 text-left">Azioni</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4">{order.id}</td>
                <td className="py-3 px-4">{order.customer}</td>
                <td className="py-3 px-4 capitalize text-center">
                  <span className={`px-2 py-1 rounded-md text-white text-sm 
                    ${order.status === "pending" ? "bg-yellow-500" : ""}
                    ${order.status === "confirmed" ? "bg-blue-500" : ""}
                    ${order.status === "delivered" ? "bg-green-500" : ""}
                  `}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-4">€{order.price}</td>
                <td className="py-3 px-4">
                  <button className="bg-gray-500 text-white px-3 py-1 rounded-md shadow hover:bg-red-600 transition">
                     Elimina
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Visualizzazione card su mobile */}
      <div className="md:hidden flex flex-col gap-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold">Ordine #{order.id}</p>
            <p className="text-text-500">👤 <span className="font-semibold">{order.customer}</span></p>
            <p className="text-text-500">💰 Prezzo: <span className="font-semibold">€{order.price}</span></p>
            <p className="text-text-500">
              📌 Stato:{" "}
              <span className={`px-2 py-1 rounded-md text-white text-sm 
                ${order.status === "pending" ? "bg-yellow-500" : ""}
                ${order.status === "confirmed" ? "bg-blue-500" : ""}
                ${order.status === "delivered" ? "bg-green-500" : ""}
              `}>
                {order.status}
              </span>
            </p>
            <button className="mt-3 bg-gray-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600 transition">
              Elimina
            </button>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
