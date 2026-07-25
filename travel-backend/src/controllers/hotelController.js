import prisma from '../utils/prisma.js';

export const getHotels = async (req, res) => {
  const hotels = await prisma.hotel.findMany();
  res.json(hotels);
};

export const getHotelById = async (req, res) => {
  const hotel = await prisma.hotel.findUnique({
    where: { id: req.params.id },
    include: { reviews: true },
  });
  if (!hotel) return res.status(404).json({ message: 'Hotel not found' });
  res.json(hotel);
};

export const createHotel = async (req, res) => {
  const { name, image, price, rating, facilities, description } = req.body;
  const hotel = await prisma.hotel.create({
    data: { name, image, price, rating: parseFloat(rating), facilities, description },
  });
  res.status(201).json(hotel);
};

export const updateHotel = async (req, res) => {
  const hotel = await prisma.hotel.update({
    where: { id: req.params.id },
    data: req.body,
  });
  res.json(hotel);
};

export const deleteHotel = async (req, res) => {
  await prisma.hotel.delete({ where: { id: req.params.id } });
  res.json({ message: 'Hotel deleted' });
};