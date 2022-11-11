import React from 'react';
import Toggle from "../img/toggle-arrow.svg";

const Home = () => {
  return (
    <div className="home">

      <div className="container">
        <div className="header">
          <img src={Toggle} alt="Toggle-button" className="toggle-img" />
          <h3>Trending Assets</h3>
        </div>
      </div>
    </div>
  )
}

export default Home;