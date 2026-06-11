import Game from "../models/Game.js"; // Ensure your model import has .js!

// 1. Define your functions
const getAllGames = (req, res) => {
    // your code for getting all games...
};

const addGame = (req, res) => {
    // your code for adding a game...
};

const updateGameStatus = (req, res) => {
    // your code for updating a game...
};

const deleteGame = (req, res) => {
    // your code for deleting a game...
};

// 2. Export them as a default object at the very bottom
export default {
    getAllGames,
    addGame,
    updateGameStatus,
    deleteGame
};