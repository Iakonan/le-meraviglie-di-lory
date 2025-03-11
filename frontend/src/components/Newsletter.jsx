import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="w-full px-4 py-12 bg-secondary-500 text-center">
      <h2 className="text-xl font-semibold text-black md:text-3xl">
        Unisciti alla community!
      </h2>

      {/* Input e Bottone */}
      <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          type="email"
          placeholder="Email"
          className="text-lg md:text-2xl w-full md:w-1/4 px-4 py-3 border border-text-500 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-primary-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-primary-500 text-black px-6 py-3 rounded-md shadow-md hover:bg-text-500 hover:text-white transition">
          Iscriviti
        </button>
      </div>

      {/* Termini e Privacy */}
      <p className="text-black text-lg  mt-4">
        Iscrivendoti accetti i nostri termini d'uso. Per maggiori informazioni, leggi la nostra
        <a href="/privacy-policy" target="_blank" className="text-white ml-1 hover:underline">
          Privacy Policy
        </a>.
      </p>
    </section>
  );
}
