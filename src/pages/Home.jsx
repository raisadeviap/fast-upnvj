import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="min-h-screen bg-base-100" data-theme="light">
      <Navbar />
      <main className="container mx-auto px-4 py-10">

        {/* Judul */}
        <h1 className="text-4xl font-bold text-center mb-10">
          Selamat Datang di FAST UPNVJ
        </h1>

        {/* Info Sistem */}
        <section className="mb-16">
          <p className="text-lg text-center max-w-3xl mx-auto">
            FAST (Fasilitas Sistem Terpadu) UPN "Veteran" Jakarta adalah platform resmi untuk mengelola peminjaman gedung dan ruangan kampus. 
            Sistem ini dirancang untuk memudahkan civitas akademika dalam melakukan peminjaman secara efisien dan transparan.
          </p>
        </section>

        {/* Fitur Utama */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-center">Fitur Unggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-2">Peminjaman Gedung</h3>
              <p>Ajukan peminjaman gedung untuk kegiatan kampus dengan sistem terintegrasi.</p>
            </div>
            <div className="card bg-base-200 shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">📆</div>
              <h3 className="text-xl font-semibold mb-2">Manajemen Jadwal</h3>
              <p>Periksa ketersediaan ruangan dan kelola jadwal kegiatan secara real-time.</p>
            </div>
            <div className="card bg-base-200 shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">Panduan & Bantuan</h3>
              <p>Akses informasi dan tata cara penggunaan sistem melalui panduan yang tersedia.</p>
            </div>
          </div>
        </section>

        {/* Jadwal atau Informasi Umum */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-center">Informasi Terbaru</h2>
          <div className="bg-warning text-warning-content p-6 rounded-xl text-center shadow-md max-w-2xl mx-auto">
            🔔 Pemeliharaan sistem dijadwalkan pada 10 Juni 2025 pukul 22.00 – 23.00 WIB. Mohon tidak melakukan peminjaman selama waktu tersebut.
          </div>
        </section>

        {/* CTA Umum */}
        <section className="text-center">
          <h3 className="text-xl font-semibold mb-4">Ingin meminjam fasilitas kampus?</h3>
          <a href="/login" className="btn btn-primary text-lg px-6 py-3">Ajukan Sekarang</a>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
