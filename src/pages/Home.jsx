import React from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutImage from "../assets/UPN.png";

const categories = [
  'Elektronik',
  'Konsol Game',
  'Aksesoris Konsol',
  'Alat Casting',
  'Foot Bath & Spa',
  'Mesin Jahit & Aksesoris',
  'Lainnya'
];

const products = [
  {
    title: 'Blender Chopper Daging Stainless',
    price: 'Rp58.000',
    image: 'https://via.placeholder.com/150',
    discount: '52%',
  },
  {
    title: 'Booster TV Penguat Sinyal Antena',
    price: 'Rp12.999',
    image: 'https://via.placeholder.com/150',
    discount: '57%',
  },
  {
    title: 'Bracket TV LCD LED 14 s/d 42 inch',
    price: 'Rp33.200',
    image: 'https://via.placeholder.com/150',
    discount: '27%',
  },
  {
    title: 'PCB LED ACR 5-40W',
    price: 'Rp5.300',
    image: 'https://via.placeholder.com/150',
    discount: '',
  },
  {
    title: 'Blender Kapsul Capsule Cutter',
    price: 'Rp63.999',
    image: 'https://via.placeholder.com/150',
    discount: '54%',
  }
];

export default function ProductPage() {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-100 p-4 border-r">
        <h2 className="text-lg font-bold mb-4">Semua Kategori</h2>
        <ul className="space-y-2">
          {categories.map((cat, i) => (
            <li key={i} className="text-sm text-gray-700 hover:text-orange-600 cursor-pointer">
              {cat === 'Elektronik' ? <strong className="text-orange-600">{cat}</strong> : cat}
            </li>
          ))}
        </ul>
        <h3 className="mt-8 mb-2 text-sm font-semibold">FILTER</h3>
        <p className="text-xs text-gray-500">Lokasi</p>
      </aside>
      <main className="flex-1 p-6">
        <div className="flex gap-2 mb-4">
          <button className="px-3 py-1 bg-gray-200 rounded">Urutkan</button>
          <button className="px-3 py-1 bg-orange-500 text-white rounded">Populer</button>
          <button className="px-3 py-1 bg-gray-200 rounded">Terbaru</button>
          <button className="px-3 py-1 bg-gray-200 rounded">Terlaris</button>
          <button className="px-3 py-1 bg-gray-200 rounded">Harga ▼</button>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {products.map((product, i) => (
            <div key={i} className="border rounded-lg p-2 shadow hover:shadow-lg">
              <img src={product.image} alt={product.title} className="w-full h-32 object-cover mb-2" />
              {product.discount && (
                <span className="text-red-500 text-xs absolute right-2 top-2">-{product.discount}</span>
              )}
              <h4 className="text-sm font-semibold mb-1">{product.title}</h4>
              <p className="text-red-500 font-bold">{product.price}</p>
              <p className="text-xs text-gray-500">10RB+ terjual</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
