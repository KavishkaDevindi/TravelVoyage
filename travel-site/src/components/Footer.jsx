import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-blue-400">Travel</span>Voyage
            </h3>
            <p className="text-sm leading-relaxed">
              Explore the world with our curated travel experiences. From exotic destinations to luxury stays, we make every journey unforgettable.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white/60 hover:text-white transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white/60 hover:text-white transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white/60 hover:text-white transition-colors"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
              <li><Link to="/hotels" className="hover:text-white transition-colors">Hotels</Link></li>
              <li><Link to="/flights" className="hover:text-white transition-colors">Flights</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><i className="fas fa-map-marker-alt w-5 text-blue-400"></i> 123 Travel St, Sri Lanka</li>
              <li><i className="fas fa-phone w-5 text-blue-400"></i> +94 334 567 890</li>
              <li><i className="fas fa-envelope w-5 text-blue-400"></i> info@travelvoyage.com</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-white/50 pt-8">
          &copy; 2026 Travel Voyage. All rights reserved.
        </div>
      </div>
    </footer>
  )
}