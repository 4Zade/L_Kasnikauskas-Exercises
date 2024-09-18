const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "To Do"
    }
})

module.exports = Task = mongoose.model('task', TaskSchema)