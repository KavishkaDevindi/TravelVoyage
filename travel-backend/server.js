// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import { errorHandler } from './src/middleware/errorHandler.js';

// import authRoutes from './src/routes/authRoutes.js';
// import tourRoutes from './src/routes/tourRoutes.js';
// import hotelRoutes from './src/routes/hotelRoutes.js';
// import bookingRoutes from './src/routes/bookingRoutes.js';
// import wishlistRoutes from './src/routes/wishlistRoutes.js';
// import blogRoutes from './src/routes/blogRoutes.js';
// import reviewRoutes from './src/routes/reviewRoutes.js';
// import userRoutes from './src/routes/userRoutes.js';

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/tours', tourRoutes);
// app.use('/api/hotels', hotelRoutes);
// app.use('/api/bookings', bookingRoutes);
// app.use('/api/wishlist', wishlistRoutes);
// app.use('/api/blogs', blogRoutes);
// app.use('/api/reviews', reviewRoutes);
// app.use('/api/users', userRoutes);

// app.use(errorHandler);

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// ✅ Load environment variables FIRST
import dotenv from 'dotenv';
dotenv.config();

// ✅ Then import the rest
import express from 'express';
import cors from 'cors';
import { errorHandler } from './src/middleware/errorHandler.js';

import authRoutes from './src/routes/authRoutes.js';
import tourRoutes from './src/routes/tourRoutes.js';
import hotelRoutes from './src/routes/hotelRoutes.js';
import bookingRoutes from './src/routes/bookingRoutes.js';
import wishlistRoutes from './src/routes/wishlistRoutes.js';
import blogRoutes from './src/routes/blogRoutes.js';
import reviewRoutes from './src/routes/reviewRoutes.js';
import userRoutes from './src/routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tours', tourRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});