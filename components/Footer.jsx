// components/Footer.tsx
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Gusto Restaurant</h3>
            <p className="mb-4">Bringing exceptional dining experiences since 2018</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-white"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Menu</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <address className="not-italic">
              <p>123 Culinary Street</p>
              <p>Foodville, FC 12345</p>
              <p className="mt-2">(123) 456-7890</p>
              <p>gusto@gmail.com</p>
            </address>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="mb-4">Subscribe for updates and special offers</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l text-gray-900 w-full" 
              />
              <button 
                type="submit" 
                className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-r"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Gusto Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}