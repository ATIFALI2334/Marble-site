import { createFileRoute } from "@tanstack/react-router";
import { IMG } from "@/lib/site";
import { PageHero, SectionHeader } from "@/components/SectionHeader";
import { Target, Eye, Award, Users, Globe2, Sparkles } from "lucide-react";
import founderImg from "@/assets/team/syed-rizwan-shah.jpeg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Munawar Marbles — Our Story" },
      { name: "description", content: "Six years of marble craftsmanship in Pakistan. Meet Syed Rizwan Shah and learn about our mission to bring premium stone to every home." },
      { property: "og:title", content: "About — Munawar Marbles" },
      { property: "og:description", content: "Pakistan's trusted premium marble & granite house, led by Syed Rizwan Shah." },
      { property: "og:image", content: IMG.interior2 },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="A house built on stone, trust and craft." image={IMG.interior2} />

      <section className="py-28 bg-background">
        <div className="container-x grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <div className="eyebrow">Our Story</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary leading-[1.05]">
              From a small workshop to Pakistan's premium stone house.
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>Munawar Marbles was founded in 2020 with one simple idea — that every Pakistani home and project deserves access to the world's finest stone, finished by the country's most skilled craftsmen.</p>
              <p>What began as a single workshop has grown into a fully integrated operation: sourcing slabs from Italy, Turkey, Brazil and the storied quarries of Ziarat and Chagai, then cutting, polishing and installing them in homes, hotels and commercial landmarks across Pakistan.</p>
              <p>Today, under Syed Rizwan Shah's leadership, we remain a family business — obsessive about quality, transparent on price, and devoted to the lasting beauty of natural stone.</p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <img src={founderImg.url} alt="Syed Rizwan Shah, founder" className="w-full h-[520px] object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground p-6">
                <div className="font-display text-2xl">Syed Rizwan Shah</div>
                <div className="text-xs uppercase tracking-[0.22em] mt-1 text-primary-foreground/70">Founder & Owner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-secondary">
        <div className="container-x grid md:grid-cols-2 gap-10">
          {[
            { icon: Target, t: "Our Mission", d: "To make premium natural stone accessible across Pakistan — paired with master craftsmanship and complete transparency." },
            { icon: Eye, t: "Our Vision", d: "To be the most trusted marble and granite house in the region — known for quality, integrity, and lasting client relationships." },
          ].map((b) => (
            <div key={b.t} className="bg-background p-10 border border-border">
              <b.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-6 font-display text-3xl text-primary">{b.t}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 bg-background">
        <div className="container-x">
          <SectionHeader eyebrow="Why Choose Us" title="The details that set us apart." />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, t: "Premium Sourcing", d: "Direct relationships with quarries in Italy, Turkey, Brazil and Pakistan." },
              { icon: Sparkles, t: "Master Craftsmanship", d: "Hand-polished finishes, perfect book-matching, precise installation." },
              { icon: Users, t: "Personal Service", d: "Direct access to Syed Rizwan Shah and our senior team on every project." },
              { icon: Globe2, t: "Nationwide Reach", d: "Delivery and installation across all major cities in Pakistan." },
            ].map((f) => (
              <div key={f.t}>
                <f.icon className="h-7 w-7 text-primary" />
                <h4 className="mt-5 font-display text-xl text-primary">{f.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
