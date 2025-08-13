import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-orange-100 via-yellow-50 to-green-100 py-12 md:py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-300 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-orange-400 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-green-400 rounded-full opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gray-900 mb-6">
              Shift Gears, <span className="text-brand-red">Think Big</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Discover the perfect ride from our curated collection of premium
              motorcycles
            </p>
            <button className="bg-brand-red hover:bg-brand-red-hover text-white font-semibold py-4 px-8 rounded-full transition-colors transform hover:scale-105 duration-200">
              Explore Collection
            </button>
          </div>

          {/* Right Content - Hero Illustration */}
          <div className="relative">
            {/* Navigation arrows */}
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
              <ChevronLeft className="h-5 w-5 text-brand-gray-600" />
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
              <ChevronRight className="h-5 w-5 text-brand-gray-600" />
            </button>

            {/* Hero illustration with people and bike */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mx-4">
              <div className="flex items-center justify-center space-x-8">
                {/* Person 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-orange-400 rounded-full mb-2 flex items-center justify-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-full"></div>
                  </div>
                  <div className="w-6 h-6 bg-yellow-400 rounded-full absolute transform translate-x-8 -translate-y-4"></div>
                  <div className="w-4 h-4 bg-yellow-300 rounded-full absolute transform translate-x-12 -translate-y-2"></div>
                </div>

                {/* Motorcycle */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-20 bg-brand-gray-800 rounded-lg relative">
                    {/* Bike body */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-gray-700 to-brand-gray-800 rounded-lg"></div>
                    {/* Wheels */}
                    <div className="absolute -left-2 bottom-0 w-8 h-8 bg-brand-gray-900 rounded-full border-2 border-brand-gray-600"></div>
                    <div className="absolute -right-2 bottom-0 w-8 h-8 bg-brand-gray-900 rounded-full border-2 border-brand-gray-600"></div>
                    {/* Details */}
                    <div className="absolute top-2 left-2 w-3 h-3 bg-brand-red rounded-full"></div>
                    <div className="absolute top-2 right-2 w-2 h-4 bg-yellow-400 rounded"></div>
                  </div>
                </div>

                {/* Person 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-teal-400 rounded-full mb-2 flex items-center justify-center">
                    <div className="w-12 h-12 bg-teal-500 rounded-full"></div>
                  </div>
                  <div className="w-6 h-6 bg-green-400 rounded-full absolute transform -translate-x-8 -translate-y-4"></div>
                  <div className="w-4 h-4 bg-green-300 rounded-full absolute transform -translate-x-12 -translate-y-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
