import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/UPN.png";
import { FunnelIcon } from '@heroicons/react/24/solid';

const Fasilitas = [
  // ... (data fasilitas tetap sama)
];

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="UPNVJ Logo" className="h-12" />
            <span className="ml-3 text-xl font-semibold">FAST UPNVJ</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-[#5dac00] transition-colors">Beranda</Link>
            <Link to="/peminjaman" className="hover:text-[#5dac00] transition-colors font-bold">Peminjaman</Link>
            <Link to="/tentang-kami" className="hover:text-[#5dac00] transition-colors">Tentang Kami</Link>
          </div>
          <button
            onClick={() => navigate('/login')}
            className="bg-[#5dac00] text-white text-base font-semibold px-5 py-3 rounded-full shadow-md hover:bg-[#4b8c00] transition"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-accent text-accent-content p-10 mt-16">
      <aside>
        <img src={Logo} alt="UPN Logo" width={50} height={50} className="mb-2" />
        <p>
          FAST UPNVJ<br />
          Website Peminjaman Fasilitas Kampus UPNVJ
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a><svg xmlns="http://www.w3.org/2000/svg" className="fill-current" viewBox="0 0 24 24" width="24" height="24"><path d="..." /></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" className="fill-current" viewBox="0 0 24 24" width="24" height="24"><path d="..." /></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" className="fill-current" viewBox="0 0 24 24" width="24" height="24"><path d="..." /></svg></a>
        </div>
      </nav>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-100 p-4 border-r space-y-6">
          <h2 className="text-lg font-bold flex items-center space-x-2">
            <FunnelIcon className="w-5 h-5 text-gray-600" />
            <span>Filter Fasilitas</span>
          </h2>
          <div>
            <h3 className="text-sm font-semibold mb-2">Jenis Fasilitas</h3>
            {['Auditorium', 'Ruang Podcast', 'Lab', 'Lapangan'].map((jenis, i) => (
              <label key={i} className="flex items-center space-x-2 text-sm text-gray-700">
                <input type="checkbox" className="accent-orange-500" />
                <span>{jenis}</span>
              </label>
            ))}
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Lokasi/Gedung</h3>
            <select className="w-full border-gray-300 rounded px-3 py-2 text-sm">
              <option>Semua Lokasi</option>
              <option>Kampus Limo</option>
              <option>Pondok Labu</option>
            </select>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Kapasitas</h3>
            <select className="w-full border-gray-300 rounded px-3 py-2 text-sm">
              <option value="lt50">&lt; 50 orang</option>
              <option value="gte50">&gt; 50 orang</option>
            </select>
          </div>
          <button className="w-full bg-[#5dac00] text-white text-sm py-2 rounded hover:bg-[#4b8c00] transition">
            Reset Filter
          </button>
        </aside>

        <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Fasilitas.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold text-[#5dac00]">{item.title}</h3>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  📍 <span className="text-gray-700">{item.gedung}</span>
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  👥 <span>{item.kapasitas}</span>
                </p>
                <button className="mt-2 w-full bg-[#5dac00] text-white text-sm py-1.5 rounded-full hover:bg-[#4b8c00] transition">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
}
