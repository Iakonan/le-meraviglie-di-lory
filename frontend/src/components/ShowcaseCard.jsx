import { useState, useEffect, useRef } from "react";

export default function ShowcaseCard({ image, description, price }) {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center w-full md:w-72 border-4 border-gray-300">
      {/* Link che apre l'immagine in una nuova scheda */}
      <a href={image} target="_blank" rel="noopener noreferrer" className="w-full h-64 overflow-hidden rounded-lg border-2 border-gray-200 block">
        <img
          ref={imgRef}
          src={isVisible ? image : ""}
          alt={description}
          className={`w-full h-full object-cover transition-all duration-500 ease-in-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          loading="lazy"
        />
      </a>
      <p className="mt-4 text-lg font-semibold text-black text-center">{description}</p>
      <p className="mt-2 text-xl font-bold text-black">€{price}</p>
    </div>
  );
}
