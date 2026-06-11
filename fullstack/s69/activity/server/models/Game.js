import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    status: {
        type: String,
        default: "active"
    }
});

// Change "Game" to "ActivityGame" right here:
const Game = mongoose.model("ActivityGame", gameSchema);
export default Game;