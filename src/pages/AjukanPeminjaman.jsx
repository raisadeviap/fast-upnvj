import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link, useParams } from "react-router-dom";
import Logo from "../assets/UPN.png";
import axios from "axios";
import NavbarLoggedIn from "../components/NavbarLoggedin";

const Footer = () => (
	<footer className="bg-green-800 text-white px-8 py-10 mt-12">
		<div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between">
			<div className="mb-6 sm:mb-0">
				<img
					src={Logo}
					alt="UPN Logo"
					className="w-12 mb-2"
				/>
				<p className="text-sm leading-6">
					FAST UPNVJ
					<br />
					Website Peminjaman Fasilitas Kampus UPNVJ
				</p>
			</div>

			<div>
				<h6 className="font-semibold mb-2">Social</h6>
				<div className="flex gap-4">
					<a
						href="#"
						className="hover:text-yellow-300 transition">
						Facebook
					</a>
					<a
						href="#"
						className="hover:text-yellow-300 transition">
						Instagram
					</a>
					<a
						href="#"
						className="hover:text-yellow-300 transition">
						Twitter
					</a>
				</div>
			</div>
		</div>
	</footer>
);

/***********************************
 *  Main Component
 ***********************************/
export default function AjukanPeminjaman() {
	const navigate = useNavigate();
	const { state } = useLocation();
	const fasilitas = state?.fasilitas;
	const { id } = useParams();

	// Local state for simple form handling (replace with Formik/React‑Hook‑Form if needed)
	const [formData, setFormData] = useState({
		id_user: 4,
		id_fasilitas: Number(id) || null,
		tgl_pengajuan: new Date().toISOString().split("T")[0], // Set to today by default
		tgl_pinjam: "",
		jam_mulai: "",
		jam_selesai: "",
	});

	const [file, setFile] = useState(null);

	useEffect(() => {
		console.log("Form data updated:", formData);
		console.log("Selected file:", file);
	}, [formData, file]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = new FormData();
		data.append("id_user", formData.id_user);
		data.append("id_fasilitas", formData.id_fasilitas);
		data.append("tgl_pengajuan", formData.tgl_pengajuan);
		data.append("tgl_pinjam", formData.tgl_pinjam);
		data.append("jam_mulai", formData.jam_mulai);
		data.append("jam_selesai", formData.jam_selesai);

		if (file) {
			data.append("file", file);
		}

		try {
			const response = await axios.post("https://fast-upnvj-backend.vercel.app/api/peminjaman", data, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			if (response.status === 201) {
				alert("Pengajuan berhasil dikirim!");
				// navigate("/dashboard");
			}
		} catch (error) {
			console.error("Error submitting form:", error);
		}
	};

	return (
		<>
			<NavbarLoggedIn />

			<div className="min-h-screen bg-gray-50 p-8">
				<h1 className="text-2xl font-bold text-black mb-6">Form Pengajuan Peminjaman</h1>

				{/* Info fasilitas terpilih */}
				{fasilitas && (
					<div className="mb-4 p-4 border rounded bg-white shadow">
						<h2 className="text-lg font-semibold">{fasilitas.title}</h2>
						<p className="text-sm text-gray-600">
							Kapasitas: {fasilitas.kapasitas} &nbsp;|&nbsp; Gedung: {fasilitas.gedung}
						</p>
					</div>
				)}

				{/* Form */}
				<form
					onSubmit={handleSubmit}
					className="space-y-4 bg-white p-6 rounded shadow-md">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label className="block text-sm font-medium text-gray-700">Tanggal Peminjaman</label>
							<input
								type="date"
								name="tgl_pinjam"
								value={formData.tgl_pinjam}
								onChange={handleChange}
								className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
								required
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label className="block text-sm font-medium text-gray-700">Waktu Mulai</label>
							<input
								type="time"
								name="jam_mulai"
								value={formData.jam_mulai}
								onChange={handleChange}
								className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
								required
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">Waktu Selesai</label>
							<input
								type="time"
								name="jam_selesai"
								value={formData.jam_selesai}
								onChange={handleChange}
								className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
								required
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label className="block text-sm font-medium text-gray-700">File KAK</label>

							<input
								type="file"
								name="file"
								onChange={(e) => setFile(e.target.files[0])}
								className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
							/>
						</div>
					</div>

					<button
						type="submit"
						className="bg-lime-600 text-white px-4 py-2 rounded hover:bg-lime-600 transition w-full md:w-auto">
						Kirim Pengajuan
					</button>
				</form>
			</div>

			<Footer />
		</>
	);
}
