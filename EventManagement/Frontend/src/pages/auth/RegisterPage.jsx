import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api"; // ✅ connect backend

export default function RegisterPage() {
  const [activeTab, setActiveTab] = useState("student");
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/register", {
        name,
        email,
        password,
        role: activeTab, // student or admin
      });

      alert("Registration Success!");
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
          <div className="flex justify-between mb-8 border-b pb-2">
            <button onClick={() => setActiveTab("student")}>Student</button>
            <button onClick={() => setActiveTab("admin")}>Admin</button>
          </div>

          <form className="space-y-5" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-xl"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-xl"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-xl"
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
