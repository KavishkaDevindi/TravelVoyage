import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function Login() {
  const { login, setIsLoggedIn } = useApp()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })

  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   login({ name: 'Traveler', email: form.email })
  //   navigate('/dashboard')
  // }

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     await login(form.email, form.password);
//     console.log('Login successful, navigating to /dashboard');
//     navigate('/dashboard');
//   } catch (err) {
//     alert(err.message);
//   }
// };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await login(form.email, form.password);
      if (success) {
        navigate('/dashboard'); // 🔁 go to dashboard
      }
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    // ─── full‑page background (same as Booking) ──────────────────
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-6"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* ─── glass / mirror card ────────────────────────────────── */}
      <div className="w-full max-w-md bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-8 transition-all duration-300 relative">
        {/* subtle overlay for readability */}
        <div className="absolute inset-0 bg-black/5 rounded-3xl pointer-events-none" />

        {/* ─── your original form ────────────────────────────────── */}
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-white text-center drop-shadow-lg">
            Welcome Back
          </h2>
          {/* <p className="text-white/80 text-center text-sm mt-1 drop-shadow">
            Login to your account to continue.
          </p> */}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300/70 transition"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-bllue-300/70 transition"
              required
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl btn-primary backdrop-blur-sm text-[#0b1a33] font-bold text-base shadow-lg hover:bg-blue-300/90 transition-all duration-200"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-white/80 mt-4 drop-shadow">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600 font-medium hover:underline hover:text-blue-500 transition">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}