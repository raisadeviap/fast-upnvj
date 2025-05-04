import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f8f8]">
      <div className="bg-white p-8 rounded-2xl shadow-xs border border-[#f1f1f2] w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-zinc-900">
          Register
        </h1>

        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-1 font-medium text-zinc-900"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2.5 border rounded-2xl focus:outline-none text-neutral-600 border-neutral-300 focus:border-neutral-500 transition-all duration-300"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block mb-1 font-medium text-zinc-900"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-2.5 border rounded-2xl focus:outline-none text-neutral-600 border-neutral-300 focus:border-neutral-500 transition-all duration-300"
              placeholder="Enter your last name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-zinc-900"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2.5 border rounded-2xl focus:outline-none text-neutral-600 border-neutral-300 focus:border-neutral-500 transition-all duration-300"
              placeholder="Enter your email"
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

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block mb-1 font-medium text-zinc-900"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2.5 border rounded-2xl focus:outline-none text-neutral-600 border-neutral-300 focus:border-neutral-500 transition-all duration-300"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-lime-600 text-white mt-2 py-2.5 px-4 rounded-2xl hover:bg-lime-700 transition-all duration-300 cursor-pointer shadow-sm"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-zinc-900">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-lime-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;