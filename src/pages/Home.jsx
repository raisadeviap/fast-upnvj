import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import Footer from "../components/Footer";

function HomePage() {
  const navigate = useNavigate();

  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Selamat Pagi 👋");
    else if (hour < 18) setGreeting("Selamat Sore ☀️");
    else setGreeting("Selamat Malam 🌙");
  }, []);

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
        {/* Logo & Header */}
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-2xl font-bold text-primary">Sistem Fast UPNVJ</h1>
        </div>

        {/* ...lanjutan kode */}
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
