import { ClockIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
export default function main() {
    return (
      <div className="min-h-screen bg-amber-50">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <Image 
            src="/images/1.jpeg" 
            fill
            priority
            className="w-full h-full object-cover"
            alt="Gusto Restaurant"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Gusto</h1>
              <a 
                href="#menu" 
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition"
              >
                View Menu
              </a>
            </div>
          </div>
        </div>
  
        {/* Quick Info */}
        <div className="max-w-4xl mx-auto py-12 px-4 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <ClockIcon className="h-10 w-10 mx-auto text-amber-600" />
            <h3 className="text-xl font-medium mt-4">Open Daily</h3>
            <p className="mt-2 text-gray-600">11AM - 10PM</p>
          </div>
          {/* Add location and phone sections similarly */}
        </div>
      </div>
    );
  }