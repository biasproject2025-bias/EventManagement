import React from "react";

export default function Footer() {
  return (
    <>
      {/* Support Section */}
      <section id="support" className="py-12 bg-indigo-100 mt-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Need Help?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you have questions about event management, account issues,
            or feature requests — our team is always here to support you.
          </p>

          <div className="mt-6 space-y-2">
            <p className="text-gray-700">
              <strong>Email:</strong> support@eventhive.com
            </p>
            <p className="text-gray-700">
              <strong>Help Center:</strong> Visit our FAQ page for quick answers.
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <h3 className="text-xl font-semibold text-white">EventHive</h3>

            <div className="flex space-x-6 text-gray-400">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#support" className="hover:text-white">Support</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} EventHive — All rights reserved.
            <br />
            Crafted with care to simplify event management.
          </div>
        </div>
      </footer>
    </>
  );
}
