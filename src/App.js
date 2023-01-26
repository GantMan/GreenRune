import "./App.css";
import { useState } from "react";
import { greenGlyphs } from "./greenGlyphs";

let regions = []

function initDraw(canvas) {
  const ctx = canvas.getContext("2d");
  regions = []
  var mouse = {
    x: 0,
    y: 0,
    startX: 0,
    startY: 0,
  };
  function setMousePosition(e) {
    const rect = canvas.getBoundingClientRect();
    let ev = e || window.event; //Moz || IE
    const resizeRatio = canvas.width/ canvas.clientWidth;
    const { pageX, pageY } = ev.touches ? ev.touches[0] : ev;
    mouse.x = (pageX - rect.left - window.pageXOffset) * resizeRatio;
    mouse.y = (pageY - rect.top - window.pageYOffset) * resizeRatio;
  }

  let element = null;
  canvas.onmousemove = function (e) {
    setMousePosition(e);

  };

  function log(mouse) {
    const canWidth = 1947;
    const canHeight = 1609;
    const { x, y, startX, startY } = mouse;

    // Sort the x and y values to make sure the start is before the end and make proportional rounded to 2 decimal places
    const resizedXs = [startX, x].map((x) => (x / canWidth).toFixed(2)).sort();
    const resizedYs = [startY, y].map((y) => (y / canHeight).toFixed(2)).sort();

    regions.push([resizedXs[0], resizedYs[0], resizedXs[1], resizedYs[1]])
    document.getElementById("regions").value = JSON.stringify(regions)
  }

  canvas.onclick = function (e) {
    const { x, y, startX, startY } = mouse;
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 10, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#003300';
    ctx.fill();
    ctx.stroke();

    if (element !== null) {
      const { x, y, startX, startY } = mouse;
      log(mouse)
      ctx.beginPath();
      ctx.rect(startX, startY, x - startX, y - startY);
      ctx.stroke();
      element = null;
      canvas.style.cursor = "default";
      console.log("done.", mouse);
    } else {
      console.log("begun.");
      mouse.startX = mouse.x;
      mouse.startY = mouse.y;
      element = true;
      canvas.style.cursor = "crosshair";
    }
  };
}

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
    // allows draw to canvas (JS) blech
    initDraw(canvas);
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
        <textarea id="regions" />
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
