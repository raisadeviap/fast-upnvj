import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TogglePassword from "../components/TogglePassword";

function Register() {
  const [toast, setToast] = useState({
    message: "",
    type: "", // success, error, info
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });

  console.log("Login form data:", formData);

  const handleRegister = (e) => {
    e.preventDefault();
    setToast({
      message: "",
      type: "",
    });

    if (!formData.email || !formData.password || !formData.confirm_password) {
      setToast({
        message: "Email dan password harus diisi!",
        type: "error",
      });

      setTimeout(() => {
        setToast({
          message: "",
          type: "",
        });
      }, 3000);
      return;
    }

    if (formData.password !== formData.confirm_password) {
      setToast({
        message: "Password dan konfirmasi password tidak cocok!",
        type: "error",
      });

      setTimeout(() => {
        setToast({
          message: "",
          type: "",
        });
      }, 3000);
      return;
    }
    setLoading(true);

    // Simulasi proses registrasi
    setTimeout(() => {
      setLoading(false);
      setToast({
        message: "Registrasi berhasil! Silakan login.",
        type: "success",
      });

      setTimeout(() => {
        setToast({
          message: "",
          type: "",
        });
      }, 3000);
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-base-100" data-theme="light">
      <Navbar />
      <div className="flex flex-1 items-center justify-center bg-[#f8f8f8] py-12">
        {toast.message && (
          <div className="toast toast-top toast-center z-50">
            <div className={`alert alert-${toast.type} shadow-lg`}>
              <span>{toast.message}</span>
            </div>
          </div>
        )}
        <div className="bg-white p-8 rounded-2xl shadow-xs border border-[#f1f1f2] w-full max-w-lg">
          <h1 className="text-2xl font-bold text-center mb-6 text-zinc-900">
            Register
          </h1>

          <div className="flex justify-center mb-6">
            <img
              src="src/assets/UPN.png"
              alt="UPN Logo"
              className="h-32 w-auto"
            />
          </div>

          <div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-1 font-medium text-zinc-900"
              >
                Email Address
              </label>

              <div className="relative flex w-full items-center">
                <input
                  type="text"
                  id="email"
                  className="w-full px-4 py-2.5 pr-52 border rounded-2xl focus:outline-none text-neutral-600 border-neutral-300 focus:border-neutral-500 transition-all duration-300"
                  placeholder="Masukkan email"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value + "@mahasiswa.upnvj.ac.id",
                    })
                  }
                  required
                />
                <span className="absolute right-4 text-neutral-500 pointer-events-none border-l border-neutral-200 ps-3 bg-white">
                  @mahasiswa.upnvj.ac.id
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-1 font-medium text-zinc-900"
              >
                Password
              </label>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full px-4 py-2.5 border rounded-2xl focus:outline-none text-neutral-600 border-neutral-300 focus:border-neutral-500 transition-all duration-300"
                  placeholder="Masukkan password"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
                <TogglePassword
                  showPassword={showPassword}
                  onToggle={() => setShowPassword((prev) => !prev)}
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block mb-1 font-medium text-zinc-900"
              >
                Konfirmasi Password
              </label>
              <div className="relative w-full">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  className="w-full px-4 py-2.5 border rounded-2xl focus:outline-none text-neutral-600 border-neutral-300 focus:border-neutral-500 transition-all duration-300"
                  placeholder="Konfirmasi password"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirm_password: e.target.value,
                    })
                  }
                  required
                />
                <TogglePassword
                  showPassword={showConfirmPassword}
                  onToggle={() => setShowConfirmPassword((prev) => !prev)}
                />
              </div>
            </div>

            <button
              onClick={handleRegister}
              className="btn btn-primary btn-sm md:btn-md w-full mt-2"
            >
              {loading ? (
                <span className="loading loading-dots loading-sm"></span>
              ) : (
                "Register"
              )}
            </button>
          </div>

          <p className="mt-4 text-center text-sm text-zinc-900">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-lime-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;

// Clipboard