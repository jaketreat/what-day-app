import React, { useContext } from "react";
import Grid from "./components/Grid";
import { AppContext } from "./context/AppContext";

export default function App() {
  const { dispatch } = useContext(AppContext);

  function changeGrid() {
    const rows = Number(prompt("Rows?"));
    const cols = Number(prompt("Cols?"));

    dispatch({ type: "SET_GRID", payload: { rows, cols } });
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Modular Scheduler</h1>

      {/* Change grid layout */}
      <button onClick={changeGrid}>Change Grid</button>

      <Grid />
    </div>
  );
}

