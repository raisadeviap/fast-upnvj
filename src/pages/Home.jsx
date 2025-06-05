import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HomePage() {
  const navigate = useNavigate();

  // Dinamis sapaan berdasarkan jam
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 10) setGreeting("Selamat pagi");
    else if (hour < 15) setGreeting("Selamat siang");
    else if (hour < 18) setGreeting("Selamat sore");
    else setGreeting("Selamat malam");
  }, []);

  // Contoh data ruangan tersedia (bisa di-fetch dari API nanti)
  const availableRooms = 42;
  const totalRooms = 60;

  // Dummy testimoni
  const testimonials = [
    {
      name: "Andi Wijaya",
      comment: "Proses peminjaman sangat mudah dan cepat, sangat membantu kegiatan saya di kampus!",
    },
    {
      name: "Sari Dewi",
      comment: "Fitur manajemen jadwalnya membantu saya mengatur waktu ruangan dengan baik.",
    },
    {
      name: "Budi Santoso",
      comment: "Panduan sangat jelas dan sistemnya mudah dipahami oleh siapa saja.",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100" data-theme="light">
      <Navbar />

      <main className="container mx-auto px-6 py-10">
        {/* Hero & Sapaan */}
        <section className="flex flex-col md:flex-row items-center justify-between min-h-[70vh] gap-10">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-base-content">
              {greeting}, <br />
              Mahasiswa UPNVJ!
            </h1>
            <p className="text-lg md:text-xl text-base-content/80">
              Selamat datang di Fast UPNVJ, sistem peminjaman fasilitas kampus yang cepat, mudah, dan terintegrasi.
            </p>

            <div className="flex flex-wrap gap-6 mt-8">
              <button
                onClick={() => navigate("/booking")}
                className="btn btn-primary px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform"
              >
                Ajukan Peminjaman
              </button>
              <button
                onClick={() => navigate("/guide")}
                className="btn btn-outline px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform"
              >
                Lihat Panduan
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src={HomeIllustration}
              alt="Ilustrasi Fast UPNVJ"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Statistik Ruangan */}
        <section className="mt-20 bg-base-200 rounded-lg shadow-lg p-10 flex flex-col md:flex-row justify-around items-center gap-12">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-primary">
              <CountUp end={availableRooms} duration={2} /> 
            </h3>
            <p className="text-lg mt-2 font-medium">Ruangan Tersedia</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-bold text-secondary">
              <CountUp end={totalRooms} duration={2} /> 
            </h3>
            <p className="text-lg mt-2 font-medium">Total Ruangan</p>
          </div>
        </section>

        {/* Panduan Peminjaman */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Panduan Peminjaman</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              "Login menggunakan akun UPNVJ kamu.",
              "Pilih jenis fasilitas yang ingin dipinjam.",
              "Pilih tanggal dan jam penggunaan fasilitas.",
              "Isi form peminjaman dengan data lengkap.",
              "Kirim pengajuan dan tunggu konfirmasi.",
              "Gunakan fasilitas sesuai jadwal yang disetujui.",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                  {i + 1}
                </div>
                <p className="text-lg text-base-content">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimoni */}
        <section className="mt-24 bg-base-200 rounded-lg shadow-lg p-10 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Apa Kata Mereka?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(({ name, comment }, idx) => (
              <div key={idx} className="bg-base-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <p className="text-base-content text-lg italic mb-4">"{comment}"</p>
                <p className="font-semibold text-primary text-right">- {name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-24 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pertanyaan Umum</h2>
          <div className="space-y-6">
            <details className="group border border-base-300 rounded-md p-4 cursor-pointer open:ring-2 open:ring-primary transition">
              <summary className="text-lg font-semibold text-base-content">
                Bagaimana cara mengajukan peminjaman?
              </summary>
              <p className="mt-2 text-base-content/80">
                Login dengan akun UPNVJ kamu, pilih fasilitas, isi form peminjaman, lalu kirimkan pengajuan.
              </p>
            </details>
            <details className="group border border-base-300 rounded-md p-4 cursor-pointer open:ring-2 open:ring-primary transition">
              <summary className="text-lg font-semibold text-base-content">
                Apakah saya bisa membatalkan pengajuan?
              </summary>
              <p className="mt-2 text-base-content/80">
                Ya, pengajuan yang belum dikonfirmasi dapat dibatalkan melalui dashboard kamu.
              </p>
            </details>
            <details className="group border border-base-300 rounded-md p-4 cursor-pointer open:ring-2 open:ring-primary transition">
              <summary className="text-lg font-semibold text-base-content">
                Berapa lama proses konfirmasi pengajuan?
              </summary>
              <p className="mt-2 text-base-content/80">
                Biasanya dalam 1x24 jam kerja.
              </p>
            </details>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
