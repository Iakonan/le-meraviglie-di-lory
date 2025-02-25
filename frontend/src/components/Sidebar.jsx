import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
          className="md:hidden fixed top-4 left-4 z-50 text-bgcontrast-500 p-2 rounded-md shadow-lg hover:bg-secondary transition"
          onClick={() => setIsOpen(true)}
        >
          <FaBars size={24} />
        </button>
      )}

      {/* Overlay scuro quando la sidebar è aperta */}
      {isOpen && !isDesktop && (
        <div 
          className="fixed inset-0 bg-trasparent backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar su mobile - Navbar su desktop */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-bgcontrast-500 shadow-lg z-50 transform 
        ${isOpen || isDesktop ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out 
        md:relative md:w-full md:h-auto md:flex md:items-center md:justify-center md:px-8`}>

        {/* Header con titolo e bottone di chiusura SOLO su mobile */}
        {!isDesktop && (
          <div className="flex justify-between items-center md:hidden">
            <h2 className="text-lg font-semibold text-text-500">Menu</h2>
            <button 
              className="text-text-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes size={24} />
            </button>
          </div>
        )}

        {/* Link del menu */}
        <nav className="mt-4 md:mt-0 md:flex md:space-x-10 w-full text-center">
          <ul className="space-y-4 md:space-y-0 md:flex md:space-x-10 text-text-500 w-full justify-center">
            <li className="p-3 hover:bg-gray-100 md:hover:bg-transparent cursor-pointer">Home</li>
            <li className="p-3 hover:bg-gray-100 md:hover:bg-transparent cursor-pointer">Chi Sono</li>
            <li className="p-3 hover:bg-gray-100 md:hover:bg-transparent cursor-pointer">Galleria</li>
            <li className="p-3 hover:bg-gray-100 md:hover:bg-transparent cursor-pointer">Ordina</li>
            <li className="p-3 hover:bg-gray-100 md:hover:bg-transparent cursor-pointer">Recensioni</li>
          </ul>
        </nav>
      </div>
    </>
  );
}
