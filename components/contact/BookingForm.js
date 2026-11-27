"use client";

import { useState } from "react";
import { PRICE_GROUPS } from "@/components/pricing/data";
import Button from "@/components/ui/Button";

const WHATSAPP = "https://wa.me/971501374524";

const SERVICES = PRICE_GROUPS.flatMap((g) => g.items.map((i) => `${i.name} — ${i.price} AED`));

const labelCls = "flex flex-col gap-2 text-sm font-medium";
const fieldBase =
  "w-full box-border font-normal text-base text-ink bg-[var(--bone)] border border-[var(--line)] rounded-[12px] px-4 transition-[border-color,box-shadow] duration-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/25";
const fieldCls = `${fieldBase} h-[52px]`;

function toggleCls(on) {
  return `flex-1 sm:flex-none rounded-full text-[15px] font-medium px-6 h-11 cursor-pointer border-0 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
    on ? "bg-ink text-bone" : "bg-transparent text-ink hover:bg-ink/5"
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
      className="flex-[3_1_520px] min-w-0 box-border flex flex-col gap-[22px] bg-white border border-[var(--line)] rounded-[24px] p-[clamp(24px,4vw,48px)] shadow-[0_20px_60px_rgba(22,19,17,0.08)]"
    >
      <div>
        <h2 className="m-0 font-serif font-normal text-[32px] leading-[1.15]">Request a booking</h2>
        <p className="mt-2 mb-0 text-muted text-[15px]">We reply on WhatsApp within minutes.</p>
      </div>

      <fieldset className="border-0 m-0 p-0">
        <legend className="text-label text-muted mb-3">Where</legend>
        <div className="flex sm:inline-flex gap-1 p-1 rounded-full border border-[var(--line)] bg-[var(--bone)]">
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
          <span className="relative">
            <select
              name="service"
              defaultValue=""
              className={`${fieldCls} appearance-none pr-10 cursor-pointer`}
            >
              <option value="">Not sure yet</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <span aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted">
              ▾
            </span>
          </span>
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
        <textarea name="message" rows={3} className={`${fieldBase} h-[120px] py-3 resize-y`} />
      </label>

      <div className="flex flex-wrap gap-x-7 gap-y-4 items-center mt-2">
        <Button type="submit" variant="primary" size="lg" arrow className="w-full sm:w-auto">
          Send on WhatsApp
        </Button>
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
