import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TogglePassword from "../components/TogglePassword";
import axios from "axios";

function Login() {
  const [toast, setToast] = useState({
    message: "",
    type: "", // success, error, info
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nim: "",
    password: "",
  });

  const navigate = useNavigate();

  console.log("Login form data:", formData);

  const handleLogin = async (e) => {
    e.preventDefault();

    setToast({
      message: "",
      type: "",
    });

    setLoading(true);

    if (!formData.nim || !formData.password) {
      setToast({
        message: "NIM dan password harus diisi.",
        type: "error",
      });
      setLoading(false);

      setTimeout(() => {
        setToast({
          message: "",
          type: "",
        });
      }, 3000);
      return;
    }

    try {
      const response = await axios.post(
        "https://fast-upnvj-backend.vercel.app/api/auth/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setToast({
          message: "Login berhasil!",
          type: "success",
        });

        setTimeout(async () => {
          setLoading(false);

          const token = response.data.token;
          localStorage.setItem("token", token);

          // ambil user id dari token
          const payload = JSON.parse(atob(token.split(".")[1])); // decode bagian tengah JWT
          const userId = payload.id;

          // ambil data user berdasarkan user id
          const userRes = await axios.get(
            `https://fast-upnvj-backend.vercel.app/api/users/${userId}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );

          const role = userRes.data.role;

          if (role === 1) {
            navigate("/home");
          } else if (role === 2) {
            navigate("/admin");
          }
        }, 1000);
      } else {
        setToast({
          message: "Login gagal. Silakan coba lagi.",
          type: "error",
        });
        setLoading(false);
      }
    } catch (error) {
      setToast({
        message: "Login gagal. Silakan coba lagi.",
        type: "error",
      });
      setLoading(false);
    }
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
        <div className="bg-white p-8 rounded-2xl border border-[#f1f1f2] w-full max-w-lg m-1">
          <h1 className="text-2xl font-bold text-center mb-6 text-zinc-900">
            Login
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
                htmlFor="nim"
                className="block mb-1 font-medium text-zinc-900"
              >
                NIM
              </label>
              <input
                type="number"
                id="nim"
                className="w-full px-4 py-2.5 border rounded-2xl focus:outline-none text-neutral-600 border-neutral-300 focus:border-neutral-500 transition-all duration-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="Masukkan NIM"
                onChange={(e) =>
                  setFormData({ ...formData, nim: e.target.value })
                }
                required
              />
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

            <button
              onClick={handleLogin}
              className="btn btn-primary btn-sm md:btn-md w-full mt-2"
            >
              {loading ? (
                <span className="loading loading-dots loading-sm"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>

          <p className="mt-4 text-center text-sm text-zinc-900">
            Belum punya akun?{" "}
            <Link to="/register" className="text-lime-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
