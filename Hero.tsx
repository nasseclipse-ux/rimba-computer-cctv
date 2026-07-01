import { Star, MapPin, Clock, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Trusted Computer & CCTV Experts</h2>
            <p className="text-xl mb-8 text-blue-100">
              Professional computer repair, custom gaming PC assembly, and CCTV security system installation in Bekasi, Indonesia.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Star className="text-yellow-300" size={24} fill="currentColor" />
                <span className="text-lg font-semibold">4.8/5 Rating (34 Reviews)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-blue-200" size={24} />
                <span className="text-lg">Open Daily • Closes at 21:00</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-200" size={24} />
                <span className="text-lg">Jl. Raya Setu, Telajung, Bekasi</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-200" size={24} />
                <a href="tel:+6282210527872" className="text-lg hover:text-blue-200">0822-1052-7872</a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+6282210527872" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 text-center">
                Call Us Now
              </a>
              <a href="#contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 text-center">
                Get More Info
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-blue-700 rounded-lg p-8 space-y-4">
              <div className="bg-blue-600 rounded-lg p-6 text-center">
                <p className="text-blue-100 mb-2">Customer Satisfaction</p>
                <p className="text-4xl font-bold">98%</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-600 rounded-lg p-4 text-center">
                  <p className="text-blue-100 text-sm mb-1">Years in Business</p>
                  <p className="text-3xl font-bold">10+</p>
                </div>
                <div className="bg-blue-600 rounded-lg p-4 text-center">
                  <p className="text-blue-100 text-sm mb-1">Happy Customers</p>
                  <p className="text-3xl font-bold">1000+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
