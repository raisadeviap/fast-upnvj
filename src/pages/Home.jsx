import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/UPN.png";
import { FunnelIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const navigate = useNavigate();
  const userImage = "https://i.pravatar.cc/40?img=3";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src={Logo} alt="UPNVJ Logo" className="h-10" />
          <span className="text-xl font-bold text-black">FAST UPNVJ</span>
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link to="/" className="relative group hover:text-lime-600 transition-colors">Beranda
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-lime-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/" className="relative group hover:text-lime-600 transition-colors">Peminjaman
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-lime-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/" className="relative group hover:text-lime-600 transition-colors">Tentang Kami
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-lime-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <img src={userImage} alt="User" className="w-10 h-10 rounded-full border" />
          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
            className="bg-lime-600 hover:bg-lime-600 text-white px-4 py-2 text-sm rounded-md transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-lime-800 text-white px-8 py-10 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between">
        <div className="mb-6 sm:mb-0">
          <img src={Logo} alt="UPN Logo" className="w-12 mb-2" />
          <p className="text-sm leading-6">
            FAST UPNVJ
            <br />
            Website Peminjaman Fasilitas Kampus UPNVJ
          </p>
        </div>
        <div>
          <h6 className="font-semibold mb-2">Social</h6>
          <div className="flex gap-4">
            <a href="#" className="hover:text-yellow-300 transition">Facebook</a>
            <a href="#" className="hover:text-yellow-300 transition">Instagram</a>
            <a href="#" className="hover:text-yellow-300 transition">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  const [fasilitas, setFasilitas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFasilitas = async () => {
      try {
        const res = await axios.get("https://fast-upnvj-backend.vercel.app/api/fasilitas");
        setFasilitas(res.data);
      } catch (error) {
        console.error("Gagal mengambil data fasilitas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFasilitas();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex flex-1">
        <aside className="w-72 bg-white p-5 border-r shadow-sm space-y-6">
          <h2 className="text-lg font-bold flex items-center gap-2 text-black">
            <FunnelIcon className="w-5 h-5" />
            Filter Fasilitas
          </h2>
          {/* Filter belum terhubung */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-2">
              Jenis Fasilitas
            </h3>
            {["Auditorium", "Ruang Podcast", "Lab", "Lapangan"].map(
              (jenis, i) => (
                <label key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" className="green-200" />
                  {jenis}
                </label>
              )
            )}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-2">
              Lokasi/Gedung
            </h3>
            <select className="w-full border rounded px-3 py-2 text-sm">
              <option>Semua Lokasi</option>
              <option>Kampus Limo</option>
              <option>Pondok Labu</option>
            </select>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-2">
              Kapasitas
            </h3>
            <select className="w-full border rounded px-3 py-2 text-sm">
              <option value="lt50">&lt; 50 orang</option>
              <option value="gte50">&gt; 50 orang</option>
            </select>
          </div>
          <button className="w-full bg-lime-600 text-white py-2 rounded-md hover:bg-lime-600 transition">
            Reset Filter
          </button>
        </aside>

        <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading ? (
            <div className="col-span-full flex justify-center">
              <span className="loading loading-spinner loading-lg text-lime-600"></span>
            </div>
          ) : fasilitas.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">Tidak ada fasilitas tersedia.</div>
          ) : (
            fasilitas.map((item) => (
              <div
                key={item.id}
                className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <img
                  src={item.foto_uri}
                  alt={item.nama_fasilitas}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-md font-semibold text-lime-600 mb-1">
                    {item.nama_fasilitas}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Kapasitas: {item.kapasitas}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Gedung: {item.lokasi}
                  </p>
                  <button
                    className="w-full text-sm border border-lime-600 text-black hover:bg-lime-600 hover:text-white py-1.5 rounded-md transition"
                    onClick={() => navigate("/ajukan-peminjaman")}
                  >
                    Ajukan Peminjaman
                  </button>
                </div>
              </div>
            ))
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}
