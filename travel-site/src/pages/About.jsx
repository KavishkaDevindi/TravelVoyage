export default function About() {
  return (
    <div className="animate-fade-in">
      <section className="bg-slate-50 py-16 mt 10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          {/* <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mt-2">
              We Make Travel <span className="gradient-text">Extraordinary</span>
            </h1>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              Passionate about travel, committed to excellence. Discover the story behind Travel Voyage.
            </p>
          </div> */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://img.magnific.com/premium-photo/beautiful-kandy-city-lake-night-kandy-sri-lanka_131985-796.jpg?semt=ais_hybrid&w=740&q=80" alt="Team" className="rounded-2xl shadow-xl w-full" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Our Story</h2>
              <p className="text-slate-500 mt-3 leading-relaxed">
                Founded in 2020, Travel Voyage was born from a simple idea: travel should be accessible, enjoyable, and transformative. What started as a small group of travel enthusiasts has grown into a global community of explorers.
              </p>
              <p className="text-slate-500 mt-3 leading-relaxed">
                Today, we serve thousands of travelers each year, offering curated experiences that go beyond the typical tourist trail. Our team is spread across the Sri Lanka, bringing you insider knowledge and authentic connections.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { number: '15K+', label: 'Travelers' },
                  { number: '500+', label: 'Destinations' },
                  { number: '4.9★', label: 'Rating' },
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 bg-white rounded-xl shadow-card">
                    <div className="text-2xl font-bold text-blue-600">{item.number}</div>
                    <div className="text-sm text-slate-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Devindi Pitigala', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop' },
              { name: 'Hansamal Athawuda', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
              { name: 'Shashini Jayathissa', role: 'Travel Curator', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop' },
              { name: 'Uyanga Nawarathna', role: 'Customer Experience', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop' },
            ].map((member, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-slate-50 shadow-card">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg" />
                <h4 className="font-bold text-slate-800 mt-4">{member.name}</h4>
                <p className="text-sm text-slate-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}