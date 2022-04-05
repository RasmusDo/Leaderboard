import React from 'react';
import './Player.css';
import { AiOutlineRise, AiOutlineFall } from 'react-icons/ai';

const Player = ({
  name,
  flag,
  profilePicture,
  countryRank,
  pp,
  rankChange,
  rank,
}) => {
  return (
    <div className="player-container">
      <div className="player-row">
        <div className="player">
          <img className="player-img" src={profilePicture} alt="player-img" />
          <h1>{name}</h1>
          <p className="flag">{flag}</p>
        </div>
        <div className="player-info">
          <p className="player-pp">{pp + 'pp'}</p>

          {(() => {
            const walla = rankChange[0] - rank;
            if (walla > 9999) return <p className="player-rating green">∞</p>;
            if (rankChange[0] < rank)
              return (
                <p className="player-rating red">{rankChange[0] - rank}</p>
              );
            if (rankChange[0] > rank);
            return (
              <p className="player-rating green">{rankChange[0] - rank}</p>
            );
          })()}
          <p className="player-rank">{countryRank}</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
