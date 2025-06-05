import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UpnLogo from "../assets/UPN.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const userName = "Mahasiswa UPNVJ";

const layanan = [
  {
    icon: "🏛️",
    title: "Peminjaman Gedung",
    desc: "Ajukan peminjaman aula, auditorium, atau gedung kampus lainnya.",
    link: "/gedung",
    detail:
      "Lihat berbagai pilihan gedung kampus untuk seminar, pelatihan, dan kegiatan lainnya.",
  },
  {
    icon: "📚",
    title: "Peminjaman Ruangan",
    desc: "Pinjam ruang kelas, ruang rapat, atau laboratorium dengan mudah.",
    link: "/ruangan",
    detail:
      "Tersedia ruang kelas dan rapat dengan kapasitas berbeda. Ajukan sesuai kebutuhan.",
  },
  {
    icon: "🗓️",
    title: "Jadwal Peminjaman",
    desc: "Lihat jadwal fasilitas yang tersedia dan hindari bentrok.",
    link: "/jadwal",
    detail:
      "Pantau jadwal fasilitas secara real-time dan pastikan ketersediaan sebelum mengajukan.",
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 to-white"
      data-theme="light"
    >
      <Navbar />
      <main className="flex-1 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Welcome */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl p-8 flex flex-col md:flex-row items-center justify-between mb-12"
          >
            <div>
              <h1 className="text-4xl font-extrabold text-zinc-800 mb-2">
                Selamat datang, {userName}! ✨
              </h1>
              <p className="text-zinc-500 text-lg">
                Kelola peminjaman fasilitas kampus dengan mudah, cepat, dan
                transparan.
              </p>
            </div>
            <img
              src={UpnLogo}
              alt="UPN Logo"
              className="h-20 w-auto mt-4 md:mt-0 animate-pulse"
            />
          </motion.div>

          {/* Statistik Ringkas */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            <StatBox title="Total Peminjaman" value="128" icon="📋" />
            <StatBox title="Gedung Tersedia" value="8" icon="🏢" />
            <StatBox title="Ruangan Tersedia" value="21" icon="📁" />
          </section>

          {/* Layanan */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-800 mb-8">
              Layanan Cepat
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {layanan.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gradient-to-br from-white to-lime-100 rounded-3xl p-6 shadow-md hover:shadow-xl cursor-pointer"
                  onClick={() => navigate(item.link)}
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-zinc-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-2">
                    {item.desc}
                  </p>
                  <p className="text-zinc-500 text-xs italic">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Aktivitas Terbaru */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold text-zinc-800 mb-6">
              Aktivitas Terbaru
            </h2>
            <ul className="space-y-4">
              <li className="bg-white p-5 rounded-xl border shadow-sm text-zinc-700 flex items-center gap-2">
                <span className="text-xl">📋</span> Anda berhasil mengajukan
                peminjaman ruang Rapat 203 pada 4 Juni 2025.
              </li>
              <li className="bg-white p-5 rounded-xl border shadow-sm text-zinc-700 flex items-center gap-2">
                <span className="text-xl">🏢</span> Admin menyetujui peminjaman
                Aula Utama untuk kegiatan ORMAWA.
              </li>
            </ul>
          </section>

          {/* Bantuan */}
          <section className="mt-20 bg-white p-8 rounded-3xl border shadow-lg text-center">
            <h3 className="text-2xl font-bold text-zinc-800 mb-3">
              Butuh Bantuan?
            </h3>
            <p className="text-zinc-600 text-base mb-4">
              Jika mengalami kendala atau ingin melihat panduan penggunaan
              sistem, klik tombol berikut.
            </p>
            <button
              onClick={() => navigate("/panduan")}
              className="btn btn-success btn-wide"
            >
              📘 Lihat Panduan
            </button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function StatBox({ title, value, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 text-center shadow hover:shadow-md transition-all duration-300"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h4 className="text-lg font-semibold text-zinc-700">{title}</h4>
      <p className="text-3xl font-bold text-lime-600">{value}</p>
    </motion.div>
  );
}

export default Home;
