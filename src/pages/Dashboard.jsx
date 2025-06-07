import React, { useEffect, useState } from "react";
import TogglePassword from "../components/TogglePassword";
import {
  ArrowRightStartOnRectangleIcon,
  ClockIcon,
  PencilIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import {
  UserIcon as UserIconOutline,
  ClockIcon as ClockIconOutline,
} from "@heroicons/react/24/outline";
import axios from "axios";
import NavbarLoggedIn from "../components/NavbarLoggedin";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("informasi-pengguna");
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState(null);

  const tabStyle = `flex gap-x-2.5 items-center w-60 ps-6 py-3 rounded-xl text-zinc-900 cursor-pointer transition-all duration-200`;

  const data = [
    {
      id: 1,
      namaFasilitas: "Ruang Rapat 1",
      tanggalPengajuan: "2025-05-01",
      tanggalPeminjaman: "2025-05-03",
      jamMulai: "09:00",
      jamSelesai: "11:00",
      proses: "Disetujui",
      catatan: "Digunakan untuk rapat dosen",
    },
    {
      id: 2,
      namaFasilitas: "Aula Serbaguna",
      tanggalPengajuan: "2025-05-02",
      tanggalPeminjaman: "2025-05-04",
      jamMulai: "13:00",
      jamSelesai: "17:00",
      proses: "Menunggu",
      catatan: "Untuk seminar mahasiswa",
    },
    {
      id: 3,
      namaFasilitas: "Laboratorium Komputer",
      tanggalPengajuan: "2025-05-03",
      tanggalPeminjaman: "2025-05-06",
      jamMulai: "08:00",
      jamSelesai: "12:00",
      proses: "Ditolak",
      catatan: "Tidak tersedia pada jadwal tersebut",
    },
    {
      id: 4,
      namaFasilitas: "Ruang Multimedia",
      tanggalPengajuan: "2025-05-04",
      tanggalPeminjaman: "2025-05-08",
      jamMulai: "10:00",
      jamSelesai: "14:00",
      proses: "Disetujui",
      catatan: "Untuk ujian presentasi",
    },
    {
      id: 5,
      namaFasilitas: "Ruang Kelas FIK-201",
      tanggalPengajuan: "2025-05-05",
      tanggalPeminjaman: "2025-05-09",
      jamMulai: "15:00",
      jamSelesai: "17:00",
      proses: "Menunggu",
      catatan: "Dipakai untuk pengganti kuliah",
    },
  ];

  const handleEditPassword = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const token = localStorage.getItem("token");

    const payload = JSON.parse(atob(token.split(".")[1])); // decode bagian tengah JWT
    const userId = payload.id;

    if (!userId) {
      console.error("User ID not found in token");
      return;
    }

    try {
      const response = await axios.get(
        `https://fast-upnvj-backend.vercel.app/api/users/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 200) {
        const userData = response.data;
        setUserData(userData || "");
        console.log("User data fetched successfully:", userData);
      } else {
        console.error("Failed to fetch user data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      if (error.response && error.response.status === 401) {
        localStorage.removeItem("token");
        alert("Gagal mengambil data pengguna. Silakan login kembali.");
        navigate("/login");
      }
    }
  };

  return (
    <div>
      <NavbarLoggedIn userData={userData} />
      <div className="min-h-screen flex bg-[#f8f8f8]">
        {/* Content */}
        <div className="mt-20 px-4 md:px-20 lg:px-20 flex flex-col lg:flex-row w-full">
          {/* Bagian kiri */}
          <div className="flex flex-col gap-y-5 mt-5 text-zinc-900 w-full lg:max-w-70">
            {/* Profil */}
            <div className="flex gap-x-4 items-center">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                </div>
              </div>

              <div className="pe-10">
                <p className="font-semibold line-clamp-1">
                  {userData?.nama || ""}
                </p>
                <p className="text-zinc-500">{userData?.nim || ""}</p>
              </div>
            </div>

            {/* Menu */}
            <div className="flex flex-col gap-y-2 border-t border-zinc-300 pt-8 pe-8">
              <div
                className={`${tabStyle} ${activeTab == "informasi-pengguna" ? "font-semibold text-primary!" : "opacity-70"} relative group hover:text-primary transition-colors`}
                onClick={() => setActiveTab("informasi-pengguna")}
              >
                {activeTab == "informasi-pengguna" ? (
                  <UserIcon className="w-5" />
                ) : (
                  <UserIconOutline className="w-5" />
                )}
                <span>Informasi Pengguna</span>
                <span
                  className={`absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full ${activeTab == "informasi-pengguna" ? "w-full" : ""}`}
                ></span>
              </div>
              <div
                className={`${tabStyle} ${activeTab == "riwayat-peminjaman" ? "font-semibold text-primary!" : "opacity-70"} relative group hover:text-primary transition-colors`}
                onClick={() => setActiveTab("riwayat-peminjaman")}
              >
                {activeTab == "riwayat-peminjaman" ? (
                  <ClockIcon className="w-5" />
                ) : (
                  <ClockIconOutline className="w-5" />
                )}
                <span>Riwayat Peminjaman</span>
                <span
                  className={`absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full ${activeTab == "riwayat-peminjaman" ? "w-full" : ""} `}
                ></span>
              </div>
            </div>
          </div>

          {/* Bagian kanan */}
          <div className="border-t lg:border-l lg:border-t-0 border-zinc-300 h-full w-full lg:w-full ps-0 lg:ps-20 pt-5 mb-10 lg:mb-0 mt-5 lg:mt-0">
            {/* Informasi Pengguna */}
            <div
              className={`${activeTab == "informasi-pengguna" ? "flex flex-col gap-y-10" : "hidden"}`}
            >
              <h2 className="text-xl text-zinc-900 font-bold">
                Informasi Pengguna
              </h2>

              <div className="flex gap-x-10">
                <div className="flex flex-col items-center justify-center gap-y-5 basis-1/3">
                  <div className="avatar">
                    <div className="w-40 rounded-full">
                      <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                    </div>
                  </div>

                  <div className="mt-2 flex flex-col gap-y-1">
                    <label
                      htmlFor="profile_picture"
                      className="font-semibold text-zinc-500 text-center"
                    >
                      Ubah Foto Profil
                    </label>
                    <input
                      type="file"
                      id="profile_picture"
                      name="profile_picture"
                      className="w-50 bg-zinc-100 text-zinc-500 rounded-2xl border border-zinc-200 px-5 py-2.5 outline-none cursor-pointer"
                    />
                  </div>
                </div>

                <div className="text-zinc-900 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-6 basis-2/3">
                  <div>
                    <label
                      htmlFor="nama"
                      className="font-semibold text-zinc-500"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="nama"
                      id="nama"
                      value={userData?.nama || ""}
                      className="w-full mt-1 bg-zinc-100 text-zinc-500 rounded-2xl border border-zinc-200 px-5 py-2.5 outline-none"
                      disabled
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="nim"
                      className="font-semibold text-zinc-500"
                    >
                      NIM
                    </label>
                    <input
                      type="text"
                      name="nim"
                      id="nim"
                      value={userData?.nim || ""}
                      className="w-full mt-1 bg-zinc-100 text-zinc-500 rounded-2xl border border-zinc-200 px-5 py-2.5 outline-none"
                      disabled
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="font-semibold text-zinc-500"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={userData?.email || ""}
                      className="w-full mt-1 bg-zinc-100 text-zinc-500 rounded-2xl border border-zinc-200 px-5 py-2.5 outline-none"
                      disabled
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="program_studi"
                      className="font-semibold text-zinc-500"
                    >
                      Program Studi
                    </label>
                    <input
                      type="text"
                      name="program_studi"
                      id="program_studi"
                      value={userData?.program_studi || ""}
                      className="w-full mt-1 bg-zinc-100 text-zinc-500 rounded-2xl border border-zinc-200 px-5 py-2.5 outline-none"
                      disabled
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="fakultas"
                      className="font-semibold text-zinc-500"
                    >
                      Fakultas
                    </label>
                    <input
                      type="text"
                      name="fakultas"
                      id="fakultas"
                      value={userData?.fakultas || ""}
                      className="w-full mt-1 bg-zinc-100 text-zinc-500 rounded-2xl border border-zinc-200 px-5 py-2.5 outline-none"
                      disabled
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="font-semibold text-zinc-500"
                    >
                      Password
                    </label>
                    <div className="relative w-full">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        className={`w-full mt-1 rounded-2xl border px-4 py-2.5 outline-none transition-all duration-300 ${isEditing ? "bg-white border-zinc-300 text-zinc-700" : "bg-zinc-100 border-zinc-200 text-zinc-500"}`}
                        disabled={!isEditing}
                      />
                      <span className="relative -top-3">
                        <TogglePassword
                          showPassword={showPassword}
                          onToggle={() => setShowPassword((prev) => !prev)}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {!isEditing ? (
                <div className="flex justify-end mt-5">
                  <button
                    className="btn btn-primary btn-md flex gap-x-2 items-center px-6"
                    onClick={() => setIsEditing(true)}
                  >
                    <PencilIcon className="size-5" />
                    Ubah Password
                  </button>
                </div>
              ) : (
                <div className="flex justify-end gap-x-5 mt-5">
                  <button
                    className="flex gap-x-2 items-center px-6 py-1.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 border-2 border-red-700 text-red-700 cursor-pointer transition-all duration-300"
                    onClick={() => setIsEditing(false)}
                  >
                    <svg
                      fill="#c10007"
                      width="15px"
                      height="15px"
                      viewBox="0 0 24 24"
                      id="cross"
                      data-name="Flat Color"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon flat-color"
                    >
                      <path
                        id="primary"
                        d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
                      ></path>
                    </svg>
                    Batal
                  </button>
                  <button
                    className="flex gap-x-2 items-center px-6 py-1.5 rounded-xl bg-lime-600 hover:bg-lime-700 text-zinc-100 cursor-pointer transition-all duration-300"
                    onClick={handleEditPassword}
                  >
                    <svg
                      width="15px"
                      height="15px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.664 5.253a1 1 0 0 1 .083 1.411l-10.666 12a1 1 0 0 1-1.495 0l-5.333-6a1 1 0 0 1 1.494-1.328l4.586 5.159 9.92-11.16a1 1 0 0 1 1.411-.082z"
                        fill="#ffffff"
                      />
                    </svg>
                    Simpan
                  </button>
                </div>
              )}
            </div>

            {/* Riwayat Peminjaman */}
            <div
              className={`${activeTab == "riwayat-peminjaman" ? "flex flex-col gap-y-5" : "hidden"}`}
            >
              <h2 className="text-xl text-zinc-900 font-bold">
                Riwayat Peminjaman
              </h2>

              <div className="overflow-x-auto rounded-box border border-zinc-300 rounded-2xl text-zinc-900 p-5">
                <table className="table w-full">
                  <thead>
                    <tr className="text-zinc-900 border-b border-zinc-400">
                      <th></th>
                      <th>Nama Fasilitas</th>
                      <th>Tanggal Pengajuan</th>
                      <th>Tanggal Peminjaman</th>
                      <th>Jam Mulai</th>
                      <th>Jam Selesai</th>
                      <th>Proses</th>
                      <th>Catatan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((data, i) => (
                      <tr key={i} className="border-t border-zinc-300">
                        <td>{i + 1}</td>
                        <td>{data.namaFasilitas}</td>
                        <td>{data.tanggalPengajuan}</td>
                        <td>{data.tanggalPeminjaman}</td>
                        <td>{data.jamMulai}</td>
                        <td>{data.jamSelesai}</td>
                        <td>
                          <span
                            className={`badge ${data.proses === "Disetujui" ? "badge-success" : data.proses === "Menunggu" ? "badge-warning" : "badge-error"}`}
                          >
                            {data.proses}
                          </span>
                        </td>
                        <td>{data.catatan}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
