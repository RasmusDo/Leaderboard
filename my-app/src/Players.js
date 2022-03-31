import React from 'react';
import './Player.css';

const Player = ({ name, flag, profilePicture, countryRank, pp }) => {
  return (
    <div className="player-container">
      <div className="player-row">
        <div className="player">
          <img className="player-img" src={profilePicture} alt="player-img" />
          <h1>{name}</h1>
          <p className="flag">{flag}</p>
        </div>
        <div className="player-info">
          <p className="player-rank">#{countryRank}</p>
          <p className="player-pp">{pp}</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
