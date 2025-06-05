import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function HomePage() {
  const navigate = useNavigate();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 11) return "Selamat Pagi 🌤️";
    if (hour < 15) return "Selamat Siang ☀️";
    if (hour < 18) return "Selamat Sore 🌇";
    return "Selamat Malam 🌙";
  };

  const stats = {
    total: 20,
    borrowed: 7,
    available: 13,
  };

  return (
    <div className="min-h-screen bg-base-100" data-theme="light">
      <main className="container mx-auto px-6 py-12">
        {/* Ucapan */}
        <section className="text-center mb-12">
          <h2 className="text-xl text-base-content/70 mb-2">{getGreeting()}</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Selamat Datang di Fast UPNVJ
          </h1>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Kelola peminjaman ruangan kampus dengan lebih cepat, mudah, dan transparan hanya dalam satu platform.
          </p>
        </section>

        {/* Statistik Ruangan */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-20">
          <div className="bg-primary text-primary-content rounded-xl p-8 shadow-lg">
            <div className="text-4xl mb-2">🏫</div>
            <p className="text-5xl font-bold">{stats.total}</p>
            <p className="mt-2 text-lg">Total Ruangan</p>
          </div>
          <div className="bg-warning text-warning-content rounded-xl p-8 shadow-lg">
            <div className="text-4xl mb-2">📅</div>
            <p className="text-5xl font-bold">{stats.borrowed}</p>
            <p className="mt-2 text-lg">Dipinjam</p>
          </div>
          <div className="bg-success text-success-content rounded-xl p-8 shadow-lg">
            <div className="text-4xl mb-2">✅</div>
            <p className="text-5xl font-bold">{stats.available}</p>
            <p className="mt-2 text-lg">Tersedia</p>
          </div>
        </section>

        {/* Panduan Peminjaman */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center text-base-content mb-10">
            Cara Meminjam Ruangan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-base-200 rounded-xl shadow">
              <div className="text-4xl mb-2">🔍</div>
              <h3 className="font-semibold text-lg">1. Telusuri Ruangan</h3>
              <p className="text-base-content/80">
                Cari ruangan yang sesuai dengan kebutuhan dan ketersediaan.
              </p>
            </div>
            <div className="text-center p-6 bg-base-200 rounded-xl shadow">
              <div className="text-4xl mb-2">📝</div>
              <h3 className="font-semibold text-lg">2. Isi Formulir</h3>
              <p className="text-base-content/80">
                Lengkapi data peminjaman dengan mudah melalui sistem.
              </p>
            </div>
            <div className="text-center p-6 bg-base-200 rounded-xl shadow">
              <div className="text-4xl mb-2">⏳</div>
              <h3 className="font-semibold text-lg">3. Tunggu Persetujuan</h3>
              <p className="text-base-content/80">
                Admin akan meninjau dan memberikan konfirmasi secara online.
              </p>
            </div>
            <div className="text-center p-6 bg-base-200 rounded-xl shadow">
              <div className="text-4xl mb-2">📩</div>
              <h3 className="font-semibold text-lg">4. Dapatkan Notifikasi</h3>
              <p className="text-base-content/80">
                Notifikasi akan dikirimkan langsung ke akunmu saat disetujui.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mb-10">
          <h3 className="text-2xl font-semibold text-base-content mb-4">
            Siap mulai meminjam ruangan dengan cepat dan mudah?
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
