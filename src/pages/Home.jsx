import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  const [kategori, setKategori] = useState("Semua");
  const [kapasitas, setKapasitas] = useState(0);

  const fasilitas = [
    {
      title: "Auditorium BTI",
      kategori: "Auditorium",
      kapasitas: 200,
      deskripsi: "Auditorium besar untuk seminar dan acara kampus."
    },
    {
      title: "Ruang Podcast",
      kategori: "Studio",
      kapasitas: 4,
      deskripsi: "Ruang studio untuk rekaman podcast."
    },
    {
      title: "Lab Komputer MI",
      kategori: "Laboratorium",
      kapasitas: 40,
      deskripsi: "Laboratorium komputer untuk kelas praktikum."
    },
    {
      title: "Ruang Kelas TCL",
      kategori: "Ruangan Kelas",
      kapasitas: 30,
      deskripsi: "Ruang kelas reguler untuk perkuliahan."
    }
  ];

  const filteredFasilitas = fasilitas.filter((item) => {
    const cocokKategori = kategori === "Semua" || item.kategori === kategori;
    const cocokKapasitas = item.kapasitas >= kapasitas;
    return cocokKategori && cocokKapasitas;
  });

  return (
    <div className="flex">
      {/* Sidebar Filter */}
      <aside className="w-1/4 p-6 bg-gray-100 min-h-screen">
        <h2 className="text-lg font-semibold mb-4">Filter Fasilitas</h2>
        <div className="mb-6">
          <label className="block mb-2 font-medium">Kategori</label>
          <select
            className="select select-bordered w-full"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
          >
            <option value="Semua">Semua</option>
            <option value="Auditorium">Auditorium</option>
            <option value="Studio">Studio</option>
            <option value="Laboratorium">Laboratorium</option>
            <option value="Ruangan Kelas">Ruangan Kelas</option>
          </select>
        </div>

        <div className="mb-6">
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
      </aside>

      {/* Content */}
      <main className="w-3/4 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFasilitas.map((item, index) => (
          <Card key={index} className="hover:shadow-lg transition duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-2">{item.deskripsi}</p>
              <p className="text-sm text-gray-500">Kategori: {item.kategori}</p>
              <p className="text-sm text-gray-500">Kapasitas: {item.kapasitas} orang</p>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}
