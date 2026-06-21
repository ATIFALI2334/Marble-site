import { createFileRoute } from "@tanstack/react-router";
import { IMG } from "@/lib/site";
import { PageHero } from "@/components/SectionHeader";
import { Calendar, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Marble Care, Design & Trends | Munawar Marbles" },
      { name: "description", content: "Marble care tips, interior design ideas, and the latest marble trends in Pakistan from the team at Munawar Marbles." },
      { property: "og:title", content: "Journal — Munawar Marbles" },
      { property: "og:description", content: "Care tips, design ideas and marble trends." },
      { property: "og:image", content: IMG.interior2 },
    ],
  }),
  component: Blog,
});

const POSTS = [
  { title: "How to Care for Marble Floors in Pakistani Homes", date: "May 12, 2026", cat: "Care Tips", img: IMG.interior2, excerpt: "From daily cleaning to long-term sealing — keep your marble flawless through monsoon and summer." },
  { title: "5 Interior Design Ideas Using Onyx Backlit Walls", date: "April 28, 2026", cat: "Design", img: IMG.slab4, excerpt: "How designers in Lahore and Karachi are using onyx to create dramatic, glowing feature walls." },
  { title: "Marble Trends 2026: What's Dominating Pakistani Interiors", date: "April 15, 2026", cat: "Trends", img: IMG.interior1, excerpt: "Warm beiges, dramatic veining and large-format slabs — the looks defining the year." },
  { title: "Choosing Between Marble and Granite for Kitchen Counters", date: "March 30, 2026", cat: "Buying Guide", img: IMG.slab3, excerpt: "A practical comparison for Pakistani kitchens — heat, stain and budget considerations." },
  { title: "Ziarat White vs Carrara: A Pakistani Alternative?", date: "March 18, 2026", cat: "Comparison", img: IMG.slab2, excerpt: "Why our local Ziarat White is winning architects looking for elegance at a lower cost." },
  { title: "Polishing & Restoration: Bringing Old Marble Back to Life", date: "March 02, 2026", cat: "Care Tips", img: IMG.slab5, excerpt: "Step-by-step on what restoration involves and when it's the right call." },
];

function Blog() {
  return (
    <>
      <PageHero eyebrow="Journal" title="Notes on stone, design and Pakistani interiors." image={IMG.interior2} />

      <section className="py-24 bg-background">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {POSTS.map((p, i) => (
            <article key={p.title} className="group animate-float-in" style={{animationDelay: `${i*60}ms`}}>
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  <span>{p.cat}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" />{p.date}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl text-primary leading-tight group-hover:text-accent transition">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                <button className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-primary link-underline">
                  Read Article <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
