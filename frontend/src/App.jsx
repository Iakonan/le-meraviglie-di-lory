import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import DashboardHome from "./pages/DashboardHome";
import DashboardOrders from "./pages/DashboardOrders";
import DashboardGallery from "./pages/DashboardGallery";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/dashboard/orders" element={<DashboardOrders />} />
        <Route path="/dashboard/gallery" element={<DashboardGallery />} />
      </Routes>
    </Router>
  );
}
