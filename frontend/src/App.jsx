import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import Showcase from "./pages/Showcase";
import DashboardHome from "./pages/DashboardHome";
import DashboardOrders from "./pages/DashboardOrders";
import DashboardGallery from "./pages/DashboardGallery";
import PageLoader from "./components/PageLoader"; // Importiamo il loader

export default function App() {
  return (
    <Router>
      <PageLoaderWrapper />
    </Router>
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
        <Route path="/" element={<HomePage />} />
        <Route path="/vetrina" element={<Showcase />} />
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/dashboard/orders" element={<DashboardOrders />} />
        <Route path="/dashboard/gallery" element={<DashboardGallery />} />
      </Routes>
    </>
  );
}
