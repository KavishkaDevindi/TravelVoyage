import { useState } from 'react';

export default function Flights() {
    const [form, setForm] = useState({
        from: '',
        to: '',
        departure: '',
        // return: '',
        passengers: 1,
        airline: 'Any',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        alert('Flight search initiated! Check your email for results.');
    };

    return (
        <div
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2070')`,
            }}
        >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

            {/* Main glass card — mirrored / translucent effect */}
            <div className="relative z-10 w-full max-w-3xl">
                {/* Glow / mirror reflection beneath the card (subtle) */}
                <div className="absolute -bottom-6 left-0 right-0 h-20 bg-gradient-to-t from-white/10 to-transparent blur-2xl rounded-full" />

                <div
                    className="
                relative
                bg-white/10
                backdrop-blur-2xl
                border border-white/20
                rounded-3xl
                p-6 md:p-8
                shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]
                transition-all
                duration-300
                hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.7)]
                hover:border-white/30
              "
                >
                    {/* Header */}
                    <div className="text-center mb-7">
                        <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
                            Search <span className="text-sky-300">Flights</span>
                        </h1>
                        {/* <p className="text-white/60 text-sm md:text-base mt-1.5 font-light tracking-wide">
                            Find the best deals to your dream destination
                        </p> */}
                        <div className="mt-3 w-20 h-0.5 bg-gradient-to-r from-transparent via-sky-300/60 to-transparent mx-auto rounded-full" />
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSearch}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                            {/* From */}
                            <div>
                                <label className="block text-sm font-medium text-white/80 mb-1.5 tracking-wide">
                                    From
                                </label>
                                <input
                                    type="text"
                                    name="from"
                                    placeholder="City or Airport"
                                    value={form.from}
                                    onChange={handleChange}
                                    className="
                                w-full px-4 py-3 rounded-xl
                                bg-white/10 backdrop-blur-sm
                                border border-white/15
                                text-white placeholder:text-white/40
                                focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-transparent
                                transition-all duration-200
                              "
                                    required
                                />
                            </div>

                            {/* To */}
                            <div>
                                <label className="block text-sm font-medium text-white/80 mb-1.5 tracking-wide">
                                    To
                                </label>
                                <input
                                    type="text"
                                    name="to"
                                    placeholder="City or Airport"
                                    value={form.to}
                                    onChange={handleChange}
                                    className="
                                w-full px-4 py-3 rounded-xl
                                bg-white/10 backdrop-blur-sm
                                border border-white/15
                                text-white placeholder:text-white/40
                                focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-transparent
                                transition-all duration-200
                              "
                                    required
                                />
                            </div>

                            {/* Departure */}
                            <div>
                                <label className="block text-sm font-medium text-white/80 mb-1.5 tracking-wide">
                                    Departure
                                </label>
                                <input
                                    type="date"
                                    name="departure"
                                    value={form.departure}
                                    onChange={handleChange}
                                    className="
                                w-full px-4 py-3 rounded-xl
                                bg-white/10 backdrop-blur-sm
                                border border-white/15
                                text-white [color-scheme:dark]
                                focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-transparent
                                transition-all duration-200
                              "
                                    required
                                />
                            </div>

                            {/* Return */}
                            {/* <div>
                                <label className="block text-sm font-medium text-white/80 mb-1.5 tracking-wide">
                                    Return
                                </label>
                                <input
                                    type="date"
                                    name="return"
                                    value={form.return}
                                    onChange={handleChange}
                                    className="
                                w-full px-4 py-3 rounded-xl
                                bg-white/10 backdrop-blur-sm
                                border border-white/15
                                text-white [color-scheme:dark]
                                focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-transparent
                                transition-all duration-200
                              "
                                />
                            </div> */}

                            {/* Passengers */}
                            <div>
                                <label className="block text-sm font-medium text-white/80 mb-1.5 tracking-wide">
                                    Passengers
                                </label>
                                <input
                                    type="number"
                                    name="passengers"
                                    min="1"
                                    max="10"
                                    value={form.passengers}
                                    onChange={handleChange}
                                    className="
                                w-full px-4 py-3 rounded-xl
                                bg-white/10 backdrop-blur-sm
                                border border-white/15
                                text-white
                                focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-transparent
                                transition-all duration-200
                              "
                                    required
                                />
                            </div>

                            {/* Airline */}
                            <div>
                                <label className="block text-sm font-medium text-white/80 mb-1.5 tracking-wide">
                                    Airline
                                </label>
                                <select
                                    name="airline"
                                    value={form.airline}
                                    onChange={handleChange}
                                    className="
                                w-full px-4 py-3 rounded-xl
                                bg-white/10 backdrop-blur-sm
                                border border-white/15
                                text-white
                                focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-transparent
                                transition-all duration-200
                                appearance-none
                                [&>option]:bg-slate-800 [&>option]:text-white
                              "
                                >
                                    <option value="Any">Any</option>
                                    <option value="American Airlines">SriLankan Airlines</option>
                                    <option value="Emirates">Emirates</option>
                                    <option value="Singapore Airlines">Singapore Airlines</option>
                                </select>
                            </div>
                        </div>

                        {/* Submit button with mirror/shine effect */}
                        <button
                            type="submit"
                            className="
                          relative
                          mt-7 w-full
                          py-3.5 rounded-xl
                          bg-gradient-to-r from-sky-500 to-blue-600
                          text-white font-semibold text-base
                          shadow-lg shadow-sky-500/30
                          hover:shadow-xl hover:shadow-sky-500/40
                          hover:scale-[1.02]
                          active:scale-[0.98]
                          transition-all duration-300
                          overflow-hidden
                          group
                        "
                        >
                            {/* Shine effect overlay (mirror-like reflection) */}
                            <span
                                className="
                              absolute inset-0
                              bg-gradient-to-r from-transparent via-white/20 to-transparent
                              -translate-x-full group-hover:translate-x-full
                              transition-transform duration-700
                            "
                            />
                            <i className="fas fa-plane mr-2" />
                            Search Flights
                        </button>
                    </form>

                    {/* Subtle mirror reflection at the bottom of the card */}
                    <div
                        className="
                      absolute -bottom-8 left-1/2 -translate-x-1/2
                      w-3/4 h-6
                      bg-gradient-to-t from-white/5 to-transparent
                      blur-xl rounded-full
                      pointer-events-none
                    "
                    />
                </div>
            </div>
        </div>
    );
}