import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function HomePage() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Selamat pagi';
    if (hour < 17) return 'Selamat siang';
    return 'Selamat malam';
  };

  return (
    <div className="min-h-screen bg-base-100" data-theme="light">
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">
          {getGreeting()}, 👋 Selamat datang di FAST UPNVJ!
        </h1>

        {/* Navigasi Cepat */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Ajukan Peminjaman', icon: '📝', link: '/peminjaman' },
            { label: 'Riwayat Peminjaman', icon: '📜', link: '/riwayat' },
            { label: 'Status Peminjaman', icon: '📊', link: '/status' },
            { label: 'Profil Saya', icon: '👤', link: '/profil' }
          ].map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="bg-base-200 hover:bg-base-300 transition-all rounded-xl p-6 shadow-md flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="text-lg font-semibold">{item.label}</div>
            </a>
          ))}
        </section>

        {/* Status Ringkasan */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Ringkasan Peminjaman Anda</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Total Peminjaman', count: 5 },
              { title: 'Menunggu Persetujuan', count: 1 },
              { title: 'Sedang Berlangsung', count: 2 }
            ].map((card, i) => (
              <div key={i} className="bg-primary text-primary-content p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-3xl font-bold mt-2">{card.count}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pengumuman */}
        <section className="bg-warning p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-2">📢 Pengumuman</h2>
          <p className="text-base">
            Sistem akan mengalami pemeliharaan pada tanggal <strong>10 Juni 2025</strong> pukul 22.00 - 23.00 WIB. 
            Harap tidak melakukan proses peminjaman selama waktu tersebut.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
