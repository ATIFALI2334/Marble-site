import { createFileRoute, Link } from "@tanstack/react-router";
import { IMG } from "@/lib/site";
import { PageHero } from "@/components/SectionHeader";
import { Hammer, Scissors, Palette, HomeIcon, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Installation, Cutting & Custom Design | Munawar Marbles" },
      { name: "description", content: "Professional marble installation, cutting, polishing, custom design and home/commercial consultation across Pakistan." },
      { property: "og:title", content: "Services — Munawar Marbles" },
      { property: "og:description", content: "Installation, cutting, polishing and consultation." },
      { property: "og:image", content: IMG.interior4 },
    ],
  }),
  component: Services,
});

const SERVICES = [
  { icon: Hammer, title: "Marble Installation", desc: "Floor-to-ceiling installation by master fitters — book-matched, level and seamless." },
  { icon: Scissors, title: "Cutting & Polishing", desc: "In-house CNC and waterjet cutting, mirror-polishing, honing and leather finishes." },
  { icon: Palette, title: "Custom Design Solutions", desc: "Bespoke stone furniture, façades, vanities and feature walls — designed to your space." },
  { icon: HomeIcon, title: "Home & Commercial Consultation", desc: "On-site survey, material selection, layout planning and end-to-end project advisory." },
];

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Crafted, cut and installed — under one roof." image={IMG.interior4} />

      <section className="py-24 bg-background">
        <div className="container-x grid md:grid-cols-2 gap-8">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="group border border-border p-10 hover:bg-secondary transition animate-float-in" style={{animationDelay: `${i*80}ms`}}>
              <s.icon className="h-9 w-9 text-primary" />
              <h3 className="mt-6 font-display text-3xl text-primary">{s.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-primary link-underline">
                Request Service <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <img src={IMG.texture} alt="" className="absolute inset-0 h-full w-full object-cover opacity-10" />
        <div className="container-x relative text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl">Our process, simplified.</h2>
          <div className="mt-14 grid sm:grid-cols-4 gap-8 text-left">
            {[
              ["01","Consult","Free site visit & material guidance."],
              ["02","Select","Visit our showroom or order samples."],
              ["03","Craft","Cut, polish and finish in our workshop."],
              ["04","Install","Master installation, on schedule."],
            ].map(([n,t,d]) => (
              <div key={n}>
                <div className="font-display text-4xl text-primary-foreground/40">{n}</div>
                <div className="mt-3 font-medium">{t}</div>
                <div className="mt-2 text-sm text-primary-foreground/70">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
