import express from "express";
import gameController from "../controllers/game.js";
import { verify } from "../auth.js";

const router = express.Router();

// Routes
router.get("/all", verify, gameController.getAllGames);
router.post("/", verify, gameController.addGame);
router.patch("/:gameId", verify, gameController.updateGameStatus);
router.delete("/:gameId", verify, gameController.deleteGame);

// This matches what index.js is looking for!
export default router;