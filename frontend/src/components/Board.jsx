import React, { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import X from "../assets/X.svg";
import O from "../assets/O.svg";
import wins from "../assets/wins.gif";
import "./Board.css";

const imgX = <img alt="X" src={X} />;
const imgO = <img alt="O" src={O} />;

const Square = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value === "X" ? imgX : value === "O" ? imgO : null}
    </button>
  );
};

const Board = ({ setWinner, setLoser }) => {
  const [xIsNext, setXIsNext] = useState(true);

  const { squares, setSquares, displayConfetti, setDisplayConfetti } =
    useContext(Context);

  const [player1, player2] = [
    localStorage.getItem("player1"),
    localStorage.getItem("player2"),
  ];

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);
  const allNotNull = squares.every((element) => element !== null);
  let status;
  if (winner) {
    status = "Winner: " + (winner === "X" ? player1 : player2);
  } else if (allNotNull) {
    status = "It's a draw.";
  } else {
    status = (xIsNext ? player1 : player2) + "'s turn:";
  }

  useEffect(() => {
    if (winner === "X") {
      setWinner(player1);
      setLoser(player2);
      setDisplayConfetti("inline");
    }
    if (winner === "O") {
      setWinner(player2);
      setLoser(player1);
      setDisplayConfetti("inline");
    }
  }, [winner, allNotNull]);

  return (
    <div className="board-container">
      <div className="status">{status}</div>
      <div className="confetti" style={{ display: displayConfetti }}>
        <img alt="confetti" src={wins} />
      </div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default Board;
