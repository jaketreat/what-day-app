import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useTimeLogic } from "../hooks/useTimeLogic";

export default function Block({ block }) {
  const { dispatch } = useContext(AppContext);

  // Get current display text based on time
  const text = useTimeLogic(block.schedules);

  function addSchedule() {
    const newSchedule = {
      start: prompt("Start date/time (YYYY-MM-DD HH:mm)"),
      end: prompt("End date/time (YYYY-MM-DD HH:mm)"),
      text: prompt("Text + emoji")
    };

    const updatedBlock = {
      ...block,
      schedules: [...block.schedules, newSchedule]
    };

    dispatch({ type: "UPDATE_BLOCK", payload: updatedBlock });
  }

  return (
    <div
      draggable
      style={{
        background: "lightblue",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "grab"
      }}
    >
      <div onClick={addSchedule}>
        {/* Display dynamic text */}
        {text || "Click to add schedule"}
      </div>
    </div>
  );
}