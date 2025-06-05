import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function HomePage() {
  const navigate = useNavigate();

  // Data dummy contoh statistik dan informasi ruangan
  const stats = {
    totalRooms: 20,
    borrowedRooms: 8,
    availableRooms: 12,
  };

  const rooms = [
    {
      name: "Ruang Rapat A",
      building: "Gedung Rektorat",
      capacity: 30,
      status: "Dipinjam",
    },
    {
      name: "Lab Komputer 1",
      building: "Gedung Fakultas Teknik",
      capacity: 25,
      status: "Tersedia",
    },
    {
      name: "Aula Utama",
      building: "Gedung Serbaguna",
      capacity: 100,
      status: "Dipinjam",
    },
    {
      name: "Ruang Seminar B",
      building: "Gedung Pascasarjana",
      capacity: 50,
      status: "Tersedia",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100" data-theme="light">
      <main className="container mx-auto px-4 py-10">
        {/* Sambutan */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Selamat Datang di Sistem Peminjaman Fasilitas UPNVJ
          </h1>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Kelola peminjaman ruangan kampus secara praktis, cepat, dan
            transparan.
          </p>
        </section>

        {/* Statistik Ruangan */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-base-200 rounded-xl p-6 shadow text-center">
            <h2 className="text-2xl font-semibold text-primary mb-2">
              Total Ruangan
            </h2>
            <p className="text-4xl font-bold">{stats.totalRooms}</p>
          </div>
          <div className="bg-base-200 rounded-xl p-6 shadow text-center">
            <h2 className="text-2xl font-semibold text-warning mb-2">
              Dipinjam
            </h2>
            <p className="text-4xl font-bold">{stats.borrowedRooms}</p>
          </div>
          <div className="bg-base-200 rounded-xl p-6 shadow text-center">
            <h2 className="text-2xl font-semibold text-success mb-2">
              Tersedia
            </h2>
            <p className="text-4xl font-bold">{stats.availableRooms}</p>
          </div>
        </section>

        {/* Informasi Ruangan */}
        <section>
          <h2 className="text-3xl font-bold text-base-content mb-8 text-center">
            Informasi Ruangan & Gedung
          </h2>
          <div className="overflow-x-auto">
            <table className="table w-full bg-base-200 rounded-xl shadow">
              <thead>
                <tr className="text-base-content/80">
                  <th>Nama Ruangan</th>
                  <th>Gedung</th>
                  <th>Kapasitas</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room, index) => (
                  <tr key={index}>
                    <td>{room.name}</td>
                    <td>{room.building}</td>
                    <td>{room.capacity} orang</td>
                    <td>
                      <span
                        className={`badge ${
                          room.status === "Dipinjam"
                            ? "badge-warning"
                            : "badge-success"
                        }`}
                      >
                        {room.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Aksi */}
        <section className="mt-16 text-center">
          <p className="text-lg mb-4">
            Login untuk mulai melakukan peminjaman fasilitas
          </p>
          <button
            onClick={() => navigate("/login")}
            className="btn btn-primary text-lg px-8 py-3"
          >
            Masuk ke Sistem
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
