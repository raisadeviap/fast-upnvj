import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/UPN.png";
import { FunnelIcon } from '@heroicons/react/24/solid';
import HeroImage from "../assets/img1.svg";

const Fasilitas = [
   {
    title: 'Auditorium Bhineka Tunggal Ika',
    kapasitas: '300 orang',
    gedung: 'Plaza Soedirman',
    image: HeroImage, // simpan hanya path atau import-nya
  },
  { title: 'Auditorium Wahidin Sudiro Husodo', kapasitas: '100 orang', gedung: 'Wahidin Sudiro Husodo' },
  { title: 'Auditorium Dr. Cipto Mangun Kusumo', kapasitas: '200 orang', gedung: 'Dr. Cipto Mangun Kusumo' },
  { title: 'Auditorium MERCe', kapasitas: '100 orang', gedung: 'MERCe Kampus Limo' },
  { title: 'Ruang Podcast FH', kapasitas: '5 orang', gedung: 'Yos Sudarso' },
  { title: 'Ruang Podcast FIK', kapasitas: '5 orang', gedung: 'Ki Hajar Dewantara' },
  { title: 'Ruang Podcast FIKES', kapasitas: '5 orang', gedung: 'FIKES Kampus Limo' },
  { title: 'Lab Terpadu', kapasitas: '50 orang', gedung: 'Perpustakaan Lt. 2' },
  { title: 'Ubin Cokelat', kapasitas: '200 orang', gedung: 'FEB Kampus Pondok Labu' },
  { title: 'Lapangan Basket', kapasitas: '200 orang', gedung: 'Kampus Pondok Labu' }
];

// Navbar Komponen
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
            <Link to="/" className="hover:text-primary transition-colors">Beranda</Link>
            <Link to="/" className="hover:text-primary transition-colors">Tentang Kami</Link>
            <Link to="/" className="hover:text-primary transition-colors">Layanan</Link>
          </div>
          <button onClick={() => navigate('/login')} className="btn btn-primary btn-sm md:btn-md">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

// Footer Komponen
function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-accent text-accent-content p-10 mt-16">
      <aside>
        <img src={Logo} alt="UPN Logo" width={50} height={50} className="mb-2" />
        <p>
          FAST UPNVJ
          <br />
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

// Halaman Fasilitas
export default function FasilitasPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        {/* Sidebar Filter */}
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
              <option value="gte50">&gt;= 50 orang</option>
            </select>
          </div>

          <button className="w-full bg-orange-500 text-white text-sm py-2 rounded hover:bg-orange-600 transition">
            Reset Filter
          </button>
        </aside>

        {/* Grid Fasilitas */}
        <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Fasilitas.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-1">Kapasitas: {item.kapasitas}</p>
              <p className="text-sm text-gray-500">Gedung: {item.gedung}</p>
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
}
