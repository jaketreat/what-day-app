import React from "react";
import Block from "./Block";

export default function Grid({ grid, blocks, setBlocks }) {
  const { rows, cols } = grid;

  function handleDrop(e, row, col) {
    e.preventDefault();

    const newBlock = {
      id: Date.now(),
      row,
      col,
      schedules: []
    };

    setBlocks((prev) => [...prev, newBlock]);
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
            {blocks
              .filter((b) => b.row === row && b.col === col)
              .map((block) => (
                <Block
                  key={block.id}
                  block={block}
                  blocks={blocks}
                  setBlocks={setBlocks}
                />
              ))}
          </div>
        );
      })}
    </div>
  );
}