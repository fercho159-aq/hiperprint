"use client";

import { CursorDot } from "./CursorDot";
import { RevealObserver } from "./Reveal";

export function SiteEffects() {
  return (
    <>
      <RevealObserver />
      <CursorDot />
    </>
  );
}
