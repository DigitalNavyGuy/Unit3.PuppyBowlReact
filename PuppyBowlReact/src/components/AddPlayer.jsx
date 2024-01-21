import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { API_URL } from "../API";

const AddPlayer = ({ onAddPlayer }) => {
  const [playerData, setPlayerData] = useState({
    name: "",
    breed: "",
    imageUrl: "",
    status: "",
  });

  const handleChange = (e) => {
    setPlayerData({
      ...playerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(onAddPlayer);
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf/players`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(playerData),
          name: "",
          breed: "",
          imageUrl: "",
          status: "",
        }
      );

      if (!response.ok) {
        throw new Error("Fetch failed to add new player.");
      }

      const result = await response.json();
      onAddPlayer(result.data.player);
      console.log(result);

      setPlayerData({
        name: "",
        breed: "",
        imageUrl: "",
        status: "",
      });
    } catch (err) {
      console.error("Oops, something went wrong with adding that player!", err);
      throw err;
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ background: "white", margin: "5px" }}
          label="Name"
          variant="outlined"
          size="normal"
          required
          name="name"
          value={playerData.name}
          onChange={handleChange}
          margin="normal"
          background="white"
        />
        <TextField
          sx={{ background: "white", margin: "5px" }}
          label="Breed"
          variant="outlined"
          size="normal"
          required
          name="breed"
          value={playerData.breed}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          sx={{ background: "white", margin: "5px" }}
          label="Status"
          variant="outlined"
          size="normal"
          name="imageUrl"
          value={playerData.status}
          onChange={handleChange}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Add Player
        </Button>
      </form>
    </Box>
  );
};

export default AddPlayer;
