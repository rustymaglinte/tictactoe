import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
import Context from "../context/Context";
import tictactoe from "../assets/tictactoe.gif";

const Welcome = () => {
  const [isNewGame, setIsNewGame] = useState("inline");
  const [isPlayer, setIsPlayer] = useState("none");

  const { player1, player2, setPlayer1, setPlayer2 } = useContext(Context);

  const handleClick = () => {
    setIsNewGame("none");
    setIsPlayer("flex");
  };

  const isPlayerComplete = () => {
    return player1.trim() !== "" && player2.trim() !== "";
  };

  return (
    <div className="welcome-container">
      <h1>Welcome!</h1>
      <h2>
        Let's play <span>Tic Tac Toe...</span>
      </h2>
      <button style={{ display: isNewGame }} onClick={handleClick}>
        Start New Game
      </button>
      <div className="start-session" style={{ display: isPlayer }}>
        <input
          type="text"
          placeholder="Player1 name.."
          onChange={(e) => setPlayer1(e.target.value)}
          value={player1}
          required
        ></input>
        <input
          type="text"
          placeholder="Player2 name.."
          onChange={(e) => setPlayer2(e.target.value)}
          value={player2}
          required
        ></input>
        <Link to={isPlayerComplete() ? "/tictactoe_game" : "#"}>
          <button disabled={!isPlayerComplete()}>Start</button>
        </Link>
      </div>
      <div>
        <img alt="tictactoe img" src={tictactoe}></img>
      </div>
    </div>
  );
};

export default Welcome;
