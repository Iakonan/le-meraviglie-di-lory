import { useEffect, useState } from "react";
import { GiCakeSlice } from "react-icons/gi";

export default function PageLoader() {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCakes((prev) => [
        ...prev,
        { id: Math.random(), left: Math.random() * 80, top: Math.random() * 80 },
      ]);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary-500 z-50">
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {cakes.map((cake) => (
          <div
            key={cake.id}
            className="absolute text-bgcontrast-500 text-9xl animate-float"
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
