import React from "react";

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

        <button className="px-6 py-2 mr-20 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-md">
          Login
        </button>
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
              className="absolute w-60 h-40 top-30 left-3  shadow-2xl"
            />

            {/* Middle */}
            <img
              src="/src/assets/homepage-pic3.webp"
              alt="Decor 3"
              className="absolute w-60 h-40 top-50 left-1/2 -translate-x-1/2 shadow-2xl"
            />

            {/* Lower Right */}
            <img
              src="/img4.png"
              alt="Decor 4"
              className="absolute w-50 h-40 top-[350px] right-1/4  shadow-2xl"
            />

            {/* Bottom Image */}
            <img
              src="/src/assets/homepage-pic5.jpeg"
              alt="Decor 5"
              className="absolute w-60 h-40 bottom-0 left-1/2 -translate-x-1/2  shadow-2xl"
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
              <div className="h-16 w-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                🎟️
              </div>
              <h3 className="text-2xl font-semibold mb-2">Easy Registration</h3>
              <p className="text-gray-600">
                Students can register for any event instantly with a smooth,
                fast, and user-friendly experience.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="h-16 w-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                📅
              </div>
              <h3 className="text-2xl font-semibold mb-2">Event Scheduling</h3>
              <p className="text-gray-600">
                Organizers can schedule events, set deadlines, and manage every
                detail in a streamlined dashboard.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="h-16 w-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                ⚡
              </div>
              <h3 className="text-2xl font-semibold mb-2">Real-Time Updates</h3>
              <p className="text-gray-600">
                Stay informed with instant announcements, status changes, and
                updates — all in real time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
