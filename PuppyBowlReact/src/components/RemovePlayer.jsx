import React from "react";
import { API_URL } from "../API";

const RemovePlayer = ({ playerId, onRemovePlayer }) => {
  const handleRemovePlayer = async () => {
    try {
      const response = await fetch(`${API_URL}/${playerId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Fetch failed to remove player.");
      }

      const result = await response.json();
      console.log(result);
      onRemovePlayer(playerId); // Assuming onRemovePlayer is a callback to handle the removed player
    } catch (err) {
      console.error(
        `Whoops, trouble removing player #${playerId} from the roster!`,
        err
      );
    }
  };

  return <button onClick={handleRemovePlayer}>Remove Player</button>;
};

export default RemovePlayer;
