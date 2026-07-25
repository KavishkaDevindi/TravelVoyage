import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Admin() {
  const [activeTab, setActiveTab] = useState('users')

  const adminTabs = [
    { id: 'users', label: 'Users', icon: 'fa-users' },
    { id: 'tours', label: 'Tours', icon: 'fa-umbrella-beach' },
    { id: 'hotels', label: 'Hotels', icon: 'fa-hotel' },
    { id: 'bookings', label: 'Bookings', icon: 'fa-ticket-alt' },
    { id: 'payments', label: 'Payments', icon: 'fa-credit-card' },
    { id: 'blogs', label: 'Blogs', icon: 'fa-blog' },
    { id: 'reviews', label: 'Reviews', icon: 'fa-star' },
    { id: 'analytics', label: 'Analytics', icon: 'fa-chart-line' },
    { id: 'reports', label: 'Reports', icon: 'fa-file-alt' },
  ]

  const stats = [
    { label: 'Total Users', value: '2,847', change: '+12%', icon: 'fa-users', color: 'blue' },
    { label: 'Total Tours', value: '156', change: '+5%', icon: 'fa-umbrella-beach', color: 'green' },
    { label: 'Total Bookings', value: '3,421', change: '+18%', icon: 'fa-ticket-alt', color: 'purple' },
    { label: 'Revenue', value: '$1.2M', change: '+23%', icon: 'fa-dollar-sign', color: 'amber' },
  ]

  return (
    <div className="pt-16 bg-slate-50 min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Admin Dashboard</h1>
            <p className="text-slate-500">Manage your travel platform.</p>
          </div>
          <Link to="/" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            <i className="fas fa-arrow-left mr-1"></i> Back to Site
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-card p-4">
              <div className="flex items-center justify-between">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-${stat.color}-50 text-${stat.color}-600`}>
                  <i className={`fas ${stat.icon}`}></i>
                </div>
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
              <div className="mt-2">
                <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-52 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-card p-3 sticky top-20">
              <nav className="space-y-1">
                {adminTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${activeTab === tab.id ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                    <i className={`fas ${tab.icon} w-5`}></i> {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-card p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4 capitalize">{activeTab}</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 text-slate-500">
                      <th className="text-left py-3 px-2 font-medium">#</th>
                      <th className="text-left py-3 px-2 font-medium">Name</th>
                      <th className="text-left py-3 px-2 font-medium">Email</th>
                      <th className="text-left py-3 px-2 font-medium">Status</th>
                      <th className="text-left py-3 px-2 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: 1, name: 'Emma Johnson', email: 'emma@email.com', status: 'Active' },
                      { id: 2, name: 'Michael Chen', email: 'michael@email.com', status: 'Active' },
                      { id: 3, name: 'Sarah Patel', email: 'sarah@email.com', status: 'Inactive' },
                      { id: 4, name: 'David Kim', email: 'david@email.com', status: 'Active' },
                    ].map((row) => (
                      <tr key={row.id} className="border-b border-gray-50 hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-2 text-slate-500">{row.id}</td>
                        <td className="py-3 px-2 font-medium text-slate-700">{row.name}</td>
                        <td className="py-3 px-2 text-slate-500">{row.email}</td>
                        <td className="py-3 px-2">
                          <span className={`badge ${row.status === 'Active' ? 'badge-green' : 'badge-gray'}`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="py-3 px-2">
                          <button className="text-blue-600 hover:text-blue-800 text-xs font-medium">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center text-sm text-slate-400">Showing 4 of 2,847 users</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}