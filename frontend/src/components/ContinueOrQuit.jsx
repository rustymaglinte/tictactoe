import React, { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import { Link } from "react-router-dom";
import "./ContinueOrQuit.css";
import axios from "axios";

const ContinueOrQuit = ({ winner, setWinner, setLoser }) => {
  const [displayButtons, setDisplayButtons] = useState("none");

  const {
    squares,
    setSquares,
    player1,
    player2,
    player1Wins,
    player1Losses,
    player1Draws,
    player2Wins,
    player2Losses,
    player2Draws,
    setSubmittedData,
    setDisplayConfetti,
  } = useContext(Context);

  useEffect(() => {
    if (winner) {
      setDisplayButtons("flex");
    }
  }, [winner]);

  useEffect(() => {
    const allNotNull = squares.every((element) => element !== null);
    if (allNotNull) {
      setDisplayButtons("flex");
    }
  }, [winner, squares]);

  const handleContinueClick = () => {
    setSquares(Array(9).fill(null));
    setWinner("");
    setLoser("");
    setDisplayButtons("none");
    setDisplayConfetti("none")
  };

  const handleSubmit = async () => {
    try {
      const data = await axios.post(
        "https://tictactoegame-be6662c5a486.herokuapp.com/tictactoe",
        {
          player1: {
            name: player1,
            wins: player1Wins,
            losses: player1Losses,
            draws: player1Draws,
          },
          player2: {
            name: player2,
            wins: player2Wins,
            losses: player2Losses,
            draws: player2Draws,
          },
        }
      );
      setSubmittedData(true);
      localStorage.removeItem("player1");
      localStorage.removeItem("player2");
      console.log("Added successfully.", data);
    } catch (error) {
      console.error("Error adding song", error.message);
    }
  };

  return (
    <div style={{ display: displayButtons }} className="buttons-container">
      <button onClick={handleContinueClick} className="continue-button">
        Continue
      </button>
      <Link to="/tictactoe">
        <button onClick={handleSubmit} className="stop-button">
          Stop
        </button>
      </Link>
    </div>
  );
};

export default ContinueOrQuit;
