"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" }
];

export function ScrollDots() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);

  useEffect(() => {
    const container = document.getElementById("scroll-root");
    const targets = SECTIONS.map((section) => document.getElementById(section.id)).filter(
      (item): item is HTMLElement => Boolean(item)
    );

    if (!targets.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: container ?? null,
        threshold: 0.6
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-4 top-4 z-50 flex flex-col gap-3 rounded-full border border-rule bg-ivory/90 px-3 py-4 text-[0.55rem] font-semibold uppercase tracking-[0.32em] text-ink shadow-[0_12px_30px_rgba(11,27,59,0.12)] backdrop-blur md:right-6 md:top-8 md:gap-4 md:px-4 md:py-6 md:text-[0.6rem]"
    >
      {SECTIONS.map((section) => {
        const isActive = activeId === section.id;

        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(event) => handleClick(event, section.id)}
            className="group flex items-center gap-3"
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`h-2 w-2 rounded-full border transition ${
                isActive
                  ? "border-ink bg-ink"
                  : "border-ink/40 bg-transparent group-hover:border-ink group-hover:bg-ink/20"
              }`}
            />
            <span className={`transition ${isActive ? "text-ink" : "text-ink/60 group-hover:text-ink"}`}>
              {section.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
