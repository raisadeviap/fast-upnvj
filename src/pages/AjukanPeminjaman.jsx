import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

export default function AjukanPeminjaman() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const fasilitas = state?.fasilitas;

  const [form, setForm] = useState({
    namaKegiatan: "",
    tgl_pinjam: "",
    jam_mulai: "",
    jam_selesai: "",
    pj: "",
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Silakan unggah file KAK terlebih dahulu.");
      return;
    }

    const formData = new FormData();
    formData.append("tgl_pengajuan", new Date().toISOString());
    formData.append("tgl_pinjam", form.tgl_pinjam);
    formData.append("jam_mulai", form.jam_mulai);
    formData.append("jam_selesai", form.jam_selesai);
    formData.append("id_user", localStorage.getItem("userId")); // Pastikan sudah disimpan saat login
    formData.append("id_fasilitas", fasilitas?.id);
    formData.append("file", file);

    try {
      await axios.post(
        "https://fast-upnvj-backend.vercel.app/api/peminjaman",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Pengajuan berhasil!");
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Pengajuan gagal. Coba lagi.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-2xl font-bold text-black mb-6">
          Form Pengajuan Peminjaman
        </h1>

        {fasilitas && (
          <div className="mb-4 p-4 border rounded bg-white shadow">
            <h2 className="text-lg font-semibold">{fasilitas.title}</h2>
            <p className="text-sm text-gray-600">
              Kapasitas: {fasilitas.kapasitas} &nbsp;|&nbsp; Gedung:{" "}
              {fasilitas.gedung}
            </p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded shadow-md"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nama Kegiatan
            </label>
            <input
              type="text"
              name="namaKegiatan"
              value={form.namaKegiatan}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tanggal Peminjaman
              </label>
              <input
                type="date"
                name="tgl_pinjam"
                value={form.tgl_pinjam}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Penanggung Jawab
              </label>
              <input
                type="text"
                name="pj"
                value={form.pj}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Jam Mulai
              </label>
              <input
                type="time"
                name="jam_mulai"
                value={form.jam_mulai}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Jam Selesai
              </label>
              <input
                type="time"
                name="jam_selesai"
                value={form.jam_selesai}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload KAK (PDF)
            </label>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-700"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-lime-600 hover:bg-lime-700 text-white py-2 rounded-md transition"
          >
            Ajukan Sekarang
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
