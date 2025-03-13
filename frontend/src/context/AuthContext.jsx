import { createContext, useContext, useState, useEffect } from "react";

// Creazione del contesto di autenticazione
const AuthContext = createContext();

// Hook personalizzato per usare il contesto ovunque
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 🔍 Controlla se esiste un token nel localStorage quando l'app parte
  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    setIsAuthenticated(!!token); // Converte il valore in booleano
  }, []);

  // ✅ Funzione di login: salva il token e aggiorna lo stato
  const login = (token) => {
    localStorage.setItem("admin_token", token);
    setIsAuthenticated(true);
  };

  // 🚪 Funzione di logout: rimuove il token e aggiorna lo stato
  const logout = () => {
    localStorage.removeItem("admin_token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
