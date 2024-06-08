import gameSessionModel from "../models/gameSessionModel.js";

//post game session data
const addGameSession = async (req, res) => {
  const { player1, player2 } = req.body;
  try {
    const gameSession = await gameSessionModel.create({ player1, player2 });
    res.status(200).json(gameSession);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get all game session data
const getAllGameSessions = async (req, res) => {
    try {
        const games = await gameSessionModel.find().sort({ createdAt: 1 });
        res.status(200).json(games);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

export {addGameSession, getAllGameSessions}