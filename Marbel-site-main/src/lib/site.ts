export const SITE = {
  name: "Munawar Shah Marbles and Tiles Company",
  owner: "Syed Rizwan Shah",
  tagline: "Premium Marble & Granite Solutions in Pakistan",
  phone: "+92 321 3102473",
  landline: "021-36625408",
  email: "munawarshahmarblestiles@gmail.com",
  address: "KS# 62/A, Iqbal Nagar, Islamia Colony, Aurang, Manghopir Road, Karachi West",
  branch: "Manghopir Branch — Karachi",
  mapsUrl: "https://maps.app.goo.gl/yNCpmasTLD74tAXW6",
  whatsappNumber: "923213102473",
  whatsapp: "https://wa.me/923213102473",
  instagram: "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=bfmwzls",
  facebook: "https://www.facebook.com/share/1GLPkV8nKg/",
};

import sealClock from "@/assets/handicrafts/seal-clock.asset.json";
import sealClock2 from "@/assets/handicrafts/seal-clock-2.asset.json";
import elephantClock from "@/assets/handicrafts/elephant-clock.asset.json";
import boatClock from "@/assets/handicrafts/boat-clock.asset.json";
import pavilionClock from "@/assets/handicrafts/pavilion-clock.asset.json";
import dolphinClock from "@/assets/handicrafts/dolphin-clock.asset.json";
import pyramidClock from "@/assets/handicrafts/pyramid-clock.asset.json";

export const HANDICRAFTS = [
  {
    name: "Green Onyx Seal Clock",
    category: "Onyx Handicraft",
    material: "Natural Green Onyx",
    size: "Approx. 5 × 6 inches",
    finish: "Hand-polished, mirror gloss",
    desc: "Hand-carved seal balancing a quartz clock — sculpted from a single block of Pakistani green onyx with natural amber veining.",
    img: sealClock.url,
  },
  {
    name: "Green Onyx Elephant Clock",
    category: "Onyx Handicraft",
    material: "Natural Green Onyx",
    size: "Approx. 4 × 8 inches",
    finish: "Hand-polished",
    desc: "Rearing elephant lifting a quartz clock on its trunk — a symbol of strength and good fortune, carved from solid onyx.",
    img: elephantClock.url,
  },
  {
    name: "Onyx Sailboat Clock",
    category: "Onyx Handicraft",
    material: "Green Onyx with brass fittings",
    size: "Approx. 8 × 7 inches",
    finish: "Polished with brass railing & chain",
    desc: "Sailboat sculpted in onyx with a ship-wheel quartz clock and detailed brass railings — a centerpiece for desks and mantels.",
    img: boatClock.url,
  },
  {
    name: "Black & Gold Marble Pavilion Clock",
    category: "Marble Handicraft",
    material: "Black & Gold Marble (Pakistan)",
    size: "Approx. 12 × 16 inches",
    finish: "High-gloss polish",
    desc: "Architectural pavilion clock with carved columns, domed top and suspended quartz dial — inspired by Mughal mausoleum design.",
    img: pavilionClock.url,
  },
  {
    name: "Green Onyx Dolphin Clock",
    category: "Onyx Handicraft",
    material: "Light Green Onyx",
    size: "Approx. 4 × 7 inches",
    finish: "Mirror polished",
    desc: "Leaping dolphin balancing a clock on its nose — a graceful onyx sculpture cut and polished entirely by hand.",
    img: dolphinClock.url,
  },
  {
    name: "Banded Onyx Pyramid Clock",
    category: "Onyx Handicraft",
    material: "Multi-Banded Onyx",
    size: "Approx. 5 × 5 inches",
    finish: "Polished",
    desc: "Solid pyramid carved from naturally banded onyx with an inset quartz clock — meditative desk piece with unique veining.",
    img: pyramidClock.url,
  },
  {
    name: "Green Onyx Seal Clock — Classic",
    category: "Onyx Handicraft",
    material: "Natural Green Onyx",
    size: "Approx. 5 × 6 inches",
    finish: "Hand-polished",
    desc: "Alternate finish of our signature seal clock — each piece is unique due to natural mineral patterns.",
    img: sealClock2.url,
  },
];

