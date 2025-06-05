import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const userName = "Mahasiswa UPNVJ";

const layanan = [
  {
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
    icon: "🗕️",
    title: "Jadwal Peminjaman",
    desc: "Lihat jadwal fasilitas yang tersedia dan hindari bentrok.",
    link: "/jadwal",
    detail: "Pantau ketersediaan ruang/gedung secara real-time.",
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col min-h-screen bg-gradient-to-br from-[#1C4C59] to-[#4CA585] text-white"
      data-theme="light"
    >
      <main className="flex-1 px-6 py-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Welcome */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white text-[#1C4C59] rounded-3xl shadow-xl p-8 flex flex-col items-center text-center mb-12"
          >
            <img
              src={upnvjLogo}
              alt="Logo UPNVJ"
              className="w-24 h-24 mb-4 object-contain"
            />
            <h1 className="text-3xl font-bold">Selamat Datang, {userName}!</h1>
            <p className="mt-2">
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
            <h2 className="text-2xl font-semibold mb-6">Layanan Cepat</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {layanan.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-white text-[#1C4C59] p-6 rounded-2xl shadow-md hover:shadow-lg cursor-pointer text-center"
                  onClick={() => navigate(item.link)}
                >
                  <div className="bg-[#EAF7F3] text-4xl w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-sm mb-2">{item.desc}</p>
                  <p className="text-xs italic text-[#4CA585]">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Aktivitas Terbaru */}
          <section className="mt-20">
            <h2 className="text-2xl font-semibold mb-6">Aktivitas Terbaru</h2>
            <ul className="space-y-4">
              <li className="bg-white text-[#1C4C59] p-5 rounded-xl border shadow-sm flex items-center gap-2">
                <span className="text-xl">📝</span> Anda mengajukan peminjaman
                ruang Rapat 203 pada 4 Juni 2025.
              </li>
              <li className="bg-white text-[#1C4C59] p-5 rounded-xl border shadow-sm flex items-center gap-2">
                <span className="text-xl">✅</span> Admin menyetujui peminjaman
                Aula Utama untuk kegiatan ORMAWA.
              </li>
            </ul>
          </section>

          {/* Bantuan */}
          <section className="mt-20 bg-white p-8 rounded-3xl border shadow-lg text-center text-[#1C4C59]">
            <h3 className="text-2xl font-semibold mb-3">Butuh Bantuan?</h3>
            <p className="text-base mb-4">
              Jika mengalami kendala atau ingin melihat panduan penggunaan
              sistem, klik tombol berikut.
            </p>
            <button
              onClick={() => navigate("/panduan")}
              className="bg-[#1C4C59] hover:bg-[#163a44] text-white px-6 py-2 rounded-full text-lg transition"
            >
              📘 Lihat Panduan
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}

function StatBox({ title, value, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white text-[#1C4C59] rounded-2xl p-6 text-center shadow hover:shadow-md transition-all duration-300"
    >
      <div className="bg-[#EAF7F3] w-14 h-14 mx-auto flex items-center justify-center rounded-full text-3xl mb-3">
        {icon}
      </div>
      <h4 className="text-base font-medium">{title}</h4>
      <p className="text-3xl font-bold text-[#4CA585]">{value}</p>
    </motion.div>
  );
}

export default Home;
