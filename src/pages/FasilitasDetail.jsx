import React from "react";
import { useParams } from "react-router-dom";
import { Fasilitas } from "../data/fasilitas"; // Pindahkan data ke file terpisah jika perlu

export default function FasilitasDetail() {
  const { id } = useParams();
  const fasilitas = Fasilitas[id];

  if (!fasilitas) {
    return <div className="p-6">Fasilitas tidak ditemukan.</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img src={fasilitas.image} alt={fasilitas.title} className="w-full h-64 object-cover rounded-xl mb-4" />
      <h1 className="text-2xl font-bold text-[#5dac00] mb-2">{fasilitas.title}</h1>
      <p className="text-gray-700">Gedung: {fasilitas.gedung}</p>
      <p className="text-gray-700">Kapasitas: {fasilitas.kapasitas}</p>
    </div>
  );
}
