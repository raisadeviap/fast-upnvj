import React from "react";
import { useParams, Link } from "react-router-dom";
import { Fasilitas } from "../data/dataFasilitas";

export default function FasilitasDetail() {
  const { slug } = useParams();                         // ← ambil slug dari URL
  const fasilitas = Fasilitas.find(f => f.slug === slug);

  if (!fasilitas) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold mb-4">Fasilitas tidak ditemukan 😔</h1>
        <Link to="/" className="text-blue-600 underline">Kembali ke Beranda</Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img src={fasilitas.image} alt={fasilitas.title}
           className="w-full h-64 object-cover rounded-xl mb-6" />
      <h1 className="text-3xl font-bold text-[#5dac00] mb-4">{fasilitas.title}</h1>
      <p className="mb-1"><strong>Gedung:</strong> {fasilitas.gedung}</p>
      <p className="mb-6"><strong>Kapasitas:</strong> {fasilitas.kapasitas}</p>
      <Link to="/" className="text-blue-600 underline">← Kembali</Link>
    </div>
  );
}
