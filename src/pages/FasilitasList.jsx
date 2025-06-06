import React from "react";
import { Link } from "react-router-dom";
import { Fasilitas } from "../data/dataFasilitas";

export default function FasilitasList() {
  const user = {
    name: "Nurmalia",
    photo: "/images/nurmalia.jpg", // pastikan gambar ini ada
  };

  const NavbarLogin = () => (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center mb-6">
      <div className="text-lg font-bold">
        <Link to="/">FAST UPNVJ</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/fasilitas" className="hover:underline">Fasilitas</Link>
        <div className="flex items-center gap-2">
          <img
            src={user.photo}
            alt="user"
            className="w-8 h-8 rounded-full border"
          />
          <span>{user.name}</span>
        </div>
      </div>
    </nav>
  );

  return (
    <>
      <NavbarLogin />
      <div className="p-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#5dac00] mb-6 text-center">
          Daftar Fasilitas Kampus
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          {Fasilitas.map((f) => (
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
          ))}
        </div>
      </div>
    </>
  );
}
