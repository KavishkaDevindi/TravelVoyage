import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'

const destinations = [
  { id: 1, name: 'Nuwaraeliya, Sri Lanka', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYembwIWb-j0_zDIEc3axQ-Q6YBQ_1kjeFZxc2DOXomQ&s=10', price: '$49', rating: 4.9, duration: '3 Days' },
  { id: 2, name: 'Ella, Sri Lanka', image: 'https://besttimetovisitsrilanka.com/wp-content/uploads/2021/04/Ella-Sightseeing-Tour-Sri-Lanka.jpg', price: '$69', rating: 4.8, duration: '2 Days' },
  { id: 3, name: 'Kandy, Sri Lanka', image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/17/f0/f0.jpg', price: '$54', rating: 4.9, duration: '3 Days' },
  { id: 4, name: 'Jaffna, Sri Lanka', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRUYt9IRVZ8qKzYxhiWnZ3c2LatkjJRYT1RNmk6vN6nQ_WZhqqPDCcKuA&s=10', price: '$79', rating: 4.7, duration: '4 Days' },
  { id: 5, name: 'Gall, Sri Lanka', image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/91/ee/ec.jpg', price: '$45', rating: 4.6, duration: '2 Days' },
  { id: 6, name: 'Yala National Park, Sri Lanka', image: 'https://cdn.kimkim.com/files/a/images/ee63fae70b69b7eaa9be40d38eeef89c136cfb79/original-e38566a61c71ea2fe115db3a00052b61.jpg', price: '$62', rating: 4.8, duration: '1 Days' },
]

export default function Destinations() {
  const { wishlist, toggleWishlist } = useApp()
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? destinations : destinations.filter(d => d.duration.includes(filter))

  return (
    <div className="animate-fade-in">
      <section className="bg-slate-50 py-12 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              {/* <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Explore</span> */}
              <h1 className="text-3xl md:text-3xl font-bold text-slate-800">
                Our <span className="gradient-text">Destinations</span>
              </h1>
            </div>
            <div className="flex gap-2 flex-wrap">
              {['all', '2 Days', '3 Days', '4 Days', '5 Days', '6 Days'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === f ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 hover:bg-blue-50 border border-gray-200'}`}
                >
                  {f === 'all' ? 'All' : f}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dest) => (
              <div key={dest.id} className="bg-white rounded-2xl overflow-hidden shadow-card">
                <div className="relative">
                  <img src={dest.image} alt={dest.name} className="w-full h-56 object-cover" />
                  <button onClick={() => toggleWishlist(dest)} className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-slate-600 hover:text-red-500 transition-colors">
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
                      <span className="text-slate-400">(128 reviews)</span>
                    </div>
                  </div>
                  <Link to="/booking" className="mt-4 w-full btn-primary text-center py-2.5 rounded-xl text-sm block">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}