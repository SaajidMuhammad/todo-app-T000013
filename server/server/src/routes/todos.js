const express = require('express');
const Todo = require('../models/todo');

const router = express.Router();

const mapTodo = todo => ({
  id: todo.id,
  title: todo.title,
  description: todo.description,
  done: todo.done,
  createdAt: todo.createdAt,
  updatedAt: todo.updatedAt
});

router.get('/', async (req, res, next) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 }).exec();
    res.json(todos.map(mapTodo));
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  const { title, description } = req.body || {};
  if (!title || !title.trim()) {
    return res.status(400).json({ error: 'Title is required' });
  }
  try {
    const todo = await Todo.create({
      title: title.trim(),
      description: description ? description.trim() : ''
    });
    res.status(201).json(mapTodo(todo));
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const { title, description } = req.body || {};
  if (!title || !title.trim()) {
    return res.status(400).json({ error: 'Title is required' });
  }
  try {
    const todo = await Todo.findByIdAndUpdate(
      id,
      {
        title: title.trim(),
        description: description ? description.trim() : ''
      },
      { new: true, runValidators: true }
    ).exec();
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(mapTodo(todo));
  } catch (error) {
    next(error);
  }
});

router.patch('/:id/done', async (req, res, next) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id).exec();
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    todo.done = !todo.done;
    await todo.save();
    res.json(mapTodo(todo));
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleted = await Todo.findByIdAndDelete(id).exec();
    if (!deleted) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;

