import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function HomePage() {
  const navigate = useNavigate();

  // Fungsi untuk ucapan berdasarkan jam
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 11) return "Selamat Pagi 👋";
    if (hour < 15) return "Selamat Siang ☀️";
    if (hour < 18) return "Selamat Sore 🌇";
    return "Selamat Malam 🌙";
  };

  // Data statistik dummy
  const stats = {
    total: 20,
    borrowed: 7,
    available: 13,
  };

  return (
    <div className="min-h-screen bg-base-100" data-theme="light">
      <main className="container mx-auto px-6 py-12">
        {/* Ucapan dan Sambutan */}
        <section className="text-center mb-12">
          <h2 className="text-xl text-base-content/70 mb-2">{getGreeting()}</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Selamat Datang di Fast UPNVJ
          </h1>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Platform modern dan responsif untuk peminjaman ruangan dan fasilitas
            kampus secara praktis, aman, dan transparan.
          </p>
        </section>

        {/* Statistik */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-20">
          <div className="bg-primary text-primary-content rounded-xl p-8 shadow-md">
            <p className="text-5xl font-bold">{stats.total}</p>
            <p className="mt-2 text-lg">Total Ruangan</p>
          </div>
          <div className="bg-warning text-warning-content rounded-xl p-8 shadow-md">
            <p className="text-5xl font-bold">{stats.borrowed}</p>
            <p className="mt-2 text-lg">Dipinjam</p>
          </div>
          <div className="bg-success text-success-content rounded-xl p-8 shadow-md">
            <p className="text-5xl font-bold">{stats.available}</p>
            <p className="mt-2 text-lg">Tersedia</p>
          </div>
        </section>

        {/* Ajakan */}
        <section className="text-center mb-24">
          <h3 className="text-2xl font-semibold text-base-content mb-4">
            Ingin mengelola peminjaman dengan lebih efisien?
          </h3>
          <button
            onClick={() => navigate("/login")}
            className="btn btn-primary text-lg px-10 py-3"
          >
            Masuk Sekarang
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
