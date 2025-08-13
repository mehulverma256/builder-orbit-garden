import { Check, X } from "lucide-react";

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExplore: () => void;
}

export default function ThankYouModal({
  isOpen,
  onClose,
  onExplore,
}: ThankYouModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-gray-400 hover:text-brand-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Success icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <Check className="h-8 w-8 text-green-600" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-gray-900 mb-4">
            Thank you!
          </h2>
          <p className="text-brand-gray-600 mb-8 leading-relaxed">
            Our expert will get in touch with you soon.
          </p>

          {/* Action buttons */}
          <div className="space-y-3">
            <button
              onClick={onExplore}
              className="w-full bg-brand-gray-900 hover:bg-brand-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Explore
            </button>
            <button
              onClick={onClose}
              className="w-full text-brand-gray-600 hover:text-brand-gray-800 font-medium py-2 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
