import React, { useEffect, useState } from "react";

export default function Block({ block, blocks, setBlocks }) {
  const [text, setText] = useState("");

  // Time-based text logic (inline instead of custom hook)
  useEffect(() => {
    function updateText() {
      const now = new Date();

      for (let s of block.schedules) {
        if (now >= new Date(s.start) && now <= new Date(s.end)) {
          setText(s.text);
          return;
        }
      }

      setText("No schedule");
    }

    updateText();

    const interval = setInterval(updateText, 60000);
    return () => clearInterval(interval);
  }, [block.schedules]);

  function addSchedule() {
    const newSchedule = {
      start: prompt("Start date/time (YYYY-MM-DD HH:mm)"),
      end: prompt("End date/time (YYYY-MM-DD HH:mm)"),
      text: prompt("Text + emoji")
    };

    const updatedBlocks = blocks.map((b) =>
      b.id === block.id
        ? { ...b, schedules: [...b.schedules, newSchedule] }
        : b
    );

    setBlocks(updatedBlocks);
  }

  return (
    <div
      draggable
      style={{
        background: "lightgreen",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "grab"
      }}
    >
      <div onClick={addSchedule}>
        {text || "Click to add schedule"}
      </div>
    </div>
  );
}
