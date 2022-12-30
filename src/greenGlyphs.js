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
  ba: {
    embed: [{ glyph: "BA.png" }],
  },
  c: {
    embed: [{ glyph: "C.png" }],
  },
  ce: {
    embed: [{ glyph: "CE.png" }],
  },
  ci: {
    embed: [{ glyph: "CI.png" }],
  },
  co: {
    embed: [{ glyph: "CO.png" }],
  },
  cu: {
    embed: [{ glyph: "CU.png" }],
  },   
  d: {
    embed: [{ glyph: "D.png" }],
  },
  da: {
    embed: [{ glyph: "DA.png" }],
  },
  de: {
    embed: [{ glyph: "DE.png" }],
  },
  di: {
    embed: [{ glyph: "DI.png" }],
  },
  do: {
    embed: [{ glyph: "DO.png" }],
  },
  du: {
    embed: [{ glyph: "DU.png" }],
  },
  e: { 
    embed: [{ glyph: "E.png" }],
  },
  f: {
    embed: [{ glyph: "F.png" }],
  },
  fa: {
    embed: [{ glyph: "FA.png" }],
  },
  fe: {
    embed: [{ glyph: "FE.png" }],
  },
  fi: {
    embed: [{ glyph: "FI.png" }],
  },
  fo: {
    embed: [{ glyph: "FO.png" }],
  },
  fu: {
    embed: [{ glyph: "FU.png" }],
  },
  g: {
    embed: [{ glyph: "G.png" }],
  },
  ga: {
    embed: [{ glyph: "GA.png" }],
  },
  ge: {
    embed: [{ glyph: "GE.png" }],
  },
  gi: {
    embed: [{ glyph: "GI.png" }],
  },
  go: {
    embed: [{ glyph: "GO.png" }],
  },
  gu: {
    embed: [{ glyph: "GU.png" }],
  },
  h: { 
    embed: [{ glyph: "H.png" }],
  },
  ha: {
    embed: [{ glyph: "HA.png" }],
  },
  he: {
    embed: [{ glyph: "HE.png" }],
  },
  hi: {
    embed: [{ glyph: "HI.png" }],
  },
  ho: {
    embed: [{ glyph: "HO.png" }],
  },
  hu: {
    embed: [{ glyph: "HU.png" }],
  },
  i: {
    embed: [{ glyph: "I.png" }],
  },
  ja: {
    embed: [{ glyph: "JA.png" }],
  },
  je: {
    embed: [{ glyph: "JE.png" }],
  },
  ji: {
    embed: [{ glyph: "JI.png" }],
  },
  jo: {
    embed: [{ glyph: "JO.png" }],
  },
  ju: {
    embed: [{ glyph: "JU.png" }],
  },   
  k: {
    embed: [{ glyph: "K.png" }],
  },
  ka: {
    embed: [{ glyph: "KA.png" }],
  },
  ke: {
    embed: [{ glyph: "KE.png" }],
  },
  ki: {
    embed: [{ glyph: "KI.png" }],
  },
  ko: {
    embed: [{ glyph: "KO.png" }],
  },
  ku: {
    embed: [{ glyph: "KU.png" }],
  },  
  l: {
    embed: [{ glyph: "L.png" }],
  },
  la: {
    embed: [{ glyph: "LA.png" }],
  },
  le: {
    embed: [{ glyph: "LE.png" }],
  },
  li: {
    embed: [{ glyph: "LI.png" }],
  },
  lo: {
    embed: [{ glyph: "LO.png" }],
  },
  lu: {
    embed: [{ glyph: "LU.png" }],
  },      
  m: {
    embed: [{ glyph: "M.png" }],
  },
  ma: {
    embed: [{ glyph: "MA.png" }],
  },
  me: {
    embed: [{ glyph: "ME.png" }],
  },
  mi: {
    embed: [{ glyph: "MI.png" }],
  },
  mo: {
    embed: [{ glyph: "MO.png" }],
  },
  mu: {
    embed: [{ glyph: "MU.png" }],
  },   
  n: {
    embed: [{ glyph: "N.png" }],
  },
  na: {
    embed: [{ glyph: "NA.png" }],
  },
  ne: {
    embed: [{ glyph: "NE.png" }],
  },
  ni: {
    embed: [{ glyph: "NI.png" }],
  },
  no: {
    embed: [{ glyph: "NO.png" }],
  },
  nu: {
    embed: [{ glyph: "NU.png" }],
  },   
  o: {
    embed: [{ glyph: "O.png" }],
  },
  p: {
    embed: [{ glyph: "P.png" }],
  },
  pa: {
    embed: [{ glyph: "PA.png" }],
  },
  pe: {
    embed: [{ glyph: "PE.png" }],
  },
  pi: {
    embed: [{ glyph: "PI.png" }],
  },
  po: {
    embed: [{ glyph: "PO.png" }],
  },
  pu: {
    embed: [{ glyph: "PU.png" }],
  },        
  q: {
    embed: [{ glyph: "Q.png" }],
  },
  qa: {
    embed: [{ glyph: "QA.png" }],
  },
  qe: {
    embed: [{ glyph: "QE.png" }],
  },
  qi: {
    embed: [{ glyph: "QI.png" }],
  },
  qo: {
    embed: [{ glyph: "QO.png" }],
  },
  qu: {
    embed: [{ glyph: "QU.png" }],
  },     
  r: {
    embed: [{ glyph: "R.png" }],
  },
  ra: {
    embed: [{ glyph: "RA.png" }],
  },
  re: {
    embed: [{ glyph: "RE.png" }],
  },
  ri: {
    embed: [{ glyph: "RI.png" }],
  },
  ro: {
    embed: [{ glyph: "RO.png" }],
  },
  ru: {
    embed: [{ glyph: "RU.png" }],
  },
  s: {
    embed: [{ glyph: "S.png" }],
  },
  sa: {
    embed: [{ glyph: "SA.png" }],
  },
  se: {
    embed: [{ glyph: "SE.png" }],
  },
  si: {
    embed: [{ glyph: "SI.png" }],
  },
  so: {
    embed: [{ glyph: "SO.png" }],
  },
  su: {
    embed: [{ glyph: "SU.png" }],
  },      
  t: {
    embed: [{ glyph: "T.png" }],
  },
  ta: {
    embed: [{ glyph: "TA.png" }],
  },
  te: {
    embed: [{ glyph: "TE.png" }],
  },
  ti: {
    embed: [{ glyph: "TI.png" }],
  },
  to: {
    embed: [{ glyph: "TO.png" }],
  },
  tu: {
    embed: [{ glyph: "TU.png" }],
  },  
  u: {
    embed: [{ glyph: "U.png" }],
  },
  v: {
    embed: [{ glyph: "V.png" }],
  },
  va: {
    embed: [{ glyph: "VA.png" }],
  },
  ve: {
    embed: [{ glyph: "VE.png" }],
  },
  vi: {
    embed: [{ glyph: "VI.png" }],
  },
  vo: {
    embed: [{ glyph: "VO.png" }],
  },
  vu: {
    embed: [{ glyph: "VU.png" }],
  }, 
  w: {
    embed: [{ glyph: "W.png" }],
  },
  wa: {
    embed: [{ glyph: "WA.png" }],
  },
  we: {
    embed: [{ glyph: "WE.png" }],
  },
  wi: {
    embed: [{ glyph: "WI.png" }],
  },
  wo: {
    embed: [{ glyph: "WO.png" }],
  },
  wu: {
    embed: [{ glyph: "WU.png" }],
  },     
  x: {
    embed: [{ glyph: "X.png" }],
  },
  xa: {
    embed: [{ glyph: "XA.png" }],
  },
  xe: {
    embed: [{ glyph: "XE.png" }],
  },
  xi: {
    embed: [{ glyph: "XI.png" }],
  },
  xo: {
    embed: [{ glyph: "XO.png" }],
  },
  xu: {
    embed: [{ glyph: "XU.png" }],
  },    
  y: {
    embed: [{ glyph: "Y.png" }],
  },  
  ya: {
    embed: [{ glyph: "YA.png" }],
  },
  ye: {
    embed: [{ glyph: "YE.png" }],
  },
  yi: {
    embed: [{ glyph: "YI.png" }],
  },
  yo: {
    embed: [{ glyph: "YO.png" }],
  },
  yu: {
    embed: [{ glyph: "YU.png" }],
  },     
  z: {
    embed: [{ glyph: "Z.png" }],
  },
  za: {
    embed: [{ glyph: "ZA.png" }],
  },
  ze: {
    embed: [{ glyph: "ZE.png" }],
  },
  zi: {
    embed: [{ glyph: "ZI.png" }],
  },
  zo: {
    embed: [{ glyph: "ZO.png" }],
  },
  zu: {
    embed: [{ glyph: "ZU.png" }],
  },                  
};
