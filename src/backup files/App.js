import React, { useState, useEffect } from "react";
import Grid from "./components/Grid";
import "./App.css";

export default function App() {
  // Grid size state
  const [grid, setGrid] = useState({ rows: 3, cols: 4 });

  // Theme state (false = light, true = dark)
  const [theme, setTheme] = useState(false);

  // Apply theme to <body>
  useEffect(() => {
    document.body.className = theme ? "dark-theme" : "light-theme";
  }, [theme]);

  // Toggle theme (button uses this)
  function toggleTheme() {
    setTheme((prev) => !prev);
  }

  // All blocks stored here
  const [blocks, setBlocks] = useState([]);

  function changeGrid() {
    const rows = Number(prompt("Rows?"));
    const cols = Number(prompt("Cols?"));

    setGrid({ rows, cols });
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Modular Scheduler</h1>

      {/* Buttons */}
      <button onClick={changeGrid}>Change Grid</button>
      <button onClick={toggleTheme}>
        Toggle Theme ({theme ? "Dark" : "Light"})
      </button>

      {/* Grid */}
      <Grid
        grid={grid}
        blocks={blocks}
        setBlocks={setBlocks}
      />
    </div>
  );
}

