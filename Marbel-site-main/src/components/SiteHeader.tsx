import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home", ur: "صفحۂ اول" },
  { to: "/about", label: "About", ur: "تعارف" },
  { to: "/products", label: "Products", ur: "مصنوعات" },
  { to: "/stones", label: "Our Stones", ur: "ہمارے پتھر" },
  { to: "/projects", label: "Projects", ur: "منصوبے" },
  { to: "/services", label: "Services", ur: "خدمات" },
  { to: "/blog", label: "Blog", ur: "بلاگ" },
  { to: "/contact", label: "Contact", ur: "رابطہ" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"en" | "ur">("en");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center border border-primary">
            <span className="font-display text-xl leading-none text-primary">M</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg text-primary">Munawar Marbles</div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">& Granite</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[12px] uppercase tracking-[0.22em] text-foreground/80 transition-colors hover:text-primary link-underline"
              activeProps={{ className: "text-primary" }}
            >
              {lang === "en" ? item.label : item.ur}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "en" ? "ur" : "en")}
            className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-primary transition"
            aria-label="Toggle language"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "en" ? "اردو" : "EN"}
          </button>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="btn-primary text-[11px] px-5 py-2.5">
            Get a Quote
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden grid h-10 w-10 place-items-center text-primary"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container-x py-6 flex flex-col gap-5">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.22em] text-foreground/80"
                activeProps={{ className: "text-primary" }}
              >
                {lang === "en" ? item.label : item.ur}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => setLang(lang === "en" ? "ur" : "en")}
                className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
              >
                <Globe className="inline h-3.5 w-3.5 mr-1" />
                {lang === "en" ? "اردو" : "EN"}
              </button>
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="btn-primary text-[11px] px-5 py-2.5">
                Get a Quote
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
