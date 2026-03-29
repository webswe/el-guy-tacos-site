import Hero from "@/components/Hero";
import MenuHighlights from "@/components/MenuHighlights";
import Reviews from "@/components/Reviews";
import Hours from "@/components/Hours";

const Index = () => {
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
