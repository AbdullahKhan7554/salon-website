"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Keep in sync with PRELOAD_SCRIPT in app/layout.js (a server file cannot import
// plain values from a "use client" module: it receives a client reference instead).
const PRELOAD_KEY = "svip-preloaded";
const MIN_MS = 1200; // shortest time the logo stays up, counted from navigation start
const MAX_MS = 1500; // never hold the page longer than this, even if "load" is late
const FADE_MS = 400;

/**
 * First-visit logo overlay. Always server-rendered so it covers the first paint; the page
 * renders underneath the whole time. On repeat visits in the session the inline <head>
 * script in app/layout.js injects a style that hides it before paint.
 */
export default function Preloader() {
  const [hiding, setHiding] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const lock = document.getElementById("svip-preload-style");
    const finish = () => {
      lock?.remove();
      setGone(true);
    };

    let seen = false;
    try {
      seen = sessionStorage.getItem(PRELOAD_KEY) === "1" && lock?.dataset.state === "skip";
      sessionStorage.setItem(PRELOAD_KEY, "1");
    } catch {
      // Storage blocked: show it, it simply appears again next visit.
    }
    if (seen) {
      finish();
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let fadeTimer;
    let minTimer;
    let done = false;

    const hide = () => {
      if (done) return;
      done = true;
      if (reduced) {
        finish();
        return;
      }
      setHiding(true);
      fadeTimer = window.setTimeout(finish, FADE_MS);
    };

    // Reduced motion: no minimum, hide as soon as the page has loaded.
    const onLoad = () => {
      const wait = reduced ? 0 : Math.max(0, MIN_MS - performance.now());
      minTimer = window.setTimeout(hide, wait);
    };

    const maxTimer = window.setTimeout(hide, Math.max(0, MAX_MS - performance.now()));
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });

    return () => {
      window.clearTimeout(maxTimer);
      window.clearTimeout(minTimer);
      window.clearTimeout(fadeTimer);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  if (gone) return null;

  return (
    <div aria-hidden="true" className={`svip-preloader${hiding ? " is-hiding" : ""}`}>
      <div className="svip-preloader__inner">
        <Image
          src="/logo.jpg.svg"
          alt="Scissors VIP Salon"
          width={120}
          height={120}
          priority
          className="svip-preloader__logo"
        />
        <span className="svip-preloader__bar" />
      </div>
    </div>
  );
}
