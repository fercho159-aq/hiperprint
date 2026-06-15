import type { Config } from "tailwindcss";

// Hiperprint brand palette — anchored to the corporate catalogue (PDF).
// Catalogue identity: a navy wordmark on marble/cream surfaces, with a vivid
// accent system — carmín red, golden yellow, cyan and orange — carried by the
// sweeping curves, the SKU panels and the corner wedge.
//
// Navy    = wordmark "Hiperprint." + body emphasis
// Carmín  = primary brand accent (the big swoosh / section headings)
// Amarillo / Cyan / Naranja = secondary accents (panels, wedges, highlights)
// Cream / paper = backing surface (marble). Ink = body text.
const navy = "#1B2A4A";
const navyDeep = "#12203B";
const carmin = "#C8102E"; // rojo carmín — the signature swoosh
const carminDeep = "#9E0C24";
const amarillo = "#FDB913"; // amarillo dorado — SKU panels
const amarilloDeep = "#E1A300";
const cyan = "#29ABE2"; // cyan — alternating panels
const cyanDeep = "#1B86B8";
const naranja = "#F26522"; // naranja — corner wedge + logomark
const cream = "#F4EFE3";
const paper = "#FBF8F2";
const ink = "#17213B";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand
        navy,
        navyDeep,
        carmin,
        carminDeep,
        amarillo,
        amarilloDeep,
        cyan,
        cyanDeep,
        naranja,
        cream,
        paper,
        ink,

        // Back-compat aliases — remap the prior navy/terracotta palette onto the
        // catalogue identity so existing class names keep resolving on-brand
        // without a site-wide rewrite. Warm accents now read as carmín red.
        terracotta: carmin, // warm accent → carmín
        terracottaDeep: carminDeep,
        leaf: navy, // CTAs / primary accents
        sage: navyDeep, // subtle dark accent
        tortilla: carmin, // warm accent → carmín
        kraft: cream, // warm beige → cream
        kraftDeep: carmin, // deeper accent → carmín
      },
      fontFamily: {
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        site: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
