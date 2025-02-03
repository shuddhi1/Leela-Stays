import React from 'react'


function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-700 to-teal-600 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Leela Stays</h2>
          <p className="text-sm leading-relaxed">
            Escape to serenity with Leela Stays, nestled in the picturesque hills of Dehradun. Your comfort and memorable experience are our priorities.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>📍 Dehradun, Uttarakhand</li>
            <li>📞 <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a></li>
            <li>📧 <a href="mailto:contact@leelastays.com" className="hover:underline">contact@leelastays.com</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-teal-300 transition-all">🌐 Facebook</a>
            <a href="#" className="hover:text-teal-300 transition-all">📸 Instagram</a>
            <a href="#" className="hover:text-teal-300 transition-all">🐦 Twitter</a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-teal-400 pt-4 text-center text-sm">
        <p>&copy; 2025 Leela Stays. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
