import { SectionReveal } from "@/components/SectionReveal";
import { ScrollDots } from "@/components/ScrollDots";
import { whoWeAreBody, whoWeAreHeading } from "@/content/copy";
import heroImage from "../assets/images/1.jpg";
import aboutImage from "../assets/images/2.jpg";
import servicesImage from "../assets/images/3.jpg";

const serviceItems = [
  {
    title: "Audit & Assurance",
    description: "Statutory, internal, and governance audits delivered with rigor and discretion."
  },
  {
    title: "Taxation",
    description: "Direct and indirect tax advisory, planning, and compliance stewardship."
  },
  {
    title: "Risk Advisory",
    description: "Enterprise risk reviews, controls, and assurance for complex environments."
  },
  {
    title: "Virtual CFO Services",
    description: "Financial leadership, reporting, and strategic guidance for growing businesses."
  },
  {
    title: "Business Consulting",
    description: "Transaction support, valuations, and performance transformation."
  }
];

export default function HomePage() {
  return (
    <>
      <ScrollDots />
      <main id="scroll-root" className="scroll-snap-container">
        <section id="home" className="snap-start relative flex h-screen w-full items-center">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImage.src})` }}
            />
            <div className="absolute inset-0 bg-ink/55" />
            <div className="absolute inset-0 heritage-texture" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6">
            <SectionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.48em] text-ivory/80">
                Nathan &amp; Co.
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-ivory sm:text-5xl lg:text-6xl">
                Heritage counsel for enduring enterprises.
              </h1>
              <div className="mt-6 h-px w-16 bg-accent/80" />
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">
                Six decades of integrity, discretion, and modern advisory across audit, taxation,
                and strategic finance.
              </p>
              <a
                href="mailto:partners@nathanco.com"
                className="mt-8 inline-flex items-center justify-center rounded-full border border-ivory/50 px-7 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-ivory transition hover:-translate-y-0.5 hover:bg-ivory/10"
              >
                Connect with us
              </a>
            </SectionReveal>
          </div>
        </section>

        <section id="about" className="snap-start relative flex h-screen w-full items-center">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${aboutImage.src})` }}
            />
            <div className="absolute inset-0 bg-ink/35" />
            <div className="absolute inset-0 heritage-texture" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6">
            <div className="rounded-2xl border border-rule bg-ivory/90 p-8 shadow-[0_24px_60px_rgba(11,27,59,0.18)] backdrop-blur sm:p-10">
              <SectionReveal>
                <p className="text-xs font-semibold uppercase tracking-[0.44em] text-muted/80">
                  {whoWeAreHeading}
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
                  An enduring standard of integrity and discretion.
                </h2>
                <div className="mt-4 h-px w-14 bg-accent/80" />
              </SectionReveal>
              <SectionReveal>
                <p className="mt-6 max-h-[46vh] overflow-y-auto whitespace-pre-line pr-2 text-sm leading-relaxed text-ink/70 sm:text-base md:max-h-none md:columns-2 md:gap-10">
                  {whoWeAreBody}
                </p>
              </SectionReveal>
            </div>
          </div>
        </section>

        <section id="services" className="snap-start relative flex h-screen w-full items-center">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${servicesImage.src})` }}
            />
            <div className="absolute inset-0 bg-ink/45" />
            <div className="absolute inset-0 heritage-texture" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6">
            <div className="rounded-2xl border border-rule bg-ivory/90 p-8 shadow-[0_24px_60px_rgba(11,27,59,0.18)] backdrop-blur sm:p-10">
              <SectionReveal>
                <p className="text-xs font-semibold uppercase tracking-[0.44em] text-muted/80">
                  WHAT WE DO
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
                  Integrated audit, taxation, and strategic finance.
                </h2>
                <div className="mt-4 h-px w-14 bg-accent/80" />
              </SectionReveal>
              <SectionReveal>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70 sm:text-base">
                  We pair rigorous statutory expertise with forward-looking guidance across audit,
                  taxation, risk advisory, and virtual CFO services to help you grow with clarity.
                </p>
              </SectionReveal>
              <SectionReveal>
                <div className="mt-6 grid max-h-[42vh] gap-4 overflow-y-auto pr-2 sm:grid-cols-2 lg:max-h-none lg:grid-cols-3">
                  {serviceItems.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-rule bg-ivory/80 p-4 shadow-[0_14px_30px_rgba(11,27,59,0.08)]"
                    >
                      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink/70">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
