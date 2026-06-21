export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "max-w-2xl mx-auto text-center" : "max-w-2xl"}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary leading-[1.05]">{title}</h2>
      {description && <p className="mt-5 text-base text-muted-foreground leading-relaxed">{description}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, image }: { eyebrow: string; title: string; image: string }) {
  return (
    <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover animate-slow-zoom" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
      <div className="relative container-x pb-16 text-white animate-float-in">
        <div className="eyebrow text-white/70">{eyebrow}</div>
        <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1.02] max-w-3xl">{title}</h1>
      </div>
    </section>
  );
}
