import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/UPN.png";

const categories = [
  'Elektronik',
  'Konsol Game',
  'Aksesoris Konsol',
  'Alat Casting',
  'Foot Bath & Spa',
  'Mesin Jahit & Aksesoris',
  'Lainnya'
];

const products = [
  {
    title: 'Blender Chopper Daging Stainless',
    price: 'Rp58.000',
    image: 'https://via.placeholder.com/150',
    discount: '52%',
  },
  {
    title: 'Booster TV Penguat Sinyal Antena',
    price: 'Rp12.999',
    image: 'https://via.placeholder.com/150',
    discount: '57%',
  },
  {
    title: 'Bracket TV LCD LED 14 s/d 42 inch',
    price: 'Rp33.200',
    image: 'https://via.placeholder.com/150',
    discount: '27%',
  },
  {
    title: 'PCB LED ACR 5-40W',
    price: 'Rp5.300',
    image: 'https://via.placeholder.com/150',
    discount: '',
  },
  {
    title: 'Blender Kapsul Capsule Cutter',
    price: 'Rp63.999',
    image: 'https://via.placeholder.com/150',
    discount: '54%',
  }
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
            <Link to="/" className="relative group hover:text-primary transition-colors">
              Beranda
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/" className="relative group hover:text-primary transition-colors">
              Tentang Kami
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/" className="relative group hover:text-primary transition-colors">
              Layanan
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
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
          <a><svg xmlns="http://www.w3.org/2000/svg" className="fill-current" viewBox="0 0 24 24" width="24" height="24"><path d="M24 4.557c..."/></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" className="fill-current" viewBox="0 0 24 24" width="24" height="24"><path d="M19.615 3.184c..."/></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" className="fill-current" viewBox="0 0 24 24" width="24" height="24"><path d="M9 8h-3v4h3v12h5..."/></svg></a>
        </div>
      </nav>
    </footer>
  );
}

// Halaman Utama
export default function ProductPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-100 p-4 border-r">
          <h2 className="text-lg font-bold mb-4">Semua Kategori</h2>
          <ul className="space-y-2">
            {categories.map((cat, i) => (
              <li key={i} className="text-sm text-gray-700 hover:text-orange-600 cursor-pointer">
                {cat === 'Elektronik' ? <strong className="text-orange-600">{cat}</strong> : cat}
              </li>
            ))}
          </ul>
          <h3 className="mt-8 mb-2 text-sm font-semibold">FILTER</h3>
          <p className="text-xs text-gray-500">Lokasi</p>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex gap-2 mb-4">
            <button className="px-3 py-1 bg-gray-200 rounded">Urutkan</button>
            <button className="px-3 py-1 bg-orange-500 text-white rounded">Populer</button>
            <button className="px-3 py-1 bg-gray-200 rounded">Terbaru</button>
            <button className="px-3 py-1 bg-gray-200 rounded">Terlaris</button>
            <button className="px-3 py-1 bg-gray-200 rounded">Harga ▼</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {products.map((product, i) => (
              <div key={i} className="relative border rounded-lg p-2 shadow hover:shadow-lg">
                {product.discount && (
                  <span className="absolute right-2 top-2 text-red-500 text-xs">-{product.discount}</span>
                )}
                <img src={product.image} alt={product.title} className="w-full h-32 object-cover mb-2" />
                <h4 className="text-sm font-semibold mb-1">{product.title}</h4>
                <p className="text-red-500 font-bold">{product.price}</p>
                <p className="text-xs text-gray-500">10RB+ terjual</p>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
