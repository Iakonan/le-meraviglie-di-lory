import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-bgcontrast-500">
      {/* Sidebar */}
      <div className={`fixed md:relative w-64 bg-primary-500 text-white p-6 transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <button 
          className="md:hidden absolute top-4 right-4 text-white"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/dashboard" className="block p-2 rounded hover:bg-secondary-500">📊 Riepilogo Ordini</Link>
            </li>
            <li>
              <Link to="/dashboard/orders" className="block p-2 rounded hover:bg-secondary-500">📋 Gestione Ordini</Link>
            </li>
            <li>
              <Link to="/dashboard/gallery" className="block p-2 rounded hover:bg-secondary-500">📸 Modifica Galleria</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Contenuto */}
      <div className="flex-1 p-6">
        <button 
          className="md:hidden text-primary-500"
          onClick={() => setIsOpen(true)}
        >
          <FaBars size={24} />
        </button>
        {children}
      </div>
    </div>
  );
}
