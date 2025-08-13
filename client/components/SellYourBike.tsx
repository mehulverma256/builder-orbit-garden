import { FileText, Search, RefreshCw, Phone } from "lucide-react";
import { useState } from "react";

export default function SellYourBike() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Phone number:", phoneNumber);
  };

  return (
    <section className="py-16 bg-brand-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-8">
              Want to sell{" "}
              <br className="hidden sm:block" />
              your bike?
            </h2>

            {/* Features */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-gray-900 mb-1">
                    Instant Online Quote
                  </h3>
                  <p className="text-brand-gray-600">
                    Get an instant valuation for your motorcycle
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Search className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-gray-900 mb-1">
                    Hassle-free Inspection
                  </h3>
                  <p className="text-brand-gray-600">
                    Professional inspection at your doorstep
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <RefreshCw className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-gray-900 mb-1">
                    Seamless Ownership Transfer
                  </h3>
                  <p className="text-brand-gray-600">
                    Complete paperwork handled by experts
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Input Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-brand-gray-400" />
                </div>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                  className="block w-full pl-10 pr-3 py-3 border border-brand-gray-200 rounded-lg leading-5 bg-white placeholder-brand-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-brand-red"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-gray-900 hover:bg-brand-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Get the best quote for you
              </button>
            </form>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-center space-x-8">
                {/* Person 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-red-400 rounded-full mb-4 flex items-center justify-center relative">
                    <div className="w-16 h-16 bg-red-500 rounded-full"></div>
                    {/* Money/coins illustration */}
                    <div className="absolute -top-2 -right-2">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-yellow-900">₹</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Motorcycle */}
                <div className="flex-shrink-0">
                  <div className="w-40 h-24 bg-brand-gray-800 rounded-lg relative">
                    {/* Bike body */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 rounded-lg"></div>
                    {/* Wheels */}
                    <div className="absolute -left-3 bottom-0 w-10 h-10 bg-brand-gray-900 rounded-full border-2 border-brand-gray-600"></div>
                    <div className="absolute -right-3 bottom-0 w-10 h-10 bg-brand-gray-900 rounded-full border-2 border-brand-gray-600"></div>
                    {/* Details */}
                    <div className="absolute top-2 left-3 w-4 h-4 bg-brand-red rounded-full"></div>
                    <div className="absolute top-2 right-3 w-3 h-5 bg-yellow-400 rounded"></div>
                    {/* Handlebars */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-brand-gray-700 rounded"></div>
                  </div>
                </div>

                {/* Person 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-teal-400 rounded-full mb-4 flex items-center justify-center relative">
                    <div className="w-16 h-16 bg-teal-500 rounded-full"></div>
                    {/* Lightbulb illustration */}
                    <div className="absolute -top-2 -right-2">
                      <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center">
                        <div className="w-3 h-4 bg-yellow-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-4 h-4 bg-yellow-400 rounded-full opacity-60"></div>
              <div className="absolute top-6 right-6 w-3 h-3 bg-green-400 rounded-full opacity-60"></div>
              <div className="absolute bottom-6 left-6 w-5 h-5 bg-orange-400 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
