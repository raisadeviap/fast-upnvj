import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UpnLogo from "../assets/UPN.png"; // pastikan path ini benar

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-base-100" data-theme="light">
      <Navbar />
      <div className="flex flex-1 items-center justify-center bg-[#f8f8f8] py-12 px-4">
        <div className="bg-white p-8 rounded-2xl border border-[#f1f1f2] w-full max-w-4xl">
          {/* Logo dan Judul */}
          <div className="flex flex-col items-center mb-8">
            <img src={UpnLogo} alt="Logo UPNVJ" className="h-24 w-auto mb-4" />
            <h1 className="text-3xl font-bold text-center text-zinc-900">
              Selamat Datang di FAST UPNVJ
            </h1>
            <p className="mt-2 text-center text-neutral-600 text-base max-w-xl">
              Sistem informasi peminjaman fasilitas kampus yang cepat, efisien, dan terintegrasi untuk seluruh civitas akademika Universitas Pembangunan Nasional "Veteran" Jakarta.
            </p>
          </div>

          {/* Konten Informasi */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-base-200 rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="text-xl font-semibold text-zinc-800">Fasilitas Kampus</h3>
              <p className="text-neutral-600 mt-2 text-sm">
                Peminjaman gedung, aula, ruangan kelas, dan fasilitas pendukung kegiatan akademik & organisasi.
              </p>
            </div>

            <div className="bg-base-200 rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="text-xl font-semibold text-zinc-800">Manajemen Jadwal</h3>
              <p className="text-neutral-600 mt-2 text-sm">
                Sistem terintegrasi untuk pengecekan ketersediaan dan penjadwalan fasilitas.
              </p>
            </div>

            <div className="bg-base-200 rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl mb-3">📘</div>
              <h3 className="text-xl font-semibold text-zinc-800">Panduan & Dokumentasi</h3>
              <p className="text-neutral-600 mt-2 text-sm">
                Panduan lengkap penggunaan sistem dan alur permohonan peminjaman.
              </p>
            </div>
          </div>

          {/* Info Tambahan */}
          <div className="mt-12 border-t pt-6 text-center">
            <p className="text-neutral-600 text-sm">
              FAST dikembangkan oleh UPT TIK UPN "Veteran" Jakarta untuk mendukung transparansi dan efektivitas dalam tata kelola fasilitas kampus.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
