import React, { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import "./Dashboard.css";

const Dashboard = ({ winner, loser, draw }) => {
  const {
    player1,
    player2,
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

  useEffect(() => {
    console.log("winner:", winner);
    console.log("allNotNull:", allNotNull);
    if (winner === player1) {
      setPlayer1Wins((prevWins) => prevWins + 1);
      setPlayer2Losses((prevLosses) => prevLosses + 1);
      console.log("1st if");
    } else if (winner === player2) {
      setPlayer2Wins((prevWins) => prevWins + 1);
      setPlayer1Losses((prevLosses) => prevLosses + 1);
      console.log("2nd if");
    } else if (allNotNull && winner === "") {
      setPlayer1Draws((prevDraws) => prevDraws + 1);
      setPlayer2Draws((prevDraws) => prevDraws + 1);
      console.log("3rd if");
    }
  }, [winner, allNotNull]);

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
    </div>
  );
};

export default Dashboard;
