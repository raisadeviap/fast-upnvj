import React, { useState } from "react";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("informasi-pengguna");
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
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
              <p className="font-semibold line-clamp-1">Muhamad Abduh Revan</p>
              <p className="text-zinc-500">2310512160</p>
            </div>
          </div>

          {/* Menu */}
          <div className="flex flex-col gap-y-2 border-t border-zinc-300 pt-8 pe-8">
            <div
              className={`${tabStyle} ${
                activeTab == "informasi-pengguna"
                  ? "bg-zinc-200 font-semibold"
                  : "opacity-70 hover:bg-zinc-200/80"
              }`}
              onClick={() => setActiveTab("informasi-pengguna")}
            >
              {activeTab == "informasi-pengguna" ? (
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0C5.56717 0 4 1.56567 4 3.49804C4 5.43041 5.56717 6.99609 7.5 6.99609C9.43283 6.99609 11 5.43041 11 3.49804C11 1.56567 9.43283 0 7.5 0Z"
                    fill="#000000"
                  />
                  <path
                    d="M5.5 8.99414C3.56711 8.99414 2 10.5605 2 12.4936V14.9909H13V12.4936C13 10.5605 11.4329 8.99414 9.5 8.99414H5.5Z"
                    fill="#000000"
                  />
                </svg>
              ) : (
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.5 3.49804C10.5 5.15396 9.157 6.49609 7.5 6.49609C5.843 6.49609 4.5 5.15396 4.5 3.49804C4.5 1.84212 5.843 0.5 7.5 0.5C9.157 0.5 10.5 1.84212 10.5 3.49804Z"
                    stroke="#000000"
                    strokeLinecap="square"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.5 14.4909H2.5C2.5 13.7808 2.5 13.1053 2.5 12.4936C2.5 10.8368 3.84315 9.49414 5.5 9.49414H9.5C11.1569 9.49414 12.5 10.8368 12.5 12.4936C12.5 13.1053 12.5 13.7808 12.5 14.4909Z"
                    stroke="#000000"
                    strokeLinecap="square"
                  />
                </svg>
              )}
              <span>Informasi Pengguna</span>
            </div>
            <div
              className={`${tabStyle} ${
                activeTab == "riwayat-peminjaman"
                  ? "bg-zinc-200 font-semibold"
                  : "opacity-70 hover:bg-zinc-200/80"
              }`}
              onClick={() => setActiveTab("riwayat-peminjaman")}
            >
              {activeTab == "riwayat-peminjaman" ? (
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  stroke="#000000"
                  strokeWidth="0.4"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.507 12.324a7 7 0 0 0 .065-8.56A7 7 0 0 0 2 4.393V2H1v3.5l.5.5H5V5H2.811a6.008 6.008 0 1 1-.135 5.77l-.887.462a7 7 0 0 0 11.718 1.092zm-3.361-.97l.708-.707L8 7.792V4H7v4l.146.354 3 3z"
                  />
                </svg>
              ) : (
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.507 12.324a7 7 0 0 0 .065-8.56A7 7 0 0 0 2 4.393V2H1v3.5l.5.5H5V5H2.811a6.008 6.008 0 1 1-.135 5.77l-.887.462a7 7 0 0 0 11.718 1.092zm-3.361-.97l.708-.707L8 7.792V4H7v4l.146.354 3 3z"
                  />
                </svg>
              )}
              <span>Riwayat Peminjaman</span>
            </div>
          </div>

          {/* Log out */}
          <div className="flex flex-col gap-y-2 border-t border-zinc-300 pt-5 pe-8">
            <div
              className={`flex gap-x-2.5 items-center w-60 ps-6 py-3 rounded-xl text-zinc-900 cursor-pointer transition-all duration-300 opacity-70 hover:opacity-100 hover:font-semibold`}
            >
              <svg
                width="16px"
                height="16px"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
                strokeWidth="0.2"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 1L8 1V2L2 2L2 13H8V14H1L1 1ZM10.8536 4.14645L14.1932 7.48614L10.8674 11.0891L10.1326 10.4109L12.358 8L4 8V7L12.2929 7L10.1464 4.85355L10.8536 4.14645Z"
                  fill="#000000"
                />
              </svg>
              <span>Log out</span>
            </div>
          </div>
        </div>

        {/* Bagian kanan */}
        <div className="border-t lg:border-l lg:border-t-0 border-zinc-300 h-full w-full lg:w-full ps-0 lg:ps-20 pt-5 mb-10 lg:mb-0 mt-5 lg:mt-0">
          {/* Informasi Pengguna */}
          <div
            className={`${
              activeTab == "informasi-pengguna"
                ? "flex flex-col gap-y-10"
                : "hidden"
            }`}
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
                  <label htmlFor="nama" className="font-semibold text-zinc-500">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="nama"
                    id="nama"
                    value={"Muhamad Abduh Revan"}
                    className="w-full mt-1 bg-zinc-100 text-zinc-500 rounded-2xl border border-zinc-200 px-5 py-2.5 outline-none"
                    disabled
                  />
                </div>

                <div>
                  <label htmlFor="nim" className="font-semibold text-zinc-500">
                    NIM
                  </label>
                  <input
                    type="text"
                    name="nim"
                    id="nim"
                    value={"2310512160"}
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
                    value={"2310512160@mahasiswa.upnvj.ac.id"}
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
                    value={"S1 Sistem Informasi"}
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
                    value={"Fakultas Ilmu Komputer"}
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
                  <div className="flex items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      value={"password123"}
                      className={`w-full mt-1 rounded-2xl border px-5 py-2.5 outline-none transition-all duration-300 ${
                        isEditing
                          ? "bg-white border-zinc-300 text-zinc-700"
                          : "bg-zinc-100 border-zinc-200 text-zinc-500"
                      }`}
                      disabled={!isEditing}
                    />
                    <div
                      className="justify-end -translate-y-2 -translate-x-10 cursor-pointer"
                      onClick={handleShowPassword}
                    >
                      {showPassword ? (
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="#71717b"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute"
                        >
                          <path d="M8.052 5.837A9.715 9.715 0 0112 5c2.955 0 5.309 1.315 7.06 2.864 1.756 1.553 2.866 3.307 3.307 4.08a.11.11 0 01.016.055.122.122 0 01-.017.06 16.766 16.766 0 01-1.53 2.218.75.75 0 101.163.946 18.253 18.253 0 001.67-2.42 1.607 1.607 0 00.001-1.602c-.485-.85-1.69-2.757-3.616-4.46C18.124 5.034 15.432 3.5 12 3.5c-1.695 0-3.215.374-4.552.963a.75.75 0 00.604 1.373z" />
                          <path
                            fill-rule="evenodd"
                            d="M19.166 17.987C17.328 19.38 14.933 20.5 12 20.5c-3.432 0-6.125-1.534-8.054-3.24C2.02 15.556.814 13.648.33 12.798a1.606 1.606 0 01.001-1.6A18.305 18.305 0 013.648 7.01L1.317 5.362a.75.75 0 11.866-1.224l20.5 14.5a.75.75 0 11-.866 1.224l-2.651-1.875zM4.902 7.898c-1.73 1.541-2.828 3.273-3.268 4.044a.118.118 0 00-.017.059c0 .015.003.034.016.055.441.774 1.551 2.527 3.307 4.08C6.69 17.685 9.045 19 12 19c2.334 0 4.29-.82 5.874-1.927l-3.516-2.487a3.5 3.5 0 01-5.583-3.949L4.902 7.899z"
                          />
                        </svg>
                      ) : (
                        <svg
                          fill="#71717b"
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          className="absolute"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {!isEditing ? (
              <div className="flex justify-end mt-5">
                <button
                  className="flex gap-x-2 items-center px-6 py-1.5 rounded-xl bg-lime-600 hover:bg-lime-700 border-2 border-lime-600 hover:border-lime-700 text-zinc-100 cursor-pointer transition-all duration-300"
                  onClick={() => setIsEditing(true)}
                >
                  <svg
                    fill="#fff"
                    width="15px"
                    height="15px"
                    viewBox="0 0 36 36"
                    version="1.1"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path d="M4.22,23.2l-1.9,8.2a2.06,2.06,0,0,0,2,2.5,2.14,2.14,0,0,0,.43,0L13,32,28.84,16.22,20,7.4Z"></path>
                    <path d="M33.82,8.32l-5.9-5.9a2.07,2.07,0,0,0-2.92,0L21.72,5.7l8.83,8.83,3.28-3.28A2.07,2.07,0,0,0,33.82,8.32Z"></path>
                    <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
                  </svg>
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
                    class="icon flat-color"
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
            className={`${
              activeTab == "riwayat-peminjaman"
                ? "flex flex-col gap-y-5"
                : "hidden"
            }`}
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
                          className={`badge ${
                            data.proses === "Disetujui"
                              ? "badge-success"
                              : data.proses === "Menunggu"
                              ? "badge-warning"
                              : "badge-error"
                          }`}
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
  );
}

export default Dashboard;
