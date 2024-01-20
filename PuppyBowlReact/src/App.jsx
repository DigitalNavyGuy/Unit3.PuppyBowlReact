import { useState } from "react";
import SinglePlayer from "./components/SinglePlayer";
import AllPlayers from "./components/AllPlayers";
import { puppyList } from "./data";
import "./App.css";

const App = () => {
  const [featPupId, setFeatPupId] = useState(null);

  return (
    <div>
      <AllPlayers setFeatPupId={setFeatPupId} />
      <SinglePlayer featPupId={featPupId} />
    </div>
  );
};

export default App;
