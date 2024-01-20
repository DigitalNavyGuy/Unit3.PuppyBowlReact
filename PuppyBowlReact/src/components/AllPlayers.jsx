import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { API_URL } from "../API/index";
import "./AllPlayers.css";

const AllPlayers = () => {
  const [puppies, setPuppies] = useState([]);
  const [featPupId, setFeatPupId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL + "/players");
        const result = await response.json();
        console.log(result);
        setPuppies(result.data.players);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pup-display">
      {puppies.map((puppy) => (
        <Card
          key={puppy.id}
          sx={{ maxWidth: 345, marginBottom: 2 }}
          onClick={() => {
            setFeatPupId(puppy.id);
          }}
        >
          <CardMedia
            sx={{ height: 140 }}
            image={puppy.image}
            title={puppy.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {puppy.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {puppy.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default AllPlayers;
