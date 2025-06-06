import React from "react";
import { useParams, Link } from "react-router-dom";
import { Fasilitas } from "./dataFasilitas";

export default function FasilitasDetail() {
  const { slug } = useParams();
  const fasilitas = Fasilitas.find((f) => f.slug === slug);

  if (!fasilitas) {
    return <p className="p-6 text-red-600">Fasilitas tidak ditemukan.</p>;
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white border rounded-xl shadow">
      <img src={fasilitas.image} alt={fasilitas.title} className="w-full h-64 object-cover rounded mb-4" />
      <h1 className="text-2xl font-bold mb-2">{fasilitas.title}</h1>
      <p className="mb-1"><strong>Gedung:</strong> {fasilitas.gedung}</p>
      <p className="mb-1"><strong>Kapasitas:</strong> {fasilitas.kapasitas}</p>
      <Link to="/fasilitas" className="text-blue-600 mt-4 inline-block">← Kembali ke daftar fasilitas</Link>
    </div>
  );
}
