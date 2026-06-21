import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { IMG, SITE } from "@/lib/site";
import { PageHero } from "@/components/SectionHeader";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Munawar Marbles — Get a Quote" },
      { name: "description", content: "Get in touch with Munawar Marbles. WhatsApp, phone, email and showroom location in Pakistan. Request a quote for marble, granite and onyx." },
      { property: "og:title", content: "Contact — Munawar Marbles" },
      { property: "og:description", content: "WhatsApp, phone, email, and showroom." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(20),
  email: z.string().trim().email("Please enter a valid email").max(120),
  message: z.string().trim().min(5, "Please add a short message").max(1000),
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"), phone: fd.get("phone"), email: fd.get("email"), message: fd.get("message"),
    });
    if (!parsed.success) {
      const errs: Record<string,string> = {};
      parsed.error.issues.forEach(i => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's bring your project to life." image={IMG.interior4} />

      <section className="py-24 bg-background">
        <div className="container-x grid lg:grid-cols-5 gap-14">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="eyebrow">Reach Us</div>
              <h2 className="mt-4 font-display text-4xl text-primary">We'd love to hear from you.</h2>
              <p className="mt-4 text-muted-foreground">Whether it's a single countertop or a hotel-scale fit-out — our team will respond within hours.</p>
            </div>
            <div className="space-y-5">
              {[
                { icon: MapPin, label: "Showroom", value: SITE.address, href: SITE.mapsUrl },
                { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone}` },
                { icon: Phone, label: "Landline", value: SITE.landline, href: `tel:${SITE.landline}` },
                { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
                { icon: MessageCircle, label: "WhatsApp", value: "Chat with our team", href: SITE.whatsapp },
              ].map((c) => (
                <a key={c.label} href={c.href || "#"} target={c.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex gap-4 group">
                  <div className="grid h-11 w-11 shrink-0 place-items-center border border-border group-hover:bg-primary group-hover:text-primary-foreground transition">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{c.label}</div>
                    <div className="mt-0.5 text-primary">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
            <div className="flex gap-3 pt-4 border-t border-border">
              <a href={SITE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center border border-border hover:bg-primary hover:text-primary-foreground transition"><Instagram className="h-4 w-4" /></a>
              <a href={SITE.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center border border-border hover:bg-primary hover:text-primary-foreground transition"><Facebook className="h-4 w-4" /></a>
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center border border-border hover:bg-primary hover:text-primary-foreground transition"><MessageCircle className="h-4 w-4" /></a>
            </div>
          </div>

          <div className="lg:col-span-3">
            {sent ? (
              <div className="border border-border p-12 text-center bg-secondary">
                <div className="grid h-14 w-14 mx-auto place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-3xl text-primary">Thank you</h3>
                <p className="mt-3 text-muted-foreground">Your message is with us. Munawar Shah's team will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6 bg-secondary p-8 md:p-12 border border-border">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field name="name" label="Full Name" error={errors.name} />
                  <Field name="phone" label="Phone Number" error={errors.phone} type="tel" />
                </div>
                <Field name="email" label="Email Address" error={errors.email} type="email" />
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">Your Message</label>
                  <textarea name="message" rows={5} maxLength={1000}
                    className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition" />
                  {errors.message && <div className="mt-1.5 text-xs text-destructive">{errors.message}</div>}
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Message <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-secondary pb-24">
        <div className="container-x">
          <div className="aspect-[16/7] w-full overflow-hidden border border-border">
            <iframe
              title="Showroom Map"
              src="https://www.google.com/maps?q=Munawar+Marbles+Manghopir+Road+Karachi&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ name, label, error, type = "text" }: { name: string; label: string; error?: string; type?: string }) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">{label}</label>
      <input name={name} type={type} maxLength={120}
        className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition" />
      {error && <div className="mt-1.5 text-xs text-destructive">{error}</div>}
    </div>
  );
}
