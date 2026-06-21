import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-primary">404</h1>
        <p className="mt-4 text-muted-foreground">This page doesn't exist.</p>
        <Link to="/" className="btn-primary mt-8 inline-flex">Return Home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-primary">Something went wrong</h1>
        <p className="mt-3 text-sm text-muted-foreground">Please try again.</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary mt-6">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Munawar Marbles — Premium Marble & Granite in Pakistan" },
      { name: "description", content: "Munawar Marbles — Pakistan's trusted source for imported marble, granite, onyx and luxury stone. Crafted, polished and installed nationwide." },
      { name: "author", content: "Munawar Marbles" },
      { property: "og:title", content: "Munawar Marbles — Premium Marble & Granite in Pakistan" },
      { property: "og:description", content: "Munawar Marbles — Pakistan's trusted source for imported marble, granite, onyx and luxury stone. Crafted, polished and installed nationwide." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Munawar Marbles — Premium Marble & Granite in Pakistan" },
      { name: "twitter:description", content: "Munawar Marbles — Pakistan's trusted source for imported marble, granite, onyx and luxury stone. Crafted, polished and installed nationwide." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/vgM1gVDj2KgCKrnL2QM0MyqvRev2/social-images/social-1781870508731-189463e1-f813-477b-a370-ffad98f80541.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/vgM1gVDj2KgCKrnL2QM0MyqvRev2/social-images/social-1781870508731-189463e1-f813-477b-a370-ffad98f80541.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </QueryClientProvider>
  );
}
