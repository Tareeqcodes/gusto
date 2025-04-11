
'use client';
import { FaDownload } from 'react-icons/fa';

export default function MenuPage() {
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-amber-900 mb-8">Our Menu</h1>

        <div className="bg-white p-4 rounded-lg shadow-lg mb-8">
          <iframe 
            src="/menu.pdf" 
            className="w-full h-[70vh] border border-amber-200 rounded-lg"
            title="Gusto Restaurant Menu"
          />
        </div>

        {/* Download Button */}
        <div className="text-center">
          <a 
            href="/menu.pdf" 
            download="Gusto-Menu.pdf"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            <FaDownload /> Download Full Menu (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}