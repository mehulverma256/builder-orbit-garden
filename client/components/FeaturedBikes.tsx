import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

const featuredBikes = [
  {
    id: 1,
    name: "Bajaj Pulsar 180cc",
    year: "2019",
    price: "₹ 1,28,990",
    originalPrice: "₹ 1,35,000",
    discount: "7% off today",
    image: "/placeholder.svg",
    isLiked: false,
  },
  {
    id: 2,
    name: "Bajaj Pulsar 180cc",
    year: "2019",
    price: "₹ 1,28,990",
    originalPrice: "₹ 1,35,000",
    discount: "7% off today",
    image: "/placeholder.svg",
    isLiked: false,
  },
  {
    id: 3,
    name: "Bajaj Pulsar 180cc",
    year: "2019",
    price: "₹ 1,28,990",
    originalPrice: "₹ 1,35,000",
    discount: "7% off today",
    image: "/placeholder.svg",
    isLiked: false,
  },
  {
    id: 4,
    name: "Bajaj Pulsar 180cc",
    year: "2019",
    price: "₹ 1,28,990",
    originalPrice: "₹ 1,35,000",
    discount: "7% off today",
    image: "/placeholder.svg",
    isLiked: false,
  },
];

export default function FeaturedBikes() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-brand-gray-900">
            Featured bikes
          </h2>
          <div className="flex items-center space-x-2">
            <button className="w-10 h-10 bg-brand-gray-100 hover:bg-brand-gray-200 rounded-full flex items-center justify-center transition-colors">
              <ChevronLeft className="h-5 w-5 text-brand-gray-600" />
            </button>
            <button className="w-10 h-10 bg-brand-gray-100 hover:bg-brand-gray-200 rounded-full flex items-center justify-center transition-colors">
              <ChevronRight className="h-5 w-5 text-brand-gray-600" />
            </button>
          </div>
        </div>

        {/* Bikes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {featuredBikes.map((bike) => (
            <div
              key={bike.id}
              className="bg-white border border-brand-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <Heart
                    className={`h-4 w-4 ${bike.isLiked ? "text-brand-red fill-current" : "text-brand-gray-400"}`}
                  />
                </button>
                {bike.discount && (
                  <div className="absolute bottom-3 left-3 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">
                    {bike.discount}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-brand-gray-900 mb-1">
                  {bike.name}
                </h3>
                <p className="text-sm text-brand-gray-500 mb-3">{bike.year}</p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-brand-gray-900">
                      {bike.price}
                    </p>
                    {bike.originalPrice && (
                      <p className="text-sm text-brand-gray-400 line-through">
                        {bike.originalPrice}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-brand-red hover:bg-brand-red-hover text-white font-semibold py-3 px-8 rounded-full transition-colors">
            View all bikes
          </button>
        </div>
      </div>
    </section>
  );
}
