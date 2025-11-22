import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col text-gray-900">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-12 py-5 shadow-sm bg-white/70 backdrop-blur-md">
        <div className="flex items-center space-x-4 ">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-12 w-12 rounded-xl shadow-md"
          />
          <span className="text-3xl font-semibold">EventHive</span>
        </div>

        <button className="px-6 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-md">
          Login
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10">
        {/* Left Column */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-800">
            Designing Moments That Feel Like Magic
          </h1>
          <p className="text-lg text-gray-600">
            Add any text you want here — product description, mission, pitch, or
            anything else. Designed cleanly with Tailwind for a modern UI.
          </p>
          <button className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-md">
            Get Started
          </button>
        </div>

        {/* Right Column – S-shaped collage */}
        <div className="md:w-1/2 relative h-[500px] flex items-center justify-center mt-10 md:mt-0">
          <div className="relative w-full h-full">
            <img
              src="/img1.png"
              alt="Decor 1"
              className="absolute w-32 top-0 left-1/2 -translate-x-1/2 rounded-3xl shadow-2xl"
            />
            <img
              src="/img2.png"
              alt="Decor 2"
              className="absolute w-36 top-28 left-1/4 rounded-3xl shadow-2xl"
            />
            <img
              src="/img3.png"
              alt="Decor 3"
              className="absolute w-32 top-52 left-1/2 -translate-x-1/2 rounded-3xl shadow-2xl"
            />
            <img
              src="/img4.png"
              alt="Decor 4"
              className="absolute w-36 top-72 right-1/4 rounded-3xl shadow-2xl"
            />
            <img
              src="/img5.png"
              alt="Decor 5"
              className="absolute w-28 bottom-0 left-1/2 -translate-x-1/2 rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
