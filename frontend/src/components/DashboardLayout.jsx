import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-secondary-500">
      {/* Sidebar */}
      <div className={`fixed md:relative w-64 bg-primary-500 text-black p-6 transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
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
              <Link to="/dashboard" className="block p-2 rounded-lg hover:bg-secondary-500 md:text-4xl">📊 Riepilogo</Link>
            </li>
            <li>
              <Link to="/dashboard/orders" className="block p-2 rounded-lg hover:bg-secondary-500 md:text-4xl">📋 Gestione</Link>
            </li>
            <li>
              <Link to="/dashboard/gallery" className="block p-2 rounded-lg hover:bg-secondary-500 md:text-4xl">📸 Vetrina</Link>
            </li>
            <li>
              <Link to="/" className="block p-2 rounded-lg hover:bg-secondary-500 md:text-4xl">🏠 Torna alla Home</Link>
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
