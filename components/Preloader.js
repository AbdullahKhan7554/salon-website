"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const FIRST = { dur: 2000, fade: 500 }; // first load: at least 2s, counted from navigation start
const ROUTE = { dur: 1000, fade: 400 }; // every page change
const REDUCED = { dur: 300, fade: 0 }; // prefers-reduced-motion: short, no animation
const SAFETY_MS = 4000; // a click that never leads to a new page still clears

const prefersReduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Logo overlay. Server-rendered so it covers the first paint, then shown again on every
 * route change (and straight away when an internal link is clicked, to cover the
 * transition). The page always renders underneath; this only sits on top of it.
 */
export default function Preloader() {
  const pathname = usePathname();
  // phase: "show" | "hide" | "off". `run` remounts the overlay so its CSS animations restart.
  const [state, setState] = useState({ phase: "show", run: 0, ...FIRST });
  const timers = useRef([]);
  const firstPath = useRef(true);

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };
  const later = (fn, ms) => timers.current.push(window.setTimeout(fn, Math.max(0, ms)));

  const hide = useCallback((fade) => {
    clearTimers();
    if (!fade) {
      setState((s) => ({ ...s, phase: "off" }));
      return;
    }
    setState((s) => ({ ...s, phase: "hide" }));
    later(() => setState((s) => ({ ...s, phase: "off" })), fade);
  }, []);

  const show = useCallback((timing) => {
    clearTimers();
    setState((s) => (s.phase === "show" ? { ...s, ...timing } : { phase: "show", run: s.run + 1, ...timing }));
  }, []);

  // First load: stay up for FIRST.dur from navigation start and until "load", then fade.
  useEffect(() => {
    const t = prefersReduced() ? REDUCED : FIRST;
    if (t !== FIRST) setState((s) => ({ ...s, ...t }));
    let loaded = document.readyState === "complete";
    let minDone = false;
    const maybeHide = () => loaded && minDone && hide(t.fade);
    const onLoad = () => {
      loaded = true;
      maybeHide();
    };
    later(() => {
      minDone = true;
      maybeHide();
    }, t.dur - performance.now());
    later(() => hide(t.fade), SAFETY_MS - 500 - performance.now()); // slow "load": don't hold the page
    if (!loaded) window.addEventListener("load", onLoad, { once: true });
    return () => {
      clearTimers();
      window.removeEventListener("load", onLoad);
    };
  }, [hide]);

  // Internal link clicks: cover the transition before the new route renders.
  useEffect(() => {
    const onClick = (e) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target instanceof Element ? e.target.closest("a[href]") : null;
      if (!a || a.hasAttribute("download") || (a.target && a.target !== "_self")) return;
      let url;
      try {
        url = new URL(a.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      const t = prefersReduced() ? REDUCED : ROUTE;
      show(t);
      later(() => hide(t.fade), SAFETY_MS);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [show, hide]);

  // Every route change (link, back/forward): visible ROUTE.dur, then fade.
  useEffect(() => {
    if (firstPath.current) {
      firstPath.current = false;
      return;
    }
    const t = prefersReduced() ? REDUCED : ROUTE;
    show(t);
    later(() => hide(t.fade), t.dur);
  }, [pathname, show, hide]);

  useEffect(() => () => clearTimers(), []);

  if (state.phase === "off") return null;

  return (
    <div
      key={state.run}
      aria-hidden="true"
      className={`svip-preloader${state.phase === "hide" ? " is-hiding" : ""}`}
      style={{ "--svip-dur": `${state.dur}ms`, "--svip-fade": `${state.fade}ms` }}
    >
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
