import express from "express"
import { addGameSession, getAllGameSessions } from "../controllers/gameSessionController.js";

const gameSessionRouter = express.Router();

gameSessionRouter.get("/", getAllGameSessions);

gameSessionRouter.post("/", addGameSession)

export default gameSessionRouter;