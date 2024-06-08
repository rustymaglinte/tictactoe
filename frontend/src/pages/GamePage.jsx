import React, { useState } from "react";
import Board from "../components/Board";
import ContinueOrQuit from "../components/ContinueOrQuit";
import Dashboard from "../components/Dashboard";
import "./GamePage.css";

const GamePage = () => {
  const [winner, setWinner] = useState("");
  const [loser, setLoser] = useState("");
  const [draw, setDraw] = useState("");

  return (
    <div className="game-container">
      <div>
        <Board setWinner={setWinner} setLoser={setLoser} setDraw={setDraw} />
        <ContinueOrQuit
          winner={winner}
          setWinner={setWinner}
          setLoser={setLoser}
        />
      </div>
      <Dashboard winner={winner} loser={loser} draw={draw} />
    </div>
  );
};

export default GamePage;
