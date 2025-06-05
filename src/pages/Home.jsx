import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function HomePage() {
  const [kategori, setKategori] = useState("Semua");
  const [kapasitas, setKapasitas] = useState(0);

  const layanan = [
    {
      title: "Peminjaman Ruangan",
      desc: "Ajukan peminjaman ruang kelas, auditorium, atau fasilitas lainnya",
      to: "/peminjaman",
      kategori: "Ruangan Kelas",
      kapasitas: 30,
    },
    {
      title: "Peminjaman Gedung",
      desc: "Ajukan peminjaman gedung kampus untuk acara atau kegiatan",
      to: "/peminjaman",
      kategori: "Gedung",
      kapasitas: 100,
    },
    {
      title: "Peminjaman Auditorium",
      desc: "Ajukan peminjaman auditorium untuk seminar atau acara besar",
      to: "/peminjaman",
      kategori: "Auditorium",
      kapasitas: 200,
    },
  ];

  const filteredLayanan = layanan.filter((item) => {
    const cocokKategori = kategori === "Semua" || item.kategori === kategori;
    const cocokKapasitas = item.kapasitas >= kapasitas;
    return cocokKategori && cocokKapasitas;
  });

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Selamat datang di Sistem Informasi Fasilitas Kampus</h1>

      {/* Filter Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Filter Peminjaman</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Kategori Filter */}
          <div>
            <label className="block mb-2 font-medium">Kategori</label>
            <select
              className="select select-bordered w-full"
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
            >
              <option value="Semua">Semua</option>
              <option value="Gedung">Gedung</option>
              <option value="Ruangan Kelas">Ruangan Kelas</option>
              <option value="Auditorium">Auditorium</option>
            </select>
          </div>

          {/* Kapasitas Filter */}
          <div>
            <label className="block mb-2 font-medium">Kapasitas (Orang)</label>
            <input
              type="range"
              min={0}
              max={200}
              value={kapasitas}
              onChange={(e) => setKapasitas(Number(e.target.value))}
              className="range range-primary"
            />
            <div className="flex justify-between text-sm px-2 mt-1">
              <span>0</span><span>100</span><span>200+</span>
            </div>
            <div className="mt-1 text-sm text-gray-600">Minimum: {kapasitas} orang</div>
          </div>
        </div>
      </section>

      {/* Card List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLayanan.map((item, index) => (
          <Link to={item.to} key={index}>
            <Card className="hover:shadow-lg transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.desc}</p>
                <p className="text-sm text-gray-500">Kategori: {item.kategori}</p>
                <p className="text-sm text-gray-500">Kapasitas: {item.kapasitas} orang</p>
                <Button className="mt-4">Ajukan</Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
