import React from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
=======
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UpnLogo from "../assets/UPN.png";
import { useNavigate } from "react-router-dom";
>>>>>>> 2e6f3d036c81a4825fb22bb2bd4c4e687bbe7403

const userName = "Mahasiswa UPNVJ";

const layanan = [
  {
<<<<<<< HEAD
    icon: "🏢",
    title: "Peminjaman Gedung",
    desc: "Ajukan peminjaman aula, auditorium, atau gedung kampus lainnya.",
    link: "/gedung",
    detail:
      "Lihat pilihan gedung kampus untuk seminar, pelatihan, dan lainnya.",
  },
  {
    icon: "🚪",
    title: "Peminjaman Ruangan",
    desc: "Pinjam ruang kelas, ruang rapat, atau laboratorium dengan mudah.",
    link: "/ruangan",
    detail: "Ajukan ruang sesuai kapasitas dan kebutuhan acara kamu.",
  },
  {
    icon: "📅",
    title: "Jadwal Peminjaman",
    desc: "Lihat jadwal fasilitas yang tersedia dan hindari bentrok.",
    link: "/jadwal",
    detail: "Pantau ketersediaan ruang/gedung secara real-time.",
  },
=======
    icon: "\u{1F3DB}",
    title: "Peminjaman Gedung",
    desc: "Ajukan peminjaman aula, auditorium, atau gedung kampus lainnya.",
    link: "/gedung"
  },
  {
    icon: "\u{1F4DA}",
    title: "Peminjaman Ruangan",
    desc: "Pinjam ruang kelas, ruang rapat, atau laboratorium dengan mudah.",
    link: "/ruangan"
  },
  {
    icon: "\u{1F4C5}",
    title: "Jadwal Peminjaman",
    desc: "Lihat jadwal fasilitas yang tersedia dan hindari bentrok.",
    link: "/jadwal"
  }
>>>>>>> 2e6f3d036c81a4825fb22bb2bd4c4e687bbe7403
];

function Home() {
  const navigate = useNavigate();

  return (
<<<<<<< HEAD
    <div
      className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 to-white"
      data-theme="light"
    >
      <main className="flex-1 px-6 py-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Welcome */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center mb-12"
          >
            <span className="text-6xl mb-4 animate-pulse">🏫</span>
            <h1 className="text-3xl font-bold text-zinc-800">
              Selamat Datang, {userName}!
            </h1>
            <p className="text-zinc-600 mt-2">
              Kelola peminjaman fasilitas kampus dengan mudah, cepat, dan
              transparan.
            </p>
          </motion.div>

          {/* Statistik */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            <StatBox title="Total Peminjaman" value="128" icon="📋" />
            <StatBox title="Gedung Tersedia" value="8" icon="🏛️" />
            <StatBox title="Ruangan Tersedia" value="21" icon="🚪" />
          </section>

          {/* Layanan Cepat */}
          <section>
            <h2 className="text-2xl font-semibold text-zinc-800 mb-6">
              Layanan Cepat
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {layanan.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg cursor-pointer text-center"
                  onClick={() => navigate(item.link)}
                >
                  <div className="bg-lime-100 text-4xl w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-600 mb-2">{item.desc}</p>
                  <p className="text-xs text-zinc-500 italic">{item.detail}</p>
                </motion.div>
=======
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 to-white" data-theme="light">
      <Navbar />
      <main className="flex-1 px-6 py-12">
        <div className="max-w-7xl mx-auto">

          {/* Header Welcome */}
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-800 mb-2">
                Selamat datang, {userName}! ✨
              </h1>
              <p className="text-zinc-500 text-base md:text-lg">
                Kelola peminjaman fasilitas kampus dengan mudah, cepat, dan transparan.
              </p>
            </div>
            <img src={UpnLogo} alt="UPN Logo" className="h-20 w-auto mt-4 md:mt-0" />
          </div>

          {/* Statistik Ringkas */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            <StatBox title="Total Peminjaman" value="128" icon="\u{1F4CB}" />
            <StatBox title="Gedung Tersedia" value="8" icon="\u{1F3E2}" />
            <StatBox title="Ruangan Tersedia" value="21" icon="\u{1F4C2}" />
          </section>

          {/* Layanan */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-800 mb-8">Layanan Cepat</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {layanan.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-lime-100 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(item.link)}
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-zinc-800 mb-2">{item.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
>>>>>>> 2e6f3d036c81a4825fb22bb2bd4c4e687bbe7403
              ))}
            </div>
          </section>

          {/* Aktivitas Terbaru */}
          <section className="mt-20">
<<<<<<< HEAD
            <h2 className="text-2xl font-semibold text-zinc-800 mb-6">
              Aktivitas Terbaru
            </h2>
            <ul className="space-y-4">
              <li className="bg-white p-5 rounded-xl border shadow-sm text-zinc-700 flex items-center gap-2">
                <span className="text-xl">📝</span> Anda mengajukan peminjaman
                ruang Rapat 203 pada 4 Juni 2025.
              </li>
              <li className="bg-white p-5 rounded-xl border shadow-sm text-zinc-700 flex items-center gap-2">
                <span className="text-xl">✅</span> Admin menyetujui peminjaman
                Aula Utama untuk kegiatan ORMAWA.
=======
            <h2 className="text-2xl font-bold text-zinc-800 mb-6">Aktivitas Terbaru</h2>
            <ul className="space-y-4">
              <li className="bg-white p-5 rounded-xl border shadow-sm text-zinc-700">
                📋 Anda berhasil mengajukan peminjaman ruang Rapat 203 pada 4 Juni 2025.
              </li>
              <li className="bg-white p-5 rounded-xl border shadow-sm text-zinc-700">
                🏢 Admin menyetujui peminjaman Aula Utama untuk kegiatan ORMAWA.
>>>>>>> 2e6f3d036c81a4825fb22bb2bd4c4e687bbe7403
              </li>
            </ul>
          </section>

          {/* Bantuan */}
          <section className="mt-20 bg-white p-8 rounded-3xl border shadow-lg text-center">
<<<<<<< HEAD
            <h3 className="text-2xl font-semibold text-zinc-800 mb-3">
              Butuh Bantuan?
            </h3>
            <p className="text-zinc-600 text-base mb-4">
              Jika mengalami kendala atau ingin melihat panduan penggunaan
              sistem, klik tombol berikut.
            </p>
            <button
              onClick={() => navigate("/panduan")}
              className="bg-lime-600 hover:bg-lime-700 text-white px-6 py-2 rounded-full text-lg transition"
            >
              📘 Lihat Panduan
=======
            <h3 className="text-2xl font-bold text-zinc-800 mb-3">Butuh Bantuan?</h3>
            <p className="text-zinc-600 text-base mb-4">
              Jika mengalami kendala atau ingin melihat panduan penggunaan sistem, klik tombol berikut.
            </p>
            <button
              onClick={() => navigate("/panduan")}
              className="btn btn-outline btn-success btn-sm"
            >
              Lihat Panduan
>>>>>>> 2e6f3d036c81a4825fb22bb2bd4c4e687bbe7403
            </button>
          </section>
        </div>
      </main>
<<<<<<< HEAD
=======
      <Footer />
>>>>>>> 2e6f3d036c81a4825fb22bb2bd4c4e687bbe7403
    </div>
  );
}

function StatBox({ title, value, icon }) {
  return (
<<<<<<< HEAD
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl p-6 text-center shadow hover:shadow-md transition-all duration-300"
    >
      <div className="bg-lime-100 w-14 h-14 mx-auto flex items-center justify-center rounded-full text-3xl mb-3">
        {icon}
      </div>
      <h4 className="text-base font-medium text-zinc-700">{title}</h4>
      <p className="text-3xl font-bold text-lime-600">{value}</p>
    </motion.div>
=======
    <div className="bg-white rounded-2xl p-6 text-center shadow hover:shadow-md transition-all duration-300">
      <div className="text-4xl mb-3">{icon}</div>
      <h4 className="text-lg font-semibold text-zinc-700">{title}</h4>
      <p className="text-3xl font-bold text-lime-600">{value}</p>
    </div>
>>>>>>> 2e6f3d036c81a4825fb22bb2bd4c4e687bbe7403
  );
}

export default Home;
