import { FileText, MapPin, CreditCard } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Instant quote",
    description: "Browse our curated collection",
    subtitle: "This is demo text, this can be replaced later as required.",
  },
  {
    icon: MapPin,
    title: "Free doorstep evaluation",
    description: "Explore our store inventory at your convenience",
    subtitle: "This is demo text, this can be replaced later as required.",
  },
  {
    icon: CreditCard,
    title: "Get paid instantly",
    description: "Hassle-free purchase and ownership transfer",
    subtitle: "This is demo text, this can be replaced later as required.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-red mb-4">
            How it works
          </h2>
          <p className="text-lg text-brand-gray-600">
            Own Your Motorcycle in 3 Simple Steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Icon */}
              <div className="w-16 h-16 bg-brand-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                <step.icon className="h-8 w-8" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-brand-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-brand-gray-600 mb-2">
                {step.description}
              </p>
              <p className="text-sm text-brand-gray-500">
                {step.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
