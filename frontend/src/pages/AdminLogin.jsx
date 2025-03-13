import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // 🔹 Importiamo il contesto

export default function AdminLogin() {
  const { login } = useAuth(); // 🔹 Prendiamo la funzione login dal contesto
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      console.log("🔍 Tentativo di login con:", { email, password });

      const response = await fetch("http://localhost:8000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("📡 Risposta ricevuta:", response);
      console.log("📄 Dati ricevuti:", data);

      if (!response.ok) {
        throw new Error(data.error || "Errore durante il login");
      }

      // ✅ Salva il token con la funzione login del contesto
      login(data.token);
      console.log("✅ Token salvato:", data.token);

      // 🔄 Reindirizza alla dashboard
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-500">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">Accesso Admin</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-secondary-500 text-white p-2 rounded-md hover:bg-text-500 transition"
          >
            Accedi
          </button>
        </form>
      </div>
    </div>
  );
}
