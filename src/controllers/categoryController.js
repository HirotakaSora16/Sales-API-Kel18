import { CategoryModel } from "../models/categoryModel.js";

export const CategoryController = {
  async create(req, res) {
    try {
      const { name } = req.body;
      const category = await CategoryModel.create(name);
      res.status(201).json(category);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  async getAll(req, res) {
    try {
      const categories = await CategoryModel.getAll();
      res.json(categories);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async getById(req, res) {
    try {
      const category = await CategoryModel.getById(req.params.id);
      res.json(category);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },
  async update(req, res) {
    try {
      const { name } = req.body;
      const category = await CategoryModel.update(req.params.id, name);
      res.json(category);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  async remove(req, res) {
    try {
      const result = await CategoryModel.remove(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};
