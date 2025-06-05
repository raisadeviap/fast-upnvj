import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "../assets/img1.svg";
import AboutImage from "../assets/UPN.png";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-100" data-theme="light">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 min-h-[80vh]">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-base-content">
              Solusi Peminjaman Fasilitas
              <span className="block text-primary mt-2">
                Cepat, Mudah, Terintegrasi
              </span>
            </h1>
            <p className="mt-6 text-lg text-base-content/80">
              Kelola peminjaman gedung dan ruangan di lingkungan UPNVJ hanya
              dalam beberapa klik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
              <button
                onClick={() => navigate("/login")}
                className="btn btn-primary text-lg px-6 py-3 shadow-md hover:scale-105 transition-transform"
              >
                🚀 Ajukan Sekarang
              </button>
              <button
                onClick={() => navigate("/panduan")}
                className="btn btn-outline text-lg px-6 py-3 hover:scale-105 transition-transform"
              >
                📘 Lihat Panduan
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src={HeroImage}
              alt="Ilustrasi Peminjaman"
              className="w-full max-w-md rounded-3xl shadow-xl animate-fade-in"
            />
          </div>
        </section>

        {/* Tentang Section */}
        <section className="mt-24 bg-accent text-accent-content py-16 rounded-3xl shadow-inner">
          <div className="flex flex-col lg:flex-row items-center gap-12 container mx-auto px-6">
            <div className="lg:w-1/2">
              <img
                src={AboutImage}
                alt="Tentang Kami"
                className="rounded-xl w-full max-w-sm mx-auto"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold">Tentang Fast UPNVJ</h2>
              <p>
                FAST UPNVJ adalah sistem digital resmi untuk mempermudah
                peminjaman fasilitas kampus. Dirancang untuk kenyamanan dan
                efisiensi mahasiswa serta staf akademik.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <p>
                    <strong>Misi:</strong> Meningkatkan aksesibilitas dan
                    efektivitas pengelolaan fasilitas.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🌐</span>
                  <p>
                    <strong>Terintegrasi:</strong> Terkoneksi langsung dengan
                    database peminjaman kampus.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Fitur Unggulan */}
        <section className="mt-28 text-center">
          <h2 className="text-4xl font-bold mb-12 text-base-content">
            Fitur Unggulan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {[
              {
                icon: "🏢",
                title: "Peminjaman Gedung",
                desc: "Ajukan pemakaian aula, auditorium, dan lainnya.",
              },
              {
                icon: "🪑",
                title: "Peminjaman Ruangan",
                desc: "Pinjam ruang kelas dan lab dengan sistem real-time.",
              },
              {
                icon: "📅",
                title: "Jadwal Terintegrasi",
                desc: "Cek dan kelola jadwal peminjaman secara mudah.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="card bg-base-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-primary"
              >
                <div className="card-body items-center text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="card-title text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-base-content/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-28 py-16 bg-primary rounded-3xl text-white text-center shadow-lg">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Mengelola Peminjaman dengan Mudah?
          </h3>
          <p className="text-lg mb-8">
            Gabung sekarang dan nikmati kemudahan layanan FAST UPNVJ!
          </p>
          <button
            onClick={() => navigate("/login")}
            className="btn btn-accent text-lg px-8 py-3 font-semibold hover:scale-105 transition-transform"
          >
            🎉 Mulai Sekarang
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
