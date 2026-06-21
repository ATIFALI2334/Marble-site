import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-x py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-display text-2xl">Munawar Marbles</div>
          <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
            Premium marble, granite and onyx — sourced, crafted and installed across Pakistan
            with uncompromising quality.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"
              className="grid h-10 w-10 place-items-center border border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary transition">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href={SITE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"
              className="grid h-10 w-10 place-items-center border border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary transition">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={SITE.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"
              className="grid h-10 w-10 place-items-center border border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary transition">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <div className="eyebrow text-primary-foreground/60">Explore</div>
          <ul className="mt-5 space-y-3 text-sm">
            {[["/about","About"],["/products","Products"],["/projects","Projects"],["/services","Services"],["/blog","Blog"],["/contact","Contact"]].map(([to,l]) => (
              <li key={to}><Link to={to} className="text-primary-foreground/80 hover:text-primary-foreground link-underline">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow text-primary-foreground/60">Collections</div>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
            <li>Imported Marble</li>
            <li>Pakistani Marble</li>
            <li>Granite Collection</li>
            <li>Onyx Marble</li>
            <li>Tiles & Stone</li>
          </ul>
        </div>

        <div>
          <div className="eyebrow text-primary-foreground/60">Contact</div>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0" />{SITE.address}</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0" /><a href={`tel:${SITE.phone}`} className="hover:text-primary-foreground">{SITE.phone}</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0" /><a href={`mailto:${SITE.email}`} className="hover:text-primary-foreground">{SITE.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} Munawar Marbles. Owned by {SITE.owner}.</div>
          <div className="uppercase tracking-[0.22em]">Crafted in Pakistan</div>
        </div>
      </div>
    </footer>
  );
}
