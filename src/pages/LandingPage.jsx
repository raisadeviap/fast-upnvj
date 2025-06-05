import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "../assets/img1.svg";
import AboutImage from "../assets/UPN.png";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-100" data-theme="light">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between min-h-[70vh] gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold text-base-content leading-tight">
              Solusi Peminjaman Fasilitas Kampus UPNVJ
            </h1>
            <p className="text-lg text-base-content/80">
              Sistem peminjaman fasilitas kampus yang cepat, mudah, dan
              terintegrasi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                className="btn btn-primary px-6 py-3 text-lg"
                onClick={() => navigate("/login")}
              >
                Ajukan Peminjaman
              </button>
              <button
                className="btn btn-outline px-6 py-3 text-lg"
                onClick={() => navigate("/panduan")}
              >
                Lihat Panduan
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={HeroImage}
              alt="Hero Section"
              className="w-full max-w-lg h-auto rounded-lg"
            />
          </div>
        </section>

        {/* About Section */}
        <section className="mt-20 bg-accent py-16 px-6 rounded-lg">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={AboutImage}
                alt="Tentang Kami"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 text-accent-content">
              <h2 className="text-4xl font-bold mb-4">Tentang Kami</h2>
              <p className="text-lg mb-4">
                Fast UPNVJ adalah platform digital inovatif untuk mempermudah
                proses peminjaman fasilitas kampus.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-2xl">🏛️</span>
                  <div>
                    <strong>Visi:</strong> Sistem peminjaman terintegrasi
                    terbaik di lingkungan UPNVJ.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <strong>Misi:</strong> Menyederhanakan proses administratif
                    dan meningkatkan aksesibilitas fasilitas kampus.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Layanan */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              icon="🏢"
              title="Peminjaman Gedung"
              desc="Untuk seminar, pelatihan, dan kegiatan besar."
            />
            <Card
              icon="🚪"
              title="Peminjaman Ruangan"
              desc="Kelas, laboratorium, ruang rapat, dll."
            />
            <Card
              icon="📅"
              title="Manajemen Jadwal"
              desc="Pantau dan atur jadwal peminjaman secara real-time."
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="card bg-base-200 shadow-lg text-center p-6">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="card-title mb-2">{title}</h3>
      <p className="text-base-content/80">{desc}</p>
    </div>
  );
}

export default HomePage;
