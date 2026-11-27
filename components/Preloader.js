"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export const PRELOAD_KEY = "svip-preloaded";
const MAX_MS = 1500;
const FADE_MS = 400;

/**
 * First-visit logo overlay. It is server-rendered so it covers the first paint; the page
 * renders underneath the whole time. An inline <head> script (see app/layout.js) adds
 * `svip-no-preload` to <html> on repeat visits in the session, which hides it before paint.
 */
export default function Preloader() {
  const [hiding, setHiding] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const finish = () => {
      root.classList.remove("svip-preloading");
      setGone(true);
    };

    if (root.classList.contains("svip-no-preload")) {
      finish();
      return;
    }

    try {
      sessionStorage.setItem(PRELOAD_KEY, "1");
    } catch {
      // Storage blocked: the overlay simply shows again next time.
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let fadeTimer;
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

    const maxTimer = window.setTimeout(hide, MAX_MS);
    if (document.readyState === "complete") hide();
    else window.addEventListener("load", hide, { once: true });

    return () => {
      window.clearTimeout(maxTimer);
      window.clearTimeout(fadeTimer);
      window.removeEventListener("load", hide);
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
