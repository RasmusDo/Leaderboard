import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Player from './Players';
import './Player.css';

import { AiOutlineRise } from 'react-icons/ai';

function App() {
  const [player, setPlayer] = useState([]);
  const [serach, setSearch] = useState('');
  const page = 1;

  useEffect(() => {
    axios
      //pls work man https://radiant-atoll-76238.herokuapp.com/ https://scoresaber.com/api/players?page=2&countries=SE
      .get(
        'https://scoresaber.com/api/players?countries=SE'
      )
      .then((res) => {
        setPlayer(res.data['players']);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredPlayers = player.filter((player) => {
    return player.name.toLowerCase().includes(serach.toLowerCase());
  });

  return (
    <div className="user-app">
      <div className="user-search">
        <h1 className="user-text">Search for a player!</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="user-input"
            onChange={handleChange}
          ></input>
        </form>
      </div>
      <div className="player-container">
        <div className="player-row">
          <div className="player">
            <h1>Name</h1>
          </div>
          <div className="player-info">
            <p className="player-pp">PP</p>
            <p className="player-rating">Global Rank Change</p>

            <p className="player-rank">Rank SE</p>
          </div>
        </div>
      </div>

      {filteredPlayers.map((player) => {
        return (
          <Player
            key={player.id}
            name={player.name}
            profilePicture={player.profilePicture}
            countryRank={player.countryRank}
            pp={player.pp}
            rank={player.rank}
            rankChange={player.histories.split(',')}
          />
        );
      })}
    </div>
  );
}

export default App;
