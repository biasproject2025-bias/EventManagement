import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col text-gray-900">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-12 py-5 shadow-sm bg-white/70 backdrop-blur-md">
        <div className="flex items-center space-x-4 ml-20">
          <img
            src="/logo.png"
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
              className="absolute w-80 h-40 top-0 right-5 -translate-x-1/2  shadow-2xl"
            />

            {/* Upper Left */}
            <img
              src="/src/assets/homepage-pic2.webp"
              alt="Decor 2"
              className="absolute w-60 h-40 top-45 left-3  shadow-2xl"
            />

            {/* Middle */}
            <img
              src="/src/assets/homepage-pic3.webp"
              alt="Decor 3"
              className="absolute w-60 h-40 top-64 left-1/2 -translate-x-1/2 shadow-2xl"
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
              className="absolute w-40 h-30 bottom-0 left-1/2 -translate-x-1/2  shadow-2xl"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
