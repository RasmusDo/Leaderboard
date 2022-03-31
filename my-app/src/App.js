import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Player from './Players';

function App() {
  const [player, setPlayer] = useState([]);
  const [serach, setSearch] = useState('');

  useEffect(() => {
    axios
      //pls work man
      .get(
        'https://frozen-beach-85070.herokuapp.com/https://scoresaber.com/api/players?countries=SE'
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
        <h1 className="user-text">Search for a user!</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="user-input"
            onChange={handleChange}
          ></input>
        </form>
      </div>
      {filteredPlayers.map((player) => {
        return (
          <Player
            key={player.id}
            name={player.name}
            profilePicture={player.profilePicture}
            flag={player.flag}
            countryRank={player.countryRank}
          />
        );
      })}
    </div>
  );
}

export default App;
