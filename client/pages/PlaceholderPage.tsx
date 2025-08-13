import { useLocation, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PlaceholderPage() {
  const location = useLocation();
  const pageName = location.pathname.slice(1) || "page";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-brand-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">🚧</span>
          </div>
          <h1 className="text-3xl font-bold text-brand-gray-900 mb-4 capitalize">
            {pageName} Page
          </h1>
          <p className="text-brand-gray-600 mb-8">
            This page is under construction. Continue prompting to help build out this section!
          </p>
          <Link
            to="/"
            className="inline-block bg-brand-red hover:bg-brand-red-hover text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
