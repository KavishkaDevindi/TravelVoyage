import prisma from '../utils/prisma.js';

export const getWishlist = async (req, res) => {
  const wishlist = await prisma.wishlist.findMany({
    where: { userId: req.user.id },
    include: { tour: true },
  });
  res.json(wishlist);
};

export const addToWishlist = async (req, res) => {
  const { tourId } = req.body;
  const existing = await prisma.wishlist.findFirst({
    where: { userId: req.user.id, tourId },
  });
  if (existing) {
    return res.status(400).json({ message: 'Already in wishlist' });
  }
  const item = await prisma.wishlist.create({
    data: { userId: req.user.id, tourId },
    include: { tour: true },
  });
  res.status(201).json(item);
};

export const removeFromWishlist = async (req, res) => {
  await prisma.wishlist.delete({
    where: { id: req.params.id },
  });
  res.json({ message: 'Removed from wishlist' });
};
