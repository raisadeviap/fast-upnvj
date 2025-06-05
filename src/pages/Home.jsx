import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import Footer from "../components/Footer";

function HomePage() {
  const navigate = useNavigate();

  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Selamat Pagi 👋");
    else if (hour < 18) setGreeting("Selamat Sore ☀️");
    else setGreeting("Selamat Malam 🌙");
  }, []);

  const stats = [
    {
      id: 1,
      icon: "🏢",
      label: "Gedung Dipinjam",
      value: 6,
      color: "text-blue-500",
    },
    {
      id: 2,
      icon: "🛋️",
      label: "Ruangan Tersedia",
      value: 14,
      color: "text-green-500",
    },
    {
      id: 3,
      icon: "⏰",
      label: "Jam Terpakai",
      value: 92,
      color: "text-purple-500",
    },
  ];

  const services = [
    {
      id: 1,
      icon: "📅",
      title: "Peminjaman Ruangan",
      link: "/layanan/peminjaman",
    },
    {
      id: 2,
      icon: "🧾",
      title: "Histori Penggunaan",
      link: "/layanan/histori",
    },
    {
      id: 3,
      icon: "📊",
      title: "Laporan & Statistik",
      link: "/layanan/statistik",
    },
    { id: 4, icon: "📌", title: "Persetujuan", link: "/layanan/persetujuan" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-100 flex flex-col">
      <header className="flex items-center gap-3 p-4 shadow-sm bg-white sticky top-0 z-10">
        {/* Logo UPN (gunakan logo asli kalau ada) */}
        <img
          src="/logo-upn-small.png"
          alt="Logo UPN"
          className="w-10 h-10 object-contain"
        />
        <h1 className="text-xl font-semibold text-primary">
          Sistem Fast UPNVJ
        </h1>
      </header>

      <main className="flex-grow container mx-auto px-6 py-10">
        {/* Greeting */}
        <section className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800">{greeting}</h2>
          <p className="mt-2 text-gray-600">
            Selamat datang di sistem Fast UPNVJ!
          </p>
        </section>

        {/* Statistik */}
        <section className="mb-14 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map(({ id, icon, label, value, color }) => (
            <div
              key={id}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-default"
            >
              <div className={`text-5xl mb-3 ${color}`}>{icon}</div>
              <div className="text-3xl font-bold text-gray-900">
                <CountUp end={value} duration={2} />
              </div>
              <div className="text-gray-600 mt-1">{label}</div>
            </div>
          ))}
        </section>

        {/* Layanan */}
        <section>
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Layanan Kami
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {services.map(({ id, icon, title, link }) => (
              <button
                key={id}
                onClick={() => navigate(link)}
                className="flex flex-col items-center bg-white p-5 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
                aria-label={title}
              >
                <span className="text-5xl mb-3">{icon}</span>
                <span className="text-lg font-semibold text-gray-900">
                  {title}
                </span>
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
