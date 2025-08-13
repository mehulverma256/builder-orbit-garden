import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How does Zuto procure bikes?",
    answer:
      "Zuto procures bikes through a comprehensive network of trusted sources including individual sellers, dealerships, and auctions. We have strict quality checks and verification processes to ensure all bikes meet our standards.",
  },
  {
    id: 2,
    question: "Are all your bikes Zuto certified?",
    answer:
      "Yes, all bikes listed on our platform go through our rigorous Zuto certification process. This includes mechanical inspection, documentation verification, and quality assurance checks.",
  },
  {
    id: 3,
    question: "Does Zuto buy bikes that are registered outside Karnataka?",
    answer:
      "Yes, we do purchase bikes registered outside Karnataka. However, additional paperwork and transfer procedures may be required depending on the state of registration.",
  },
  {
    id: 4,
    question: "Is the pricing of the bikes negotiable?",
    answer:
      "Our prices are competitively set based on market research and bike condition. While there may be limited room for negotiation, we ensure fair pricing for both buyers and sellers.",
  },
  {
    id: 5,
    question:
      "Does Zuto offer trade-in options for customers looking to exchange their current bike for a new one?",
    answer:
      "Yes, we offer trade-in options! You can use your current bike as part payment for a new purchase. Our experts will evaluate your bike and provide a fair trade-in value.",
  },
  {
    id: 6,
    question:
      "What financing or payment plans does Zuto offer for purchasing motorcycles?",
    answer:
      "We partner with leading financial institutions to offer flexible payment plans and financing options. You can choose from various EMI schemes based on your preference and eligibility.",
  },
];

export default function FAQs() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
            FAQs
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-brand-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-brand-gray-50 transition-colors"
              >
                <span className="font-medium text-brand-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-brand-gray-500 transition-transform ${
                    openItems.includes(faq.id) ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {openItems.includes(faq.id) && (
                <div className="px-6 pb-4">
                  <p className="text-brand-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile App Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-brand-gray-900 mb-2">
            Feeling lost? FAQs
          </h3>
          <p className="text-brand-gray-600 mb-6">Show more</p>
        </div>
      </div>
    </section>
  );
}
