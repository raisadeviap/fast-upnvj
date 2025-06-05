import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CountUp from "react-countup";
import Footer from "../components/Footer";
import HeroImage from "../assets/img1.svg";
import AboutImage from "../assets/UPN.png"; // logo UPN sesuai permintaan

function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Selamat Pagi! ☀️ Semoga harimu menyenangkan.");
    else if (hour < 18)
      setGreeting("Selamat Siang! 🌤️ Selamat datang di Fast UPNVJ.");
    else setGreeting("Selamat Malam! 🌙 Terima kasih sudah berkunjung.");
  }, []);

  const stats = [
    {
      id: 1,
      icon: "🏢",
      label: "Gedung Dipinjam",
      value: 6,
      color: "text-primary",
    },
    {
      id: 2,
      icon: "🛋️",
      label: "Ruangan Tersedia",
      value: 14,
      color: "text-secondary",
    },
    {
      id: 3,
      icon: "⏰",
      label: "Jam Terpakai",
      value: 92,
      color: "text-accent",
    },
  ];

  const services = [
    {
      id: 1,
      icon: "🏢",
      title: "Peminjaman Gedung",
      description:
        "Fasilitas gedung kampus untuk kegiatan akademik dan non-akademik",
      link: "/layanan/gedung",
    },
    {
      id: 2,
      icon: "🛋️",
      title: "Peminjaman Ruangan",
      description: "Ruang kelas, auditorium, dan ruang pertemuan lainnya",
      link: "/layanan/ruangan",
    },
    {
      id: 3,
      icon: "🗓️",
      title: "Manajemen Jadwal",
      description: "Sistem penjadwalan terintegrasi untuk peminjaman fasilitas",
      link: "/layanan/jadwal",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100" data-theme="light">
      {/* Navbar */}
      <nav className="bg-base-200 shadow-md py-4 border-b border-base-content/20">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={AboutImage}
              alt="Logo UPN"
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-xl font-bold text-primary">Fast UPNVJ</h1>
          </div>
          <ul className="flex gap-6 text-base font-medium">
            <li
              className={`cursor-pointer pb-1 border-b-2 transition ${
                location.pathname === "/"
                  ? "border-primary"
                  : "border-transparent hover:border-primary"
              }`}
              onClick={() => navigate("/")}
            >
              Beranda
            </li>
            <li
              className={`cursor-pointer pb-1 border-b-2 transition ${
                location.pathname === "/tentang"
                  ? "border-primary"
                  : "border-transparent hover:border-primary"
              }`}
              onClick={() => navigate("/tentang")}
            >
              Tentang Kami
            </li>
            <li
              className={`cursor-pointer pb-1 border-b-2 transition ${
                location.pathname.startsWith("/layanan")
                  ? "border-primary"
                  : "border-transparent hover:border-primary"
              }`}
              onClick={() => navigate("/layanan")}
            >
              Layanan
            </li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-10">
        {/* Hero */}
        <section className="flex flex-col md:flex-row items-center justify-between min-h-[60vh] gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-base-content leading-tight">
              {greeting} <br />
              <span className="block mt-2 text-lg text-base-content/80">
                Sistem informasi peminjaman fasilitas UPNVJ yang cepat,
                terintegrasi, dan mudah digunakan.
              </span>
              <span className="block text-primary text-3xl mt-4 font-extrabold">
                Fast UPNVJ
              </span>
            </h1>
            <div className="flex gap-4 mt-6">
              <button
                className="btn btn-primary"
                onClick={() => navigate("/layanan/ruangan")}
              >
                Ajukan Peminjaman
              </button>
              <button
                className="btn btn-outline"
                onClick={() => navigate("/layanan/jadwal")}
              >
                Lihat Jadwal
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={HeroImage}
              alt="Ilustrasi"
              className="w-full max-w-md rounded-lg"
            />
          </div>
        </section>

        {/* Statistik */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Statistik Penggunaan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map(({ id, icon, label, value, color }) => (
              <div
                key={id}
                className="card bg-base-200 shadow-xl p-6 text-center"
              >
                <div className={`text-5xl mb-3 ${color}`}>{icon}</div>
                <div className="text-3xl font-bold">
                  <CountUp end={value} duration={2} />
                </div>
                <p className="mt-2 text-base-content/70">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Layanan Kami */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-10">Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(({ id, icon, title, description, link }) => (
              <button
                key={id}
                onClick={() => navigate(link)}
                className="card bg-base-200 hover:shadow-lg transition shadow p-6 flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="text-lg font-semibold text-base-content mb-2">
                  {title}
                </h3>
                <p className="text-sm text-base-content/70">{description}</p>
              </button>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
