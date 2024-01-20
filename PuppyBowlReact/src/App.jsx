import { useState } from "react";
import SinglePlayer from "./components/SinglePlayer";
import AllPlayers from "./components/AllPlayers";
import { puppyList } from "./data";
import "./App.css";

const App = () => {
  return <AllPlayers sx={{ display: "flex" }} />;
};

export default App;
