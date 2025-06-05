import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UpnLogo from "../assets/UPN.png";

const layanan = [
  { icon: "🏢", title: "Peminjaman Gedung", desc: "Ajukan peminjaman gedung kampus.", link: "/gedung" },
  { icon: "🚪", title: "Peminjaman Ruangan", desc: "Pinjam ruang kelas, rapat, dll.", link: "/ruangan" },
  { icon: "📅", title: "Jadwal Peminjaman", desc: "Cek jadwal fasilitas.", link: "/jadwal" },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-100 text-gray-800" data-theme="light">
      <Navbar />
      <main className="container mx-auto px-6 py-12">
        {/* Hero */}
        <section className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Selamat Datang di Fast UPNVJ</h1>
            <p className="mb-6 text-lg">
              Sistem peminjaman fasilitas kampus yang mudah, cepat, dan transparan untuk civitas akademika UPNVJ.
            </p>
            <button
              onClick={() => navigate("/login")}
              className="btn btn-primary px-6 py-3"
            >
              Ajukan Peminjaman
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={UpnLogo} alt="Logo UPNVJ" className="w-48 h-auto" />
          </div>
        </section>

        {/* Layanan */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {layanan.map(({ icon, title, desc, link }, i) => (
              <div
                key={i}
                onClick={() => navigate(link)}
                className="cursor-pointer bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
