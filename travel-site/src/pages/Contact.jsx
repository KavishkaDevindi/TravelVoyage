import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-6"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      {/* Main glass card – now smaller */}
      <div className="relative z-10 w-full max-w-4xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] p-4 md:p-6 transition-all duration-300 hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.7)] hover:border-white/30 mt-10">
        {/* Heading */}
        <div className="text-center mb-4 md:mb-5">
          <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
            Get In <span className="text-sky-300">Touch</span>
          </h1>
          {/* <p className="text-white/60 text-xs md:text-sm mt-1 font-light tracking-wide">
            We'd love to hear from you. Reach out with any questions.
          </p> */}
          <div className="mt-2 w-16 h-0.5 bg-gradient-to-r from-transparent via-sky-300/60 to-transparent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Left column: Map + Contact info */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-48 md:h-56 border border-white/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.741256473707!2d79.8528!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2sus!4v1620000000000"
                className="w-full h-full"
                allowFullScreen=""
                loading="lazy"
                title="Map of Sri Lanka"
              />
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="p-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center gap-2">
                <i className="fas fa-phone text-sky-300 text-sm"></i>
                <div>
                  <div className="text-[10px] text-white/60">Phone</div>
                  <div className="text-xs font-medium text-white">+1 234 567 890</div>
                </div>
              </div>
              <div className="p-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center gap-2">
                <i className="fas fa-envelope text-sky-300 text-sm"></i>
                <div>
                  <div className="text-[10px] text-white/60">Email</div>
                  <div className="text-xs font-medium text-white">info@travelvoyage.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Form */}
          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4 md:p-5 shadow-lg">
              <h3 className="text-lg font-bold text-white mb-3 drop-shadow">Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-transparent transition text-sm"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-transparent transition text-sm"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="3"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-transparent transition text-sm resize-none"
                    required
                  />
                  <button
                    type="submit"
                    className="relative w-full py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <i className="fas fa-paper-plane mr-2"></i> Send Message
                  </button>
                </div>
              </form>
              {sent && (
                <div className="mt-3 p-2 bg-green-500/30 backdrop-blur-sm text-white rounded-xl flex items-center gap-2 border border-green-300/50 text-xs">
                  <i className="fas fa-check-circle"></i> Message sent successfully!
                </div>
              )}
            </div>

            {/* FAQ – smaller */}
            <div className="mt-3 p-3 bg-amber-500/20 backdrop-blur-sm rounded-xl border border-amber-400/30">
              <h4 className="font-semibold text-amber-200 text-sm">
                <i className="fas fa-question-circle mr-2"></i> FAQ
              </h4>
              <div className="mt-1.5 space-y-1.5 text-xs text-amber-100/80">
                <p><strong className="text-amber-200">Q:</strong> How do I cancel a booking?</p>
                <p><strong className="text-amber-200">A:</strong> Contact our support team within 24 hours.</p>
                <p><strong className="text-amber-200">Q:</strong> Do you offer travel insurance?</p>
                <p><strong className="text-amber-200">A:</strong> Yes, we partner with leading providers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}