export const IMG = {
  // Hero — dramatic marble slab close-ups
  hero: "https://images.unsplash.com/photo-1597106776019-b4ecc878c202?auto=format&fit=crop&w=2000&q=80",
  hero2: "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?auto=format&fit=crop&w=2000&q=80",

  // Marble & stone slab textures (close-up)
  slab1: "https://images.unsplash.com/photo-1597106776019-b4ecc878c202?auto=format&fit=crop&w=1400&q=80", // white statuario veining
  slab2: "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?auto=format&fit=crop&w=1400&q=80", // calacatta grey veins
  slab3: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1400&q=80", // dark granite
  slab4: "https://images.unsplash.com/photo-1604147706284-1ea0bb71f1ec?auto=format&fit=crop&w=1400&q=80", // honey onyx
  slab5: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1400&q=80", // green marble
  slab6: "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?auto=format&fit=crop&w=1400&q=80", // beige stone tiles
  slab7: "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?auto=format&fit=crop&w=1400&q=80",
  slab8: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1400&q=80", // marble block / quarry

  // Workshop / craft (no bedrooms — marble surfaces, polishing, slabs being cut)
  interior1: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=80", // marble floor + columns
  interior2: "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?auto=format&fit=crop&w=1600&q=80", // marble texture wall
  interior3: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=80", // dark marble surface
  interior4: "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?auto=format&fit=crop&w=1600&q=80", // stone tile finish

  texture: "https://images.unsplash.com/photo-1597106776019-b4ecc878c202?auto=format&fit=crop&w=2000&q=80",
  owner: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
};

// Detailed marble & stone catalogue — slab specifications
import slabAregonWhite from "@/assets/home/slab-aregon-white.jpeg.asset.json";
import tilesWhiteGrey from "@/assets/home/tiles-white-grey.jpeg.asset.json";
import showroomWall from "@/assets/home/showroom-wall.jpeg.asset.json";
import basinPortoro from "@/assets/home/basin-portoro.jpeg.asset.json";
import basinBlackVein from "@/assets/home/basin-black-vein.jpeg.asset.json";
import basinBeigeWall from "@/assets/home/basin-beige-wall.jpeg.asset.json";
import basinTaupe from "@/assets/home/basin-taupe.jpeg.asset.json";
import basinGreyTop from "@/assets/home/basin-grey-top.jpeg.asset.json";
import panoramaGold from "@/assets/yard/panorama-gold.jpeg.asset.json";
import rawBlocks from "@/assets/yard/raw-marble-blocks.jpeg.asset.json";
import showroomBlack from "@/assets/yard/showroom-black-granite.jpeg.asset.json";
import slabsRows from "@/assets/yard/slabs-display-rows.jpeg.asset.json";
import slabsMixed from "@/assets/yard/slabs-mixed-display.jpeg.asset.json";
import tileStacksYard from "@/assets/yard/tile-stacks-yard.jpeg.asset.json";
import workshopPolish from "@/assets/yard/workshop-polishing.jpeg.asset.json";
import chessFossil from "@/assets/gallery/chess-fossil.jpeg.asset.json";

