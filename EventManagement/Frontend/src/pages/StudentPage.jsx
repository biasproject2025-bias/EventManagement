import React from "react";

export default function StudentPage() {
  return (
    <div className="w-full min-h-screen">

      {/* ✔ HERO SECTION */}
      <div 
        className="relative w-full h-[70vh] bg-center bg-cover group"
        style={{
          backgroundImage: "url('https://your-college-image-url.com/image.jpg')"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>

        {/* Text + Button */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            Welcome to Your College
          </h1>

          <p className="mt-3 text-lg md:text-xl opacity-90">
            Discover amazing clubs and societies
          </p>

          <button className="
            mt-6 opacity-0 group-hover:opacity-100
            bg-white text-black font-semibold px-6 py-3 rounded-full
            shadow-lg transition-opacity duration-300
          ">
            Explore Societies
          </button>
        </div>
      </div>

      {/* Add rest of your StudentPage sections below */}
      {/* About Section */}
      {/* Societies Grid */}
      {/* Events */}
      {/* Footer */}
      
    </div>
  );
}
