const Task = require("../models/Task");

// Create Task
const createTask = async (req, res) => {
  const { title, description } = req.body;

  const task = await Task.create({
    title,
    description,
  });

  res.status(201).json(task);
};

// Get All Tasks
const getTasks = async (req, res) => {
  const tasks = await Task.find();

  res.json(tasks);
};

module.exports = {
  createTask,
  getTasks,
};