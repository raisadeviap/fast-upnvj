import { useState, useEffect } from "react";

const VALID_STATUSES = ["Diproses", "Diterima", "Ditolak", "Dibatalkan"];

const CekPinjam = () => {
  const [pengajuan, setPengajuan] = useState([]);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [fasilitas, setFasilitas] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const [peminjamanRes, fasilitasRes, userRes] = await Promise.all([
        fetch("https://fast-upnvj-backend.vercel.app/api/peminjaman"),
        fetch("https://fast-upnvj-backend.vercel.app/api/fasilitas"),
        fetch("https://fast-upnvj-backend.vercel.app/api/users"),
      ]);

      const [peminjamanData, fasilitasData, userData] = await Promise.all([
        peminjamanRes.json(),
        fasilitasRes.json(),
        userRes.json(),
      ]);

      setFasilitas(fasilitasData);
      setUsers(userData);

      const formatted = peminjamanData.map((item) => {
        const fasilitasItem = fasilitasData.find((f) => f.id === item.id_fasilitas);
        const userItem = userData.find((u) => u.id === item.id_user);

        return {
          id: item.id,
          nama_fasilitas: fasilitasItem?.nama_fasilitas || "Tidak diketahui",
          nama_peminjam: userItem?.nama || "Tidak diketahui",
          tanggal: item.tgl_pinjam,
          waktu_mulai: item.jam_mulai,
          waktu_selesai: item.jam_selesai,
          status: item.proses || "Diproses",
          kak_uri: item.kak_uri || null,
          disposisi_uri: item.disposisi_uri || null,
        };
      });

      setPengajuan(formatted);

      // Inisialisasi form
      const initialForm = {};
      formatted.forEach((item) => {
        initialForm[item.id] = {
          status: item.status,
          notes: "",
          disposisi: null,
        };
      });
      setFormData(initialForm);
    } catch (err) {
      console.error("Gagal mengambil data:", err);
    }
  };

  const handleSubmit = async (id) => {
    const data = formData[id];
    if (!data) return;

    const form = new FormData();
    form.append("proses", data.status);
    form.append("notes", data.notes);
    if (data.status === "Diterima" && data.disposisi) {
      form.append("disposisi", data.disposisi);
    }

    try {
      setLoading(true);
      const res = await fetch(
        `https://fast-upnvj-backend.vercel.app/api/peminjaman/${id}/status`,
        {
          method: "PUT",
          body: form,
        }
      );
      if (!res.ok) throw new Error("Gagal menyimpan data.");
      await fetchAllData();
    } catch (err) {
      console.error("Gagal mengirim:", err);
    } finally {
      setLoading(false);
    }
  };

  const updateForm = (id, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }));
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
                    {/* Select status */}
                    <select
                      className="select select-sm select-bordered w-full"
                      value={formData[item.id]?.status || item.status}
                      onChange={(e) =>
                        updateForm(item.id, "status", e.target.value)
                      }
                    >
                      {VALID_STATUSES.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>

                    {/* Input catatan */}
                    <input
                      type="text"
                      placeholder="Catatan..."
                      className="input input-sm input-bordered w-full"
                      value={formData[item.id]?.notes || ""}
                      onChange={(e) =>
                        updateForm(item.id, "notes", e.target.value)
                      }
                    />

                    {/* Link file KAK */}
                    {item.kak_uri && (
                      <a
                        href={`https://fast-upnvj-backend.vercel.app${item.kak_uri}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link text-blue-500 text-sm"
                      >
                        📎 Lihat KAK
                      </a>
                    )}

                    {/* Upload file disposisi jika status 'Diterima' */}
                    {formData[item.id]?.status === "Diterima" && (
                      <div className="flex flex-col gap-1">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="file-input file-input-sm w-full"
                          onChange={(e) =>
                            updateForm(item.id, "disposisi", e.target.files[0])
                          }
                        />
                        {item.disposisi_uri && (
                          <a
                            href={`https://fast-upnvj-backend.vercel.app${item.disposisi_uri}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link text-green-600 text-xs"
                          >
                            🔍 Lihat Disposisi
                          </a>
                        )}
                      </div>
                    )}

                    {/* Tombol kirim */}
                    <button
                      className="btn btn-sm btn-primary w-full mt-1"
                      onClick={() => handleSubmit(item.id)}
                      disabled={loading}
                    >
                      {loading ? "⏳ Mengirim..." : "Kirim"}
                    </button>
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
      </div>
    </div>
  );
};

export default CekPinjam;
