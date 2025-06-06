import React from "react";
import { Link } from "react-router-dom";
import { Fasilitas } from "../data/tempt";

export default function FasilitasList() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-[#5dac00] mb-6 text-center">
        Daftar Fasilitas Kampus
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {Fasilitas.map((f, idx) => {
          console.log(`Fasilitas #${idx}:`, f); // Debugging
          
          // Tambahan cek agar tidak error jika slug tidak ada
          if (!f || !f.slug) return null;

          return (
            <Link
              to={`/fasilitas/${f.slug}`}
              key={f.slug}
              className="block border rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={f.image}
                alt={f.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{f.title}</h2>
                <p className="text-sm text-gray-600">Gedung: {f.gedung}</p>
                <p className="text-sm text-gray-600">Kapasitas: {f.kapasitas}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
