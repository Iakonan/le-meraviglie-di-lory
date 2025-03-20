import { useState, useEffect, useRef } from "react";

export default function ShowcaseCard({ image, description, price, onImageClick }) {
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
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center w-full max-w-[300px] min-h-[380px] border-4 border-gray-300">
      {/* 🔥 Click sull'immagine per aprire la modale */}
      <div
        className="w-full h-64 overflow-hidden rounded-lg border-2 border-gray-200 cursor-pointer"
        onClick={() => onImageClick({ image, description, price })}
      >
        <img
          src={image}
          alt={description}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <p className="mt-4 text-lg font-semibold text-black text-center">{description}</p>
      <p className="mt-2 text-xl font-bold text-black">€{price}</p>
    </div>
  );
}
