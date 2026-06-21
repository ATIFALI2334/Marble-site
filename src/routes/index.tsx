import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Star, Quote, ShieldCheck, Hammer, Award, Truck } from "lucide-react";
import { SITE } from "@/lib/site";
import { SectionHeader } from "@/components/SectionHeader";

import basinBeige from "@/assets/home/basin-beige.jpeg.asset.json";
import basinTaupe from "@/assets/home/basin-taupe.jpeg.asset.json";
import basinGreyTop from "@/assets/home/basin-grey-top.jpeg.asset.json";
import basinGreyCyl from "@/assets/home/basin-grey-cyl.jpeg.asset.json";
import basinBlackVein from "@/assets/home/basin-black-vein.jpeg.asset.json";
import basinBeigeWall from "@/assets/home/basin-beige-wall.jpeg.asset.json";
import basinPortoro from "@/assets/home/basin-portoro.jpeg.asset.json";
import slabAregon from "@/assets/home/slab-aregon-white.jpeg.asset.json";

import tilesWhiteGrey from "@/assets/home/tiles-white-grey.jpeg.asset.json";

import chessWhiteBlack from "@/assets/gallery/chess-white-black.jpeg.asset.json";
import chessPair from "@/assets/gallery/chess-pair.jpeg.asset.json";
import chessFossil from "@/assets/gallery/chess-fossil.jpeg.asset.json";
import basinBlackGlossy from "@/assets/gallery/basin-black-glossy.jpeg.asset.json";
import basinGreyCloud from "@/assets/gallery/basin-grey-cloud.jpeg.asset.json";
import basinMocha from "@/assets/gallery/basin-mocha.jpeg.asset.json";
import basinBlackVeined from "@/assets/gallery/basin-black-veined.jpeg.asset.json";
import basinPortoroLarge from "@/assets/gallery/basin-portoro-large.jpeg.asset.json";
import basinChiseledCream from "@/assets/gallery/basin-chiseled-cream.jpeg.asset.json";
import basinBlackShadow from "@/assets/gallery/basin-black-shadow.jpeg.asset.json";

// New yard / workshop photos
import tileStacksShop from "@/assets/yard/tile-stacks-shop.jpeg.asset.json";
import tileStacksYard from "@/assets/yard/tile-stacks-yard.jpeg.asset.json";
import slabsStreet from "@/assets/yard/slabs-street.jpeg.asset.json";
import slabsDisplayRows from "@/assets/yard/slabs-display-rows.jpeg.asset.json";
import showroomBlackGranite from "@/assets/yard/showroom-black-granite.jpeg.asset.json";
import panoramaGold from "@/assets/yard/panorama-gold.jpeg.asset.json";
import slabsMixedDisplay from "@/assets/yard/slabs-mixed-display.jpeg.asset.json";
import rawMarbleBlocks from "@/assets/yard/raw-marble-blocks.jpeg.asset.json";
import tileStacksSakhi from "@/assets/yard/tile-stacks-sakhi.jpeg.asset.json";
import workshopPolishing from "@/assets/yard/workshop-polishing.jpeg.asset.json";

const PROJECT_GALLERY = [
  { img: chessFossil.url, name: "Fossil Marble Chess Board", desc: "Hand-crafted fossil & red onyx chess set with carved pieces." },
  { img: chessWhiteBlack.url, name: "White & Onyx Chess Set", desc: "White marble board with onyx amber squares and dual-tone pieces." },
  { img: chessPair.url, name: "Chess Collection", desc: "Studio shots of our handcrafted marble chess sets." },
  { img: basinChiseledCream.url, name: "Chiseled Cream Basin", desc: "Rustic chiseled exterior with smooth honed interior." },
  { img: basinMocha.url, name: "Mocha Stone Basin", desc: "Warm taupe-mocha marble vessel sink, mirror polished." },
  { img: basinGreyCloud.url, name: "Cloud Grey Basin", desc: "Cylindrical grey & white cloud-pattern marble basin." },
  { img: basinPortoroLarge.url, name: "Portoro Black & Gold Basin", desc: "Statement vessel sink in Portoro black & gold marble." },
  { img: basinBlackVeined.url, name: "Nero Marquina Basin", desc: "Black marble basin with delicate white veining." },
  { img: basinBlackGlossy.url, name: "Onyx Black Basin", desc: "High-gloss black marble basin, contemporary form." },
  { img: basinBlackShadow.url, name: "Black Shadow Basin", desc: "Polished black stone basin with subtle grey movement." },
];

