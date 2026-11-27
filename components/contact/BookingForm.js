"use client";

import { useState } from "react";
import { PRICE_GROUPS } from "@/components/pricing/data";

const WHATSAPP = "https://wa.me/971501374524";

const SERVICES = PRICE_GROUPS.flatMap((g) => g.items.map((i) => `${i.name} — ${i.price} AED`));

const labelCls = "flex flex-col gap-2 text-sm font-medium";
const fieldCls =
  "font-normal text-base py-3.5 border-0 border-b border-ink-muted bg-transparent min-h-12 focus:outline-none focus:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function toggleCls(on) {
  return `text-[15px] px-[22px] py-3 min-h-12 cursor-pointer border ${
    on ? "bg-ink text-bone border-ink" : "bg-transparent text-ink border-ink-muted hover:border-ink"
  }`;
}

function formatDateTime(value) {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });
}

export default function BookingForm() {
  const [where, setWhere] = useState("salon");
  const isHome = where === "home";

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k) => String(data.get(k) ?? "").trim();

    const lines = [
      "Hi, I would like to book an appointment at your salon.",
      "",
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Where: ${isHome ? "Home visit" : "In the salon"}`,
    ];
    if (isHome && get("area")) lines.push(`Area: ${get("area")}`);
    if (get("service")) lines.push(`Service: ${get("service")}`);
    if (get("datetime")) lines.push(`Preferred time: ${formatDateTime(get("datetime"))}`);
    if (get("message")) lines.push(`Message: ${get("message")}`);

    const url = `${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      aria-label="Booking request"
      onSubmit={handleSubmit}
      className="flex-[3_1_520px] min-w-0 flex flex-col gap-[22px] pt-8 border-t border-ink"
    >
      <fieldset className="border-0 m-0 p-0">
        <legend className="text-xs tracking-[0.2em] uppercase text-muted mb-3">Where</legend>
        <div className="flex flex-wrap gap-3">
          <button type="button" aria-pressed={!isHome} onClick={() => setWhere("salon")} className={toggleCls(!isHome)}>
            In the salon
          </button>
          <button type="button" aria-pressed={isHome} onClick={() => setWhere("home")} className={toggleCls(isHome)}>
            Home visit
          </button>
        </div>
      </fieldset>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[22px]">
        <label className={labelCls}>
          Your name
          <input name="name" type="text" autoComplete="name" required className={fieldCls} />
        </label>
        <label className={labelCls}>
          Phone / WhatsApp
          <input name="phone" type="tel" autoComplete="tel" required className={fieldCls} />
        </label>
        <label className={labelCls}>
          Service
          <select name="service" defaultValue="" className={fieldCls}>
            <option value="">Not sure yet</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
        <label className={labelCls}>
          Preferred date &amp; time
          <input name="datetime" type="datetime-local" className={fieldCls} />
        </label>
      </div>

      {isHome && (
        <label className={labelCls}>
          Your area in Dubai
          <input name="area" type="text" autoComplete="address-level2" className={fieldCls} />
        </label>
      )}

      <label className={labelCls}>
        Message (optional)
        <textarea name="message" rows={3} className={`${fieldCls} resize-y`} />
      </label>

      <div className="flex flex-wrap gap-x-7 gap-y-4 items-center mt-2">
        <button
          type="submit"
          className="bg-accent hover:bg-accent-hover text-bone border-0 px-[30px] py-[18px] min-h-14 text-[15px] font-medium cursor-pointer"
        >
          Send on WhatsApp →
        </button>
        <span className="text-sm text-muted">
          Or call{" "}
          <a href="tel:+971501374524" className="text-accent hover:text-accent-hover inline-flex items-center min-h-11">
            +971 50 137 4524
          </a>
        </span>
      </div>
    </form>
  );
}
