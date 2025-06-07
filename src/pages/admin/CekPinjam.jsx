import { useState, useEffect } from "react";

const CekPinjam = () => {
  const [pengajuan, setPengajuan] = useState([]);

  useEffect(() => {
    fetchPengajuan();
  }, []);

  const fetchPengajuan = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/fasilitas");
      const data = await res.json();

      // Anggap data fasilitas memiliki properti 'pengajuan' berupa array peminjaman
      // Jika tidak, sesuaikan struktur berikut
      const allPengajuan = data
        .map((fasilitas) =>
          (fasilitas.pengajuan || []).map((p) => ({
            ...p,
            nama_fasilitas: fasilitas.nama_fasilitas,
          }))
        )
        .flat();

      setPengajuan(allPengajuan);
    } catch (err) {
      console.error("Gagal mengambil data pengajuan:", err);
    }
  };

  const handleAction = async (id, status) => {
    try {
      const res = await fetch(`http://localhost:3000/api/peminjaman/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      if (!res.ok) throw new Error("Gagal mengubah status peminjaman.");

      fetchPengajuan();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Daftar Pengajuan Peminjaman</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Nama Fasilitas</th>
              <th>Nama Peminjam</th>
              <th>Tanggal</th>
              <th>Waktu</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {pengajuan.map((item) => (
              <tr key={item.id}>
                <td>{item.nama_fasilitas}</td>
                <td>{item.nama_peminjam}</td>
                <td>{item.tanggal}</td>
                <td>
                  {item.waktu_mulai} - {item.waktu_selesai}
                </td>
                <td>{item.status}</td>
                <td className="flex gap-2">
                  {item.status === "menunggu" && (
                    <>
                      <button
                        className="btn btn-sm btn-success"
                        onClick={() => handleAction(item.id, "disetujui")}
                      >
                        Setujui
                      </button>
                      <button
                        className="btn btn-sm btn-error"
                        onClick={() => handleAction(item.id, "ditolak")}
                      >
                        Tolak
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
            {pengajuan.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center">
                  Belum ada pengajuan peminjaman.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CekPinjam;
