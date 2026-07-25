import { useState } from 'react'
import { Link } from 'react-router-dom'

const blogPosts = [
  { id: 1, title: '10 Best Beaches in Sri Lanka', excerpt: 'Discover the most stunning beaches for your next tropical getaway...', image: 'https://dwq3yv87q1b43.cloudfront.net/public/blogs/17382434567366-574848164.png', date: 'June 15, 2026', category: 'Travel Tips' },
  { id: 2, title: 'How to Travel on a Budget', excerpt: 'Smart strategies to explore the world without breaking the bank...', image: 'https://www.ourescapeclause.com/wp-content/uploads/2016/05/shutterstock_1075238006-scaled-1.webp', date: 'June 10, 2026', category: 'Guides' },
  { id: 3, title: 'Top 5 Cities to Visit in Sri Lanka', excerpt: 'From historic Kandy to Ella, here are the must-see cities...', image: 'https://cazloyd.com/wp-content/uploads/2023/09/Why-you-should-visit-Galle.jpg.webp', date: 'June 5, 2026', category: 'Travel News' },
  { id: 4, title: 'Sustainable Travel Guide', excerpt: 'How to minimize your carbon footprint while exploring the world...', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSavwUEsEMqrc05jdOUSc4yBkjqGfZILoBlrhsBkcxVXfpPTy7bkRb6_FE&s=10', date: 'May 28, 2026', category: 'Guides' },
]

export default function Blog() {
  const [category, setCategory] = useState('All')
  const categories = ['All', 'Travel Tips', 'Travel News', 'Guides']
  const filtered = category === 'All' ? blogPosts : blogPosts.filter(p => p.category === category)

  return (
    <div className="animate-fade-in">
      <section className="bg-slate-50 py-12 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 text-center">
            Our <span className="gradient-text">Blog</span>
          </h1>
          {/* <p className="text-slate-500 text-center mt-2">Travel tips, news, and guides to inspire your next journey.</p> */}
          <div className="flex justify-center gap-2 mt-6 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${category === cat ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 hover:bg-blue-50 border border-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-card">
                <img src={post.image} alt={post.title} className="w-full h-52 object-cover" />
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg mt-2">{post.title}</h3>
                  <p className="text-slate-500 text-sm mt-1">{post.excerpt}</p>
                  <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors mt-3">
                    Read More <i className="fas fa-arrow-right text-xs"></i>
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