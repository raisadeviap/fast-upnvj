import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/UPN.png";
import axios from "axios";
import { useEffect, useState } from "react";

function NavbarLoggedIn() {
  const navigate = useNavigate();
  const userImage = "https://i.pravatar.cc/40?img=3";
  const [userName, setUserName] = useState(""); // Placeholder for user name

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
        setUserName(userData.nama || ""); // Set user name from fetched data
      } else {
        console.error("Failed to fetch user name:", response.statusText);
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
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src={Logo} alt="UPNVJ Logo" className="h-10" />
          <span className="text-xl font-bold text-black">FAST UPNVJ</span>
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link
            to="/"
            className="relative group hover:text-lime-600 transition-colors"
          >
            {" "}
            Beranda
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-lime-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/"
            className="relative group hover:text-lime-600 transition-colors"
          >
            {" "}
            Peminjaman
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-lime-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/"
            className="relative group hover:text-lime-600 transition-colors"
          >
            {" "}
            Tentang Kami
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-lime-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <Link
            to={"/dashboard"}
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-lime-600 transition-colors"
          >
            <img
              src={userImage}
              alt="User"
              className="w-8 h-8 rounded-full border"
            />
            <span>{userName}</span>
          </Link>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
            className="bg-lime-600 hover:bg-lime-600 text-white px-4 py-2 text-sm rounded-md transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavbarLoggedIn;
