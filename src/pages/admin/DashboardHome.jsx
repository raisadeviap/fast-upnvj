import { useEffect, useState } from "react";

const DashboardHome = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalFasilitas, setTotalFasilitas] = useState(0);
  const [peminjamanAktif, setPeminjamanAktif] = useState(0); // sementara dummy

  useEffect(() => {
    fetchUsers();
    fetchFasilitas();
    fetchPeminjamanAktif(); // nanti bisa disambung ke API jika tersedia
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/users");
      const data = await res.json();
      setTotalUsers(data.length);
    } catch (err) {
      console.error("Gagal ambil data user:", err);
    }
  };

  const fetchFasilitas = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/fasilitas");
      const data = await res.json();
      setTotalFasilitas(data.length);
    } catch (err) {
      console.error("Gagal ambil data fasilitas:", err);
    }
  };

  const fetchPeminjamanAktif = () => {
    // dummy sampai ada model peminjaman di backend
    setPeminjamanAktif(18);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Statistik Admin</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-primary text-white p-4 rounded-xl shadow">
          Total User: {totalUsers}
        </div>
        <div className="bg-secondary text-white p-4 rounded-xl shadow">
          Total Fasilitas: {totalFasilitas}
        </div>
        <div className="bg-accent text-white p-4 rounded-xl shadow">
          Peminjaman Aktif: {peminjamanAktif}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
