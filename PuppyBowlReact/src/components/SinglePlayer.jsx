import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { API_URL } from "../API";
import RemovePlayer from "./RemovePlayer";

const SinglePlayer = ({ featPupId, setFeatPupId }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchSinglePlayer = async () => {
      try {
        if (featPupId === null || featPupId === undefined) {
          return;
        }

        const response = await fetch(`${API_URL}/players/${featPupId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch player");
        }
        const data = await response.json();
        console.log(data);
        const fetchedPlayer = data.data.player;
        setPlayer(fetchedPlayer);
      } catch (err) {
        console.error(`Error fetching player #${featPupId}:`, err);
      }
    };

    fetchSinglePlayer();
  }, [featPupId]);

  // Remove puppy logic
  const removePlayer = async (playerId) => {
    try {
      const response = await fetch(`${API_URL}/players/${playerId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Fetch failed to remove player.");
      }

      const result = puppies.filter((player) => player.id !== playerId);
      setPuppies(result);
      setFeatPupId(null);
      console.log(result);
    } catch (err) {
      console.error(
        `Whoops, trouble removing player #${playerId} from the roster!`,
        err
      );
    }
  };

  return (
    <div>
      {player && (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={player.imageUrl}
            title={player.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {player.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {player.status}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Return to List</Button>
            <Button
              size="small"
              onClick={() => {
                removePlayer(featPupId);
              }}
            >
              Remove Player
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default SinglePlayer;
