import LegalPage from "@/components/legal/LegalPage";
import JsonLd, { breadcrumbLd, pageMetadata } from "@/components/JsonLd";

export const metadata = pageMetadata({
  path: "/terms",
  title: "Terms & Conditions | Scissors VIP Salon",
  description: "Booking, cancellation, pricing and service terms for Scissors VIP Salon, Dubai.",
});

const SECTIONS = [
  {
    n: "01",
    title: "Appointments & cancellations",
    points: [
      "Booking in advance is recommended to secure your slot.",
      "Cancellations need at least 12 hours' notice.",
      "Arriving 10 or more minutes late may shorten your service or require rescheduling.",
    ],
  },
  {
    n: "02",
    title: "Service satisfaction",
    points: [
      "Our barbers are trained to deliver professional grooming.",
      "If you are not satisfied, tell us before leaving. A complimentary correction may be offered within 3 days.",
      "Completed services are generally non-refundable, except in exceptional cases.",
    ],
  },
  {
    n: "03",
    title: "Pricing",
    points: [
      "All prices include 5% UAE VAT.",
      "Prices may vary slightly with hair length, thickness or custom requests.",
      "The salon may change prices without prior notice.",
    ],
  },
  {
    n: "04",
    title: "Health & safety",
    points: [
      "Please tell us about any scalp infection, skin condition or allergy before your service.",
      "Hygiene follows Dubai Municipality standards.",
    ],
  },
  {
    n: "05",
    title: "Children & pets",
    points: [
      "Children under 12 must be supervised by an adult.",
      "Pets are not allowed on the premises, except service animals.",
    ],
  },
  {
    n: "06",
    title: "Intellectual property",
    points: ["Logos, images and branding belong to Scissors VIP Salon and may not be copied without permission."],
  },
  {
    n: "07",
    title: "Limitation of liability",
    points: [
      "We are not liable for allergic reactions or dissatisfaction caused by inaccurate client information.",
      "Liability is limited to the cost of the service.",
    ],
  },
  {
    n: "08",
    title: "Jurisdiction",
    points: ["These terms are governed by UAE law, under Dubai Civil Law."],
  },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("Terms & Conditions", "/terms")} />
      <LegalPage
        title="Terms & Conditions"
        intro="These terms apply to the website and services of Scissors VIP Salon, Dubai."
        sections={SECTIONS}
      />
    </>
  );
}
