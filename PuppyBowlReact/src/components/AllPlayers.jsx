import React, { useEffect, useState } from "react";
import { API_URL } from "../API";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchAllPlayers = async () => {
      try {
        const response = await fetch(`${API_URL}/players`);
        if (!response.ok) {
          throw new Error("Failed to fetch all players");
        }
        const data = await response.json();
        setPlayers(data.data.players);
      } catch (err) {
        console.error("Uh oh, trouble fetching players!", err);
      }
    };

    fetchAllPlayers();
  }, []);

  return (
    <div>
      <h2>Player List</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllPlayers;
