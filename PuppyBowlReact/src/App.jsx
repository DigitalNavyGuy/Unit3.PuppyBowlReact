import { useState } from "react";
import SinglePlayer from "./components/SinglePlayer";
import AllPlayers from "./components/AllPlayers";
import AddPlayer from "./components/AddPlayer";
import { puppyList } from "./data";
import "./App.css";
import { Box } from "@mui/material";

const App = () => {
  const [featPupId, setFeatPupId] = useState(null);

  return (
    <div>
      <Box sx={{ display: "block", width: "100%" }}>
        <h2>Puppy Bowl</h2>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "80%" }}
      >
        <AddPlayer />
      </Box>
      <Box>
        <h2>Featured Pup</h2>
        {featPupId && (
          <SinglePlayer featPupId={featPupId} setFeatPupId={setFeatPupId} />
        )}
        <h2>Roster</h2>
        <AllPlayers setFeatPupId={setFeatPupId} />
      </Box>
    </div>
  );
};

export default App;
