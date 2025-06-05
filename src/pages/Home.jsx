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
    detail: "Lihat pilihan gedung kampus untuk seminar, pelatihan, dan lainnya.",
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
    <div className="min-h-screen bg-base-100 text-gray-800" data-theme="light">
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2 text-center md:text-left">
            <img
              src={UpnLogo}
              alt="Logo UPNVJ"
              className="w-32 mx-auto md:mx-0 mb-6 rounded-lg"
            />
            <h1 className="text-4xl font-bold mb-4">
              Selamat Datang, Mahasiswa UPNVJ!
            </h1>
            <p className="mb-6 text-lg">
              Kelola peminjaman fasilitas kampus dengan mudah, cepat, dan
              transparan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => navigate("/login")}
                className="btn btn-primary px-6 py-3 text-lg"
              >
                Ajukan Peminjaman
              </button>
              <button
                onClick={() => navigate("/panduan")}
                className="btn btn-outline px-6 py-3 text-lg"
              >
                Lihat Panduan
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Bisa ganti ini dengan ilustrasi jika mau */}
            <img
              src={UpnLogo}
              alt="Ilustrasi peminjaman"
              className="w-64 h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Statistik */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <StatBox title="Total Peminjaman" value="128" icon="📋" />
          <StatBox title="Gedung Tersedia" value="8" icon="🏢" />
          <StatBox title="Ruangan Tersedia" value="21" icon="🚪" />
        </section>

        {/* Layanan Cepat */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Layanan Cepat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {layanan.map((item, i) => (
              <div
                key={i}
                onClick={() => navigate(item.link)}
                className="cursor-pointer bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
              >
                <div className="bg-[#EAF7F3] text-5xl w-20 h-20 mx-auto flex items-center justify-center rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#1C4C59]">
                  {item.title}
                </h3>
                <p className="text-sm mb-2">{item.desc}</p>
                <p className="text-xs italic text-[#4CA585]">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Aktivitas Terbaru */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Aktivitas Terbaru</h2>
          <ul className="space-y-4">
            <li className="bg-white p-5 rounded-xl border shadow-sm flex items-center gap-3">
              <span className="text-2xl">📝</span>
              Anda mengajukan peminjaman ruang Rapat 203 pada 4 Juni 2025.
            </li>
            <li className="bg-white p-5 rounded-xl border shadow-sm flex items-center gap-3">
              <span className="text-2xl">✅</span>
              Admin menyetujui peminjaman Aula Utama untuk kegiatan ORMAWA.
            </li>
          </ul>
        </section>

        {/* Bantuan */}
        <section className="bg-white p-8 rounded-3xl border shadow-lg text-center text-[#1C4C59] mb-12">
          <h3 className="text-2xl font-semibold mb-3">Butuh Bantuan?</h3>
          <p className="text-base mb-4">
            Jika mengalami kendala atau ingin melihat panduan penggunaan sistem,
            klik tombol berikut.
          </p>
          <button
            onClick={() => navigate("/panduan")}
            className="bg-[#1C4C59] hover:bg-[#163a44] text-white px-6 py-2 rounded-full text-lg transition"
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
    <div className="bg-white text-[#1C4C59] rounded-2xl p-6 text-center shadow hover:shadow-md transition-all duration-300">
      <div className="bg-[#EAF7F3] w-16 h-16 mx-auto flex items-center justify-center rounded-full text-4xl mb-3">
        {icon}
      </div>
      <h4 className="text-base font-medium">{title}</h4>
      <p className="text-3xl font-bold text-[#4CA585]">{value}</p>
    </div>
  );
}

export default LandingPage;
