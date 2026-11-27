import Button from "@/components/ui/Button";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.4240343378237!2d55.4767034!3d24.9359022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f7f89fe433ac3%3A0x2e7b4082fdcd7b9e!2sScissors%20vip%20mens%20saloon!5e0!3m2!1sen!2sae!4v1719400000000!5m2!1sen!2sae";
const DIRECTIONS = "https://www.google.com/maps/search/?api=1&query=24.9359022,55.4767034";

const heading = "text-label m-0 font-medium text-muted";
const accentLink = "text-accent hover:text-accent-hover";

export default function SalonDetails() {
  return (
    <aside aria-label="Salon details" className="flex-[2_1_360px] min-w-0 flex flex-col gap-7 pt-8 border-t border-ink">
      <address className="not-italic">
        <h2 className={`${heading} mb-2`}>Salon address</h2>
        <p className="m-0 font-heading text-h3">
          Rashid Building, Saih Al Salam Street, Al Lisaili, Dubai, UAE
        </p>
      </address>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className={`${heading} mb-1.5`}>Hours</h2>
          Mon – Sun
          <br />
          10 am – 10 pm
        </div>
        <div>
          <h2 className={`${heading} mb-1.5`}>Phone</h2>
          <a href="tel:+971501374524" className={`${accentLink} inline-flex items-center min-h-11`}>
            +971 50 137 4524
          </a>
        </div>
        <div className="col-span-2">
          <h2 className={`${heading} mb-1.5`}>Email</h2>
          <a
            href="mailto:scissorsvipsalon@gmail.com"
            className={`${accentLink} break-all inline-flex items-center min-h-11`}
          >
            scissorsvipsalon@gmail.com
          </a>
        </div>
      </div>
      <div className="aspect-[4/3] bg-placeholder">
        <iframe
          title="Map of Scissors VIP Salon"
          src={MAP_EMBED}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <Button href={DIRECTIONS} variant="primary" arrow className="self-start">
        Get directions
      </Button>
    </aside>
  );
}
