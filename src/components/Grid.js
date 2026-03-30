import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Block from "./Block";

export default function Grid() {
  const { state, dispatch } = useContext(AppContext);

  const { rows, cols } = state.grid;

  // Handle dropping a new block
  function handleDrop(e, row, col) {
    e.preventDefault();

    const newBlock = {
      id: Date.now(),
      row,
      col,
      width: 1,
      height: 1,
      schedules: []
    };

    dispatch({ type: "ADD_BLOCK", payload: newBlock });
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${rows}, 100px)`,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: "5px"
      }}
    >
      {/* Render grid cells */}
      {Array.from({ length: rows * cols }).map((_, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;

        return (
          <div
            key={i}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, row, col)}
            style={{ border: "1px dashed gray" }}
          >
            {/* Render blocks in this cell */}
            {state.blocks
              .filter((b) => b.row === row && b.col === col)
              .map((block) => (
                <Block key={block.id} block={block} />
              ))}
          </div>
        );
      })}
    </div>
  );
}