import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CountUp from "react-countup";
import Footer from "../components/Footer";
import HeroImage from "../assets/img1.svg";
import AboutImage from "../assets/UPN.png";

function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();

  /* ------------------------------------------------------------------ */
  /*  STATE & EFFECTS                                                   */
  /* ------------------------------------------------------------------ */
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Selamat Pagi! ☀️ Semoga harimu menyenangkan.");
    else if (hour < 18)
      setGreeting("Selamat Siang! 🌤️ Selamat datang di Fast UPNVJ.");
    else setGreeting("Selamat Malam! 🌙 Terima kasih sudah berkunjung.");
  }, []);

  /* ------------------------------------------------------------------ */
  /*  DUMMY DATA (TIDAK DIUBAH)                                         */
  /* ------------------------------------------------------------------ */
  const stats = [
    { id: 1, icon: "🏢", label: "Gedung Dipinjam", value: 6, color: "text-primary" },
    { id: 2, icon: "🛋️", label: "Ruangan Tersedia", value: 14, color: "text-secondary" },
    { id: 3, icon: "⏰", label: "Jam Terpakai", value: 92, color: "text-accent" },
  ];

  const services = [
    {
      id: 1,
      icon: "🏢",
      title: "Peminjaman Gedung",
      description: "Fasilitas gedung kampus untuk kegiatan akademik dan non-akademik",
      link: "/layanan/gedung",
    },
    {
      id: 2,
      icon: "🛋️",
      title: "Peminjaman Ruangan",
      description: "Ruang kelas, auditorium, dan ruang pertemuan lainnya",
      link: "/Form Peminjaman",
    },
    {
      id: 3,
      icon: "🗓️",
      title: "Manajemen Jadwal",
      description: "Sistem penjadwalan terintegrasi untuk peminjaman fasilitas",
      link: "/layanan/jadwal",
    },
  ];

  /* ------------------------------------------------------------------ */
  /*  DATA TAMBAHAN UNTUK MENIRU LAYOUT (TIDAK MEMENGARUHI ISI)          */
  /* ------------------------------------------------------------------ */
  const brands = ["Mi", "TCL", "Samsung", "Toshiba", "Samono", "Nedzen"];
  const sortTabs = ["Urutan", "Populer", "Terbaru", "Terlaris", "Harga"];
  const [activeSort, setActiveSort] = useState("Populer");

  /* ------------------------------------------------------------------ */
  /*  RENDER                                                            */
  /* ------------------------------------------------------------------ */
  return (
    <div className="min-h-screen bg-base-100" data-theme="light">
      {/* -------------------------------------------------------------- */}
      {/*  NAVBAR                                                      */}
      {/* -------------------------------------------------------------- */}
      <nav className="bg-base-200 shadow-md py-4 border-b border-base-content/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <img src={AboutImage} alt="Logo UPN" className="w-10 h-10 object-contain" />
            <h1 className="text-xl font-bold text-primary">Fast UPNVJ</h1>
          </div>
          <ul className="flex gap-6 text-base font-medium">
            <li
              className={`cursor-pointer pb-1 border-b-2 transition ${location.pathname === "/" ? "border-primary" : "border-transparent hover:border-primary"}`}
              onClick={() => navigate("/")}
            >
              Beranda
            </li>
            <li
              className={`cursor-pointer pb-1 border-b-2 transition ${location.pathname === "/tentang" ? "border-primary" : "border-transparent hover:border-primary"}`}
              onClick={() => navigate("/tentang")}
            >
              Tentang Kami
            </li>
            <li
              className={`cursor-pointer pb-1 border-b-2 transition ${location.pathname.startsWith("/layanan") ? "border-primary" : "border-transparent hover:border-primary"}`}
              onClick={() => navigate("/layanan")}
            >
              Layanan
            </li>
          </ul>
        </div>
      </nav>

      {/* -------------------------------------------------------------- */}
      {/*  MAIN WRAPPER WITH SIDEBAR + CONTENT (MENIRU LAYOUT GAMBAR)   */}
      {/* -------------------------------------------------------------- */}
      <main className="container mx-auto px-4 py-6 lg:flex gap-6">
        {/* --------------------  SIDEBAR  --------------------------- */}
        <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-base-content/10 pr-4">
          <h2 className="text-lg font-semibold mb-4">Semua Layanan</h2>
          <ul className="space-y-3">
            {services.map(({ id, icon, title, link }) => (
              <li
                key={id}
                className="flex items-center gap-3 cursor-pointer hover:text-primary transition"
                onClick={() => navigate(link)}
              >
                <span>{icon}</span>
                <span>{title}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* --------------------  RIGHT CONTENT  ---------------------- */}
        <section className="flex-1 space-y-10">
          {/* ----------------  BRAND CAROUSEL  ----------------------- */}
          <div className="flex items-center overflow-x-auto gap-10 py-4 border border-base-content/10 rounded-lg px-4 shadow-sm">
            {brands.map((b, idx) => (
              <div
                key={idx}
                className="min-w-[120px] h-20 flex items-center justify-center bg-base-200 rounded-lg text-2xl font-bold shrink-0"
              >
                {b}
              </div>
            ))}
          </div>

          {/* ----------------  SORTING TABS  ------------------------- */}
          <div className="flex items-center justify-between border-b border-base-content/10 pb-2">
            <div className="flex gap-4">
              {sortTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSort(tab)}
                  className={`px-4 py-2 rounded-t-md text-sm font-medium transition border-b-2 ${
                    activeSort === tab ? "border-primary text-primary" : "border-transparent hover:border-primary"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <span className="text-sm text-base-content/60">1/1</span>
          </div>

          {/* ----------------  HERO SECTION  ------------------------- */}
          <section className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-base-content leading-tight">
                {greeting}
                <br />
                <span className="block mt-2 text-lg text-base-content/80">
                  Sistem informasi peminjaman fasilitas UPNVJ yang cepat, terintegrasi, dan mudah digunakan
                </span>
              </h1>
              <div className="flex gap-4 mt-6">
                <button className="btn btn-primary" onClick={() => navigate("/Form Peminjaman")}>Ajukan Peminjaman</button>
                <button className="btn btn-outline" onClick={() => navigate("/layanan/jadwal")}>Lihat Jadwal</button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src={HeroImage} alt="Ilustrasi" className="w-full max-w-md rounded-lg" />
            </div>
          </section>

          {/* ----------------  STATISTIC CARDS  ----------------------- */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Statistik Penggunaan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map(({ id, icon, label, value, color }) => (
                <div key={id} className="card bg-base-200 shadow-lg p-6 text-center hover:shadow-xl transition">
                  <div className={`text-5xl mb-3 ${color}`}>{icon}</div>
                  <div className="text-3xl font-bold"><CountUp end={value} duration={2} /></div>
                  <p className="mt-2 text-base-content/70">{label}</p>
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>

      {/* -------------------------------------------------------------- */}
      {/*  FOOTER                                                       */}
      {/* -------------------------------------------------------------- */}
      <Footer />
    </div>
  );
}

export default HomePage;
