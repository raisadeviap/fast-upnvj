import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/UPN.png";
import { FunnelIcon } from "@heroicons/react/24/solid";
import Footer from "../components/Footer";
import { Fasilitas } from "./dataFasilitas"; 

const Fasilitas = [
  {
    title: "Auditorium Bhineka Tunggal Ika",
    kapasitas: "300 orang",
    gedung: "Plaza Soedirman",
    image:
      "https://www.upnvj.ac.id/en/files/large/5fe91f59d3da4d824097b0b5bb994e69",
  },
  {
    title: "Auditorium Wahidin Sudiro Husodo",
    kapasitas: "100 orang",
    gedung: "Wahidin Sudiro Husodo",
    image:
      "https://fk.upnvj.ac.id/wp-content/uploads/2022/04/IMG_2038-scaled.jpg",
  },
  {
    title: "Auditorium Dr. Cipto Mangun Kusumo",
    kapasitas: "200 orang",
    gedung: "Dr. Cipto Mangun Kusumo",
    image:
      "https://fk.upnvj.ac.id/wp-content/uploads/2022/11/IMG_7937-scaled.jpg",
  },
  {
    title: "Auditorium MERCe",
    kapasitas: "100 orang",
    gedung: "MERCe Kampus Limo",
    image:
      "https://merce-fk.upnvj.ac.id/wp-content/uploads/photo-gallery/imported_from_media_libray/IMG_3839-min-scaled.jpg?bwg=1693216594",
  },
  {
    title: "Ruang Podcast FH",
    kapasitas: "5 orang",
    gedung: "Yos Sudarso",
    image:
      "https://hukum.upnvj.ac.id/wp-content/uploads/2022/06/RuangPODCAST-LT-4-1024x799.jpeg",
  },
  {
    title: "Ruang Podcast FIK",
    kapasitas: "5 orang",
    gedung: "Ki Hajar Dewantara",
    image:
      "https://new-fik.upnvj.ac.id/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-07-at-15.44.52.jpeg",
  },
  {
    title: "Ruang Podcast FIKES",
    kapasitas: "5 orang",
    gedung: "FIKES Kampus Limo",
    image:
      "https://fikes.upnvj.ac.id/id/files/thumb/93ef38f7d710dc957cf1d23c2808d1da/520/fit",
  },
  {
    title: "Ruang Podcast FK",
    kapasitas: "5 orang",
    gedung: "FK Kampus Pondok Labu",
    image:
      "https://fk.upnvj.ac.id/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-07-at-10.04.34.jpeg",
  },
  {
    title: "Ruang Podcast FISIP",
    kapasitas: "5 orang",
    gedung: "FISIP",
    image:
      "https://fisip.upnvj.ac.id/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-12-at-15.12.39.jpeg",
  },
  {
    title: "Ruang Podcast FEB",
    kapasitas: "5 orang",
    gedung: "FEB",
    image:
      "https://i.ytimg.com/vi/raX3zgh1WtE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH0CYAC0AWKAgwIABABGHIgVCgrMA8=&rs=AOn4CLC4YIUaKil03CaPp4rsQlmzBv5P9w",
  },
  {
    title: "Lab Terpadu",
    kapasitas: "50 orang",
    gedung: "Perpustakaan Lt. 2",
    image:
      "https://uptlabterpadu.upnvj.ac.id/wp-content/uploads/2023/08/Kegiatan-Perkuliahan-FIK-28-08-2023-01.jpeg",
  },
  {
    title: "Ubin Cokelat",
    kapasitas: "200 orang",
    gedung: "FEB Kampus Pondok Labu",
    image: "https://feb.upnvj.ac.id/wp-content/uploads/2024/12/328.jpg",
  },
  {
    title: "Lapangan Basket",
    kapasitas: "200 orang",
    gedung: "Kampus Pondok Labu",
    image:
      "https://cdn.idntimes.com/content-images/community/2022/07/aironebball-150630392-1387338378274022-5515620263307717663-n-4b05e1ad11e871221e4135e0f2a9a211-6e991a6de4e6b086ea74264517fdd7a3.jpg",
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
            <Link to="/" className="hover:text-[#5dac00] transition-colors">
              Beranda
            </Link>
            <Link
              to="/peminjaman"
              className="hover:text-[#5dac00] transition-colors"
            >
              <strong>Peminjaman</strong>
            </Link>
            <Link
              to="/tentang-kami"
              className="hover:text-[#5dac00] transition-colors"
            >
              Tentang Kami
            </Link>
          </div>
          <button
            onClick={() => navigate("/login")}
            className="bg-[#5dac00] text-white text-base font-semibold px-5 py-3 rounded-full shadow-md hover:bg-[#4b8c00] transition"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        {" "}
        {/* Buka flex container */}
        {/* ASIDE harus di dalam sini */}
        <aside className="w-64 bg-white p-6 border-r rounded-tr-3xl rounded-br-3xl shadow-lg space-y-6">
          <h2 className="text-lg font-bold flex items-center space-x-2 text-[#007E30]">
            <FunnelIcon className="w-5 h-5 text-[#007E30]" />
            <span>Filter Fasilitas</span>
          </h2>

          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
              Jenis Fasilitas
            </h3>
            <div className="space-y-2">
              {["Auditorium", "Ruang Podcast", "Lab", "Lapangan"].map(
                (jenis, i) => (
                  <label
                    key={i}
                    className="flex items-center space-x-2 text-sm text-gray-800"
                  >
                    <input
                      type="checkbox"
                      className="accent-[#FF8C00] w-4 h-4 transition duration-150"
                    />
                    <span>{jenis}</span>
                  </label>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
              Lokasi/Gedung
            </h3>
            <select className="w-full border border-gray-300 focus:border-[#007E30] focus:ring-[#007E30] rounded-lg px-3 py-2 text-sm transition duration-150">
              <option>Kampus Limo</option>
              <option>Pondok Labu</option>
            </select>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
              Kapasitas
            </h3>
            <select className="w-full border border-gray-300 focus:border-[#007E30] focus:ring-[#007E30] rounded-lg px-3 py-2 text-sm transition duration-150">
              <option value="lt50">&lt; 50 orang</option>
              <option value="gte50">&gt; 50 orang</option>
            </select>
          </div>

          <button className="w-full bg-[#5dac00] text-white text-sm py-2 rounded-lg hover:bg-[#4b8c00] transition-all duration-200 font-semibold shadow-md">
            Reset Filter
          </button>
        </aside>
        
        <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
         {Fasilitas.map((item) => (
  <div
    key={item.slug}
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
      <Link
        to={`/fasilitas/${item.slug}`}     
        className="text-lg font-bold text-gray-800 group-hover:text-[#5dac00] transition hover:underline"
      >
        {item.title}
      </Link>
      <p className="text-sm text-gray-600 mb-1">{item.gedung}</p>
    </div>
  </div>
))}
        </main>
      </div>{" "}
      {/* Tutup flex container */}
      <Footer />
    </div>
  );
}
