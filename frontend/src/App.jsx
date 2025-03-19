import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import HomePage from "./components/HomePage";
import Showcase from "./pages/Showcase";
import OrderForm from "./pages/OrderForm";
import ChiSono from "./pages/ChiSono";
import DashboardHome from "./pages/DashboardHome";
import DashboardOrders from "./pages/DashboardOrders";
import DashboardGallery from "./pages/DashboardGallery";
import AdminLogin from "./pages/AdminLogin";
import PageLoader from "./components/PageLoader";

// 🔹 Componente per proteggere le rotte della dashboard
const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/admin" replace />;
};

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <PageLoaderWrapper />
      </Router>
    </AuthProvider>
  );
}

// ⬇️ Wrapper per gestire il Loader durante la navigazione
function PageLoaderWrapper() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <PageLoader />}
      <Routes>
        {/* Rotte pubbliche */}
        <Route path="/" element={<HomePage />} />
        <Route path="/vetrina" element={<Showcase />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/ordina" element={<OrderForm />} />
        <Route path="/chi-sono" element={<ChiSono />} />


        {/* 🔐 Rotte protette per la Dashboard */}
        <Route path="/dashboard" element={<ProtectedRoute element={<DashboardHome />} />} />
        <Route path="/dashboard/orders" element={<ProtectedRoute element={<DashboardOrders />} />} />
        <Route path="/dashboard/gallery" element={<ProtectedRoute element={<DashboardGallery />} />} />
      </Routes>
    </>
  );
}
