const mongoose = require(`mongoose`);

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `name is Required`]
    },
    description: {
        type: String,
        required: [true, `description is Required`]
    },
    price: {
        type: Number,
        required: [true, `price is Required`]
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Course", courseSchema);