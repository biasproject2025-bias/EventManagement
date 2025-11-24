import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex flex-col text-gray-900">
      <Navbar />

      {/* Add some top padding so content doesn't go under fixed navbar */}
      <div className="pt-16 flex-1 flex flex-col">
        {/* Header */}
        <header className="w-full flex items-center justify-between px-12 py-5">
          <div className="flex items-center space-x-4 ml-20">
            <img
              src="/src/assets/EventHive-logo.png"
              alt="Logo"
              className="h-12 w-12 rounded-xl shadow-md"
            />
            <span className="text-3xl font-semibold">EventHive</span>
          </div>

          <div className="flex items-center space-x-4 mr-20">
            <NavLink
              to="/login"
              className="px-6 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-md"
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              className="px-6 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 transition shadow-md"
            >
              Register
            </NavLink>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10">
          {/* ... your existing main section ... */}
        </main>

        {/* Features */}
        <section id="features" className="py-20 bg-white">
          {/* ... features section ... */}
        </section>

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
