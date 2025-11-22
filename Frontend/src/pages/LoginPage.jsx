import React, { useState } from "react";
import "../styles/LoginPage.css"; // optional if you want custom animations

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("student");

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-100">
      {/* Left Animated Image */}
      <img
        src="/left-bg.png" // replace with your image
        className="absolute left-0 top-0 h-full w-1/3 object-cover animate-slide-left hidden md:block"
        alt="Left background"
      />

      {/* Right Animated Image */}
      <img
        src="/right-bg.png" // replace with your image
        className="absolute right-0 top-0 h-full w-1/3 object-cover animate-slide-right hidden md:block"
        alt="Right background"
      />

      {/* Center Login Form */}
      <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-10 w-[90%] sm:w-[450px]">
        {/* Tabs */}
        <div className="flex justify-between mb-8 border-b pb-2">
          <button
            onClick={() => setActiveTab("student")}
            className={`text-lg font-semibold pb-1 transition ${
              activeTab === "student" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500"
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setActiveTab("admin")}
            className={`text-lg font-semibold pb-1 transition ${
              activeTab === "admin" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500"
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
  );
}
