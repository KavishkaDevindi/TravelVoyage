import express from 'express';
import { getBookings, createBooking, updateBooking, deleteBooking } from '../controllers/bookingController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = express.Router();
router.get('/', protect, getBookings);
router.post('/', protect, createBooking);
router.put('/:id', protect, updateBooking);
router.delete('/:id', protect, adminOnly, deleteBooking);

export default router;