export const MARBLE_DETAILS = [
  {
    name: "Ziarat White",
    origin: "Ziarat, Balochistan, Pakistan",
    type: "Pakistani Marble",
    color: "Soft snowy white with faint grey movement",
    finish: "Polished / Honed / Antique",
    size: "Slabs up to 280 × 160 cm · Tiles 60×60, 60×90, 30×60 cm",
    thickness: "18 mm / 20 mm",
    use: "Flooring, staircases, wall cladding, vanities",
    img: slabAregonWhite.url,
  },
  {
    name: "Magosa White (Aregon White)",
    origin: "Pakistan",
    type: "Pakistani Marble",
    color: "Creamy white with soft beige veining",
    finish: "Polished",
    size: "Slabs up to 290 × 170 cm · Tile cuts on request",
    thickness: "18 mm / 20 mm",
    use: "Premium flooring, hotel lobbies, feature walls",
    img: tilesWhiteGrey.url,
  },
  {
    name: "Sunny Grey",
    origin: "Chitral, KPK, Pakistan",
    type: "Pakistani Marble",
    color: "Warm grey with golden mineral streaks",
    finish: "Polished / Honed",
    size: "Slabs up to 280 × 160 cm",
    thickness: "18 mm / 20 mm",
    use: "Floors, bathrooms, feature walls, countertops",
    img: slabsRows.url,
  },
  {
    name: "Crystal Grey",
    origin: "Pakistan",
    type: "Pakistani Marble",
    color: "Light grey with crystalline white veins",
    finish: "High-gloss polish",
    size: "Slabs up to 270 × 160 cm",
    thickness: "18 mm / 20 mm",
    use: "Wall panels, vanities, modern interiors",
    img: showroomWall.url,
  },
  {
    name: "Black & Gold Marble",
    origin: "Balochistan, Pakistan",
    type: "Pakistani Marble",
    color: "Deep black with bold gold veining",
    finish: "Mirror polished",
    size: "Slabs up to 260 × 150 cm",
    thickness: "18 mm / 20 mm",
    use: "Feature walls, reception desks, luxury vanities",
    img: basinPortoro.url,
  },
  {
    name: "Verona Beige (Botticino-style)",
    origin: "KPK, Pakistan",
    type: "Pakistani Marble",
    color: "Warm beige with cream tones",
    finish: "Polished",
    size: "Slabs up to 280 × 160 cm · Tiles 60×60 / 60×90 cm",
    thickness: "18 mm / 20 mm",
    use: "Residential floors, exterior cladding, stairs",
    img: basinBeigeWall.url,
  },
  {
    name: "Italian Beige",
    origin: "Italy",
    type: "Imported Marble",
    color: "Soft beige with subtle veining",
    finish: "Polished / Honed",
    size: "Slabs up to 320 × 180 cm",
    thickness: "18 mm / 20 mm / 30 mm",
    use: "Luxury flooring, lobbies, vanity tops",
    img: basinTaupe.url,
  },
  {
    name: "Statuario White",
    origin: "Carrara, Italy",
    type: "Imported Marble",
    color: "Bright white with bold grey veining",
    finish: "Polished / Honed",
    size: "Slabs up to 320 × 180 cm",
    thickness: "18 mm / 20 mm / 30 mm",
    use: "Floors, walls, vanities, feature panels",
    img: tilesWhiteGrey.url,
  },
  {
    name: "Calacatta Gold",
    origin: "Tuscany, Italy",
    type: "Imported Marble",
    color: "Warm white with dramatic gold-grey veins",
    finish: "Polished",
    size: "Slabs up to 320 × 180 cm",
    thickness: "20 mm / 30 mm",
    use: "Luxury kitchens, hotel lobbies, book-matched walls",
    img: panoramaGold.url,
  },
  {
    name: "Carrara White",
    origin: "Carrara, Italy",
    type: "Imported Marble",
    color: "Soft white with feathery grey veins",
    finish: "Polished / Honed",
    size: "Slabs up to 300 × 170 cm · Tiles 60×60 / 60×90 cm",
    thickness: "18 mm / 20 mm",
    use: "Bathrooms, floors, classical interiors",
    img: tilesWhiteGrey.url,
  },
  {
    name: "Michelangelo Marble",
    origin: "Italy",
    type: "Imported Marble",
    color: "White with elegant grey-gold veining",
    finish: "Polished",
    size: "Slabs up to 300 × 170 cm",
    thickness: "20 mm",
    use: "Statement walls, lobbies, vanities",
    img: slabsMixed.url,
  },
  {
    name: "Botticino Classico",
    origin: "Brescia, Italy",
    type: "Imported Marble",
    color: "Warm beige with fine cream veining",
    finish: "Polished",
    size: "Slabs up to 300 × 170 cm",
    thickness: "20 mm / 30 mm",
    use: "Flooring, columns, classical projects",
    img: basinBeigeWall.url,
  },
  {
    name: "Anita Cream",
    origin: "Pakistan",
    type: "Pakistani Marble",
    color: "Soft cream with light vein flow",
    finish: "Polished / Honed",
    size: "Slabs up to 270 × 160 cm",
    thickness: "18 mm / 20 mm",
    use: "Floors, walls, traditional interiors",
    img: basinBeigeWall.url,
  },
  {
    name: "Hugurus Lava",
    origin: "Pakistan",
    type: "Pakistani Marble",
    color: "Charcoal with bronze and rust veining",
    finish: "Polished",
    size: "Slabs up to 260 × 150 cm",
    thickness: "18 mm / 20 mm",
    use: "Feature walls, fireplaces, statement floors",
    img: basinBlackVein.url,
  },
  {
    name: "Tavera Marble",
    origin: "Pakistan",
    type: "Pakistani Marble",
    color: "Warm cream-yellow with light veining",
    finish: "Polished",
    size: "Slabs up to 280 × 160 cm",
    thickness: "18 mm / 20 mm",
    use: "Floors, cladding, residential interiors",
    img: rawBlocks.url,
  },
  {
    name: "Fossil / Travertine",
    origin: "Pakistan / Turkey",
    type: "Travertine",
    color: "Honey-beige with natural fossil patterning",
    finish: "Honed / Filled / Brushed",
    size: "Slabs up to 280 × 160 cm · Tiles 30×60 / 60×60 cm",
    thickness: "18 mm / 20 mm",
    use: "Exterior cladding, pool decks, rustic floors",
    img: chessFossil.url,
  },
  {
    name: "Onyx Beige",
    origin: "Pakistan / Iran",
    type: "Onyx",
    color: "Translucent beige with caramel veins",
    finish: "Polished, back-lit ready",
    size: "Slabs up to 260 × 150 cm",
    thickness: "18 mm (resin reinforced)",
    use: "Back-lit walls, bar fronts, reception desks",
    img: basinTaupe.url,
  },
  {
    name: "Honey Onyx",
    origin: "Iran / Turkey",
    type: "Onyx",
    color: "Translucent amber-honey with flowing veins",
    finish: "Polished, back-lit ready",
    size: "Slabs up to 260 × 150 cm",
    thickness: "18 mm (resin reinforced)",
    use: "Back-lit walls, luxury bars, vanities",
    img: panoramaGold.url,
  },
  {
    name: "Green Onyx",
    origin: "Pakistan",
    type: "Onyx",
    color: "Deep emerald green with crystalline veining",
    finish: "Polished",
    size: "Slabs up to 240 × 140 cm",
    thickness: "18 mm",
    use: "Feature walls, table tops, luxury bathrooms",
    img: basinGreyTop.url,
  },
  {
    name: "White Onyx",
    origin: "Pakistan / Iran",
    type: "Onyx",
    color: "Milky white with subtle golden translucency",
    finish: "Polished, back-lit ready",
    size: "Slabs up to 250 × 150 cm",
    thickness: "18 mm",
    use: "Back-lit panels, vanity tops, sculptural pieces",
    img: tilesWhiteGrey.url,
  },
  {
    name: "Black Galaxy Granite",
    origin: "Andhra Pradesh, India",
    type: "Granite",
    color: "Deep black with golden mineral specks",
    finish: "Mirror polished / Flamed / Leather",
    size: "Slabs up to 290 × 160 cm · Tiles 30×60 / 60×60 cm",
    thickness: "18 mm / 20 mm / 30 mm",
    use: "Kitchen counters, commercial floors, façades",
    img: showroomBlack.url,
  },
  {
    name: "Tropical Brown Granite",
    origin: "Quarried import",
    type: "Granite",
    color: "Brown with dark grain pattern",
    finish: "Polished / Leather",
    size: "Slabs up to 280 × 160 cm",
    thickness: "20 mm / 30 mm",
    use: "Countertops, façades, high-traffic flooring",
    img: workshopPolish.url,
  },
  {
    name: "Tan Brown Granite",
    origin: "India",
    type: "Granite",
    color: "Rich brown-black with copper flecks",
    finish: "Polished",
    size: "Slabs up to 290 × 160 cm",
    thickness: "20 mm / 30 mm",
    use: "Kitchen tops, stairs, exterior cladding",
    img: showroomBlack.url,
  },
  {
    name: "Steel Grey Granite",
    origin: "India",
    type: "Granite",
    color: "Uniform steel grey with fine black grain",
    finish: "Polished / Flamed",
    size: "Slabs up to 290 × 160 cm",
    thickness: "20 mm / 30 mm",
    use: "Countertops, façades, paving",
    img: tileStacksYard.url,
  },
  {
    name: "Tropical Red Granite",
    origin: "Quarried import",
    type: "Granite",
    color: "Deep red with black & grey speckles",
    finish: "Mirror polished",
    size: "Slabs up to 280 × 160 cm",
    thickness: "20 mm / 30 mm",
    use: "Monuments, façades, feature floors",
    img: rawBlocks.url,
  },
  {
    name: "Verde Fountain Granite",
    origin: "Imported",
    type: "Granite",
    color: "Forest green with white & black speckles",
    finish: "Polished",
    size: "Slabs up to 280 × 160 cm",
    thickness: "20 mm",
    use: "Countertops, vanities, statement walls",
    img: slabsMixed.url,
  },
];
