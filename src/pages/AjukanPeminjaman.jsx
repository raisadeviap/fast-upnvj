import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Logo from "../assets/UPN.png";

const Navbar = () => {
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
                <Link to="/" className="relative group hover:text-lime-600 transition-colors"> Beranda
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-lime-600 transition-all duration-300 group-hover:w-full"></span>
                 </Link>
                 
                 <Link to="/" className="relative group hover:text-lime-600 transition-colors">  Peminjaman
                   <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-lime-600 transition-all duration-300 group-hover:w-full"></span>
                 </Link>
       
                 <Link to="/" className="relative group hover:text-lime-600 transition-colors"> Tentang Kami<span className="absolute left-0 bottom-0 h-0.5 w-0 bg-lime-600 transition-all duration-300 group-hover:w-full"></span></Link>
       
               </div>

        <div className="flex items-center gap-3">
          <img
            src={userImage}
            alt="User"
            className="w-10 h-10 rounded-full border"
          />
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
};

const Footer = () => (
  <footer className="bg-green-800 text-white px-8 py-10 mt-12">
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
          <a href="#" className="hover:text-yellow-300 transition">
            Facebook
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            Instagram
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            Twitter
          </a>
        </div>
      </div>
    </div>
  </footer>
);

/***********************************
 *  Main Component
 ***********************************/
export default function AjukanPeminjaman() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const fasilitas = state?.fasilitas;

  // Local state for simple form handling (replace with Formik/React‑Hook‑Form if needed)
  const [form, setForm] = useState({
    namaKegiatan: "",
    tanggal: "",
    waktuMulai: "",
    waktuSelesai: "",
    pj: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 TODO: kirim data ke backend di sini (fetch/axios)
    console.table({ fasilitas, ...form });

    // Contoh redirect ke dashboard setelah submit
    navigate("/", { replace: true });
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-2xl font-bold text-black mb-6">
          Form Pengajuan Peminjaman
        </h1>

        {/* Info fasilitas terpilih */}
        {fasilitas && (
          <div className="mb-4 p-4 border rounded bg-white shadow">
            <h2 className="text-lg font-semibold">{fasilitas.title}</h2>
            <p className="text-sm text-gray-600">
              Kapasitas: {fasilitas.kapasitas} &nbsp;|&nbsp; Gedung:{" "}
              {fasilitas.gedung}
            </p>
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded shadow-md"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nama Kegiatan
            </label>
            <input
              type="text"
              name="namaKegiatan"
              value={form.namaKegiatan}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Contoh: Seminar Kewirausahaan"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tanggal Peminjaman
              </label>
              <input
                type="date"
                name="tanggal"
                value={form.tanggal}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Penanggung Jawab
              </label>
              <input
                type="text"
                name="pj"
                value={form.pj}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Nama lengkap penanggung jawab"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Waktu Mulai
              </label>
              <input
                type="time"
                name="waktuMulai"
                value={form.waktuMulai}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Waktu Selesai
              </label>
              <input
                type="time"
                name="waktuSelesai"
                value={form.waktuSelesai}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-lime-600 text-white px-4 py-2 rounded hover:bg-lime-600 transition w-full md:w-auto"
          >
            Kirim Pengajuan
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
