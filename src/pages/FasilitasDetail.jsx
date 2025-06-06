import React from "react";
import { useParams, Link } from "react-router-dom";
import { Fasilitas } from "../data/dataFasilitas";

export default function FasilitasDetail() {
  const { slug } = useParams();
  const data = Fasilitas.find(f => f.slug === slug);

  if (!data) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold mb-4">Fasilitas tidak ditemukan 😔</h1>
        <Link to="/" className="text-blue-600 underline">Kembali ke beranda</Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img src={data.image} alt={data.title}
           className="w-full h-64 object-cover rounded-xl mb-6" />
      <h1 className="text-3xl font-bold text-[#5dac00] mb-4">{data.title}</h1>
      <p><strong>Gedung:</strong> {data.gedung}</p>
      <p><strong>Kapasitas:</strong> {data.kapasitas}</p>

      <Link to="/" className="mt-6 inline-block text-blue-600 underline">← Kembali</Link>
    </div>
  );
}
