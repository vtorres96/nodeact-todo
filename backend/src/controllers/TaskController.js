const { Task } = require('../models');

module.exports = {
  async index(req, res, next){
    try {
      let tasks = await Task.findAll();
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(400).json({ message: 'Error: ' + error.message });
    }
  },

  async create(req, res, next){
    try {
      let task = await Task.create({ ...req.body });
      return res.status(201).json(task);
    } catch (error) {
      return res.status(400).json({ message: 'Error: ' + error.message });
    }
  },

  async update(req, res, next){
    try {
      let id = req.params.id;
      let task = await Task.findByPk(id);
      let { title, description, done = false } = req.body;
  
      task.title = title;
      task.description = description;
      task.done = done;
  
      await task.save();
  
      return res.status(200).json(task);
    } catch (error) {
      return res.status(400).json({ message: 'Error: ' + error.message });
    }
  },

  async delete(req, res, next){
    try {
      let id = req.params.id;
      let task = await Task.findByPk(id);

      task.deleted = true;

      await task.save();

      return res.status(200).json({ message: 'Task deleted' });
    } catch (error) {
      return res.status(400).json({ message: 'Error: ' + error.message });
    }
  }
}