import React from "react"
import {
  Twitter,
  Youtube,
  Instagram,
  Facebook,
  Linkedin,
  ExternalLink,
  MessageCircle,
  DollarSign,
  Music2,
} from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">
        {/* Share Button */}
        <div className="flex justify-end mb-6">
          <button className="text-gray-600 hover:text-gray-800">
            <ExternalLink size={20} />
          </button>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-teal-400"></div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-4">
          <Twitter
            size={20}
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
          />
          <Youtube
            size={20}
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
          />
          <Instagram
            size={20}
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
          />
          <Facebook
            size={20}
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
          />
          <Linkedin
            size={20}
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
          />
        </div>

        {/* Title and Description */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">dumpet.fun</h1>
          <p className="text-gray-600">Popularity contest duel platform</p>
        </div>

        {/* Links */}
        <div className="space-y-3">
          <a
            href="#"
            className="block bg-[#C84E89] text-white py-3 px-6 rounded-lg text-center hover:bg-opacity-90 transition-all"
          >
            Website
          </a>
          <a
            href="#"
            className="block bg-[#C84E89] text-white py-3 px-6 rounded-lg text-center hover:bg-opacity-90 transition-all"
          >
            Telegram
          </a>
          <a
            href="#"
            className="block bg-[#C84E89] text-white py-3 px-6 rounded-lg text-center hover:bg-opacity-90 transition-all"
          >
            Permaweb ArNS
          </a>
          <a
            href="#"
            className="block bg-[#C84E89] text-white py-3 px-6 rounded-lg text-center hover:bg-opacity-90 transition-all"
          >
            DINDIN
          </a>
        </div>

        {/* Everlink Footer */}
        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 text-sm">
            <span className="text-lg">☀️</span>
            Join dumpet.fun on Everlink
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
