import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Dashboard() {
  const { isLoggedIn, user, bookings, wishlist } = useApp();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  if (!isLoggedIn) {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-4"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2070)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        <div className="relative z-10 text-center glass-card max-w-md w-full p-8 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-xl">
          <i className="fas fa-lock text-4xl text-white/60 mb-4"></i>
          <h2 className="text-2xl font-bold text-white drop-shadow">Please Login</h2>
          <p className="text-white/60 mt-2">You need to be logged in to view your dashboard.</p>
          <Link
            to="/login"
            className="mt-4 inline-block bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2.5 rounded-xl font-medium shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 transition"
          >
            Login
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'profile', label: 'Profile', icon: 'fa-user' },
    { id: 'bookings', label: 'Bookings', icon: 'fa-ticket-alt' },
    { id: 'wishlist', label: 'Wishlist', icon: 'fa-heart' },
    { id: 'payments', label: 'Payments', icon: 'fa-credit-card' },
    { id: 'reviews', label: 'Reviews', icon: 'fa-star' },
    { id: 'notifications', label: 'Notifications', icon: 'fa-bell' },
    { id: 'settings', label: 'Settings', icon: 'fa-cog' },
  ];

  return (
    <div
      className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex items-start justify-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      {/* Main glass container */}
      <div className="relative z-10 w-full max-w-7xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] p-4 md:p-6 transition-all duration-300 hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.7)] mt-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
            Welcome back, <span className="text-sky-300">{user?.name || 'Traveler'}</span>!
          </h1>
          <p className="text-white/60 text-sm">Manage your travel preferences and bookings.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4 sticky top-20">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-12 h-12 bg-sky-400/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl border border-white/20">
                  {user?.name?.[0] || 'T'}
                </div>
                <div>
                  <div className="font-semibold text-white">{user?.name || 'Traveler'}</div>
                  <div className="text-xs text-white/50">{user?.email || 'user@email.com'}</div>
                </div>
              </div>
              <nav className="mt-4 space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-sky-400/20 text-white border-l-4 border-sky-400'
                        : 'text-white/60 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <i className={`fas ${tab.icon} w-5`}></i> {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4 md:p-6">
              {activeTab === 'profile' && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 drop-shadow">Profile</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                      <span className="text-sm text-white/60 w-24">Full Name</span>
                      <span className="font-medium text-white">{user?.name || 'Not set'}</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                      <span className="text-sm text-white/60 w-24">Email</span>
                      <span className="font-medium text-white">{user?.email || 'Not set'}</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                      <span className="text-sm text-white/60 w-24">Member Since</span>
                      <span className="font-medium text-white">January 2026</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                      <span className="text-sm text-white/60 w-24">Total Trips</span>
                      <span className="font-medium text-white">{bookings.length}</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'bookings' && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 drop-shadow">My Bookings</h3>
                  {bookings.length === 0 ? (
                    <div className="text-center py-8 text-white/60">
                      <i className="fas fa-ticket-alt text-3xl text-white/20 mb-3"></i>
                      <p>You have no bookings yet.</p>
                      <Link to="/destinations" className="text-sky-300 font-medium hover:text-sky-200 transition">
                        Start exploring
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {bookings.map((b, i) => (
                        <div key={i} className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 flex flex-wrap items-center justify-between">
                          <div>
                            <div className="font-semibold text-white">{b.destination}</div>
                            <div className="text-sm text-white/60">{b.travelers} travelers • {b.date ? new Date(b.date).toLocaleDateString() : 'TBD'}</div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="font-bold text-sky-300">${b.total || 499}</span>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-300 border border-green-400/30 backdrop-blur-sm">
                              Confirmed
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'wishlist' && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 drop-shadow">Wishlist</h3>
                  {wishlist.length === 0 ? (
                    <div className="text-center py-8 text-white/60">
                      <i className="fas fa-heart text-3xl text-white/20 mb-3"></i>
                      <p>Your wishlist is empty.</p>
                      <Link to="/destinations" className="text-sky-300 font-medium hover:text-sky-200 transition">
                        Browse destinations
                      </Link>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {wishlist.map((item) => (
                        <div key={item.id} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden flex border border-white/10">
                          <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
                          <div className="p-3 flex-1">
                            <div className="font-semibold text-white text-sm">{item.name}</div>
                            <div className="text-sky-300 font-bold text-sm">{item.price}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'payments' && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 drop-shadow">Payment History</h3>
                  <div className="text-center py-8 text-white/60">
                    <i className="fas fa-credit-card text-3xl text-white/20 mb-3"></i>
                    <p>No payment records found.</p>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 drop-shadow">My Reviews</h3>
                  <div className="text-center py-8 text-white/60">
                    <i className="fas fa-star text-3xl text-white/20 mb-3"></i>
                    <p>You haven't written any reviews yet.</p>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 drop-shadow">Notifications</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-sky-400/10 backdrop-blur-sm rounded-xl flex items-start gap-3 border border-sky-400/20">
                      <i className="fas fa-bell text-sky-300 mt-0.5"></i>
                      <div>
                        <div className="font-medium text-white text-sm">Welcome to Travel Voyage!</div>
                        <div className="text-xs text-white/50">We're excited to have you on board.</div>
                      </div>
                    </div>
                    <div className="p-3 bg-white/5 backdrop-blur-sm rounded-xl flex items-start gap-3 border border-white/10">
                      <i className="fas fa-tag text-white/40 mt-0.5"></i>
                      <div>
                        <div className="font-medium text-white text-sm">Special Offer</div>
                        <div className="text-xs text-white/50">Use code SAVE20 for 20% off your next booking.</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 drop-shadow">Settings</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-between border border-white/10">
                      <div>
                        <div className="font-medium text-white">Email Notifications</div>
                        <div className="text-sm text-white/50">Receive updates about your bookings.</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-white/20 peer-focus:ring-2 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-500"></div>
                      </label>
                    </div>
                    <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-between border border-white/10">
                      <div>
                        <div className="font-medium text-white">Two-Factor Authentication</div>
                        <div className="text-sm text-white/50">Add an extra layer of security.</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-white/20 peer-focus:ring-2 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-500"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}