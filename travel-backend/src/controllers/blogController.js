import prisma from '../utils/prisma.js';

export const getBlogs = async (req, res) => {
  const blogs = await prisma.blog.findMany();
  res.json(blogs);
};

export const getBlogById = async (req, res) => {
  const blog = await prisma.blog.findUnique({
    where: { id: req.params.id },
  });
  if (!blog) return res.status(404).json({ message: 'Blog not found' });
  res.json(blog);
};

export const createBlog = async (req, res) => {
  const { title, excerpt, image, date, category, content } = req.body;
  const blog = await prisma.blog.create({
    data: { title, excerpt, image, date: new Date(date), category, content },
  });
  res.status(201).json(blog);
};

export const updateBlog = async (req, res) => {
  const blog = await prisma.blog.update({
    where: { id: req.params.id },
    data: req.body,
  });
  res.json(blog);
};

export const deleteBlog = async (req, res) => {
  await prisma.blog.delete({ where: { id: req.params.id } });
  res.json({ message: 'Blog deleted' });
};