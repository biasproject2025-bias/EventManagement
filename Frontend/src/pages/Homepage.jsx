import React from "react";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col text-gray-900">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-12 py-5 shadow-sm bg-white/70 backdrop-blur-md">
        <div className="flex items-center space-x-4 ml-20">
          <img
            src="/src/assets/EventHive-logo.png"
            alt="Logo"
            className="h-12 w-12 rounded-xl shadow-md"
          />
          <span className="text-3xl font-semibold">EventHive</span>
        </div>

        <NavLink
          to="/login"
          className="px-6 py-2 mr-20 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-md"
        >
          Login
        </NavLink>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10">
        {/* Left Column */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-800">
            Designing Moments That Feel Like Magic, Your Events. Your Vision.
            Perfectly Managed.
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
              className="absolute w-70 h-40 top-48 left-[10px] shadow-2xl"
            />

            {/* Middle */}
            <img
              src="/src/assets/homepage-pic3.webp"
              alt="Decor 3"
              className="absolute w-60 h-40 top-50  right-10  -translate-x-1/2 shadow-2xl"
            />

            {/* Lower Right */}
            <img
              src="/src/assets/homepage-pic4.jpg"
              alt="Decor 4"
              className="absolute w-60 h-40 top-[400px] right-8  shadow-2xl"
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
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-indigo-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
            <p className="text-gray-600 text-lg mt-3">
              Have questions, feedback, or need support? We're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Contact Details
                </h3>
                <p className="text-gray-600 mt-2">
                  Reach out to us anytime — our team will get back to you
                  shortly.
                </p>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="flex items-center space-x-3">
                  <span className="text-2xl">📩</span>
                  <span className="text-lg">eventhive.support@gmail.com</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="text-2xl">📞</span>
                  <span className="text-lg">+91 98765 43210</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="text-2xl">📍</span>
                  <span className="text-lg">123 Event Street, India</span>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Send Us a Message
              </h3>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
                />

                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================== Footer Section ================== */}
      {/* Support Section */}
      <section className="py-12 bg-indigo-100 mt-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Need Help?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you have questions about event management, account issues,
            or feature requests— our team is always here to support you.
          </p>

          <div className="mt-6 space-y-2">
            <p className="text-gray-700">
              <strong>Email:</strong> support@eventhive.com
            </p>
            <p className="text-gray-700">
              <strong>Help Center:</strong> Visit our FAQ page for quick
              answers.
            </p>
            <p className="text-gray-700">
              <strong>Live Support:</strong> Chat coming soon!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
        <div className="max-w-6xl mx-auto px-6">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <h3 className="text-xl font-semibold text-white">EventHive</h3>

            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white">
                About
              </a>
              <a href="#" className="hover:text-white">
                Features
              </a>
              <a href="#" className="hover:text-white">
                Support
              </a>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} EventHive — All rights reserved.
            <br />
            Crafted with care to simplify event management.
          </div>
        </div>
      </footer>
    </div>
  );
}
