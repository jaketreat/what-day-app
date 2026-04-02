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
  themes[scheme][mode][style];

useEffect(() => {
  document.body.style.background = activeTheme.background;
}, [activeTheme]);

const isGradient = activeTheme.header.includes("gradient");

const buttonStyle = {
  background: activeTheme.contrastColor, 
  color: activeTheme.background, 
  textDecoration: 'none', 
  border: 'none', 
  borderRadius: '8px',
};

const headerStyle = {
  textAlign: "center",
  width: "25%",
  margin: "0 auto",
  ...(isGradient
    ? {
        background: activeTheme.header,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }
    : {
        color: activeTheme.header,
      }),
};
  

  return (
    <div style={{ padding: "20px" }}>
      <div className="header">
        <h1 style={headerStyle}>WHAT DAY IS IT?</h1>
      </div>
      <div className="colorSchemes">
        <div style={{ background: activeTheme.color1, height: "75px", width: "75px", borderRadius: "10px" }}></div>
        <div style={{ background: activeTheme.color2, height: "75px", width: "75px", borderRadius: "10px" }}></div>
        <div style={{ background: activeTheme.color3, height: "75px", width: "75px", borderRadius: "10px" }}></div>
        <div style={{ background: activeTheme.color4, height: "75px", width: "75px", borderRadius: "10px" }}></div>
      </div>
      <div className="buttons">
        <button style={buttonStyle} onClick={() => setScheme("flower")}>Flower</button>
        <button style={buttonStyle} onClick={() => setScheme("muted")}>Muted</button>
        <button style={buttonStyle} onClick={() => setScheme("groovy")}>Groovy</button>
        <button style={buttonStyle} onClick={() => setScheme("playground")}>Playground</button>
        </div>
        <div className="buttons">
        <button style={buttonStyle} onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          Toggle Mode
        </button>
        <button style={buttonStyle} onClick={() => setStyle(style === "solid" ? "gradient" : "solid")}>
          Toggle Style
        </button>
      </div>
      <div className="identifiers">
          <p style={{ color: activeTheme.text }}>Color Scheme: <strong>{scheme}</strong>, Dark Mode: <strong>{mode}</strong>, Gradient/Solid: <strong>{style}</strong></p>
      </div>
    </div>
  );
}

