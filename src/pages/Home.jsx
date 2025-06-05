import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import UpnLogo from "../assets/UPN.png";

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
    icon: "🗓️",
    title: "Jadwal Peminjaman",
    desc: "Lihat jadwal fasilitas yang tersedia dan hindari bentrok.",
    link: "/jadwal",
    detail: "Pantau ketersediaan ruang/gedung secara real-time.",
  },
];

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#d9f0e6] to-[#f0faf7] text-gray-900 font-sans">
      <main className="max-w-7xl mx-auto px-6 py-14">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 mb-20">
          <div className="md:w-1/2 text-center md:text-left">
            <img
              src={UpnLogo}
              alt="Logo UPNVJ"
              className="w-28 mx-auto md:mx-0 mb-8 rounded-xl shadow-lg"
            />
            <h1 className="text-5xl font-extrabold mb-5 leading-tight tracking-tight text-[#176753]">
              Selamat Datang, Mahasiswa UPNVJ!
            </h1>
            <p className="mb-8 text-lg max-w-lg mx-auto md:mx-0 text-[#2d4b42]">
              Kelola peminjaman fasilitas kampus dengan mudah, cepat, dan
              transparan. Semua dalam genggaman.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-5 max-w-xs mx-auto md:mx-0">
              <button
                onClick={() => navigate("/login")}
                className="bg-[#1a6f53] hover:bg-[#145438] text-white font-semibold px-7 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                Ajukan Peminjaman
              </button>
              <button
                onClick={() => navigate("/panduan")}
                className="border-2 border-[#1a6f53] text-[#1a6f53] hover:bg-[#1a6f53] hover:text-white font-semibold px-7 py-3 rounded-lg transition-colors"
              >
                Lihat Panduan
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={UpnLogo}
              alt="Ilustrasi peminjaman"
              className="w-72 h-auto rounded-3xl shadow-xl"
            />
          </div>
        </section>

        {/* Statistik */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-20">
          <StatBox title="Total Peminjaman" value="128" icon="📋" />
          <StatBox title="Gedung Tersedia" value="8" icon="🏢" />
          <StatBox title="Ruangan Tersedia" value="21" icon="🚪" />
        </section>

        {/* Layanan Cepat */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center text-[#176753] mb-14">
            Layanan Cepat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {layanan.map((item, i) => (
              <div
                key={i}
                onClick={() => navigate(item.link)}
                className="cursor-pointer bg-white rounded-3xl shadow-xl p-8 text-center
                  transition-transform transform hover:scale-105 hover:shadow-2xl
                  border border-transparent hover:border-[#1a6f53]"
              >
                <div className="bg-[#d9f0e6] text-6xl w-24 h-24 mx-auto flex items-center justify-center rounded-full mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-[#1a6f53]">
                  {item.title}
                </h3>
                <p className="text-md mb-3 text-[#375a4a]">{item.desc}</p>
                <p className="text-sm italic text-[#4ca585]">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Aktivitas Terbaru */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#176753] mb-8 text-center">
            Aktivitas Terbaru
          </h2>
          <ul className="space-y-6">
            <li className="bg-white p-7 rounded-2xl border border-[#a3c4b3] shadow-md flex items-center gap-5 text-[#264d3e] text-lg">
              <span className="text-3xl">📝</span>
              Anda mengajukan peminjaman ruang Rapat 203 pada 4 Juni 2025.
            </li>
            <li className="bg-white p-7 rounded-2xl border border-[#a3c4b3] shadow-md flex items-center gap-5 text-[#264d3e] text-lg">
              <span className="text-3xl">✅</span>
              Admin menyetujui peminjaman Aula Utama untuk kegiatan ORMAWA.
            </li>
          </ul>
        </section>

        {/* Bantuan */}
        <section className="bg-white p-12 rounded-3xl border border-[#a3c4b3] shadow-lg text-center text-[#176753] max-w-xl mx-auto mb-16">
          <h3 className="text-3xl font-semibold mb-5">Butuh Bantuan?</h3>
          <p className="text-lg mb-7">
            Jika mengalami kendala atau ingin melihat panduan penggunaan sistem,
            klik tombol berikut.
          </p>
          <button
            onClick={() => navigate("/panduan")}
            className="bg-[#1a6f53] hover:bg-[#145438] text-white px-8 py-3 rounded-full text-xl font-semibold transition-transform transform hover:scale-105"
          >
            📘 Lihat Panduan
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function StatBox({ title, value, icon }) {
  return (
    <div className="bg-white text-[#176753] rounded-3xl p-8 text-center shadow-lg border border-transparent hover:border-[#1a6f53] transition-all duration-300">
      <div className="bg-[#d9f0e6] w-20 h-20 mx-auto flex items-center justify-center rounded-full text-5xl mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-medium mb-2">{title}</h4>
      <p className="text-4xl font-extrabold text-[#4ca585]">{value}</p>
    </div>
  );
}

export default LandingPage;
