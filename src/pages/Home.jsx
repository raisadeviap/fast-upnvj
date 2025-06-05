import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import LogoUPN from "../assets/logo-upn.png"; // pastikan path logo sesuai

function HomePage() {
  const navigate = useNavigate();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Selamat Siang 👋";
    if (hour < 18) return "Selamat Sore ☀️";
    return "Selamat Malam 🌙";
  };

  const stats = {
    gedungDipinjam: 6,
    ruanganTersedia: 14,
    jamTerpakai: 92,
  };

  const services = [
    { icon: "📅", title: "Peminjaman Ruangan", link: "/layanan/peminjaman" },
    { icon: "🧾", title: "Histori Penggunaan", link: "/layanan/histori" },
    { icon: "📊", title: "Laporan & Statistik", link: "/layanan/statistik" },
    { icon: "📌", title: "Persetujuan", link: "/layanan/persetujuan" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-100" data-theme="light">
      <main className="container mx-auto px-6 py-10">

        {/* Logo + Header */}
        <div className="flex items-center justify-center mb-4">
          <img src={LogoUPN} alt="Logo UPN" className="w-14 h-14 mr-2" />
          <h1 className="text-xl font-bold text-primary">Sistem Fast UPNVJ</h1>
        </div>

        {/* Greeting */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-base-content mb-2">
            {getGreeting()}
          </h2>
          <p className="text-lg text-base-content/70">
            Selamat datang di platform peminjaman fasilitas kampus yang modern dan efisien.
          </p>
        </section>

        {/* Statistik */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-center">
          <div className="bg-yellow-100 p-6 rounded-xl shadow-md hover:scale-105 transition">
            <div className="text-5xl mb-2">🏢</div>
            <h3 className="text-3xl font-bold">{stats.gedungDipinjam}</h3>
            <p className="text-base text-yellow-900 mt-1">Gedung Dipinjam</p>
          </div>
          <div className="bg-green-100 p-6 rounded-xl shadow-md hover:scale-105 transition">
            <div className="text-5xl mb-2">🛋️</div>
            <h3 className="text-3xl font-bold">{stats.ruanganTersedia}</h3>
            <p className="text-base text-green-900 mt-1">Ruangan Tersedia</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-xl shadow-md hover:scale-105 transition">
            <div className="text-5xl mb-2">⏰</div>
            <h3 className="text-3xl font-bold">{stats.jamTerpakai} Jam</h3>
            <p className="text-base text-blue-900 mt-1">Waktu Terpakai</p>
          </div>
        </section>

        {/* Layanan */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-10 text-base-content">
            Layanan Sistem Fast UPNVJ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {services.map((svc, index) => (
              <div
                key={index}
                onClick={() => navigate(svc.link)}
                className="cursor-pointer bg-base-200 hover:bg-base-300 p-6 rounded-xl text-center shadow transition"
              >
                <div className="text-4xl mb-3">{svc.icon}</div>
                <h3 className="text-lg font-semibold text-base-content">{svc.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
