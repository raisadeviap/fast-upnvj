// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-white shadow-md px-4">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold text-primary">
          FAST UPNVJ
        </Link>
      </div>
      <div className="hidden md:flex gap-4 text-base font-medium text-base-content">
        <Link to="/">Beranda</Link>
        <Link to="/layanan/peminjaman">Peminjaman</Link>
        <Link to="/layanan/histori">Histori</Link>
        <Link to="/layanan/statistik">Statistik</Link>
        <Link to="/layanan/persetujuan">Persetujuan</Link>
      </div>
    </div>
  );
}

export default Navbar;

// src/pages/HomePage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroImage from "../assets/img1.svg";

function HomePage() {
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Selamat Pagi 👋");
    else if (hour < 18) setGreeting("Selamat Siang ☀️");
    else setGreeting("Selamat Malam 🌙");
  }, []);

  const stats = [
    { id: 1, icon: "🏢", label: "Gedung Dipinjam", value: 6, color: "text-primary" },
    { id: 2, icon: "🛋️", label: "Ruangan Tersedia", value: 14, color: "text-secondary" },
    { id: 3, icon: "⏰", label: "Jam Terpakai", value: 92, color: "text-accent" },
  ];

  const services = [
    { id: 1, icon: "📅", title: "Peminjaman Ruangan", link: "/layanan/peminjaman" },
    { id: 2, icon: "🧾", title: "Histori Penggunaan", link: "/layanan/histori" },
    { id: 3, icon: "📊", title: "Laporan & Statistik", link: "/layanan/statistik" },
    { id: 4, icon: "📌", title: "Persetujuan", link: "/layanan/persetujuan" },
  ];

  return (
    <div className="min-h-screen bg-base-100" data-theme="light">
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        {/* Hero */}
        <section className="flex flex-col md:flex-row items-center justify-between min-h-[60vh] gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-base-content leading-tight">
              {greeting} <br />
              <span className="block">Selamat datang di</span>
              <span className="block text-primary">Sistem Fast UPNVJ</span>
            </h1>
            <p className="text-lg text-base-content/80 mt-4">
              Sistem informasi peminjaman fasilitas UPNVJ yang cepat, terintegrasi, dan user-friendly.
            </p>
            <div className="flex gap-4 mt-6">
              <button className="btn btn-primary" onClick={() => navigate("/layanan/peminjaman")}>Ajukan Peminjaman</button>
              <button className="btn btn-outline" onClick={() => navigate("/layanan/statistik")}>Lihat Statistik</button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={HeroImage} alt="Ilustrasi" className="w-full max-w-md rounded-lg" />
          </div>
        </section>

        {/* Statistik */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-10">Statistik Penggunaan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map(({ id, icon, label, value, color }) => (
              <div key={id} className="card bg-base-200 shadow-xl p-6 text-center">
                <div className={`text-5xl mb-3 ${color}`}>{icon}</div>
                <div className="text-3xl font-bold">
                  <CountUp end={value} duration={2} />
                </div>
                <p className="mt-2 text-base-content/70">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Layanan */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-10">Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {services.map(({ id, icon, title, link }) => (
              <button key={id} onClick={() => navigate(link)} className="card bg-base-200 hover:shadow-lg transition shadow p-6 flex flex-col items-center">
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="text-lg font-semibold text-base-content">{title}</h3>
              </button>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;