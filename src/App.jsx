import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import AjukanPeminjaman from "./pages/AjukanPeminjaman";

// Admin Layout and Pages
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import DashboardHome from './pages/admin/DashboardHome.jsx';
import Users from './pages/admin/Users.jsx';
import Fasilitas from './pages/admin/Fasilitas.jsx';
import Cek from './pages/admin/CekPinjam.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ajukan-peminjaman" element={<AjukanPeminjaman />} />

        {/* Admin Nested Routes */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<DashboardHome />} /> {/* /admin */}
          <Route path="users" element={<Users />} /> {/* /admin/users */}
          <Route path="fasilitas" element={<Fasilitas />} /> {/* /admin/fasilitas */}
          <Route path="cekpinjam" element={<Cek />} /> {/* /admin/cekpinjam */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App
