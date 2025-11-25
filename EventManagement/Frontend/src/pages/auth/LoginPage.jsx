import React, { useState } from "react";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("student");

  return (
    <div className="min-h-screen w-full bg-blue-50 flex">
      <div className="w-full md:w-1/2 flex items-center justify-center p-10">
        <div className="bg-white w-full max-w-md p-10 rounded-2xl shadow-xl">
          {/* Tabs */}
          <div className="flex justify-between mb-8 border-b pb-2">
            <button
              onClick={() => setActiveTab("student")}
              className={`text-lg font-semibold pb-1 transition ${
                activeTab === "student"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500"
              }`}
            >
              Student
            </button>

            <button
              onClick={() => setActiveTab("admin")}
              className={`text-lg font-semibold pb-1 transition ${
                activeTab === "admin"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500"
              }`}
            >
              Admin
            </button>
          </div>

          {/* Login Form */}
          <form className="space-y-5">
            <div>
              <label className="text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium">Password</label>
              <input
                type="password"
                className="w-full mt-1 p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE — BACKGROUND IMAGE */}
      <div className="hidden md:block w-1/2">
        <img
          src="/src/assets/login-bg.jpg" // Replace with your actual image
          className="w-full h-full object-cover"
          alt="Login background"
        />
      </div>
    </div>
  );
}
