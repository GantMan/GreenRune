import "./App.css";
import { useState } from "react";
import { greenGlyphs } from "./greenGlyphs";

function App() {
  const [selectedOption, setSelectedOption] = useState();
  const topGlyphs = Object.keys(greenGlyphs);
  const allGlyphs = topGlyphs
    .map((g) => greenGlyphs[g].embed.map((sg) => sg.glyph))
    .flat();

  function loadGlyph(gl) {
    setSelectedOption(gl);
    const canvas = document.getElementById("glyphCanvas");
    const context = canvas.getContext("2d");
    // clear canvas each time for next letter
    context.clearRect(0, 0, canvas.width, canvas.height);
    const loadGlyph = new Image();
    loadGlyph.onload = function () {
      context.drawImage(loadGlyph, 0, 0, canvas.width, canvas.height);
    };
    loadGlyph.src = `/letters/${gl}`;
  }

  function GlyphDropdown() {
    return (
      <>
        <select
          name="glyphs"
          id="glyphs"
          value={selectedOption}
          onChange={(e) => loadGlyph(e.target.value)}
        >
          {allGlyphs.map((k) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </select>
        <p>Showing: {selectedOption}</p>
      </>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <label htmlFor="glyphs">Choose The Glyph:</label>
        <GlyphDropdown />
      </header>
      <div className="main">
        <canvas width="1947" height="1609" id="glyphCanvas"></canvas>
      </div>
    </div>
  );
}

export default App;