const YARD_GALLERY = [
  { img: tileStacksShop.url, name: "Tile Stacks — Main Shop", desc: "Freshly cut grey marble tiles stacked at our main shop entrance." },
  { img: tileStacksYard.url, name: "Open Yard Inventory", desc: "Thousands of square feet of tiles ready for dispatch nationwide." },
  { img: rawMarbleBlocks.url, name: "Raw White Marble Blocks", desc: "Direct-from-quarry Ziarat white marble blocks under our gantry crane." },
  { img: slabsStreet.url, name: "Slab Yard — Street Side", desc: "Imported and Pakistani slabs displayed for client selection." },
  { img: slabsDisplayRows.url, name: "Cream & Beige Slab Rows", desc: "Verona beige, Sahara and Ziarat slabs in our outdoor display." },
  { img: showroomBlackGranite.url, name: "Black Granite Showroom", desc: "Premium black granite, Galaxy and grey marble — covered showroom." },
  { img: panoramaGold.url, name: "Panorama Gold Marble", desc: "Exclusive Panorama Gold — black & gold artistic marble panel." },
  { img: slabsMixedDisplay.url, name: "Mixed Slab Display", desc: "Beige, grey and patterned marble slabs side-by-side." },
  { img: tileStacksSakhi.url, name: "Sakhi Hasan Branch", desc: "Tile inventory at our Sakhi Hasan location, Karachi." },
  { img: workshopPolishing.url, name: "In-house Polishing Workshop", desc: "Our craftsmen edge-polishing marble on rotary machines." },
];

