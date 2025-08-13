import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "I didn't think selling my bike was so easy. Zuto helped me from figuring out a quote to the final inspection. They even picked up the bike from my location",
    author: "John Doe",
    subtitle: "2017 Hero Karizma",
    image: "/placeholder.svg",
  },
  // Add more testimonials here if needed
];

export default function CustomerStories() {
  return (
    <section className="py-16 bg-brand-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
            Stories we love
          </h2>
        </div>

        {/* Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation arrows */}
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow md:left-0 md:-translate-x-full">
            <ChevronLeft className="h-5 w-5 text-brand-gray-600" />
          </button>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow md:right-0 md:translate-x-full">
            <ChevronRight className="h-5 w-5 text-brand-gray-600" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-auto">
                <img
                  src={testimonials[0].image}
                  alt="Customer testimonial"
                  className="w-full h-full object-cover"
                />
                {/* HONDA overlay */}
                <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm font-bold">
                  HONDA
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <blockquote className="text-lg md:text-xl text-brand-gray-700 mb-6 leading-relaxed">
                  "{testimonials[0].text}"
                </blockquote>
                <div>
                  <p className="font-semibold text-brand-gray-900 mb-1">
                    {testimonials[0].author}
                  </p>
                  <p className="text-brand-gray-500">
                    {testimonials[0].subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-2 h-2 bg-brand-red rounded-full"></div>
            <div className="w-2 h-2 bg-brand-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-brand-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
