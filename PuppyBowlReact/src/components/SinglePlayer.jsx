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

const SinglePlayer = ({ featPupId: id }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchSinglePlayer = async () => {
      try {
        const response = await fetch(`${API_URL}/players/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch player");
        }
        const data = await response.json();
        const fetchedPlayer = data.data.player;
        setPlayer(fetchedPlayer);
      } catch (err) {
        console.error(`Error fetching player #${id}:`, err);
      }
    };

    fetchSinglePlayer();
  }, [id]);

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
                setPuppies();
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
