import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeIllustration from "../assets/img2.svg";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-100" data-theme="light">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Header Welcome */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Selamat Datang di Fast UPNVJ
          </h1>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Satu platform terpadu untuk mengelola seluruh peminjaman fasilitas
            kampus dengan efisien dan transparan.
          </p>
        </section>

        {/* Ilustrasi dan Deskripsi */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-base-content">
              Kenapa Memilih Fast UPNVJ?
            </h2>
            <ul className="list-disc list-inside text-lg text-base-content/80 space-y-2">
              <li>🕒 Hemat waktu dan proses otomatis</li>
              <li>✅ Persetujuan online dan transparan</li>
              <li>📱 Tampilan yang ramah pengguna dan responsif</li>
              <li>🔒 Keamanan dan kontrol akses terjamin</li>
            </ul>
            <button
              onClick={() => navigate("/login")}
              className="btn btn-primary mt-6 px-8 py-3 text-lg"
            >
              Mulai Sekarang
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={HomeIllustration}
              alt="Keunggulan Fast UPNVJ"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* Highlight Fitur */}
        <section className="py-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-base-content">
            Fitur Unggulan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-md">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-3">📊</div>
                <h3 className="card-title">Dashboard Pemantauan</h3>
                <p>Lihat status dan riwayat peminjaman secara real-time.</p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-md">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-3">📌</div>
                <h3 className="card-title">Notifikasi & Reminder</h3>
                <p>
                  Dapatkan pemberitahuan terkait jadwal dan konfirmasi otomatis.
                </p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-md">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-3">🔍</div>
                <h3 className="card-title">Pencarian Cepat</h3>
                <p>
                  Temukan fasilitas yang tersedia sesuai kebutuhanmu hanya dalam
                  beberapa klik.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-24 text-center">
          <h3 className="text-2xl font-semibold text-base-content mb-4">
            Siap mengelola fasilitas dengan lebih mudah?
          </h3>
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
