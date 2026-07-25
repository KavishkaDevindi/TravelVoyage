import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';

export default function Booking() {
  const { user, addBooking } = useApp();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    destination: 'Nuwaraeliya, Sri Lanka',
    date: '',
    travelers: 2,
    payment: 'Credit Card',
    coupon: '',
  });
  const [total, setTotal] = useState(49);
  const [submitted, setSubmitted] = useState(false);

  const basePrice = 49;

  useEffect(() => {
    const travelers = form.travelers || 1;
    let discount = 0;
    if (form.coupon === 'SAVE10') discount = 0.1;
    if (form.coupon === 'SAVE20') discount = 0.2;
    const price = basePrice * travelers * (1 - discount);
    setTotal(Math.round(price));
  }, [form.travelers, form.coupon]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooking({ ...form, total, date: new Date().toISOString() });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };



  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-6"
      style={{
        backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4B6bJhX22lu1EuPWwaCEEXdbOshNz8P2P_EwLIlwFfZc3UD4x0biL23fn&s=10)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="w-full max-w-3xl bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-4 md:p-6 transition-all duration-300 relative">
        <div className="text-center mb-4 md:mb-5">
          <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
            Book Your <span className="text-blue-600">Adventure</span>
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-medium text-white/90 mb-0.5 drop-shadow">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300/70 transition text-sm"
                placeholder="Your full name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-white/90 mb-0.5 drop-shadow">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300/70 transition text-sm"
                placeholder="your@email.com"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-medium text-white/90 mb-0.5 drop-shadow">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300/70 transition text-sm"
                placeholder="+1 234 567 890"
                required
              />
            </div>

            {/* Destination - now uses native arrow, but same background & text */}
            <div>
              <label className="block text-xs font-medium text-white/90 mb-0.5 drop-shadow">
                Destination
              </label>
              <select
                name="destination"
                value={form.destination}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300/70 transition text-sm"
              >
                <option className="text-gray-800">Nuwaraeliya, Sri Lanka</option>
                <option className="text-gray-800">Ella, Sri Lanka</option>
                <option className="text-gray-800">Kandy, Sri Lanka</option>
                <option className="text-gray-800">Jaffna, Sri Lanka</option>
                <option className="text-gray-800">Gall, Sri Lanka</option>
                <option className="text-gray-800">Yala National Park, Sri Lanka</option>
              </select>
            </div>

            {/* Travel Date - hides native calendar icon, adds a custom emoji as visual cue */}
            <div>
              <label className="block text-xs font-medium text-white/90 mb-0.5 drop-shadow">
                Travel Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300/70 transition text-sm appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-3 [&::-webkit-calendar-picker-indicator]:w-5 [&::-webkit-calendar-picker-indicator]:h-5 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                  required
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none">
                  📅
                </span>
              </div>
            </div>

            {/* Travelers - hides number spinner */}
            <div>
              <label className="block text-xs font-medium text-white/90 mb-0.5 drop-shadow">
                Travelers
              </label>
              <input
                type="number"
                name="travelers"
                min="1"
                max="10"
                value={form.travelers}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300/70 transition text-sm appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                required
              />
            </div>

            {/* Payment Method - same as destination */}
            <div>
              <label className="block text-xs font-medium text-white/90 mb-0.5 drop-shadow">
                Payment Method
              </label>
              <select
                name="payment"
                value={form.payment}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300/70 transition text-sm"
              >
                <option className="text-gray-800">Credit Card</option>
                <option className="text-gray-800">Debit Card</option>
                <option className="text-gray-800">PayPal</option>
                <option className="text-gray-800">Bank Transfer</option>
              </select>
            </div>

            {/* Coupon Code */}
            <div>
              <label className="block text-xs font-medium text-white/90 mb-0.5 drop-shadow">
                Coupon Code
              </label>
              <input
                type="text"
                name="coupon"
                value={form.coupon}
                onChange={handleChange}
                placeholder="SAVE10 or SAVE20"
                className="w-full px-3 py-2.5 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300/70 transition text-sm"
              />
            </div>
          </div>

          {/* total and submit */}
          <div className="mt-3 p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 flex flex-wrap items-center justify-between">
            <span className="text-white font-medium drop-shadow text-sm">Total Price:</span>
            <span className="text-xl font-bold text-blue-500 drop-shadow">${total}</span>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl btn-primary backdrop-blur-sm text-[#0b1a33] font-bold text-sm shadow-lg hover:bg-yellow-300/90 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <i className="fas fa-check-circle mr-1"></i> Book Now
          </button>
        </form>

        {submitted && (
          <div className="mt-3 p-3 bg-green-500/30 backdrop-blur-sm text-white rounded-xl flex items-center gap-3 border border-green-300/50 text-sm">
            <i className="fas fa-check-circle text-lg"></i>
            <span>Booking confirmed! Check your dashboard.</span>
          </div>
        )}
      </div>
    </div>
  );
}