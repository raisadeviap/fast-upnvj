import React from "react";
import { useLocation } from "react-router-dom";

export default function AjukanPeminjaman() {
  // (Opsional) Ambil data fasilitas yang dikirim lewat state
  const { state } = useLocation();   // state?.fasilitas berisi data yang dikirim
  const fasilitas = state?.fasilitas;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold text-green-800 mb-6">
        Form Pengajuan Peminjaman
      </h1>

      {fasilitas && (
        <div className="mb-4 p-4 border rounded bg-white shadow">
          <h2 className="text-lg font-semibold">{fasilitas.title}</h2>
          <p className="text-sm text-gray-600">
            Kapasitas: {fasilitas.kapasitas} &nbsp;|&nbsp; Gedung: {fasilitas.gedung}
          </p>
        </div>
      )}

      {/* ------ form peminjaman di sini ------ */}
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nama Kegiatan
          </label>
          <input
            className="mt-1 block w-full border rounded px-3 py-2"
            placeholder="Contoh: Seminar Kewirausahaan"
            required
          />
        </div>

        {/* field lain… */}

        <button
          type="submit"
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
        >
          Kirim Pengajuan
        </button>
      </form>
    </div>
  );
}
