import { Link, NavLink } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { useState } from 'react'

export default function Navbar() {
  const { isLoggedIn, user, logout } = useApp()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/hotels', label: 'Hotels' },
    { path: '/flights', label: 'Flights' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-extrabold">
            <span className="gradient-text">Travel</span>
            <span className="text-slate-700">Voyage</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-blue-600 ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-600'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-blue-600">
                  <i className="fas fa-user-circle text-xl text-blue-600"></i>
                  <span>{user?.name || 'Profile'}</span>
                </Link>
                <button onClick={logout} className="text-sm font-medium text-red-500 hover:text-red-700">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-blue-600">
                  Login
                </Link>
                <Link to="/register" className="btn-primary px-5 py-2 rounded-full text-sm">
                  Sign Up
                </Link>
              </>
            )}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-600 text-xl"
            >
              <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/30">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 text-sm font-medium transition-colors hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-slate-600'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

