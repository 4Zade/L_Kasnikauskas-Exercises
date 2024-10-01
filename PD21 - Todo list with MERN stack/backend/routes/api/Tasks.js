const express = require('express');
const router = express.Router();

const Task = require('../../modules/Task');

// @route GET api/tasks
// @desc Get all tasks
// @access Public
router.get('/', (req, res) => {
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(404).json({ error: 'No tasks found' }));
});

// @route GET api/tasks/:id
// @desc Get single task by id
// @access Public
router.get('/:id', (req, res) => {
    Task.findById(req.params.id)
       .then(task => res.json(task)) 
       .catch(err => res.status(404).json({ error: 'Task not found' }));
});

// @route POST api/tasks
// @desc Create a task
// @access Public
router.post('/', (req, res) => {
    Task.create(req.body)
        .then(task => res.json(task))
        .catch(err => res.status(400).json({ error: 'Unable to add task' }));
});

// @route PUT api/tasks/:id
// @desc Update a task
// @access Public
router.put('/:id', (req, res) => {
    Task.findByIdAndUpdate(req.params.id, req.body)
        .then(task => res.json(task))
        .catch(err => res.status(400).json({ error: 'Unable to update task' }));
});

// @route DELETE api/tasks/:id
// @desc Delete a task
// @access Public
router.delete('/:id', (req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ error: 'Task not found' }));
});

module.exports = router;