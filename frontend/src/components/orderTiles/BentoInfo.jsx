import React from "react";

export default function BentoInfo() {
  return (
    <div className="flex flex-col gap-2 text-black">
      <p>
        Le mie <strong>Bento</strong> sono tutte con:
      </p>
      <ul className="list-disc list-inside pl-2">
        <li>Pan di Spagna alla vaniglia</li>
        <li>Crema chantilly con gocce di cioccolato</li>
        <li>Copertura di crema al burro bianca</li>
      </ul>
      <p className="mt-2">Vogliamo proseguire?</p>
    </div>
  );
}
