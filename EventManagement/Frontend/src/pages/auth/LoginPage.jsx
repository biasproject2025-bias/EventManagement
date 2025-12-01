import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../app/api";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("student"); // ✅ student / admin
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // ✅ STUDENT vs ADMIN API
      const endpoint = activeTab === "admin" ? "/admin/login" : "/auth/login";

      const res = await api.post(endpoint, {
        email,
        password,
      });

      alert(`${activeTab.toUpperCase()} Login Success ✅`);
      console.log(res.data);

      // ✅ TOKEN STORE
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", activeTab);

      // ✅ ROLE BASED REDIRECT
      if (activeTab === "admin") {
        navigate("/admin");
      } else {
        navigate("/student");
      }
    } catch (err) {
      console.error("LOGIN ERROR:", err);
      alert(err.response?.data?.error || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen w-full bg-blue-50 flex">
      <div className="w-full md:w-1/2 flex items-center justify-center p-10">
        <div className="bg-white w-full max-w-md p-10 rounded-2xl shadow-xl">
          {/* ✅ TAB SWITCH */}
          <div className="flex justify-between mb-8 border-b pb-2">
            <button
              type="button"
              onClick={() => setActiveTab("student")}
              className={`text-lg font-semibold pb-1 ${
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
              className={`text-lg font-semibold pb-1 ${
                activeTab === "admin"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500"
              }`}
            >
              Admin
            </button>
          </div>

          {/* ✅ LOGIN FORM */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-xl"
                required
              />
            </div>

            <div>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded-xl"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl"
            >
              Login as {activeTab}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
