import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const destinations = [
  { id: 1, name: 'Sri dalada maligawa, Sri Lanka', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR-fmD15FtoYfWmac3Vdk5gAr7PoLIexzG6o3LgShrcIp2eyCHukQeAzxb&s=10', price: '$549', rating: 4.9, duration: '6 Days' },
  { id: 2, name: 'Sigiriya, Sri Lanka', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyaZZtFSYjJ-sUg9IFedupb1yX7sMVkLJpsc435-3Slg&s=10', price: '$699', rating: 4.8, duration: '5 Days' },
  { id: 3, name: 'Matara, Sri Lanka', image: 'https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=400,height=265,dpr=2/tour_img/05a09a3dacbff938825bf274fc3fdc0ac5b8fe70d4c0b57c055e7a0c654b91bd.jpg', price: '$499', rating: 4.9, duration: '2 Days' },
];

export default function Home() {
  const { wishlist, toggleWishlist } = useApp();

  return (
    <div className="animate-fade-in">
      {/* ===== HERO – full screen with background image ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT10bbIT4_BfnUBJM-SFfF91fVDMJ_9uOjrC1ERAron87CzxwmSU_s3lES3&s=10"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>

        {/* Animated blobs (subtle, behind text) */}
        <div className="absolute inset-0 opacity-20 z-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        {/* Content */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-2xl text-white">
            <div className="flex items-center gap-4 text-sm font-medium text-white/70">
              {/* <span className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
                <i className="fas fa-plane mr-2"></i> Dream · Explore · Discover
              </span> */}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mt-6">
              Your <span className="gradient-text">Next Adventure</span>
              <br />
              <span className="text-white/80 text-3xl md:text-4xl font-light">Starts Here</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-lg mt-4">
              From pristine beaches to bustling cities, find the perfect getaway tailored to your dreams.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Link to="/destinations" className="btn-primary px-8 py-3.5 rounded-full text-base inline-flex items-center gap-2">
                Explore Destinations <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/booking" className="glass text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-white/20 transition">
                <i className="fas fa-calendar-check mr-2"></i> Book Now
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-white/70 pt-6">
              <span><i className="fas fa-check-circle text-blue-300 mr-1"></i> 500+ Destinations</span>
              <span><i className="fas fa-check-circle text-blue-300 mr-1"></i> 24/7 Support</span>
              <span><i className="fas fa-check-circle text-blue-300 mr-1"></i> Best Price Guarantee</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce z-30">
          <i className="fas fa-chevron-down text-2xl"></i>
        </div>
      </section>

      {/* ===== OUR PROCESS ===== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-slate-500 mt-3">Simple steps to turn your travel dreams into reality.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'fa-compass', title: 'Dream', desc: 'Choose your dream destination from our curated list.' },
              { icon: 'fa-route', title: 'Explore', desc: 'Discover hidden gems and local experiences.' },
              { icon: 'fa-suitcase', title: 'Discover', desc: 'Book your trip and get ready for an adventure.' },
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-card text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${step.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
                <p className="text-slate-500 mt-2 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR PACKAGES ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Exclusive Deals</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">
              Our <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-slate-500 mt-3">Handpicked destinations at unbeatable prices.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <div key={dest.id} className="bg-white rounded-2xl overflow-hidden shadow-card">
                <div className="relative">
                  <img src={dest.image} alt={dest.name} className="w-full h-56 object-cover" />
                  <button
                    onClick={() => toggleWishlist(dest)}
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-slate-600 hover:text-red-500 transition-colors"
                  >
                    <i className={wishlist.find(w => w.id === dest.id) ? 'fas fa-heart text-red-500' : 'far fa-heart'}></i>
                  </button>
                  <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">{dest.duration}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-800 text-lg">{dest.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-blue-600 font-bold text-xl">{dest.price}</span>
                    <div className="flex items-center gap-1 text-sm">
                      <i className="fas fa-star text-yellow-400"></i>
                      <span className="font-medium">{dest.rating}</span>
                    </div>
                  </div>
                  <Link to="/booking" className="mt-4 w-full btn-primary text-center py-2.5 rounded-xl text-sm block">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/destinations" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
              View All Packages <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Why TravelVoyage</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">
              Travel with <span className="gradient-text">Confidence</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'fa-globe', title: 'Global Coverage', desc: 'Access to 500+ destinations with local expertise.' },
              { icon: 'fa-shield-alt', title: 'Safe & Secure', desc: '24/7 support and trusted partners.' },
              { icon: 'fa-wallet', title: 'Best Value', desc: 'Competitive pricing and exclusive deals.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-card text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${item.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                <p className="text-slate-500 mt-2 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}