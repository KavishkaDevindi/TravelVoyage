import prisma from '../utils/prisma.js';

export const getBookings = async (req, res) => {
  const where = req.user.role === 'ADMIN' ? {} : { userId: req.user.id };
  const bookings = await prisma.booking.findMany({
    where,
    include: { user: { select: { name: true, email: true } }, tour: true, hotel: true },
  });
  res.json(bookings);
};

export const createBooking = async (req, res) => {
  const { fullname, email, destination, travelers, date, total, payment, coupon } = req.body;
  const booking = await prisma.booking.create({
    data: {
      userId: req.user.id,
      fullname,
      email,
      destination,
      travelers: parseInt(travelers),
      date: new Date(date),
      total: parseFloat(total),
      payment,
      coupon,
      status: 'Pending',
    },
  });
  res.status(201).json(booking);
};

export const updateBooking = async (req, res) => {
  const { status } = req.body;
  const booking = await prisma.booking.update({
    where: { id: req.params.id },
    data: { status },
  });
  res.json(booking);
};

export const deleteBooking = async (req, res) => {
  await prisma.booking.delete({ where: { id: req.params.id } });
  res.json({ message: 'Booking deleted' });
};