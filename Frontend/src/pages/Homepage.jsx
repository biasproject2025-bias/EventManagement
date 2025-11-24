import React from "react";
import { NavLink } from "react-router-dom";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div id="about" className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex flex-col text-gray-900">
      {/*Navbar*/}
      <Navbar/>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10">
        {/* Left Column */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-800">
            Your Events. Your Vision. Perfectly Managed.
          </h1>
          <p className="text-lg text-gray-600">
            From celebrations to competitions, we make event planning simple.
            Focus on the excitement while we handle the management.
          </p>
          <button className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-md">
            Get Started
          </button>
        </div>

        {/* Right Column – S-shaped collage */}
        
        <div className="md:w-1/2 relative h-[600px] flex items-center justify-center  md:mt-0">
          <div className="relative w-full h-full">
            {/* Top Image */}
            <img
              src="/src/assets/homepage-pic1.png"
              alt="Decor 1"
              className="absolute w-80 h-40 top-0 right-3 -translate-x-1/2  shadow-2xl"
            />

            {/* Upper Left */}
            <img
              src="/src/assets/homepage-pic2.webp"
              alt="Decor 2"
              className="absolute w-70 h-40 top-44 left-20 shadow-2xl"
            />

            {/* Middle */}
            <img
              src="/src/assets/homepage-pic3.webp"
              alt="Decor 3"
              className="absolute w-60 h-40 top-55  right-[30px]  -translate-x-1/2 shadow-2xl"
            />

            {/* Lower Right */}
            <img
              src="/src/assets/homepage-pic4.jpg"
              alt="Decor 4"
              className="absolute w-60 h-40 bottom-10 right-8  shadow-2xl"
            />

            {/* Bottom Image */}
            <img
              src="/src/assets/homepage-pic5.jpeg"
              alt="Decor 5"
              className="absolute w-70 h-40 bottom-0  right-1/4  -translate-x-1/2  shadow-2xl"
            />
          </div>
        </div>
      </main>

      {/* ================== Features Section ================== */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose EventHive?
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            Everything you need to plan, manage, and experience events
            effortlessly — all in one powerful platform built for students &
            organizers.
          </p>

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="h-16 w-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">
                🎟️
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Smart Registration
              </h3>
              <p className="text-gray-600">
                One-click event registration with instant confirmation — smooth,
                fast, and hassle-free for students.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="h-16 w-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">
                📅
              </div>
              <h3 className="text-2xl font-semibold mb-2">Event Tracking</h3>
              <p className="text-gray-600">
                Stay updated with live schedules, deadlines, and reminders for
                every event you plan to attend.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="h-16 w-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">
                🧑‍🤝‍🧑
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Team Collaboration
              </h3>
              <p className="text-gray-600">
                Easily assign roles, manage volunteers, and coordinate tasks
                with your event team.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="h-16 w-16 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">
                📝
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Form & Submission Manager
              </h3>
              <p className="text-gray-600">
                Manage registrations, submissions, entries, and responses
                without messy spreadsheets.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="h-16 w-16 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">
                🔔
              </div>
              <h3 className="text-2xl font-semibold mb-2">Instant Alerts</h3>
              <p className="text-gray-600">
                Get notified immediately about schedule changes, event results,
                announcements, and updates.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="h-16 w-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">
                📊
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Analytics Dashboard
              </h3>
              <p className="text-gray-600">
                View insights like participant count, event engagement, and
                performance analytics in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================== Contact Section ================== */}
      <ContactSection />
      

      {/* ================== Footer Section ================== */}
      {/* Support Section */}
      {/* Footer */}
      <Footer/>
      
    </div>
  );
}
