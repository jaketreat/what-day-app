import React, { useState } from "react";
import Grid from "./components/Grid";

export default function App() {
  // Grid size state
  const [grid, setGrid] = useState({ rows: 3, cols: 4 });
  const [theme, setTheme] = useState(false);

  function toggleTheme() {
    setTheme(!theme);
  }

  const themeClass = {
    classToggle: theme ? "dark-theme" : "light-theme",
  };

  // All blocks stored here
  const [blocks, setBlocks] = useState([]);

  function changeGrid() {
    const rows = Number(prompt("Rows?"));
    const cols = Number(prompt("Cols?"));

    setGrid({ rows, cols });
  }
  
  return (
    <div className={themeClass.classToggle} style={{ padding: "20px" }}>
      <h1 className={themeClass.classToggle}>Modular Scheduler</h1>

      {/* Change grid layout */}
      <button onClick={changeGrid}>Change Grid</button>
      <button onClick={toggleTheme}>Change Theme</button>

      <Grid
        grid={grid}
        blocks={blocks}
        setBlocks={setBlocks}
      />
    </div>
  );
}

