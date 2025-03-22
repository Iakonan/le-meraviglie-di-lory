import React from "react";

export default function OptionCard({ label, value, image, selected, disabled, onClick }) {
  return (
    <div
      onClick={!disabled ? onClick : undefined}
      className={`flex flex-col items-center justify-between p-4 border rounded-md cursor-pointer transition-all duration-300 w-36 h-36
        ${selected ? "border-secondary-500 bg-secondary-100 shadow-md" : "border-gray-300 bg-white"}
        ${disabled ? "opacity-40 cursor-not-allowed" : "hover:scale-105"}
      `}
    >
      <img
        src={image}
        alt={label}
        className="w-16 h-16 object-cover mb-2 rounded-full"
      />
      <p className="text-center text-sm font-semibold text-black">{label}</p>
    </div>
  );
}
