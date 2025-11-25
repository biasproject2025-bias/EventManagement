import React, { useState } from "react";

export default function RegisterPage() {
  const [activeTab, setActiveTab] = useState("student");

  return (
    <div className="min-h-screen w-full flex bg-blue-50">
      {/* Left Side – Register Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-10">
        <div className="bg-white shadow-2xl rounded-2xl p-10 w-[90%] sm:w-[450px]">
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

          {/* Register Form */}
          <form className="space-y-5">
            <div>
              <label className="text-gray-700 font-medium">Name</label>
              <input
                type="text"
                className="w-full mt-1 p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your name"
              />
            </div>

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
                placeholder="Create a password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>

      {/* Right Side – Background Image */}
      <div className="hidden md:block w-1/2 relative">
        <img
          src="/src/assets/register-bg.jpg"
          alt="Register Background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
    </div>
  );
}
