import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../app/api";

export default function RegisterPage() {
  const [activeTab, setActiveTab] = useState("student");
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const endpoint =
        activeTab === "admin" ? "/admin/register" : "/auth/register";

      const res = await api.post(endpoint, {
        name,
        email,
        password,
      });

      alert(`${activeTab.toUpperCase()} Registration Success ✅`);
      navigate("/login");
    } catch (err) {
      console.error("REGISTER ERROR:", err);
      alert(err.response?.data?.error || "Registration Failed");
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-blue-50">
      <div className="w-full md:w-1/2 flex items-center justify-center p-10">
        <div className="bg-white shadow-2xl rounded-2xl p-10 w-[450px]">
          {/* ✅ TAB BUTTONS */}
          <div className="flex justify-between mb-8 border-b pb-2">
            <button
              type="button"
              onClick={() => setActiveTab("student")}
              className={`px-4 py-2 font-semibold ${
                activeTab === "student"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500"
              }`}
            >
              Student
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("admin")}
              className={`px-4 py-2 font-semibold ${
                activeTab === "admin"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500"
              }`}
            >
              Admin
            </button>
          </div>

          {/* ✅ FORM */}
          <form className="space-y-5" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-xl"
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-xl"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-xl"
              required
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl"
            >
              Register as {activeTab}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
