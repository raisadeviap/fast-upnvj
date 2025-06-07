import { useEffect, useState } from 'react';

const API_URL = 'https://fast-upnvj-backend.vercel.app/api/users';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    nim: '', nama: '', email: '', fakultas: '', program_studi: '', password: '', role: 'mahasiswa'
  });
  const [editingId, setEditingId] = useState(null);

  const fetchUsers = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
  const { name, value } = e.target;
  setForm((prev) => ({
    ...prev,
    [name]: name === "role" ? parseInt(value) : value,
  }));
};


  const handleSubmit = async (e) => {
  e.preventDefault();
  const method = editingId ? 'PUT' : 'POST';
  const url = editingId ? `${API_URL}/${editingId}` : API_URL;

  try {
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      const errorData = await res.json();
      alert('Gagal: ' + (errorData.message || 'Terjadi kesalahan'));
      return;
    }

    setForm({ nim: '', nama: '', email: '', fakultas: '', program_studi: '', password: '', role: 'mahasiswa' });
    setEditingId(null);
    fetchUsers();
  } catch (error) {
    alert('Kesalahan jaringan, coba lagi');
  }
};


  const handleEdit = (user) => {
    setForm({ ...user, password: '' });
    setEditingId(user.id);
  };

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchUsers();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Manajemen User</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mb-6">
        <input name="nim" value={form.nim} onChange={handleChange} placeholder="NIM" className="input input-bordered" required />
        <input name="nama" value={form.nama} onChange={handleChange} placeholder="Nama" className="input input-bordered" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="input input-bordered" required />
        <input name="fakultas" value={form.fakultas} onChange={handleChange} placeholder="Fakultas" className="input input-bordered" required />
        <input name="program_studi" value={form.program_studi} onChange={handleChange} placeholder="Program Studi" className="input input-bordered" required />
        <input name="password" value={form.password} onChange={handleChange} placeholder="Password" type="password" className="input input-bordered" required={!editingId} />
        <select name="role" value={form.role} onChange={handleChange} className="select select-bordered">
          <option value={1}>Mahasiswa</option>
          <option value={2}>Admin</option>
        </select>
        <button type="submit" className="btn btn-primary col-span-2">{editingId ? 'Update' : 'Tambah'} User</button>
      </form>

      <table className="table w-full">
        <thead>
          <tr>
            <th>NIM</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Fakultas</th>
            <th>Prodi</th>
            <th>Role</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.nim}</td>
              <td>{user.nama}</td>
              <td>{user.email}</td>
              <td>{user.fakultas}</td>
              <td>{user.program_studi}</td>
              <td>{user.role}</td>
              <td>
                <button className="btn btn-sm btn-warning mr-2" onClick={() => handleEdit(user)}>Edit</button>
                <button className="btn btn-sm btn-error" onClick={() => handleDelete(user.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
