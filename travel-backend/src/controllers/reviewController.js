import prisma from '../utils/prisma.js';

export const getReviews = async (req, res) => {
  const { tourId, hotelId } = req.query;
  const where = {};
  if (tourId) where.tourId = tourId;
  if (hotelId) where.hotelId = hotelId;
  const reviews = await prisma.review.findMany({
    where,
    include: { user: { select: { name: true } } },
  });
  res.json(reviews);
};

export const createReview = async (req, res) => {
  const { tourId, hotelId, rating, comment } = req.body;
  const review = await prisma.review.create({
    data: {
      userId: req.user.id,
      tourId,
      hotelId,
      rating: parseInt(rating),
      comment,
    },
  });
  res.status(201).json(review);
};

export const deleteReview = async (req, res) => {
  const review = await prisma.review.findUnique({ where: { id: req.params.id } });
  if (!review) return res.status(404).json({ message: 'Review not found' });
  if (review.userId !== req.user.id && req.user.role !== 'ADMIN') {
    return res.status(403).json({ message: 'Not authorized' });
  }
  await prisma.review.delete({ where: { id: req.params.id } });
  res.json({ message: 'Review deleted' });
};