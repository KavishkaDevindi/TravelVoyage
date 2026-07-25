import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Register() {
  const { login } = useApp();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert('Passwords do not match!');
      return;
    }
    login({ name: form.name, email: form.email });
    navigate('/dashboard');
  };

  // const handleSubmit = async (e) => {
  // e.preventDefault();
  // if (form.password !== form.confirm) {
  //   alert('Passwords do not match');
  //   return;
  // }
  // try {
  //   await register(form.name, form.email, form.password);
  //   navigate('/dashboard');
  // } catch (err) {
  //   alert(err.message);
  // }
  // };

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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      {/* Glass card – mirror look */}
      <div className="relative z-10 w-full max-w-md bg-white/50 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] p-6 md:p-8 transition-all duration-300 hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.7)] hover:border-white/30">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
            Create Account
          </h2>
          {/* <p className="text-white/60 text-sm mt-1.5 font-light tracking-wide">
            Join us and start your journey.
          </p> */}
          <div className="mt-3 w-16 h-0.5 bg-gradient-to-r from-transparent via-sky-300/60 to-transparent mx-auto rounded-full" />
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-transparent transition text-sm"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-transparent transition text-sm"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-transparent transition text-sm"
            required
          />
          <input
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            value={form.confirm}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-transparent transition text-sm"
            required
          />

          <button
            type="submit"
            className="relative w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-base shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden group"
          >
            {/* Shine effect – mirror like */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-white/70 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 font-medium hover:text-blue-500 transition">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}