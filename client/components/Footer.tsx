import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Need more help section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-brand-gray-900 mb-6">
            Need more help?
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-brand-gray-900 hover:bg-brand-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Mail us
            </button>
            <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Talk to us on Whatsapp
            </button>
          </div>
        </div>

        {/* Why choose Zuto section */}
        <div className="border-t border-brand-gray-200 pt-8 mb-8">
          <button className="flex items-center justify-between w-full text-left">
            <h4 className="text-lg font-semibold text-brand-gray-900">
              Why choose Zuto?
            </h4>
            <span className="text-brand-gray-500">▼</span>
          </button>
          <div className="mt-4">
            <p className="text-brand-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Bibendum sed auctor
              elementum rutrum eget rhoncus. Aenean eget tortor gravida ut
              rutrum lobortis bibendum hac. In et lorem odio sit leo vulputat
              magna rhoncus nionis.
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
          {/* Services */}
          <div>
            <h5 className="font-semibold text-brand-gray-900 mb-4">Services</h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-brand-gray-600 hover:text-brand-red transition-colors"
                >
                  Buy used bikes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-gray-600 hover:text-brand-red transition-colors"
                >
                  Sell your bike
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-gray-600 hover:text-brand-red transition-colors"
                >
                  Get instant quote
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold text-brand-gray-900 mb-4">
              Quick Links
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-brand-gray-600 hover:text-brand-red transition-colors"
                >
                  Apply for loan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-gray-600 hover:text-brand-red transition-colors"
                >
                  Evaluate your bike
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-gray-600 hover:text-brand-red transition-colors"
                >
                  Talk to expert
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-semibold text-brand-gray-900 mb-4">Zuto</h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-brand-gray-600 hover:text-brand-red transition-colors"
                >
                  About Zuto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-gray-600 hover:text-brand-red transition-colors"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-gray-600 hover:text-brand-red transition-colors"
                >
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-semibold text-brand-gray-900 mb-4">Legal</h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-brand-gray-600 hover:text-brand-red transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-gray-600 hover:text-brand-red transition-colors"
                >
                  Admin panel
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-gray-600 hover:text-brand-red transition-colors"
                >
                  Terms of service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="border-t border-brand-gray-200 pt-8 mb-8">
          <h5 className="font-semibold text-brand-gray-900 mb-4">
            Popular searches
          </h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-brand-gray-600 hover:text-brand-red transition-colors"
                  >
                    Sell used bikes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-brand-gray-600 hover:text-brand-red transition-colors"
                  >
                    Zuto used bikes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-brand-gray-600 hover:text-brand-red transition-colors"
                  >
                    Cheap bikes in Bangalore
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-brand-gray-600 hover:text-brand-red transition-colors"
                  >
                    Suzuki
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-brand-gray-600 hover:text-brand-red transition-colors"
                  >
                    Hero
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-brand-gray-600 hover:text-brand-red transition-colors"
                  >
                    Bajaj
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-brand-gray-600 hover:text-brand-red transition-colors"
                  >
                    Honda
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-brand-gray-600 hover:text-brand-red transition-colors"
                  >
                    Royal Enfield
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-brand-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h6 className="font-semibold text-brand-gray-900 mb-2">
              Connect with us
            </h6>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-brand-gray-400 hover:text-brand-red transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-brand-gray-400 hover:text-brand-red transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-brand-gray-400 hover:text-brand-red transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-brand-gray-400 hover:text-brand-red transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-brand-gray-500">©2024 Zuto</p>
          </div>
        </div>

        {/* Bottom illustration */}
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg relative">
            {/* Simple bike illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-10 bg-blue-900 rounded relative">
                <div className="absolute -left-1 bottom-0 w-4 h-4 bg-brand-gray-900 rounded-full"></div>
                <div className="absolute -right-1 bottom-0 w-4 h-4 bg-brand-gray-900 rounded-full"></div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
