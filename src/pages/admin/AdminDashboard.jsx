// src/pages/Admin/AdminDashboard.jsx
import { Outlet, NavLink } from 'react-router-dom';
import '../../App.css';

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-base-200 p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <ul className="menu space-y-2">
          <li>
            <NavLink to="/admin" end className={({ isActive }) => isActive ? "active text-primary" : ""}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/admin/users" className={({ isActive }) => isActive ? "active text-primary" : ""}>Kelola User</NavLink>
          </li>
          <li>
            <NavLink to="/admin/fasilitas" className={({ isActive }) => isActive ? "active text-primary" : ""}>Kelola Fasilitas</NavLink>
          </li>
          <li>
            <NavLink to="/admin/cekpinjam" className={({ isActive }) => isActive ? "active text-primary" : ""}>Pemeriksaan Peminjaman</NavLink>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-base-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
