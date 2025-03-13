import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // 🔹 Importiamo il contesto

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth(); // 🔹 Prendiamo la funzione logout dal contesto
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:8000/api/admin/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
        },
      });

      logout(); // 🔹 Rimuove il token e aggiorna lo stato
      navigate("/admin"); // 🔄 Reindirizza alla pagina di login
    } catch (error) {
      console.error("❌ Errore durante il logout:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-secondary-500">
      {/* Sidebar */}
      <div
        className={`fixed md:relative w-64 bg-primary-500 text-black p-6 transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <button
          className="md:hidden absolute top-6 left-6 text-black"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-3xl font-bold ml-5 mb-6 mt-8">Admin Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/dashboard" className="block p-2 rounded-lg hover:bg-secondary-500 md:text-4xl">
                📊 Riepilogo
              </Link>
            </li>
            <li>
              <Link to="/dashboard/orders" className="block p-2 rounded-lg hover:bg-secondary-500 md:text-4xl">
                📋 Ordini
              </Link>
            </li>
            <li>
              <Link to="/dashboard/gallery" className="block p-2 rounded-lg hover:bg-secondary-500 md:text-4xl">
                📸 Vetrina
              </Link>
            </li>
            <li>
              <Link to="/" className="block p-2 rounded-lg hover:bg-secondary-500 md:text-4xl">
                🏠 Home
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="block p-2 pr-28 rounded-lg hover:bg-red-500 hover:text-white md:text-4xl mt-10"
              >
                🚪Esci
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Contenuto */}
      <div className="flex-1 p-6">
        <button className="md:hidden text-primary-500" onClick={() => setIsOpen(true)}>
          <FaBars size={24} />
        </button>
        {children}
      </div>
    </div>
  );
}
