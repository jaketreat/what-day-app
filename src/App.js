import React, { useState, useEffect } from "react";
import "./App.css";
import { themes } from "./components/Themes";

export default function App() {
/*const [darkMode, setDarkMode] = useState(false);
const handleDarkClick = () => {
  setDarkMode(!darkMode);
}*/
const [scheme, setScheme] = useState("flower");
const [mode, setMode] = useState("light"); // light | dark
const [style, setStyle] = useState("solid");

const activeTheme =
  themes[scheme]?.[mode]?.[style] ||
  themes["flower"]["light"]["solid"];

useEffect(() => {
  document.body.style.background = activeTheme.background;
}, [activeTheme]);
  

  return (
    <div style={{ padding: "20px" }}>
      <div className="header">
        <h1 style={{ color: activeTheme.header}}>Modular Scheduler</h1>
      </div>
      <div className="colorSchemes">
        <div style={{ background: activeTheme.color1, height: "50px", width: "50px", borderRadius: "10px" }}></div>
        <div style={{ background: activeTheme.color2, height: "50px", width: "50px", borderRadius: "10px" }}></div>
        <div style={{ background: activeTheme.color3, height: "50px", width: "50px", borderRadius: "10px" }}></div>
        <div style={{ background: activeTheme.color4, height: "50px", width: "50px", borderRadius: "10px" }}></div>
      </div>
      <div className="buttons">
        <button onClick={() => setScheme("flower")}>Flower</button>
        <button onClick={() => setScheme("muted")}>Muted</button>
        <button onClick={() => setScheme("groovy")}>Groovy</button>
        <button onClick={() => setScheme("playground")}>Playground</button>
        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          Toggle Mode
        </button>
        <button onClick={() => setStyle(style === "solid" ? "gradient" : "solid")}>
          Toggle Style
        </button>
      </div>
    </div>
  );
}

