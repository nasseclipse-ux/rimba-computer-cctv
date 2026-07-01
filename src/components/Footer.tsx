import { Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              Rimba Computer & CCTV is your trusted partner for all computer repair, gaming PC assembly, and security system needs in Bekasi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-white">Reviews</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Google Maps</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white">Computer Repair</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Gaming PC Assembly</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">CCTV Installation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Data Recovery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Phone size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <a href="tel:+6282210527872" className="text-gray-400 hover:text-white">0822-1052-7872</a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Jl. Raya Setu, Telajung, Bekasi</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Open Daily • Closes at 21:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Rimba Computer & CCTV. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
