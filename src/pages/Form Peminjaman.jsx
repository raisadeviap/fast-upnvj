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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data pengajuan:", formData);
    // Kirim data ke backend di sini
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white shadow-md p-8 rounded space-y-4"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">
        Form Pengajuan Peminjaman Fasilitas
      </h2>

      <div>
        <label className="block font-medium">Nama Lengkap</label>
        <input
          type="text"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium">NPM / NIP</label>
        <input
          type="text"
          name="npm"
          value={formData.npm}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Program Studi / Unit</label>
        <input
          type="text"
          name="prodi"
          value={formData.prodi}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Jenis Fasilitas</label>
        <select
          name="fasilitas"
          value={formData.fasilitas}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        >
          <option value="">-- Pilih Fasilitas --</option>
          <option value="gedung">Gedung</option>
          <option value="ruangan">Ruangan</option>
          <option value="proyektor">Proyektor</option>
          <option value="lainnya">Lainnya</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Tanggal Peminjaman</label>
        <input
          type="date"
          name="tanggal_pinjam"
          value={formData.tanggal_pinjam}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block font-medium">Waktu Mulai</label>
          <input
            type="time"
            name="waktu_mulai"
            value={formData.waktu_mulai}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="w-1/2">
          <label className="block font-medium">Waktu Selesai</label>
          <input
            type="time"
            name="waktu_selesai"
            value={formData.waktu_selesai}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
      </div>

      <div>
        <label className="block font-medium">Keperluan</label>
        <textarea
          name="keperluan"
          value={formData.keperluan}
          onChange={handleChange}
          required
          rows="3"
          className="w-full border p-2 rounded"
        ></textarea>
      </div>

      <div>
        <label className="block font-medium">Kontak (WA / Email)</label>
        <input
          type="text"
          name="kontak"
          value={formData.kontak}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
        >
          Ajukan
        </button>
      </div>
    </form>
  );
}

export default FormPeminjaman;
