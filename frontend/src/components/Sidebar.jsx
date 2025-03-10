import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; // Importiamo Link

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Controlliamo quando cambia la dimensione dello schermo
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Bottone hamburger visibile SOLO su mobile */}
      {!isDesktop && (
        <button 
          className="md:hidden fixed top-4 left-4 z-50 text-black p-2 rounded-md shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <FaBars size={24} />
        </button>
      )}

      {/* Overlay opaco quando la sidebar è aperta */}
      {isOpen && !isDesktop && (
        <div 
          className="fixed inset-0 bg-trasparent backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar su mobile - Navbar su desktop */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-primary-500 z-50 transform 
        ${isOpen || isDesktop ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out 
        md:relative md:w-full md:h-auto md:flex md:items-center md:justify-center md:px-8`}>

        {/* Bottone di chiusura SOLO su mobile (in alto a sinistra) */}
        {!isDesktop && (
          <button 
            className="absolute top-6 left-6 text-black"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes size={24} />
          </button>
        )}

        {/* Link del menu */}
        <nav className="mt-20 md:mt-0 md:flex md:space-x-10 w-full text-center">
          <ul className="space-y-4 md:space-y-0 md:flex md:space-x-10 text-black w-full justify-center">
            <li className="p-3 hover:bg-secondary-500 md:hover:bg-transparent cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="p-3 hover:bg-secondary-500 md:hover:bg-transparent cursor-pointer">Chi Sono</li>
            <li className="p-3 hover:bg-secondary-500 md:hover:bg-transparent cursor-pointer">
              <Link to="/vetrina">Vetrina</Link> {/* Link alla Vetrina */}
            </li>
            <li className="p-3 hover:bg-secondary-500 md:hover:bg-transparent cursor-pointer">Ordina</li>
            <li className="p-3 hover:bg-secondary-500 md:hover:bg-transparent cursor-pointer">Recensioni</li>
          </ul>
        </nav>
      </div>
    </>
  );
}
