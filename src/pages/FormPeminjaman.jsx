import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormPeminjaman = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama: "",
    nim: "",
    fakultas: "",
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
  const [errors, setErrors] = useState({});

  const fakultasOptions = [
    { value: "ilmu komputer", label: "Ilmu Komputer" },
    { value: "ilmu sosial dan politik", label: "ilmu sosial dan ilmu politik" },
    { value: "ilmu kesehatan", label: "ilmu kesehatan" },
    { value: "hukum", label: "hukum" },
    { value: "ekonomi dan bisnis", label: "ekonomi dan bisnis" },
    { value: "kedokteran", label: "kedokteran" },
    { value: "teknik", label: "teknik "},
  ];

  const fasilitasOptions = [
    { value: "auditorium bhineka tunggal ika", label: "Auditorium Bhineka Tunggal Ika" },
    { value: "auditorium wahidin sudirohusodo", label: "Auditorium Wahidin Sudirohusodo" },
    { value: "auditorium dr. cipto mangun kusumo", label: "Auditorium Dr. Cipto Mangun Kusumo" },
    { value: "auditorium merce", label: "Auditorium MERCe" },
    { value: "ruang podcast fh", label: "Ruang Podcast FH Gd. Yos Sudarso" },
    { value: "ruang podcast fisip a", label: "Ruang Podcast FISIP A" },
    { value: "ubin cokelat", label: "Ubin Cokelat "},
    { value: "Lab Terpadu", label: "Lab Terpadu" },
    { value: "Lapangan Basket", label: "Lapangan Basket" },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nama.trim()) newErrors.nama = "Nama wajib diisi";
    if (!formData.npm.trim()) newErrors.npm = "NPM/NIP wajib diisi";
    if (!formData.prodi.trim())
      newErrors.prodi = "Program Studi/Unit wajib diisi";
    if (!formData.fasilitas) newErrors.fasilitas = "Pilih fasilitas";
    if (!formData.tanggal_pinjam)
      newErrors.tanggal_pinjam = "Tanggal wajib diisi";

    const today = new Date();
    const selectedDate = new Date(formData.tanggal_pinjam);
    if (selectedDate < today) {
      newErrors.tanggal_pinjam = "Tanggal tidak boleh di masa lalu";
    }

    if (!formData.waktu_mulai)
      newErrors.waktu_mulai = "Waktu mulai wajib diisi";
    if (!formData.waktu_selesai)
      newErrors.waktu_selesai = "Waktu selesai wajib diisi";

    if (formData.waktu_mulai && formData.waktu_selesai) {
      if (formData.waktu_mulai >= formData.waktu_selesai) {
        newErrors.waktu_selesai = "Waktu selesai harus setelah waktu mulai";
      }
    }

    if (!formData.keperluan.trim())
      newErrors.keperluan = "Keperluan wajib diisi";
    if (!formData.kontak.trim()) newErrors.kontak = "Kontak wajib diisi";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulasi API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Data pengajuan:", formData);
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          nama: "",
          npm: "",
          prodi: "",
          fasilitas: "",
          tanggal_pinjam: "",
          waktu_mulai: "",
          waktu_selesai: "",
          keperluan: "",
          kontak: "",
          bukti_organisasi: null,
        });
        setSubmitted(false);
        // navigate('/success'); // Uncomment jika ingin redirect
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white shadow-lg p-8 rounded-2xl space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Pengajuan Peminjaman Fasilitas
      </h2>

      {submitted ? (
        <div className="bg-green-100 text-green-700 px-4 py-3 rounded-lg border border-green-300 text-center">
          <p className="font-medium">Pengajuan berhasil dikirim!</p>
          <p className="text-sm mt-1">
            Kami akan menghubungi Anda melalui kontak yang telah diberikan.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nama Lengkap */}
            <div>
              <label className="block font-medium mb-1 text-gray-700">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                required
                placeholder="Contoh: Nurmalia Indriyani"
                className={`w-full border ${
                  errors.nama ? "border-red-500" : "border-gray-300"
                } p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.nama && (
                <p className="mt-1 text-sm text-red-600">{errors.nama}</p>
              )}
            </div>

            {/* NPM/NIP */}
            <div>
              <label className="block font-medium mb-1 text-gray-700">
                NPM / NIP <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="npm"
                value={formData.npm}
                onChange={handleChange}
                required
                placeholder="Contoh: 123456789"
                className={`w-full border ${
                  errors.npm ? "border-red-500" : "border-gray-300"
                } p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.npm && (
                <p className="mt-1 text-sm text-red-600">{errors.npm}</p>
              )}
            </div>

            {/* Program Studi/Unit */}
            <div>
              <label className="block font-medium mb-1 text-gray-700">
                Program Studi / Unit <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="prodi"
                value={formData.prodi}
                onChange={handleChange}
                required
                placeholder="Contoh: Sistem Informasi"
                className={`w-full border ${
                  errors.prodi ? "border-red-500" : "border-gray-300"
                } p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.prodi && (
                <p className="mt-1 text-sm text-red-600">{errors.prodi}</p>
              )}
            </div>

            {/* Jenis Fasilitas */}
            <div>
              <label className="block font-medium mb-1 text-gray-700">
                Jenis Fasilitas <span className="text-red-500">*</span>
              </label>
              <select
                name="fasilitas"
                value={formData.fasilitas}
                onChange={handleChange}
                required
                className={`w-full border ${
                  errors.fasilitas ? "border-red-500" : "border-gray-300"
                } p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                <option value="">-- Pilih Fasilitas --</option>
                {fasilitasOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.fasilitas && (
                <p className="mt-1 text-sm text-red-600">{errors.fasilitas}</p>
              )}
            </div>

            {/* Tanggal Peminjaman */}
            <div>
              <label className="block font-medium mb-1 text-gray-700">
                Tanggal Peminjaman <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="tanggal_pinjam"
                value={formData.tanggal_pinjam}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                required
                className={`w-full border ${
                  errors.tanggal_pinjam ? "border-red-500" : "border-gray-300"
                } p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.tanggal_pinjam && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.tanggal_pinjam}
                </p>
              )}
            </div>

            {/* Waktu Mulai & Selesai */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block font-medium mb-1 text-gray-700">
                  Waktu Mulai <span className="text-red-500">*</span>
                </label>
                <input
                  type="time"
                  name="waktu_mulai"
                  value={formData.waktu_mulai}
                  onChange={handleChange}
                  required
                  className={`w-full border ${
                    errors.waktu_mulai ? "border-red-500" : "border-gray-300"
                  } p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.waktu_mulai && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.waktu_mulai}
                  </p>
                )}
              </div>
              <div className="w-1/2">
                <label className="block font-medium mb-1 text-gray-700">
                  Waktu Selesai <span className="text-red-500">*</span>
                </label>
                <input
                  type="time"
                  name="waktu_selesai"
                  value={formData.waktu_selesai}
                  onChange={handleChange}
                  required
                  className={`w-full border ${
                    errors.waktu_selesai ? "border-red-500" : "border-gray-300"
                  } p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.waktu_selesai && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.waktu_selesai}
                  </p>
                )}
              </div>
            </div>

            {/* Keperluan */}
            <div className="md:col-span-2">
              <label className="block font-medium mb-1 text-gray-700">
                Keperluan <span className="text-red-500">*</span>
              </label>
              <textarea
                name="keperluan"
                value={formData.keperluan}
                onChange={handleChange}
                required
                rows="3"
                placeholder="Tuliskan tujuan penggunaan fasilitas..."
                className={`w-full border ${
                  errors.keperluan ? "border-red-500" : "border-gray-300"
                } p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              ></textarea>
              {errors.keperluan && (
                <p className="mt-1 text-sm text-red-600">{errors.keperluan}</p>
              )}
            </div>

            {/* Kontak */}
            <div className="md:col-span-2">
              <label className="block font-medium mb-1 text-gray-700">
                Kontak (WA/Email) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="kontak"
                value={formData.kontak}
                onChange={handleChange}
                required
                placeholder="Contoh: 08123456789 atau nama@email.com"
                className={`w-full border ${
                  errors.kontak ? "border-red-500" : "border-gray-300"
                } p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.kontak && (
                <p className="mt-1 text-sm text-red-600">{errors.kontak}</p>
              )}
            </div>

            {/* Upload Bukti Organisasi */}
            <div className="md:col-span-2">
              <label className="block font-medium mb-1 text-gray-700">
                Bukti Organisasi/Kepanitiaan (PDF/Image)
              </label>
              <div className="flex items-center">
                <label className="flex flex-col items-center justify-center w-full p-4 border-2 border-dashed rounded-lg cursor-pointer border-gray-300 hover:border-blue-500">
                  <div className="flex flex-col items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="text-sm text-gray-500 mt-2">
                      {formData.bukti_organisasi
                        ? formData.bukti_organisasi.name
                        : "Klik untuk upload file"}
                    </p>
                  </div>
                  <input
                    type="file"
                    name="bukti_organisasi"
                    onChange={handleChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                  />
                </label>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Format: PDF, JPG, PNG (Maks. 5MB)
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              Kembali
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Mengirim...
                </span>
              ) : (
                "Ajukan Peminjaman"
              )}
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default FormPeminjaman;
