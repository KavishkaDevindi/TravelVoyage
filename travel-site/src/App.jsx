import { Routes, Route, useLocation } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Destinations from './pages/Destinations'
import Booking from './pages/Booking'
import Hotels from './pages/Hotels'
import Flights from './pages/Flights'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const location = useLocation()
  const isAdmin = location.pathname === '/admin'
  const isAuth = ['/login', '/register'].includes(location.pathname)

  return (
    <AppProvider>
      <div className="min-h-screen bg-white">
        {!isAdmin && !isAuth && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {!isAdmin && !isAuth && <Footer />}
      </div>
    </AppProvider>
  )
}

export default App