import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Job<span className="text-[#f52121]">Portal</span>
          </h2>
          <p className="mt-4 text-sm text-gray-400">
            Find your dream job with us. Explore top opportunities from trusted companies.
          </p>
        </div>

        {/* Jobs */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Jobs</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#6A38C2] cursor-pointer">Frontend Jobs</li>
            <li className="hover:text-[#6A38C2] cursor-pointer">Backend Jobs</li>
            <li className="hover:text-[#6A38C2] cursor-pointer">Full Stack Jobs</li>
            <li className="hover:text-[#6A38C2] cursor-pointer">Remote Jobs</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#6A38C2] cursor-pointer">About Us</li>
            <li className="hover:text-[#6A38C2] cursor-pointer">Careers</li>
            <li className="hover:text-[#6A38C2] cursor-pointer">Contact</li>
            <li className="hover:text-[#6A38C2] cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@jobportal.com</li>
            <li>Phone: +94 77 123 4567</li>
            <li>Location: Sri Lanka</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} JobPortal. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
