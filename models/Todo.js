const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, 'Title required.']
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.models.Todo || mongoose.model('Todo', TodoSchema);
