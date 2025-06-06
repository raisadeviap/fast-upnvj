import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/UPN.png";
import { FunnelIcon } from "@heroicons/react/24/solid";
import Footer from "../components/Footer";

const fasilitasData = [
  {
    title: "Auditorium Bhineka Tunggal Ika",
    slug: "auditorium-bhineka-tunggal-ika",
    kapasitas: 300,
    gedung: "Plaza Soedirman 2",
    image:
      "https://www.upnvj.ac.id/en/files/large/5fe91f59d3da4d824097b0b5bb994e69",
    jenis: "Auditorium",
    lokasi: "Pondok Labu",
  },
  {
    title: "Auditorium Dr. Wahidin Sudiro Husodo",
    slug: "auditorium-wahidin-sudiro-husodo",
    kapasitas: 100,
    gedung: "Wahidin Sudiro Husodo",
    image:
      "https://fk.upnvj.ac.id/wp-content/uploads/2022/04/IMG_2038-scaled.jpg",
    jenis: "Auditorium",
    lokasi: "Pondok Labu",
  },
  {
    title: "Ruang Podcast FK",
    slug: "ruang-podcast-fk",
    kapasitas: 5,
    gedung: "FK Kampus Pondok Labu",
    image:
      "https://fk.upnvj.ac.id/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-07-at-10.04.34.jpeg",
    jenis: "Ruang Podcast",
    lokasi: "Pondok Labu",
  },
  // Tambahkan data lain dengan struktur yang sama
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
  const [selectedJenis, setSelectedJenis] = useState([]);
  const [lokasi, setLokasi] = useState("");
  const [kapasitasFilter, setKapasitasFilter] = useState("");

  const toggleJenis = (jenis) => {
    setSelectedJenis((prev) =>
      prev.includes(jenis) ? prev.filter((j) => j !== jenis) : [...prev, jenis]
    );
  };

  const resetFilter = () => {
    setSelectedJenis([]);
    setLokasi("");
    setKapasitasFilter("");
  };

  const filteredFasilitas = fasilitasData.filter((item) => {
    const matchJenis =
      selectedJenis.length === 0 || selectedJenis.includes(item.jenis);
    const matchLokasi = lokasi === "" || item.lokasi === lokasi;
    const matchKapasitas =
      kapasitasFilter === "" ||
      (kapasitasFilter === "lt50" && item.kapasitas < 50) ||
      (kapasitasFilter === "gte50" && item.kapasitas >= 50);

    return matchJenis && matchLokasi && matchKapasitas;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
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
                      className="accent-[#FF8C00] w-4 h-4"
                      checked={selectedJenis.includes(jenis)}
                      onChange={() => toggleJenis(jenis)}
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
            <select
              value={lokasi}
              onChange={(e) => setLokasi(e.target.value)}
              className="w-full border border-gray-300 focus:border-[#007E30] focus:ring-[#007E30] rounded-lg px-3 py-2 text-sm"
            >
              <option value="Kampus Limo">Kampus Limo</option>
              <option value="Pondok Labu">Pondok Labu</option>
            </select>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
              Kapasitas
            </h3>
            <select
              value={kapasitasFilter}
              onChange={(e) => setKapasitasFilter(e.target.value)}
              className="w-full border border-gray-300 focus:border-[#007E30] focus:ring-[#007E30] rounded-lg px-3 py-2 text-sm"
            >
              <option value="lt50">&lt; 50 orang</option>
              <option value="gte50">&gt;= 50 orang</option>
            </select>
          </div>

          <button
            onClick={resetFilter}
            className="w-full bg-[#5dac00] text-white text-sm py-2 rounded-lg hover:bg-[#4b8c00] font-semibold shadow-md"
          >
            Reset Filter
          </button>
        </aside>

        <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFasilitas.map((item) => (
            <Link
              key={item.slug}
              to={`/fasilitas/${item.slug}`}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover"
                />
                <div className="absolute top-2 left-2 bg-[#5dac00] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {item.kapasitas} orang
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg text-[#333]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.gedung}</p>
              </div>
            </Link>
          ))}
          
        </main>
      </div>
      <Footer />
    </div>
  );
}
