import LegalPage from "@/components/legal/LegalPage";
import JsonLd, { breadcrumbLd, pageMetadata } from "@/components/JsonLd";

export const metadata = pageMetadata({
  path: "/privacy",
  title: "Privacy Policy | Scissors VIP Salon",
  description: "How Scissors VIP Salon collects, uses and protects your personal data under UAE law.",
});

const link = "text-accent hover:text-accent-hover";

const SECTIONS = [
  {
    n: "01",
    title: "Information we collect",
    points: [
      "Contact details you give when booking: name, phone and email.",
      "Payment details, handled by a third-party payment gateway.",
      "Optional feedback, preferences and before/after photos.",
    ],
  },
  {
    n: "02",
    title: "How we use your data",
    points: [
      "To confirm and schedule appointments and send reminders.",
      "To improve our service and your experience.",
      "To send promotions, only with your explicit consent.",
    ],
  },
  {
    n: "03",
    title: "Data protection",
    points: [
      "Client data is stored securely, in line with UAE Federal Decree Law No. 45 of 2021 on Personal Data Protection.",
      "Payments are processed on PCI-DSS compliant platforms.",
    ],
  },
  {
    n: "04",
    title: "Cookies",
    points: [
      "We may use cookies for performance, analytics and personalisation.",
      "You can turn cookies off in your browser settings.",
    ],
  },
  {
    n: "05",
    title: "Third parties",
    points: [
      "We never sell your personal data.",
      "We ask for consent before sharing data for promotions or collaborations.",
    ],
  },
  {
    n: "06",
    title: "Your rights",
    points: [
      "You can ask to view, update or delete your data at any time.",
      "You can unsubscribe from marketing messages whenever you like.",
    ],
  },
  {
    n: "07",
    title: "Contact us",
    points: [
      "Scissors VIP Salon, Rashid Building, Saih Al Salam Street, Al Lisaili, Dubai, UAE.",
      <>
        Phone{" "}
        <a href="tel:+971501374524" className={link}>
          +971 50 137 4524
        </a>
        , email{" "}
        <a href="mailto:scissorsvipsalon@gmail.com" className={`${link} break-all`}>
          scissorsvipsalon@gmail.com
        </a>
        .
      </>,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("Privacy Policy", "/privacy")} />
      <LegalPage
        title="Privacy Policy"
        intro="How Scissors VIP Salon collects, uses and protects your information."
        sections={SECTIONS}
      />
    </>
  );
}
