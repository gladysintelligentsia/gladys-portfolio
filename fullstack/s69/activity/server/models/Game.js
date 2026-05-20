import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Game Name is Required']
    },
    description: {
        type: String,
        required: [true, 'Game Description is Required']
    },
    status: {
        type: String,
        default: 'Pending'
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

const Game = mongoose.model('Game', gameSchema);
export default Game;