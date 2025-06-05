import React, { useState } from "react";

function FormPeminjaman() {
  const [formData, setFormData] = useState({
    nama: "",
    npm: "",
    prodi: "",
    fasilitas: "",
    tanggal_pinjam: "",
    waktu_mulai: "",
    waktu_selesai: "",
    keperluan: "",
    kontak: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi pengiriman data
    setTimeout(() => {
      console.log("Data pengajuan:", formData);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white shadow-lg p-10 rounded-2xl space-y-6"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Pengajuan Peminjaman Fasilitas
      </h2>

      {submitted && (
        <div className="bg-green-100 text-green-700 px-4 py-2 rounded border border-green-300 text-center">
          Pengajuan berhasil dikirim!
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-medium mb-1">Nama Lengkap</label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            required
            placeholder="Contoh: Nurmalia Indriyani"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">NPM / NIP</label>
          <input
            type="text"
            name="npm"
            value={formData.npm}
            onChange={handleChange}
            required
            placeholder="Contoh: 123456789"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Program Studi / Unit</label>
          <input
            type="text"
            name="prodi"
            value={formData.prodi}
            onChange={handleChange}
            required
            placeholder="Contoh: Sistem Informasi"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Jenis Fasilitas</label>
          <select
            name="fasilitas"
            value={formData.fasilitas}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">-- Pilih Fasilitas --</option>
            <option value="gedung">Gedung</option>
            <option value="ruangan">Ruangan</option>
            <option value="proyektor">Proyektor</option>
            <option value="lainnya">Lainnya</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Tanggal Peminjaman</label>
          <input
            type="date"
            name="tanggal_pinjam"
            value={formData.tanggal_pinjam}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block font-medium mb-1">Waktu Mulai</label>
            <input
              type="time"
              name="waktu_mulai"
              value={formData.waktu_mulai}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="w-1/2">
            <label className="block font-medium mb-1">Waktu Selesai</label>
            <input
              type="time"
              name="waktu_selesai"
              value={formData.waktu_selesai}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Keperluan</label>
          <textarea
            name="keperluan"
            value={formData.keperluan}
            onChange={handleChange}
            required
            rows="3"
            placeholder="Tuliskan tujuan penggunaan fasilitas..."
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Kontak (WA / Email)</label>
          <input
            type="text"
            name="kontak"
            value={formData.kontak}
            onChange={handleChange}
            required
            placeholder="Contoh: 08123456789 atau nama@email.com"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="text-right mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition disabled:opacity-50"
        >
          {isSubmitting ? "Mengirim..." : "Ajukan"}
        </button>
      </div>
    </form>
  );
}

export default FormPeminjaman;
