import { useState } from 'react'

const hotels = [
  { id: 1, name: 'Hide Ella Hotel & Resort', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQmXgtmIuvMMmhdSEbBNOdIrVzGCN_zI7x-pFTMqs2lQ&s=10', price: '$189/night', rating: 4.8, facilities: ['Pool', 'Spa', 'Restaurant', 'Gym'] },
  { id: 2, name: 'Maples Holiday Resort', image: 'https://images.trvl-media.com/lodging/101000000/100800000/100799200/100799196/8274ac26_edited_8e3c.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill', price: '$145/night', rating: 4.6, facilities: ['Pool', 'Bar', 'Restaurant'] },
  { id: 3, name: 'Thilanka Hotel from', image: 'https://www.kayak.com/rimg/himg/46/91/12/expedia_group-169849-230012308-202519.jpg?width=836&height=607&crop=true', price: '$210/night', rating: 4.9, facilities: ['Spa', 'Restaurant', 'Hiking', 'WiFi'] },
  { id: 4, name: 'Gall Hill Hotel', image: 'https://images.trvl-media.com/lodging/1000000/910000/901900/901879/e5f51218.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium', price: '$165/night', rating: 4.7, facilities: ['Pool', 'Beach Access', 'Bar'] },
]

export default function Hotels() {
  const [search, setSearch] = useState('')
  const filtered = hotels.filter(h => h.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="animate-fade-in">
      <section className="bg-slate-50 py-12 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 text-center">
            Find Your <span className="gradient-text">Perfect Stay</span>
          </h1>
          <div className="max-w-lg mx-auto mt-6">
            <div className="relative">
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
              <input
                type="text"
                placeholder="Search hotels..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 input-focus"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-2xl overflow-hidden shadow-card flex flex-col md:flex-row">
                <img src={hotel.image} alt={hotel.name} className="md:w-56 h-48 md:h-auto object-cover" />
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-slate-800 text-lg">{hotel.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <i key={i} className={`fas fa-star ${i <= Math.floor(hotel.rating) ? 'text-yellow-400' : 'text-gray-300'}`}></i>
                      ))}
                    </div>
                    <span className="text-sm font-medium">{hotel.rating}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {hotel.facilities.map((f, i) => (
                      <span key={i} className="bg-blue-50 text-blue-600 text-xs px-2.5 py-1 rounded-full">{f}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-4">
                    <span className="text-blue-600 font-bold text-xl">{hotel.price}</span>
                    <button className="btn-primary px-5 py-2 rounded-full text-sm">
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}