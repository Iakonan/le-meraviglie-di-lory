import { useEffect, useState } from "react";
import { GiCakeSlice } from "react-icons/gi";

export default function PageLoader() {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCakes((prev) => [
        ...prev,
        { id: Math.random(), left: Math.random() * 90, top: Math.random() * 90 },
      ]);

      // Limitiamo il numero massimo di icone a 30 per evitare sovraccarico
      if (cakes.length > 40) {
        setCakes((prev) => prev.slice(1));
      }
    }, 100); // Ridotto il tempo tra una generazione e l'altra per averne di più

    return () => clearInterval(interval);
  }, [cakes]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary-500 z-50">
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {cakes.map((cake) => (
          <div
            key={cake.id}
            className="absolute text-bgcontrast-500 text-5xl animate-float" // Icone più piccole
            style={{
              left: `${cake.left}%`,
              top: `${cake.top}%`,
            }}
          >
            <GiCakeSlice />
          </div>
        ))}
      </div>
    </div>
  );
}
