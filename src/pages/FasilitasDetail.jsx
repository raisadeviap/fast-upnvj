
import React from "react";
import { Link } from "react-router-dom";
import { Fasilitas } from "./dataFasilitas";

export default function FasilitasList() {
    const { slug } = useParams();
    const fasilitas = Fasilitas.find((f) => f.slug === slug);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Fasilitas.map((item) => (
        <Link
          key={item.slug}
          to={`/fasilitas/${item.slug}`}
          className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white"
        >
          {/* Gambar */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover rounded mb-3"
          />

          {/* Judul & info */}
          <h2 className="text-xl font-bold mb-1">{item.title}</h2>
          <p className="text-gray-600 mb-1">
            <strong>Gedung:</strong> {item.gedung}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Kapasitas:</strong> {item.kapasitas}
          </p>

        </Link>
      ))}
    </div>
  );
}
