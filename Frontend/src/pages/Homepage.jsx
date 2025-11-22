import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-8 py-5 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 bg-indigo-500 rounded-xl shadow-md"></div>
          <h1 className="text-2xl font-semibold text-gray-800">Website Name</h1>
        </div>

        <button className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow-md">
          Login
        </button>
      </header>

      {/* Main Section */}
      <main className="flex flex-col md:flex-row flex-1 items-center justify-between px-10 md:px-20 py-12">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-5xl font-bold text-gray-800 leading-tight">
            A Beautiful UI <br /> Built With Tailwind CSS
          </h2>

          <p className="text-lg text-gray-600">
            This is your space to explain your product or service. Everything
            here is customizable — colors, layout, spacing, and more.
          </p>

          <button className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-md">
            Get Started
          </button>
        </div>

        {/* Right Section – S-shaped image collage */}
        <div className="md:w-1/2 relative h-[500px] mt-10 md:mt-0">
          {/* Fake 3D image blocks as placeholders */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-white rounded-3xl shadow-xl"></div>

          <div className="absolute top-28 left-1/4 w-36 h-36 bg-white rounded-3xl shadow-xl"></div>

          <div className="absolute top-52 left-1/2 -translate-x-1/2 w-32 h-32 bg-white rounded-3xl shadow-xl"></div>

          <div className="absolute top-72 right-1/4 w-36 h-36 bg-white rounded-3xl shadow-xl"></div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-28 bg-white rounded-3xl shadow-xl"></div>
        </div>
      </main>
    </div>
  );
};

export default App;
