import React from "react";
import { useParams, Link } from "react-router-dom";
import { Fasilitas } from "../data/dataFasilitas";

export default function FasilitasPage() {
  const { slug } = useParams();

  // Jika ada slug, render detail fasilitas
  if (slug) {
    const fasilitas = Fasilitas.find((f) => f.slug === slug);

    if (!fasilitas) {
      return (
        <div className="p-6 text-center text-red-600">
          <p>Fasilitas tidak ditemukan.</p>
          <Link to="/fasilitas" className="text-blue-600 underline mt-4 inline-block">
            ← Kembali ke daftar fasilitas
          </Link>
        </div>
      );
    }
      console.log("Slug dari URL:", slug);

    return (
      <div className="max-w-xl mx-auto p-6 bg-white border rounded-xl shadow">
        <img
          src={fasilitas.image}
          alt={fasilitas.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{fasilitas.title}</h1>
        <p className="mb-1"><strong>Gedung:</strong> {fasilitas.gedung}</p>
        <p className="mb-1"><strong>Kapasitas:</strong> {fasilitas.kapasitas}</p>
        <Link to="/fasilitas" className="text-blue-600 mt-4 inline-block">
          ← Kembali ke daftar fasilitas
        </Link>
      </div>
    );
  }

  // Jika tidak ada slug, tampilkan daftar fasilitas
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Fasilitas.map((item) => (
        <Link
          key={item.slug}
          to={`/fasilitas/${item.slug}`}
          className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover rounded mb-3"
          />
          <h2 className="text-xl font-bold mb-1">{item.title}</h2>
          <p className="text-gray-600 mb-1"><strong>Gedung:</strong> {item.gedung}</p>
          <p className="text-gray-600"><strong>Kapasitas:</strong> {item.kapasitas}</p>
        </Link>
      ))}
    </div>
  );
}
