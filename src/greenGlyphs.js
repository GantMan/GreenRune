/* Goal
Each letter identifies the path to the glyph, as well as meta data
which identifies how many regions are available and their locations

A region ideally should get 1 glyph, but can be compressed to 2 or more given
the configuration settings.  Regions are indicated by x1, y1, x2, y2 of the bounding
box for the proposed fill area (proportional.
*/

const greenGlyphs = {
  a: {
    embed: [
      // glyph info for zero regions
      { glyph: "A.png" },
    ],
  },
  b: {
    embed: [
      // glyph info for zero regions
      { glyph: "B0.png" },
      // glyph info for 1 region
      {
        glyph: "B1.png",
        regions: [[0, 0, 0.4, 0.4]],
      },
      // glyph info for 2 regions
      {
        glyph: "B.png",
        regions: [
          [0, 0, 0.2, 0.2],
          [0.2, 0.2, 0.4, 0.4],
        ],
      },
    ],
  },
  ba: {
    embed: [{ glyph: "BA.png" }],
  },
  be: {
    embed: [{ glyph: "BE.png" }],
  },
  bi: {
    embed: [{ glyph: "BI.png" }],
  },
  bo: {
    embed: [{ glyph: "BO.png" }],
  },
  bu: {
    embed: [{ glyph: "BU.png" }],
  },    
};
