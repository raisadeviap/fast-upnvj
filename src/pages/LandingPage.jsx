import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "../assets/img1.svg";
import AboutImage from "../assets/UPN.png"; 

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-base-100" data-theme="light">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section dengan gambar di sebelah kanan */}
        <section className="flex flex-col md:flex-row items-center justify-between min-h-[70vh] gap-8">
          {/* Teks di sebelah kiri */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content leading-tight">
              <span className="block">Kami menyediakan</span>
              <span className="block">solusi peminjaman</span>
              <span className="block">fasilitas kampus</span>
            </h1>
            
            <p className="text-lg md:text-xl text-base-content/80 mt-6">
              Sistem peminjaman fasilitas kampus UPNVJ yang cepat, mudah, dan terintegrasi
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button 
                className="btn btn-primary px-6 py-3 text-lg"
                onClick={() => navigate('/login')}
              >
                Ajukan Peminjaman
              </button>
              <button className="btn btn-outline px-6 py-3 text-lg">
                Lihat Panduan
              </button>
            </div>
          </div>
          
          {/* Gambar di sebelah kanan */}
          <div className="md:w-1/2 flex justify-center">
            <img 
              src={HeroImage} 
              alt="Fast UPNVJ - Peminjaman Fasilitas Kampus" 
              className="w-120 h-auto rounded-lg ml-1"
            />
          </div>
        </section>

        {/* Tentang Kami*/}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-20 bg-accent">
          <div className="container mx-auto px-6 py-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Gambar */}
              <div className="lg:w-1/2">
                <img 
                  src={AboutImage} 
                  alt="Tentang Fast UPNVJ" 
                  className="rounded-lg w-9/10 h-auto"
                />
              </div>
              
              {/* Konten */}
              <div className="lg:w-1/2 text-accent-content">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Tentang Fast UPNVJ</h2>
                <p className="text-lg mb-4">
                  Fast UPNVJ adalah platform digital inovatif yang dikembangkan untuk mempermudah proses peminjaman fasilitas kampus di Universitas Pembangunan Nasional Veteran Jakarta.
                </p>
                <p className="text-lg mb-6">
                  Kami berkomitmen untuk menyediakan sistem yang efisien, transparan, dan mudah digunakan bagi seluruh civitas akademika UPNVJ.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-2xl">🏛️</div>
                    <div>
                      <h3 className="font-semibold text-xl">Visi</h3>
                      <p>Menjadi sistem peminjaman fasilitas terintegrasi terbaik di lingkungan UPNVJ</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-2xl">🎯</div>
                    <div>
                      <h3 className="font-semibold text-xl">Misi</h3>
                      <p>Menyederhanakan proses administratif dan meningkatkan aksesibilitas fasilitas kampus</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-accent-content/20">
                  <p className="text-lg font-medium">UNIVERSITAS PEMBANGUNAN NASIONAL "VETERAN" JAKARTA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        {/* Fitur Layanan */}
        <section className="mt-20 py-10">
          <h2 className="text-3xl font-bold text-center mb-12">Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="card-title">Peminjaman Gedung</h3>
                <p>Fasilitas gedung kampus untuk kegiatan akademik dan non-akademik</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">🪑</div>
                <h3 className="card-title">Peminjaman Ruangan</h3>
                <p>Ruang kelas, auditorium, dan ruang pertemuan lainnya</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="card-title">Manajemen Jadwal</h3>
                <p>Sistem penjadwalan terintegrasi untuk peminjaman fasilitas</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage;