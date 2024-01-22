import React, { useEffect, useState } from "react";
import { API_URL } from "../API";

const SinglePlayer = (id) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchSinglePlayer = async () => {
      try {
        const response = await fetch(`${API_URL}/players/${id}`);
        if (!response.ok) {
          throw new Error("Fetch failed to fetch player.");
        }
        const data = await response.json();
        console.log(data);

        data.player = data.data.player;
        const fetchedPlayer = data.player;
        setPlayer(fetchedPlayer);
      } catch (err) {
        console.error(`Oh no, trouble fetching player #!`, err);
      }
    };

    fetchSinglePlayer();
  }, []);

  return (
    <div className="player-container">
      {player && (
        <>
          <h2>{player.name}</h2>
          <img src={player.imageUrl} alt={player.name} />
          <h3>Breed: {player.breed}</h3>
          <h3>Status: {player.status}</h3>
          <button className="close-button btn">Close</button>
        </>
      )}
    </div>
  );
};

export default SinglePlayer;
