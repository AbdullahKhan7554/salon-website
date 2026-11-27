import Image from "next/image";
import Container from "@/components/Container";
import { GROUPS } from "./data";

export default function ServiceGroups() {
  return (
    <>
      {GROUPS.map((g) => (
        <Container as="section" key={g.id}
          id={g.id}
          aria-labelledby={`${g.id}-title`} className="pt-section scroll-mt-6">
          <div className="flex flex-wrap justify-between items-end gap-4 pb-7 border-b border-ink mb-10">
            <h2
              id={`${g.id}-title`}
              className="m-0 font-heading font-normal text-h2"
            >
              <span className="text-accent text-[0.5em] align-middle mr-4">{g.no}</span>
              {g.title}
            </h2>
            <p className="m-0 text-muted max-w-[380px]">{g.intro}</p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-x-7 gap-y-12">
            {g.items.map((item) => (
              <article key={item.name} className="flex flex-col gap-3.5">
                <div className="relative aspect-[4/3] bg-placeholder overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 400px"
                    className="object-cover"
                  />
                </div>
                <div className="flex justify-between items-baseline gap-3">
                  <h3 className="m-0 font-heading font-normal text-h3">{item.name}</h3>
                  <span className="text-accent font-medium text-[15px] whitespace-nowrap">AED {item.price}</span>
                </div>
                <p className="m-0 text-muted text-[15px]">{item.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      ))}
    </>
  );
}
