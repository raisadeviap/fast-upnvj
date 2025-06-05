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
    <footer className="bg-[#008037] text-white px-8 py-10 mt-16 flex flex-col md:flex-row justify-between items-start">
      
      {/* Kiri: Logo dan deskripsi */}
      <div className="flex items-start space-x-4 mb-6 md:mb-0">
        <img src={Logo} alt="UPN Logo" width={60} height={60} className="shrink-0" />
        <div>
          <p className="font-semibold text-lg">FAST UPNVJ</p>
          <p className="text-sm">Website Peminjaman Fasilitas Kampus UPNVJ</p>
        </div>
      </div>

      {/* Tengah: Social media */}
      <div className="flex flex-col items-center w-full md:w-auto text-center">
  <h6 className="uppercase text-sm text-white font-semibold mb-3 px-4">Social</h6>
  <div className="flex space-x-5 justify-center">
    {/* Icon buttons di sini */}
          {/* Twitter */}
          <a href="#" aria-label="Twitter" className="hover:text-gray-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 
                       9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.945 
                       13.945 0 011.671 3.149a4.916 4.916 0 001.523 6.573A4.902 4.902 0 
                       01.964 9.1v.062a4.918 4.918 0 003.946 4.827 4.902 4.902 0 
                       01-2.212.084 4.922 4.922 0 004.596 3.417A9.867 9.867 0 
                       010 19.54a13.945 13.945 0 007.548 2.212c9.056 0 
                       14.01-7.496 14.01-13.986 0-.213-.004-.425-.014-.637A10.012 
                       10.012 0 0024 4.557z" />
            </svg>
          </a>

          {/* YouTube */}
          <a href="#" aria-label="YouTube" className="hover:text-gray-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M19.615 3.184A3.16 3.16 0 0017.49 2.1C15.388 1.95 12 
                       1.95 12 1.95s-3.388 0-5.49.15a3.16 3.16 0 00-2.125 1.084C3.539 
                       4.27 3.3 6.098 3.3 7.733v4.534c0 1.635.239 3.463.965 4.549a3.16 
                       3.16 0 002.125 1.084C8.612 18.05 12 18.05 12 18.05s3.388 0 
                       5.49-.15a3.16 3.16 0 002.125-1.084c.726-1.086.965-2.914.965-4.549V7.733c0-1.635-.239-3.463-.965-4.549zM9.75 
                       14.25V7.75l6 3.25-6 3.25z" />
            </svg>
          </a>

          {/* Facebook */}
          <a href="#" aria-label="Facebook" className="hover:text-gray-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.597 0 0 .6 0 
                       1.342v21.317C0 23.4.597 24 1.325 
                       24h11.497v-9.294H9.692V11.01h3.13V8.41c0-3.1 
                       1.894-4.788 4.659-4.788 1.325 
                       0 2.464.097 2.794.142v3.24l-1.918.001c-1.504 
                       0-1.796.716-1.796 1.765v2.31h3.587l-.467 
                       3.696h-3.12V24h6.116c.728 0 
                       1.325-.6 1.325-1.341V1.342C24 
                       .6 23.403 0 22.675 0z" />
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
