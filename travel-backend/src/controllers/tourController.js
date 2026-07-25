import prisma from '../utils/prisma.js';

export const getTours = async (req, res) => {
  const tours = await prisma.tour.findMany();
  res.json(tours);
};

export const getTourById = async (req, res) => {
  const tour = await prisma.tour.findUnique({
    where: { id: req.params.id },
    include: { reviews: true },
  });
  if (!tour) return res.status(404).json({ message: 'Tour not found' });
  res.json(tour);
};

export const createTour = async (req, res) => {
  const { name, image, price, rating, duration, description } = req.body;
  const tour = await prisma.tour.create({
    data: { name, image, price, rating: parseFloat(rating), duration, description },
  });
  res.status(201).json(tour);
};

export const updateTour = async (req, res) => {
  const tour = await prisma.tour.update({
    where: { id: req.params.id },
    data: req.body,
  });
  res.json(tour);
};

export const deleteTour = async (req, res) => {
  await prisma.tour.delete({ where: { id: req.params.id } });
  res.json({ message: 'Tour deleted' });
};