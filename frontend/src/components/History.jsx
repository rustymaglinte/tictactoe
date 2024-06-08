import { React, useContext, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

import "./History.css";
import Context from "../context/Context";

const History = () => {
  const [gameHistory, setGameHistory] = useState([]);

  const { submittedData, setSubmittedData } = useContext(Context);

  useEffect(() => {
    const fetchGameHistory = async () => {
      try {
        const response = await axios.get(
          "https://tictactoegame-be6662c5a486.herokuapp.com/tictactoe"
        );
        setGameHistory(response.data);
        setSubmittedData(false);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };
    fetchGameHistory();
  }, [submittedData]);

  return (
    <div className="history-container">
      <h1>Game History</h1>
      <div className="sessions-container">
        {gameHistory &&
          gameHistory.map((history, index) => (
            <div key={history._id} className="sessions">
              <p>
                Session{index + 1}:{" "}
                <span>
                  {history.player1.name} vs. {history.player2.name}{" "}
                </span>
                <br />
                Date: {moment(history.createdAt).format(
                  "MMM D, YYYY h:mma"
                )}. <br />
                {history.player1.name} - wins: {history.player1.wins} losses:{" "}
                {history.player1.losses} draws: {history.player1.draws}
                <br />
                {history.player2.name} - wins: {history.player2.wins} losses:{" "}
                {history.player2.losses} draws: {history.player2.draws}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default History;
