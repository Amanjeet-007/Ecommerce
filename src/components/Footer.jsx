import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white absolute bottom-0 w-full flex">
        <div className="container mx-auto px-4 py-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Branding Section */}
            <div>
              <h2 className="text-xl font-bold text-blue-500">ShopMate</h2>
              <p className="mt-2 text-gray-400">
                Your one-stop shop for almost everything you need.
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-lg font-semibold text-red-500">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link to="/home" className="hover:text-blue-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="hover:text-blue-500">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-blue-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-blue-500">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Support Section */}
            <div>
              <h3 className="text-lg font-semibold text-red-500">Customer Support</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-500">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Links Section */}
          <div className="mt-8 flex justify-center space-x-4">
            <a href="#" className="text-blue-500 hover:text-red-500">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="#" className="text-blue-500 hover:text-red-500">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="text-blue-500 hover:text-red-500">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="#" className="text-blue-500 hover:text-red-500">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-8 text-center border-t border-gray-700 pt-4">
            <p className="text-sm text-gray-400">
              &copy; 2025 ShopEase. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
