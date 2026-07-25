import React, { createContext, useContext, useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [bookings, setBookings] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
  const loadUser = async () => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      try {
        const res = await fetch(`${API_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        const data = await res.json();
        if (data.user) {
          setUser(data.user);
          // fetch bookings/wishlist now that user is loaded
          await fetchBookings();
          await fetchWishlist();
        } else {
          logout();
        }
      } catch {
        logout();
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };
  loadUser();
}, []); 


  const fetchBookings = async () => {
  const token = localStorage.getItem('token');
  if (!token) return;
  const res = await fetch(`${API_URL}/bookings`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  if (res.ok) setBookings(data);
};

const fetchWishlist = async () => {
  const token = localStorage.getItem('token');
  if (!token) return;
  const res = await fetch(`${API_URL}/wishlist`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  if (res.ok) setWishlist(data);
};

  const login = async (email, password) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  console.log('Login response:', data); // (keep for debugging)

  if (res.ok) {
    localStorage.setItem('token', data.token);
    setToken(data.token);
    // ✅ data now contains _id, name, email, role – use it directly
    setUser(data);   // instead of data.user

  

    await fetchBookings();
    await fetchWishlist();
    return true;
  }
  // ✅ backend returns { message } on error
  throw new Error(data.message || 'Login failed');
};

  const register = async (name, email, password) => {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.token);
      setToken(data.token);
      setUser(data.user);
      await fetchBookings();
      await fetchWishlist();
      return true;
    }
    throw new Error(data.error || 'Registration failed');
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setBookings([]);
    setWishlist([]);
  };

  // ---------- Bookings ----------
  // const addBooking = async (bookingData) => {
  //   const res = await fetch(`${API_URL}/bookings`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(bookingData),
  //   });
  //   const data = await res.json();
  //   if (res.ok) {
  //     await fetchBookings(); // refresh list
  //     return data;
  //   }
  //   throw new Error(data.error || 'Booking failed');
  // };

  // const updateBookingStatus = async (id, status) => {
  //   const res = await fetch(`${API_URL}/bookings/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify({ status }),
  //   });
  //   if (res.ok) {
  //     await fetchBookings();
  //   }
  // };

  // const deleteBooking = async (id) => {
  //   const res = await fetch(`${API_URL}/bookings/${id}`, {
  //     method: 'DELETE',
  //     headers: { Authorization: `Bearer ${token}` },
  //   });
  //   if (res.ok) {
  //     await fetchBookings();
  //   }
  // };

//   const addBooking = async (bookingData) => {
//   const token = localStorage.getItem('token');   // ✅ latest token
//   if (!token) throw new Error('No token');

//   const res = await fetch(`${API_URL}/bookings`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(bookingData),
//   });
//   const data = await res.json();
//   if (res.ok) {
//     await fetchBookings(); // refresh list
//     return data;
//   }
//   throw new Error(data.error || 'Booking failed');
// };

const addBooking = async (bookingData) => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No token found');
  
  const res = await fetch(`${API_URL}/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookingData),
  });

  const data = await res.json();
  console.log('Booking response:', data); // 👈 see what the backend returns

  if (res.ok) {
    await fetchBookings();
    return data;
  }
  // Use the backend error message if available
  throw new Error(data.message || data.error || 'Booking failed');
};

const updateBookingStatus = async (id, status) => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No token');

  const res = await fetch(`${API_URL}/bookings/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status }),
  });
  if (res.ok) {
    await fetchBookings();
  }
};

const deleteBooking = async (id) => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No token');

  const res = await fetch(`${API_URL}/bookings/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
  if (res.ok) {
    await fetchBookings();
  }
};

  // ---------- Wishlist ----------
  const addToWishlist = async (tourId) => {
    const res = await fetch(`${API_URL}/wishlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ tourId }),
    });
    if (res.ok) {
      await fetchWishlist();
    }
  };

  const removeFromWishlist = async (id) => {
    const res = await fetch(`${API_URL}/wishlist/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      await fetchWishlist();
    }
  };

  // ---------- Messages ----------
  const sendMessage = async (name, email, message) => {
    const res = await fetch(`${API_URL}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });
    return res.ok;
  };

  const value = {
    user,
    token,
    bookings,
    wishlist,
    loading,
    login,
    register,
    logout,
    addBooking,
    updateBookingStatus,
    deleteBooking,
    addToWishlist,
    removeFromWishlist,
    sendMessage,
    isLoggedIn: !!user,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);