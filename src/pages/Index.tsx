import { useEffect } from "react";
import Hero from "@/components/Hero";
import MenuHighlights from "@/components/MenuHighlights";
import Reviews from "@/components/Reviews";
import Hours from "@/components/Hours";

const Index = () => {
  useEffect(() => {
    // Remove social preview image and metadata
    const metaTags: { name?: string; property?: string; content: string }[] = [
      { name: "robots", content: "noimageindex, noarchive, nofollow" },
      { property: "og:image", content: "" },
      { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "El Guy Tacos · Roswell, GA" },
      { property: "og:description", content: "Authentic Mexican street food · Prices may vary" },
    ];

    metaTags.forEach(({ name, property, content }) => {
      let el: HTMLMetaElement | null = null;
      if (name) el = document.querySelector(`meta[name="${name}"]`);
      if (property) el = document.querySelector(`meta[property="${property}"]`);
      if (el) {
        el.setAttribute("content", content);
      } else {
        const meta = document.createElement("meta");
        if (name) meta.setAttribute("name", name);
        if (property) meta.setAttribute("property", property);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    });
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <MenuHighlights />
      <Reviews />
      <Hours />
      <footer className="py-8 px-6 text-center text-muted-foreground text-sm border-t border-border">
        <p>© {new Date().getFullYear()} El Guy Tacos · Roswell, GA</p>
      </footer>
    </main>
  );
};

export default Index;