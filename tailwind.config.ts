import type { Config } from "tailwindcss";

// Hiperprint brand palette — anchored to the real wordmark logo.
// Navy = wordmark "Hiperprint."   Terracotta = tagline + logomark diamond.
// Cream/paper = backing surface. Ink = body text.
const navy = "#1F2A55";
const navyDeep = "#13193A";
const terracotta = "#C25B2E";
const terracottaDeep = "#9E4521";
const cream = "#F7F1E6";
const paper = "#FBF8F3";
const ink = "#1A1A1A";

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
        terracotta,
        terracottaDeep,
        cream,
        paper,
        ink,

        // Back-compat aliases — remap the old eco palette onto the real brand
        // so existing class names (bg-leaf, text-tortilla, hover:bg-kraftDeep…)
        // resolve to on-brand colors without a full rewrite.
        leaf: navy,            // CTAs / accents that were green → navy
        sage: navyDeep,        // subtle accent → deep navy
        tortilla: terracotta,  // warm accent → terracotta
        kraft: cream,          // warm beige → cream
        kraftDeep: terracotta, // deeper beige → terracotta
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
