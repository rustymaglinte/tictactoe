import mongoose from "mongoose";

const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  wins: {
    type: Number,
    default: 0,
  },
  losses: {
    type: Number,
    default: 0,
  },
  draws: {
    type: Number,
    default: 0,
  },
});

const gameSessionSchema = new Schema(
  {
    player1: {
      type: playerSchema,
      required: true,
    },
    player2: {
      type: playerSchema,
      required: true,
    },
  },
  { timestamps: true }
);

const gameSessionModel = mongoose.model("TicTacToeSession", gameSessionSchema);

export default gameSessionModel;
