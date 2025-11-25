import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-indigo-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
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
                Reach out to us anytime — our team will get back to you shortly.
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
  );
}
