import { createFileRoute, Link } from "@tanstack/react-router";
import { IMG, SITE, MARBLE_DETAILS, HANDICRAFTS } from "@/lib/site";
import { PageHero, SectionHeader } from "@/components/SectionHeader";
import { ArrowRight, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Marble, Granite & Onyx | Munawar Marbles" },
      { name: "description", content: "Explore our full collection: imported marble, Pakistani marble, granite, onyx and stone tiles. HD images, descriptions and specifications." },
      { property: "og:title", content: "Marble & Granite Collections — Munawar Marbles" },
      { property: "og:description", content: "Imported & Pakistani marble, granite, onyx and tiles." },
      { property: "og:image", content: IMG.slab1 },
    ],
  }),
  component: Products,
});

const COLLECTIONS = [
  {
    name: "Imported Marble",
    img: IMG.slab1,
    desc: "Calacatta, Statuario, Carrara, Botticino — sourced directly from the historic quarries of Italy and Turkey.",
    specs: ["Slab size up to 320 × 180 cm", "Thickness 18–30 mm", "Polished, honed & leather finish"],
  },
  {
    name: "Pakistani Marble",
    img: IMG.slab2,
    desc: "Ziarat White, Verona Beige, Tavera, Sunny Grey — the finest of Pakistan's own quarries.",
    specs: ["Locally quarried in Balochistan & KPK", "Custom sizes available", "Polished or antique finish"],
  },
  {
    name: "Granite Collection",
    img: IMG.slab3,
    desc: "Black Galaxy, Tropical Brown, Ubatuba, Steel Grey — engineered for high-traffic and commercial use.",
    specs: ["Heat & scratch resistant", "Ideal for countertops & floors", "20+ varieties in stock"],
  },
  {
    name: "Onyx Marble",
    img: IMG.slab4,
    desc: "Honey, white, green and red onyx — translucent stones perfect for back-lit feature walls and bars.",
    specs: ["Back-lit translucent quality", "Book-matched panels", "Custom resin reinforcement"],
  },
  {
    name: "Tiles & Stone Products",
    img: IMG.slab5,
    desc: "Mosaics, borders, skirting, wall cladding and bespoke stone furniture — finished to order.",
    specs: ["Custom mosaic patterns", "Outdoor & indoor grades", "CNC waterjet capabilities"],
  },
];

function Products() {
  return (
    <>
      <PageHero eyebrow="Collections" title="Every stone, every finish — one trusted source." image={IMG.slab1} />

      <section className="py-24 bg-background">
        <div className="container-x space-y-28">
          {COLLECTIONS.map((c, i) => (
            <div key={c.name} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img src={c.img} alt={c.name} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div>
                <div className="eyebrow">Collection 0{i+1}</div>
                <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary leading-[1.05]">{c.name}</h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">{c.desc}</p>
                <ul className="mt-8 space-y-3 border-t border-border pt-6">
                  {c.specs.map((s) => (
                    <li key={s} className="flex gap-3 text-sm">
                      <span className="text-accent">—</span>
                      <span className="text-foreground/80">{s}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link to="/stones" className="btn-primary">View Our Stones / Marble <ArrowRight className="h-4 w-4" /></Link>
                  <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="btn-outline">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed marble catalogue */}
      <section className="py-28 bg-secondary">
        <div className="container-x">
          <SectionHeader
            eyebrow="Stone Catalogue"
            title="Marble & stone — full specifications."
            description="Each slab in our inventory, with origin, finish, dimensions and recommended use."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MARBLE_DETAILS.map((m, i) => (
              <article key={m.name} className="bg-background border border-border overflow-hidden group animate-float-in" style={{ animationDelay: `${i * 60}ms` }}>
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={m.img} alt={m.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-accent">{m.type}</span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{m.origin}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl text-primary">{m.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.color}</p>
                  <dl className="mt-5 space-y-2 border-t border-border pt-4 text-xs">
                    {[
                      ["Finish", m.finish],
                      ["Slab Size", m.size],
                      ["Thickness", m.thickness],
                      ["Best For", m.use],
                    ].map(([k, v]) => (
                      <div key={k} className="flex gap-3">
                        <dt className="w-20 shrink-0 uppercase tracking-[0.18em] text-muted-foreground">{k}</dt>
                        <dd className="text-foreground/80 flex-1">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <a href={SITE.whatsapp} target="_blank" rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-primary link-underline">
                    Enquire on WhatsApp <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Handicrafts — onyx clocks & marble basins */}
      <section className="py-28 bg-background">
        <div className="container-x">
          <SectionHeader
            eyebrow="Handicrafts & Bespoke"
            title="Onyx clocks, sculpted basins, master-carved keepsakes."
            description="Beyond slabs, our atelier produces hand-carved onyx and marble objects — clocks, vessel sinks, and sculptural pieces shaped from single blocks of Pakistani stone."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HANDICRAFTS.map((h, i) => (
              <article key={h.name} className="bg-secondary border border-border overflow-hidden group animate-float-in" style={{ animationDelay: `${i * 60}ms` }}>
                <div className="aspect-square overflow-hidden bg-muted">
                  <img src={h.img} alt={h.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-7">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-accent">{h.category}</span>
                  <h3 className="mt-3 font-display text-2xl text-primary">{h.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                  <dl className="mt-5 space-y-2 border-t border-border pt-4 text-xs">
                    {[["Material", h.material], ["Size", h.size], ["Finish", h.finish]].map(([k, v]) => (
                      <div key={k} className="flex gap-3">
                        <dt className="w-20 shrink-0 uppercase tracking-[0.18em] text-muted-foreground">{k}</dt>
                        <dd className="text-foreground/80 flex-1">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <a href={SITE.whatsapp} target="_blank" rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-primary link-underline">
                    Order on WhatsApp <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
