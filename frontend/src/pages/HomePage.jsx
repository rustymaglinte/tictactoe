import React from "react";
import Welcome from "../components/Welcome";
import History from "../components/History";
import "./Homepage.css"

const HomePage = () => {
  return (
    <div className="home-container">
      <Welcome />
      <History />
    </div>
  );
};

export default HomePage;
