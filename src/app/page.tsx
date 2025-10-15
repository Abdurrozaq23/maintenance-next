// app/page.tsx
import Image from "next/image";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 sm:p-12 shadow-xl text-center max-w-md w-full">
        <div className="text-5xl sm:text-6xl mb-6">⚙️</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
          Sedang Dalam Perbaikan
        </h1>
        <p className="text-gray-700 mb-2">
          Mohon maaf, website sedang dalam pengembangan sistem oleh tim developer.
        </p>
        <p className="text-gray-500 mb-6 text-sm">
          Kami akan segera kembali. Terima kasih atas kesabarannya!
        </p>

        {/* <div className="mt-6">
          <p className="font-medium text-gray-800 mb-3">Developer: Abdur Rozaq</p>
          <a
            href="https://wa.me/+6281392321996"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-transform duration-200 hover:-translate-y-1 shadow-md"
          >
            📱 Hubungi via WhatsApp
          </a>
        </div> */}

        <footer className="mt-8 text-xs text-gray-500">
          &copy; 2025 Website Sementara. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}