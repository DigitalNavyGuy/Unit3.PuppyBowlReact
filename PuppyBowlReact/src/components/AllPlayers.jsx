import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { API_URL } from "../API/index";

const AllPlayers = () => {
  const [puppies, setPuppies] = useState([]);
  const [featPupId, setFeatPupId] = useState(null);
  const [featuredPup, setFeaturedPup] = useState(null);
  console.log("featuredPup: ", featuredPup);

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

  useEffect(() => {
    const selectedPup = puppies.find((pup) => pup.id === featPupId);
    setFeaturedPup(selectedPup);
  }, [puppies, featPupId]);

  return (
    <div>
      {puppies.map((puppy) => (
        <p
          onClick={() => {
            setFeatPupId(puppy.id);
          }}
          key={puppy.id}
        >
          {puppy.name}
        </p>
      ))}

      {featuredPup && (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={featuredPup.image}
            title={featuredPup.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {featuredPup.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {featuredPup.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default AllPlayers;

// return (
