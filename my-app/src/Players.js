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
          {rankChange[rankChange.length - 1] >
          rankChange[rankChange.length - 2] ? (
            <p className="player-rating red">
              <AiOutlineFall />
              {rankChange[rankChange.length - 1]}
            </p>
          ) : (
            <p className="player-rating green">
              <AiOutlineRise />
              {rankChange[rankChange.length - 2]}
            </p>
          )}
          <p className="player-pp">{pp + 'pp'}</p>
          <p className="player-rank">{countryRank}</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
