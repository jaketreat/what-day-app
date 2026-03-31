import React, { useContext } from "react";
import Grid from "./components/Grid";
import { AppContext } from "./context/AppContext";
import './App.css';
import { useState } from "react";

export default function App() {
  const { dispatch } = useContext(AppContext);
  const [theme, setTheme] = useState(false);

  function toggleTheme() {
    setTheme(!theme);
  }

  const themeClass = {
    classToggle: theme ? "dark-theme" : "light-theme",
  };

  function changeGrid() {
    const rows = Number(prompt("Rows?"));
    const cols = Number(prompt("Cols?"));

    dispatch({ type: "SET_GRID", payload: { rows, cols } });
  }

  return (
    <div className={themeClass.classToggle} style={{ padding: "20px" }}>
      <h1 className={themeClass.classToggle}>Modular Scheduler</h1>

      {/* Change grid layout */}
      <button onClick={changeGrid}>Change Grid</button>
      <button onClick={toggleTheme}>Change Theme</button>

      <Grid />
    </div>
  );
}

