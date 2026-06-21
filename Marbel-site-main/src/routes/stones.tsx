import { createFileRoute } from "@tanstack/react-router";
import { SITE, IMG } from "@/lib/site";
import { PageHero, SectionHeader } from "@/components/SectionHeader";
import { MessageCircle } from "lucide-react";

import graniteWall from "@/assets/handicrafts/granite-wall-display.asset.json";
import slabYard from "@/assets/handicrafts/slab-yard.asset.json";
import tilesWhite from "@/assets/handicrafts/tiles-white.asset.json";
import tilesMixed from "@/assets/handicrafts/tiles-mixed.asset.json";
import tilesShowroom from "@/assets/handicrafts/tiles-showroom.asset.json";
import yardStock from "@/assets/handicrafts/yard-stock.asset.json";

export const Route = createFileRoute("/stones")({
  head: () => ({
    meta: [
      { title: "Our Stones & Marble Gallery — Munawar Marbles" },
      { name: "description", content: "Explore our full gallery of marble, granite and onyx slabs and tiles available at Munawar Marbles, Pakistan." },
      { property: "og:title", content: "Our Stones — Munawar Marbles" },
      { property: "og:description", content: "Marble, granite, onyx slabs and tiles — straight from our showroom and yard." },
      { property: "og:image", content: graniteWall.url },
    ],
  }),
  component: Stones,
});

const STONES = [
  {
    img: graniteWall.url,
    name: "Granite Display Wall — Showroom",
    category: "Granite Collection",
    material: "Imported & Pakistani Granite",
    size: "60 × 90 cm sample panels",
    finish: "High-gloss polished",
    desc: "Our in-showroom granite wall showcasing reds, blacks, greys, browns and exotic greens — Tropical Red, Black Galaxy, Steel Grey, Tan Brown, Verde Fountain and more, ready for kitchens, façades and flooring.",
  },
  {
    img: slabYard.url,
    name: "Marble Slab Yard — Bulk Stock",
    category: "Slab Inventory",
    material: "Marble & granite slabs",
    size: "Slabs up to 320 × 180 cm",
    finish: "Polished / honed",
    desc: "Our open yard holds large in-stock quantities of full marble and granite slabs — Ziarat White, Sunny Grey, Black & Gold, Italian Beige and more, ready for immediate cutting and dispatch across Pakistan.",
  },
  {
    img: tilesShowroom.url,
    name: "Showroom — Full Slab Wall",
    category: "Showroom",
    material: "Full range — marble, onyx, engineered",
    size: "Slabs up to 320 × 180 cm",
    finish: "Polished",
    desc: "Inside our Karachi showroom on Manghopir Road: from Magosa White and Crystal Grey to Italian Beige, Hugurus Lava, Anita Cream and Onyx Beige.",
  },
  {
    img: tilesWhite.url,
    name: "White Carrara & Statuario Tiles",
    category: "Wall & Floor Tiles",
    material: "White Marble (imported & Pakistani)",
    size: "60 × 90 cm tiles",
    finish: "High-gloss polish",
    desc: "Bright white marble tiles with delicate grey veining — used for premium flooring, feature walls and bathrooms.",
  },
  {
    img: tilesMixed.url,
    name: "Mixed Marble Display",
    category: "Tiles Showcase",
    material: "White, grey & dark marble blends",
    size: "Custom 60 × 90 cm panels",
    finish: "Polished",
    desc: "Sample wall of our most-requested marble varieties — Carrara, Sunny Grey, Michelangelo, and dark veined accent stones.",
  },
  {
    img: yardStock.url,
    name: "Yard Stock — Floor Tiles",
    category: "Bulk Inventory",
    material: "Beige, white & blue stone tiles",
    size: "Various — bulk pallets",
    finish: "Mixed",
    desc: "Our yard holds large in-stock quantities of standard tile sizes — ready for immediate dispatch across Pakistan.",
  },
];

function Stones() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our Stones — see every piece in our collection."
        image={graniteWall.url}
      />

      <section className="py-24 bg-background">
        <div className="container-x">
          <SectionHeader
            eyebrow="Stones, Slabs & Tiles"
            title="Marble, granite & onyx — straight from our showroom and yard."
            description="A visual tour of our marble and granite varieties, sample walls, full slabs and bulk inventory at Munawar Marbles."
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STONES.map((s, i) => (
              <article
                key={s.name}
                className="bg-secondary border border-border overflow-hidden group animate-float-in"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-7">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-accent">{s.category}</span>
                  <h3 className="mt-3 font-display text-2xl text-primary">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <dl className="mt-5 space-y-2 border-t border-border pt-4 text-xs">
                    {[["Material", s.material], ["Size", s.size], ["Finish", s.finish]].map(([k, v]) => (
                      <div key={k} className="flex gap-3">
                        <dt className="w-20 shrink-0 uppercase tracking-[0.18em] text-muted-foreground">{k}</dt>
                        <dd className="text-foreground/80 flex-1">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-primary link-underline"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> Enquire on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container-x text-center">
          <h2 className="font-display text-3xl md:text-4xl text-primary">Visit our showroom in Karachi — Manghopir Road</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            See, touch and compare every stone in person — or message us on WhatsApp for instant photos and pricing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="btn-whatsapp">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

void IMG;
