import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/UPN.png";
import { FunnelIcon } from '@heroicons/react/24/solid';

const Fasilitas = [
  {
    title: 'Auditorium Bhineka Tunggal Ika',
    kapasitas: '300 orang',
    gedung: 'Plaza Soedirman',
    image: 'https://www.upnvj.ac.id/en/files/large/5fe91f59d3da4d824097b0b5bb994e69',
  },
  { 
    title: 'Auditorium Wahidin Sudiro Husodo', 
    kapasitas: '100 orang', 
    gedung: 'Wahidin Sudiro Husodo',
    image: 'https://fk.upnvj.ac.id/wp-content/uploads/2022/04/IMG_2038-scaled.jpg',
  },
  { 
    title: 'Auditorium Dr. Cipto Mangun Kusumo', 
    kapasitas: '200 orang', 
    gedung: 'Dr. Cipto Mangun Kusumo',
    image: 'https://fk.upnvj.ac.id/wp-content/uploads/2022/11/IMG_7937-scaled.jpg',
  },
  { 
    title: 'Auditorium MERCe', 
    kapasitas: '100 orang', 
    gedung: 'MERCe Kampus Limo',
    image: 'https://merce-fk.upnvj.ac.id/wp-content/uploads/photo-gallery/imported_from_media_libray/IMG_3839-min-scaled.jpg?bwg=1693216594'},
  { 
    title: 'Ruang Podcast FH', 
    kapasitas: '5 orang', 
    gedung: 'Yos Sudarso',
    image: 'https://hukum.upnvj.ac.id/wp-content/uploads/2022/06/RuangPODCAST-LT-4-1024x799.jpeg' 
  },
  { 
    title: 'Ruang Podcast FIK', 
    kapasitas: '5 orang', 
    gedung: 'Ki Hajar Dewantara',
    image: 'https://new-fik.upnvj.ac.id/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-07-at-15.44.52.jpeg'
  },
  { 
    title: 'Ruang Podcast FIKES', 
    kapasitas: '5 orang', 
    gedung: 'FIKES Kampus Limo',
    image: 'https://fikes.upnvj.ac.id/id/files/thumb/93ef38f7d710dc957cf1d23c2808d1da/520/fit',
  },
  {
    title: 'Ruang Podcast FK',
    kapasitas: '5 orang',
    gedung: 'FK Kampus Pondok Labu',
    image: 'https://fk.upnvj.ac.id/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-07-at-10.04.34.jpeg',
  },
  {
    title: 'Ruang Podcast FISIP',
    kapasitas: '5 orang',
    gedung: 'FISIP',
    image: 'https://fisip.upnvj.ac.id/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-12-at-15.12.39.jpeg',
  },
  {
    title: 'Ruang Podcast FEB',
    kapasitas: '5 orang',
    gedung: 'FEB',
    image: ' https://i.ytimg.com/vi/raX3zgh1WtE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH0CYAC0AWKAgwIABABGHIgVCgrMA8=&rs=AOn4CLC4YIUaKil03CaPp4rsQlmzBv5P9whttps://fisip.upnvj.ac.id/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-12-at-15.12.39.jpeg',
  },
  { 
    title: 'Lab Terpadu', 
    kapasitas: '50 orang', 
    gedung: 'Perpustakaan Lt. 2',
    image: 'https://uptlabterpadu.upnvj.ac.id/wp-content/uploads/2023/08/Kegiatan-Perkuliahan-FIK-28-08-2023-01.jpeg'
},
  { 
    title: 'Ubin Cokelat', 
    kapasitas: '200 orang', 
    gedung: 'FEB Kampus Pondok Labu',
    image: 'https://feb.upnvj.ac.id/wp-content/uploads/2024/12/328.jpg',
  },
  { 
    title: 'Lapangan Basket', 
    kapasitas: '200 orang', 
    gedung: 'Kampus Pondok Labu',
    image: 'https://cdn.idntimes.com/content-images/community/2022/07/aironebball-150630392-1387338378274022-5515620263307717663-n-4b05e1ad11e871221e4135e0f2a9a211-6e991a6de4e6b086ea74264517fdd7a3.jpg',
},
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
  <Link to="/peminjaman" className="hover:text-[#5dac00] transition-colors">
    <strong>Peminjaman</strong>
  </Link>
  <Link to="/tentang-kami" className="hover:text-[#5dac00] transition-colors">Tentang Kami</Link>
</div>

<button
  onClick={() => navigate('/login')}
  className="bg-[#5dac00] text-white text-base font-semibold px-5 py-3 rounded-full shadow-md hover:bg-[#4b8c00] transition">
  Login
</button>


        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-green-700 text-white px-10 py-10 mt-16 flex flex-col md:flex-row justify-between items-center">
      {/* Kiri: Logo dan teks */}
      <div className="flex items-start space-x-4 mb-6 md:mb-0">
        <img src={Logo} alt="UPN Logo" width={60} height={60} className="shrink-0" />
        <div>
          <p className="font-semibold">FAST UPNVJ</p>
          <p className="text-sm">Website Peminjaman Fasilitas Kampus UPNVJ</p>
        </div>
      </div>

      {/* Tengah: kosong untuk spacing (optional) */}
      <div className="hidden md:block flex-1" />

      {/* Kanan: Social media */}
      <div className="text-center">
        <h6 className="uppercase text-sm text-gray-300 mb-2">Social</h6>
        <div className="flex justify-center space-x-4">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775..." />
            </svg>
          </a>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M19.615 3.184A3.16 3.16 0 0 0..." />
            </svg>
          </a>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.597 0 0..." />
            </svg>
          </a>
        </div>
      </div>
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
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
    >
      <div className="relative">
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-44 object-cover"
          />
        )}
        <div className="absolute top-2 left-2 bg-[#5dac00] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {item.kapasitas}
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#5dac00] transition">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600 mb-1">{item.gedung}</p>
      </div>
    </div>
  ))}
</main>
      </div>
      <Footer />
    </div>
  );
}
