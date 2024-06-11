import React, { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import "./Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = ({ winner }) => {
  const {
    squares,
    player1Wins,
    setPlayer1Wins,
    player1Losses,
    setPlayer1Losses,
    player1Draws,
    setPlayer1Draws,
    player2Wins,
    setPlayer2Wins,
    player2Losses,
    setPlayer2Losses,
    player2Draws,
    setPlayer2Draws,
  } = useContext(Context);

  const allNotNull = squares.every((element) => element !== null);

  const [player1, player2] = [
    localStorage.getItem("player1"),
    localStorage.getItem("player2"),
  ];

  useEffect(() => {
    if (winner === player1) {
      setPlayer1Wins((prevWins) => prevWins + 1);
      setPlayer2Losses((prevLosses) => prevLosses + 1);
      console.log("1st if");
    } else if (winner === player2) {
      setPlayer2Wins((prevWins) => prevWins + 1);
      setPlayer1Losses((prevLosses) => prevLosses + 1);
      console.log("2nd if");
    } else {
      const timer = setTimeout(() => {
        if (allNotNull && winner === "") {
          setPlayer1Draws((prevDraws) => prevDraws + 1);
          setPlayer2Draws((prevDraws) => prevDraws + 1);
          console.log("3rd if");
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [winner, allNotNull]);

  const handleBackToHome = () => {
    localStorage.removeItem("player1");
    localStorage.removeItem("player2");
  };

  return (
    <div className="dashboard-container">
      <h3>Current Session:</h3>
      <p>
        <span>{player1}</span> - wins: {player1Wins} losses: {player1Losses}{" "}
        draws: {player1Draws}
      </p>
      <p>
        <span>{player2}</span> - wins: {player2Wins} losses: {player2Losses}{" "}
        draws: {player2Draws}
      </p>
      <Link to="/tictactoe" onClick={handleBackToHome}>
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default Dashboard;
