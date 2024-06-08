import React, { useState } from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import Context from "./context/Context";
import "./App.css"

const App = () => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player1Losses, setPlayer1Losses] = useState(0);
  const [player1Draws, setPlayer1Draws] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);
  const [player2Losses, setPlayer2Losses] = useState(0);
  const [player2Draws, setPlayer2Draws] = useState(0);

  return (
    <Context.Provider
      value={{
        player1,
        setPlayer1,
        player2,
        setPlayer2,
        squares,
        setSquares,
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
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/tictactoe" element={<HomePage />} />
          <Route
            path="/tictactoe_game"
            element={
              player1 && player2 ? <GamePage /> : <Navigate to="/tictactoe" />
            }
          />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;
