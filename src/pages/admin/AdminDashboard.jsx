// src/pages/Admin/AdminDashboard.jsx
import { Outlet, NavLink } from 'react-router-dom';
// Pastikan path ini sesuai
import '../../App.css';
import NavbarLoggedIn from '../../components/NavbarLoggedin';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <NavbarLoggedIn />

      {/* Sidebar + Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-base-200 p-4">
          <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
          <ul className="menu space-y-2">
            <li>
              <NavLink
                to="/admin"
                end
                className={({ isActive }) =>
                  isActive ? 'active text-primary font-semibold' : ''
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/users"
                className={({ isActive }) =>
                  isActive ? 'active text-primary font-semibold' : ''
                }
              >
                Kelola User
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/fasilitas"
                className={({ isActive }) =>
                  isActive ? 'active text-primary font-semibold' : ''
                }
              >
                Kelola Fasilitas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/cekpinjam"
                className={({ isActive }) =>
                  isActive ? 'active text-primary font-semibold' : ''
                }
              >
                Pemeriksaan Peminjaman
              </NavLink>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-base-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
