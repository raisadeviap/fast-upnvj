import { useState, useEffect } from "react";

const VALID_STATUSES = ["Diproses", "Diterima", "Ditolak", "Dibatalkan"];

const CekPinjam = () => {
  const [pengajuan, setPengajuan] = useState([]);
  const [catatan, setCatatan] = useState({});
  const [disposisi, setDisposisi] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPengajuan();
  }, []);

  const fetchPengajuan = async () => {
    try {
      const res = await fetch("https://fast-upnvj-backend.vercel.app/api/peminjaman");
      const data = await res.json();

      const formatted = data.map((item) => ({
        id: item.id,
        nama_fasilitas: item.fasilitas?.nama_fasilitas || "Tidak diketahui",
        nama_peminjam: item.nama_peminjam || item.users?.nama || "-", // fallback ke user relasi jika ada
        tanggal: item.tgl_pinjam,
        waktu_mulai: item.jam_mulai,
        waktu_selesai: item.jam_selesai,
        status: item.proses || "Diproses", // gunakan proses karena FE & BE pakai istilah ini
        kak_uri: item.kak_uri || null,
      }));

      setPengajuan(formatted);
    } catch (err) {
      console.error("Gagal mengambil data pengajuan:", err);
    }
  };

  const handleChangeStatus = async (id, newStatus) => {
    const formData = new FormData();
    formData.append("proses", newStatus);
    formData.append("notes", catatan[id] || "");

    if (newStatus === "Diterima" && disposisi[id]) {
      formData.append("disposisi", disposisi[id]);
    }

    try {
      setLoading(true);
      const res = await fetch(
        `https://fast-upnvj-backend.vercel.app/api/peminjaman/${id}/status`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Gagal mengubah status peminjaman.");
      await fetchPengajuan();
    } catch (err) {
      console.error("Error saat mengubah status:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Daftar Pengajuan Peminjaman</h1>
      <div className="overflow-x-auto">
        <table className="table w-full table-zebra">
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
            {pengajuan.length > 0 ? (
              pengajuan.map((item) => (
                <tr key={item.id}>
                  <td>{item.nama_fasilitas}</td>
                  <td>{item.nama_peminjam}</td>
                  <td>{item.tanggal}</td>
                  <td>
                    {item.waktu_mulai} - {item.waktu_selesai}
                  </td>
                  <td>{item.status}</td>
                  <td className="space-y-2">
                    <select
                      className="select select-sm select-bordered w-full"
                      value={item.status}
                      onChange={(e) =>
                        handleChangeStatus(item.id, e.target.value)
                      }
                    >
                      {VALID_STATUSES.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>

                    <input
                      type="text"
                      placeholder="Catatan..."
                      className="input input-sm input-bordered w-full"
                      value={catatan[item.id] || ""}
                      onChange={(e) =>
                        setCatatan({ ...catatan, [item.id]: e.target.value })
                      }
                    />

                    {item.kak_uri && (
                      <a
                        href={item.kak_uri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link text-blue-500 text-sm"
                      >
                        Lihat KAK
                      </a>
                    )}

                    {item.status === "Diterima" && (
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="file-input file-input-sm w-full"
                        onChange={(e) =>
                          setDisposisi({
                            ...disposisi,
                            [item.id]: e.target.files[0],
                          })
                        }
                      />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  Belum ada pengajuan peminjaman.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {loading && <div className="text-center mt-4">⏳ Menyimpan perubahan...</div>}
      </div>
    </div>
  );
};

export default CekPinjam;
