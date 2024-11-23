import React from 'react'

export default function () {
  return (
    <footer className="bg-black border-t border-gray-300 py-6">
      <div className="container mx-auto px-4">
        {/* Bagian Atas Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Judul */}
          <div>
            <p className="text-sm text-white">Build A Good Style</p>
            <h2 className="text-2xl font-bold text-white">Craft Your Own Style</h2>
          </div>
          {/* Tombol "Let's Talk!" */}
          <div>
            <button className="bg-white px-4 py-2 rounded-full hover:bg-stone-400">
              Let's Shopping!
            </button>
          </div>
        </div>

        {/* Garis Pemisah */}
        <hr className="my-6 border-gray-300" />

        {/* Bagian Bawah Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm">
          {/* Kiri */}
          <div className="text-center md:text-left mb-4 md:mb-0 text-white">
            <p>©2024, All right reserved.</p>
            <p> CLAIR STYLE</p>
          </div>

          {/* Tengah: Social Media */}
          <div className="flex space-x-4">
            <button className="border text-white border-white rounded-full px-4 py-1 hover:bg-stone-400">
              Facebook
            </button>
            <button className="border text-white border-white rounded-full px-4 py-1 hover:bg-stone-400">
              Instagram
            </button>
            <button className="border text-white border-white rounded-full px-4 py-1 hover:bg-stone-400">
              Twitter
            </button>
            <button className="border text-white border-white rounded-full px-4 py-1 hover:bg-stone-400">
              LinkedIn
            </button>
          </div>

          {/* Kanan */}
          <div className="text-center md:text-right text-white">
            <p>Created By </p>
            <p>Cindy Amelia</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

