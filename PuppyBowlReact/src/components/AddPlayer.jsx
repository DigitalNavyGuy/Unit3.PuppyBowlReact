import React from "react";
import { API_URL } from "../API";

const AddPlayer = ({ onAddPlayer }) => {
  const handleSubmit = async (playerObj) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: playerObj.name,
          breed: playerObj.breed,
          status: playerObj.status,
          imageURL: playerObj.imageURL,
        }),
      });

      if (!response.ok) {
        throw new Error("Fetch failed to add new player.");
      }

      const result = await response.json();
      console.log(result);
      onAddPlayer(result); // Assuming onAddPlayer is a callback to handle the added player
    } catch (err) {
      console.error("Oops, something went wrong with adding that player!", err);
      throw err;
    }
  };

  return (
    <div>
      {/* Your JSX for the form */}
      {/* Example: */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(playerData);
        }}
      >
        {/* Your form inputs go here */}
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
};

export default AddPlayer;
