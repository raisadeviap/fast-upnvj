import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f8f8]">
      <div className="bg-white p-8 rounded-2xl border border-[#f1f1f2] w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-zinc-900">
          Login
        </h1>
        <div className="flex justify-center mb-6">
          <img src="src/assets/UPN.png" alt="UPN Logo" className="h-32 w-auto"/>
        </div>

        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block mb-1 font-medium text-zinc-900"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2.5 border rounded-2xl focus:outline-none text-neutral-600 border-neutral-300 focus:border-neutral-500 transition-all duration-300"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-1 font-medium text-zinc-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2.5 border rounded-2xl focus:outline-none text-neutral-600 border-neutral-300 focus:border-neutral-500 transition-all duration-300"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-lime-600 text-white mt-2 py-2.5 px-4 rounded-2xl hover:bg-lime-700 transition-all duration-300 cursor-pointer shadow-sm"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-zinc-900">
          Belum punya akun?{" "}
          <Link to="/register" className="text-lime-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
