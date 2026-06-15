import type { Config } from "tailwindcss";

// Hiperprint brand palette — vibrant, flat, commercial packaging identity.
// gold/red/blue/orange accents on cream + paper, ink for type.
const gold = "#FDC42D";
const goldDeep = "#F2A50E";
const red = "#E11D2A";
const redDeep = "#B3121C";
const blue = "#1BA2DD";
const blueDeep = "#1685BC";
const orange = "#FB6A1E";
const ink = "#181513";
const cream = "#FFF4D2";
const paper = "#FFFDF7";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold,
        goldDeep,
        red,
        redDeep,
        blue,
        blueDeep,
        orange,
        ink,
        cream,
        paper,
        // legacy token remaps so older class names keep resolving on-brand
        kraft: gold,
        kraftDeep: goldDeep,
        leaf: red,
        sage: blue,
        tortilla: red,
        navy: ink,
        navyDeep: "#000000",
        carmin: red,
        carminDeep: redDeep,
        amarillo: gold,
        amarilloDeep: goldDeep,
        cyan: blue,
        cyanDeep: blueDeep,
        naranja: orange,
        terracotta: red,
        terracottaDeep: redDeep,
      },
      fontFamily: {
        serif: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: { site: "1280px" },
    },
  },
  plugins: [],
};

export default config;
