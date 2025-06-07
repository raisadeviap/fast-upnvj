import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/UPN.png";
import { FunnelIcon } from "@heroicons/react/24/solid";
import NavbarLoggedIn from "../components/NavbarLoggedin";


const Fasilitas = [
  {
    title: "Auditorium Bhineka Tunggal Ika",
    kapasitas: "300 orang",
    gedung: "Plaza Soedirman",
    image:
      "https://www.upnvj.ac.id/en/files/large/5fe91f59d3da4d824097b0b5bb994e69",
  },
  {
    title: "Auditorium Wahidin Sudiro Husodo",
    kapasitas: "100 orang",
    gedung: "Wahidin Sudiro Husodo",
    image:
      "https://fk.upnvj.ac.id/wp-content/uploads/2022/04/IMG_2038-scaled.jpg",
  },
  {
    title: "Auditorium Dr. Cipto Mangun Kusumo",
    kapasitas: "200 orang",
    gedung: "Dr. Cipto Mangun Kusumo",
    image:
      "https://fk.upnvj.ac.id/wp-content/uploads/2022/11/IMG_7937-scaled.jpg",
  },
  {
    title: "Auditorium MERCe",
    kapasitas: "100 orang",
    gedung: "MERCe Kampus Limo",
    image:
      "https://merce-fk.upnvj.ac.id/wp-content/uploads/photo-gallery/imported_from_media_libray/IMG_3839-min-scaled.jpg?bwg=1693216594",
  },
  {
    title: "Ruang Podcast FH",
    kapasitas: "5 orang",
    gedung: "Yos Sudarso",
    image:
      "https://hukum.upnvj.ac.id/wp-content/uploads/2022/06/RuangPODCAST-LT-4-1024x799.jpeg",
  },
  {
    title: "Ruang Podcast FIK",
    kapasitas: "5 orang",
    gedung: "Ki Hajar Dewantara",
    image:
      "https://new-fik.upnvj.ac.id/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-07-at-15.44.52.jpeg",
  },
  {
    title: "Ruang Podcast FIKES",
    kapasitas: "5 orang",
    gedung: "FIKES Kampus Limo",
    image:
      "https://fikes.upnvj.ac.id/id/files/thumb/93ef38f7d710dc957cf1d23c2808d1da/520/fit",
  },
  {
    title: "Ruang Podcast FK",
    kapasitas: "5 orang",
    gedung: "FK Kampus Pondok Labu",
    image:
      "https://fk.upnvj.ac.id/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-07-at-10.04.34.jpeg",
  },
  {
    title: "Ruang Podcast FISIP",
    kapasitas: "5 orang",
    gedung: "FISIP",
    image:
      "https://fisip.upnvj.ac.id/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-12-at-15.12.39.jpeg",
  },
  {
    title: "Ruang Podcast FEB",
    kapasitas: "5 orang",
    gedung: "FEB",
    image:
      "https://i.ytimg.com/vi/raX3zgh1WtE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH0CYAC0AWKAgwIABABGHIgVCgrMA8=&rs=AOn4CLC4YIUaKil03CaPp4rsQlmzBv5P9w",
  },
  {
    title: "Lab Terpadu",
    kapasitas: "50 orang",
    gedung: "Perpustakaan Lt. 2",
    image:
      "https://uptlabterpadu.upnvj.ac.id/wp-content/uploads/2023/08/Kegiatan-Perkuliahan-FIK-28-08-2023-01.jpeg",
  },
  {
    title: "Ubin Cokelat",
    kapasitas: "200 orang",
    gedung: "FEB Kampus Pondok Labu",
    image: "https://feb.upnvj.ac.id/wp-content/uploads/2024/12/328.jpg",
  },
  {
    title: "Lapangan Basket",
    kapasitas: "200 orang",
    gedung: "Kampus Pondok Labu",
    image:
      "https://cdn.idntimes.com/content-images/community/2022/07/aironebball-150630392-1387338378274022-5515620263307717663-n-4b05e1ad11e871221e4135e0f2a9a211-6e991a6de4e6b086ea74264517fdd7a3.jpg",
  },
];

function Footer() {
  return (
    <footer className="bg-lime-800 text-white px-8 py-10 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between">
        <div className="mb-6 sm:mb-0">
          <img src={Logo} alt="UPN Logo" className="w-12 mb-2" />
          <p className="text-sm leading-6">
            FAST UPNVJ
            <br />
            Website Peminjaman Fasilitas Kampus UPNVJ
          </p>
        </div>
        <div>
          <h6 className="font-semibold mb-2">Social</h6>
          <div className="flex gap-4">
            <a href="#" className="hover:text-yellow-300 transition">
              Facebook
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              Instagram
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavbarLoggedIn/>
      <div className="flex flex-1">
        <aside className="w-72 bg-white p-5 border-r shadow-sm space-y-6">
          <h2 className="text-lg font-bold flex items-center gap-2 text-black">
            <FunnelIcon className="w-5 h-5" />
            Filter Fasilitas
          </h2>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-2">
              Jenis Fasilitas
            </h3>
            {["Auditorium", "Ruang Podcast", "Lab", "Lapangan"].map(
              (jenis, i) => (
                <label
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <input type="checkbox" className="green-200" />
                  {jenis}
                </label>
              )
            )}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-2">
              Lokasi/Gedung
            </h3>
            <select className="w-full border rounded px-3 py-2 text-sm">
              <option>Semua Lokasi</option>
              <option>Kampus Limo</option>
              <option>Pondok Labu</option>
            </select>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-2">
              Kapasitas
            </h3>
            <select className="w-full border rounded px-3 py-2 text-sm">
              <option value="lt50">&lt; 50 orang</option>
              <option value="gte50">&gt; 50 orang</option>
            </select>
          </div>
          <button className="w-full bg-lime-600 text-white py-2 rounded-md hover:bg-lime-600 transition">
            Reset Filter
          </button>
        </aside>

        <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Fasilitas.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-md font-semibold text-lime-600 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  Kapasitas: {item.kapasitas}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Gedung: {item.gedung}
                </p>
                <button
                  className="w-full text-sm border border-lime-600 text-black hover:bg-lime-600 hover:text-white py-1.5 rounded-md transition"
                  onClick={() => navigate("/ajukan-peminjaman")}
                >
                  Ajukan Peminjaman
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
}
