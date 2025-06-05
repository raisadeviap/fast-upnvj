import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UpnLogo from "../assets/UPN.png"; // pastikan path ini sesuai
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // Simulasi nama pengguna, bisa diganti dengan context/auth state
  const userName = "Mahasiswa UPNVJ";

  return (
    <div className="flex flex-col min-h-screen bg-base-100" data-theme="light">
      <Navbar />
      <main className="flex-1 px-6 py-12 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto">

          {/* Header Welcome */}
          <div className="bg-white rounded-2xl shadow p-6 flex items-center justify-between mb-10">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-1">
                Selamat datang, {userName}! 🎉
              </h1>
              <p className="text-zinc-500">Anda telah berhasil login ke sistem peminjaman fasilitas kampus UPNVJ</p>
            </div>
            <img src={UpnLogo} alt="UPN Logo" className="h-16 w-auto hidden md:block" />
          </div>

          {/* Ringkasan Layanan */}
          <section>
            <h2 className="text-xl font-semibold text-zinc-800 mb-6">Layanan Cepat</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-base-200 rounded-xl p-5 shadow hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-3">🏛️</div>
                <h3 className="text-lg font-semibold text-zinc-800 mb-2">Peminjaman Gedung</h3>
                <p className="text-zinc-600 text-sm mb-4">Ajukan peminjaman aula, auditorium, atau gedung lainnya untuk keperluan resmi kampus.</p>
                <button
                  onClick={() => navigate("/gedung")}
                  className="text-lime-600 font-medium hover:underline"
                >
                  Lihat Detail →
                </button>
              </div>

              <div className="bg-base-200 rounded-xl p-5 shadow hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="text-lg font-semibold text-zinc-800 mb-2">Peminjaman Ruangan</h3>
                <p className="text-zinc-600 text-sm mb-4">Cek dan pinjam ruang kelas, ruang rapat, atau lab sesuai kebutuhan Anda.</p>
                <button
                  onClick={() => navigate("/ruangan")}
                  className="text-lime-600 font-medium hover:underline"
                >
                  Lihat Detail →
                </button>
              </div>

              <div className="bg-base-200 rounded-xl p-5 shadow hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-3">🗓️</div>
                <h3 className="text-lg font-semibold text-zinc-800 mb-2">Jadwal Peminjaman</h3>
                <p className="text-zinc-600 text-sm mb-4">Lihat jadwal fasilitas yang sudah dipesan dan hindari bentrok pemakaian.</p>
                <button
                  onClick={() => navigate("/jadwal")}
                  className="text-lime-600 font-medium hover:underline"
                >
                  Lihat Jadwal →
                </button>
              </div>
            </div>
          </section>

          {/* Info Tambahan */}
          <div className="mt-16 bg-white p-6 rounded-2xl border text-center shadow-sm">
            <h3 className="text-xl font-bold text-zinc-800 mb-2">Butuh Bantuan?</h3>
            <p className="text-zinc-600 mb-2">
              Jika mengalami kendala teknis atau butuh panduan, silakan kunjungi halaman panduan atau hubungi admin.
            </p>
            <button
              onClick={() => navigate("/panduan")}
              className="btn btn-outline btn-sm mt-2"
            >
              Lihat Panduan
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
