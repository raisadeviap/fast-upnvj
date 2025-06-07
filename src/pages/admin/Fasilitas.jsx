import { useState, useEffect } from "react";

const Fasilitas = () => {
  const [facilities, setFacilities] = useState([]);
  const [formFacility, setFormFacility] = useState({
    nama_fasilitas: "",
    lokasi: "",
    pic: "",
    foto_uri: null,
  });
  const [editId, setEditId] = useState(null);

  const API_URL = "http://localhost:3000/api/fasilitas";

  useEffect(() => {
    fetchFacilities();
  }, []);

  const fetchFacilities = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setFacilities(data);
    } catch (err) {
      console.error("Gagal mengambil data fasilitas:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "foto_uri") {
      setFormFacility({ ...formFacility, foto_uri: files[0] });
    } else {
      setFormFacility({ ...formFacility, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama_fasilitas", formFacility.nama_fasilitas);
    formData.append("lokasi", formFacility.lokasi);
    formData.append("pic", formFacility.pic);
    if (formFacility.foto_uri) {
      formData.append("foto_uri", formFacility.foto_uri);
    }

    try {
      const res = await fetch(editId ? `${API_URL}/${editId}` : API_URL, {
        method: editId ? "PUT" : "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Gagal menyimpan data fasilitas.");
      }

      await fetchFacilities();
      setFormFacility({
        nama_fasilitas: "",
        lokasi: "",
        pic: "",
        foto_uri: null,
      });
      setEditId(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (facility) => {
    setEditId(facility.id);
    setFormFacility({
      nama_fasilitas: facility.nama_fasilitas,
      lokasi: facility.lokasi,
      pic: facility.pic,
      foto_uri: null,
    });
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Gagal menghapus fasilitas.");
      }

      await fetchFacilities();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Kelola Fasilitas</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          name="nama_fasilitas"
          placeholder="Nama Fasilitas"
          className="input input-bordered w-full"
          value={formFacility.nama_fasilitas}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lokasi"
          placeholder="Lokasi"
          className="input input-bordered w-full"
          value={formFacility.lokasi}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="pic"
          placeholder="Penanggung Jawab (PIC)"
          className="input input-bordered w-full"
          value={formFacility.pic}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="foto_uri"
          className="file-input file-input-bordered w-full"
          onChange={handleChange}
          accept="image/*"
        />
        <button type="submit" className="btn btn-primary">
          {editId ? "Update" : "Tambah"}
        </button>
        {editId && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setEditId(null);
              setFormFacility({
                nama_fasilitas: "",
                lokasi: "",
                pic: "",
                foto_uri: null,
              });
            }}
          >
            Batal
          </button>
        )}
      </form>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Lokasi</th>
              <th>PIC</th>
              <th>Foto</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {facilities.map((facility) => (
              <tr key={facility.id}>
                <td>{facility.nama_fasilitas}</td>
                <td>{facility.lokasi}</td>
                <td>{facility.pic}</td>
                <td>
                  {facility.foto_uri ? (
                    <img
                      src={`http://localhost:3000/uploads/${facility.foto_uri}`}
                      alt={facility.nama_fasilitas}
                      className="w-16 h-16 object-cover"
                    />
                  ) : (
                    "Tidak ada foto"
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-info mr-2"
                    onClick={() => handleEdit(facility)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDelete(facility.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
            {facilities.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center">
                  Tidak ada data fasilitas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Fasilitas;
