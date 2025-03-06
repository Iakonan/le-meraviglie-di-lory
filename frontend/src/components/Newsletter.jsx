import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="w-full px-4 py-12 bg-bgcontrast-500 text-center">
      <h2 className="text-xl font-semibold text-text-500">
        Unisciti alla community!
      </h2>

      {/* Input e Bottone */}
      <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          type="email"
          placeholder="Email"
          className="text-sm w-full md:w-1/4 px-4 py-3 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-secondary-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-text-500 transition">
          Iscriviti
        </button>
      </div>

      {/* Termini e Privacy */}
      <p className="text-text-500 text-xs mt-4">
        Iscrivendoti accetti i nostri termini d'uso. Per maggiori informazioni, leggi la nostra
        <a href="/privacy-policy" target="_blank" className="text-white ml-1 hover:underline">
          Privacy Policy
        </a>.
      </p>
    </section>
  );
}