const GALLERY = [
  tileStacksShop.url, rawMarbleBlocks.url, slabsDisplayRows.url, showroomBlackGranite.url,
  panoramaGold.url, slabsMixedDisplay.url, tileStacksYard.url, slabsStreet.url,
  basinBeige.url, basinTaupe.url, basinGreyTop.url, basinGreyCyl.url,
  basinBlackVein.url, basinBeigeWall.url, basinPortoro.url, tilesWhiteGrey.url,
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — Premium Marble & Granite in Pakistan` },
      { name: "description", content: "Premium marble, granite, onyx and luxury stone in Pakistan. Imported and Pakistani slabs, expert cutting, polishing and installation." },
      { property: "og:title", content: `${SITE.name} — Premium Stone in Pakistan` },
      { property: "og:description", content: "Pakistan's trusted source for premium marble, granite and onyx." },
      { property: "og:image", content: tileStacksShop.url },
    ],
  }),
  component: Home,
});

const PRODUCTS = [
  { name: "Marble Wash Basins", img: basinBeige.url, desc: "Hand-carved beige & taupe stone basins" },
  { name: "Designer Tiles", img: tilesWhiteGrey.url, desc: "White Carrara & grey marble tiles" },
  { name: "Premium Slabs", img: slabAregon.url, desc: "Aregon White & exclusive stone slabs" },
  { name: "Portoro & Black Gold", img: basinPortoro.url, desc: "Luxury black & gold marble pieces" },
];

const TESTIMONIALS = [
  { name: "Ahmed Raza", role: "Architect, Lahore", text: "The craftsmanship is unmatched. Munawar's team delivered our hotel lobby with flawless book-matched marble." },
  { name: "Sana Khan", role: "Homeowner, Islamabad", text: "Beautiful Ziarat White flooring across our villa. Honest pricing and immaculate finish." },
  { name: "Bilal Sheikh", role: "Developer, Karachi", text: "We've used Munawar Marbles for three commercial towers. Consistent quality and on-time delivery." },
];

const FEATURES = [
  { icon: Award, title: "6+ Years of Craft", text: "Six years of stone expertise across Pakistan." },
  { icon: ShieldCheck, title: "Guaranteed Quality", text: "Hand-selected slabs from quarries worldwide." },
  { icon: Hammer, title: "Master Installation", text: "In-house cutting, polishing and fitting team." },
  { icon: Truck, title: "Nationwide Delivery", text: "Logistics across all major cities in Pakistan." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img src={tileStacksShop.url} alt="Munawar Marbles — premium marble tile inventory in Pakistan" className="absolute inset-0 h-full w-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/55 to-primary/20" />
        <div className="relative container-x py-32 text-white animate-float-in">
          <div className="eyebrow text-white/70">Established in Pakistan</div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[1] max-w-4xl">
            Premium Marble & Granite Solutions in Pakistan
          </h1>
          <p className="mt-8 max-w-xl text-lg text-white/80 leading-relaxed">
            Hand-selected slabs, master craftsmanship and luxury finishes — for residences,
            hotels and landmark projects across the country.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-px"
              style={{ background: "white", color: "var(--primary)" }}>
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="btn-whatsapp">
              <MessageCircle className="h-4 w-4" /> Contact on WhatsApp
            </a>
          </div>
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl border-t border-white/20 pt-8">
            {[["6+","Years"],["500+","Projects"],["50+","Stone Varieties"]].map(([n,l]) => (
              <div key={l}>
                <div className="font-display text-3xl md:text-4xl">{n}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/60">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-28 bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={slabAregon.url} alt="Aregon White marble slab" className="w-full h-[560px] object-cover" />
            <div className="absolute -bottom-8 -right-8 hidden md:block bg-primary text-primary-foreground px-8 py-6">
              <div className="font-display text-3xl">Since 2020</div>
              <div className="text-xs uppercase tracking-[0.22em] mt-1 text-primary-foreground/70">Crafting Stone</div>
            </div>
          </div>
          <div>
            <div className="eyebrow">About the House</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary leading-[1.05]">
              A legacy carved in stone, for the homes of Pakistan.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Founded by <strong className="text-primary font-medium">Syed Rizwan Shah</strong>, our workshop has spent
              six years sourcing the world's finest marble and granite — from Carrara to Ziarat —
              and finishing each piece by hand for projects that demand permanence and poise.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center border border-border text-primary">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium text-primary">{f.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{f.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-outline mt-10 inline-flex">Our Story <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-28 bg-secondary">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <SectionHeader
              align="left"
              eyebrow="The Collections"
              title="Featured stone, hand-picked for Pakistan."
              description="From the quiet veining of Calacatta to the depth of Black Galaxy granite — explore our most requested slabs."
            />
            <Link to="/products" className="btn-outline shrink-0">View All <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((p, i) => (
              <Link key={p.name} to="/products" className="group block animate-float-in" style={{ animationDelay: `${i*100}ms` }}>
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
                <div className="mt-5">
                  <h3 className="font-display text-xl text-primary">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT GALLERY — featured marble work */}
      <section className="py-28 bg-background">
        <div className="container-x">
          <SectionHeader
            eyebrow="Project Gallery"
            title="Signature marble work by Syed Rizwan Shah."
            description="A selection of hand-crafted basins, chess sets and stone pieces shipped across Pakistan."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECT_GALLERY.map((p, i) => (
              <article key={p.name} className="group animate-float-in" style={{ animationDelay: `${i*60}ms` }}>
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="mt-5">
                  <h3 className="font-display text-xl text-primary">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <a
                    href={`${SITE.whatsapp}?text=${encodeURIComponent(`Hello Munawar, I'm interested in: ${p.name}`)}`}
                    target="_blank" rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-primary hover:opacity-70"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> Enquire on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* YARD & WORKSHOP */}
      <section className="py-28 bg-background">
        <div className="container-x">
          <SectionHeader eyebrow="Our Yard & Workshop" title="Direct from quarry to your project." />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {YARD_GALLERY.map((y, i) => (
              <article key={y.name} className="group bg-card border border-border overflow-hidden animate-float-in" style={{ animationDelay: `${i * 60}ms` }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={y.img} alt={y.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="font-display text-lg text-primary">{y.name}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{y.desc}</p>
                  <a
                    href={`${SITE.whatsapp}?text=${encodeURIComponent(`Hello Munawar Shah, I'm interested in: ${y.name}`)}`}
                    target="_blank" rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-primary hover:opacity-70"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> Enquire on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWROOM MOSAIC */}
      <section className="py-28 bg-secondary">
        <div className="container-x">
          <SectionHeader eyebrow="Inside the Showroom" title="Where our stone now lives." />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY.map((img, i) => (
              <div key={i} className={`relative overflow-hidden ${i % 5 === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}>
                <img src={img} alt="" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-outline">Explore Projects <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <img src={slabAregon.url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-10" />
        <div className="container-x relative">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow text-primary-foreground/60">Client Voices</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Trusted by Pakistan's finest builders.</h2>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-primary-foreground/5 border border-primary-foreground/10 p-8 backdrop-blur-sm">
                <Quote className="h-7 w-7 text-primary-foreground/30" />
                <p className="mt-5 text-primary-foreground/90 leading-relaxed">"{t.text}"</p>
                <div className="mt-6 flex gap-0.5">
                  {Array.from({length:5}).map((_,i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                </div>
                <div className="mt-4">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60 mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-background">
        <div className="container-x text-center max-w-3xl mx-auto">
          <div className="eyebrow">Start Your Project</div>
          <h2 className="mt-4 font-display text-4xl md:text-6xl text-primary leading-[1.05]">
            Bring timeless stone into your space.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Speak with our team for a personalised consultation, sample selection and on-site survey.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary">Request a Quote <ArrowRight className="h-4 w-4" /></Link>
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="btn-whatsapp">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
