import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, SectionHeader } from "@/components/SectionHeader";
import p1 from "@/assets/projects/proj-860a5c7d.jpeg.asset.json";
import p2 from "@/assets/projects/proj-a3b8ccf0.jpeg.asset.json";
import p3 from "@/assets/projects/proj-69087b6c.jpeg.asset.json";
import p4 from "@/assets/projects/proj-c8d489bc.jpeg.asset.json";
import p5 from "@/assets/projects/proj-a75dd8fb.jpeg.asset.json";
import p6 from "@/assets/projects/proj-f831f2d7.jpeg.asset.json";
import p7 from "@/assets/projects/proj-61801fc3.jpeg.asset.json";
import p8 from "@/assets/projects/proj-4738af7e.jpeg.asset.json";
import p9 from "@/assets/projects/proj-a00c04db.jpeg.asset.json";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Syed Rizwan Shah — Project Gallery | Munawar Shah Marbles and Tiles" },
      { name: "description", content: "Syed Rizwan Shah's project gallery — marble yard, granite showroom, workshop and onyx handicrafts from the Manghopir Branch, Karachi." },
      { property: "og:title", content: "Syed Rizwan Shah — Project Gallery" },
      { property: "og:description", content: "Manghopir Branch, Karachi — marble yard, showroom, workshop and onyx handicrafts." },
      { property: "og:image", content: p1.url },
    ],
  }),
  component: Projects,
});

const FILTERS = ["All", "Slab Yard", "Showroom", "Workshop", "Handicrafts"] as const;
type Filter = typeof FILTERS[number];

const PROJECTS = [
  { title: "Grey Marble Block — Manghopir Branch", cat: "Slab Yard", img: p1.url },
  { title: "Granite Slab Display — Manghopir Branch", cat: "Showroom", img: p2.url },
  { title: "Beige & Grey Tile Stacks — Manghopir Branch", cat: "Showroom", img: p3.url },
  { title: "Raw Marble Blocks — Manghopir Branch", cat: "Slab Yard", img: p4.url },
  { title: "Stone Cutting Machine — Manghopir Branch", cat: "Workshop", img: p5.url },
  { title: "Polishing Line — Manghopir Branch", cat: "Workshop", img: p6.url },
  { title: "White Marble Planter — Manghopir Branch", cat: "Handicrafts", img: p7.url },
  { title: "Green Onyx Bowl — Manghopir Branch", cat: "Handicrafts", img: p8.url },
  { title: "Onyx Flower Vases — Manghopir Branch", cat: "Handicrafts", img: p9.url },
];

function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const items = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.cat === filter);

  return (
    <>
      <PageHero eyebrow="Syed Rizwan Shah — Project Gallery" title="Stone, set in Pakistan's finest spaces — Manghopir Branch, Karachi." image={p4.url} />

      <section className="py-24 bg-background">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 justify-center mb-14">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] border transition ${
                  filter === f ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p, i) => (
              <figure key={p.title + i} className="group overflow-hidden animate-float-in" style={{ animationDelay: `${i*60}ms` }}>
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <figcaption className="mt-4 flex justify-between items-baseline">
                  <h3 className="font-display text-xl text-primary">{p.title}</h3>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{p.cat}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-secondary">
        <div className="container-x">
          <SectionHeader eyebrow="Before & After" title="The transformation a stone surface brings." />
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {[[p4.url, p1.url], [p5.url, p6.url]].map(([a,b], i) => (
              <div key={i} className="grid grid-cols-2 gap-3">
                <div className="relative aspect-square overflow-hidden">
                  <img src={a} alt="Before" className="h-full w-full object-cover grayscale" />
                  <div className="absolute top-3 left-3 bg-background px-3 py-1 text-[10px] uppercase tracking-[0.22em]">Before</div>
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <img src={b} alt="After" className="h-full w-full object-cover" />
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 text-[10px] uppercase tracking-[0.22em]">After</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
