import Game from "../models/Game.js";

// 1. Get All Games
const getAllGames = (req, res) => {
    return Game.find()
        .then(games => res.status(200).send({ games }))
        .catch(err => res.status(500).send({ error: "Error in Find", details: err }));
};

// 2. Add New Game
const addGame = (req, res) => { // Changed 'request' to 'req' to fix the scope crash
    let newGame = new Game({
        name: req.body.name,
        description: req.body.description
    });

    return newGame.save()
        .then((savedGame) => res.status(201).send({ Game: savedGame }))
        .catch(err => res.status(500).send({ error: "Error in Save", details: err }));
};

// 3. Update Game Status
const updateGameStatus = (req, res) => {
    let updatedGame = {
        status: 'completed'
    };

    // Modernized from Game.update to Game.findByIdAndUpdate
    return Game.findByIdAndUpdate(req.params.gameId, updatedGame, { new: true })
        .then((game) => res.status(200).send({ 
            message: 'game updated successfully', 
            updatedGame: game 
        }))
        .catch(err => res.status(500).send({ error: "Error in Saving", details: err }));
};

// 4. Delete Game
const deleteGame = (req, res) => {
    return Game.deleteOne({ _id: req.params.gameId })
        .then((deleteStatus) => res.status(200).send({ 
            message: 'Game deleted successfully'
        }))
        .catch(err => res.status(500).send({ error: "Error in Saving", details: err }));
};

// Export all controllers for routes/game.js to read
export default {
    getAllGames,
    addGame,
    updateGameStatus,
    deleteGame
};