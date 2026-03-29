import { Helmet } from "react-helmet";
import Hero from "@/components/Hero";
import MenuHighlights from "@/components/MenuHighlights";
import Reviews from "@/components/Reviews";
import Hours from "@/components/Hours";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>El Guy Tacos · Roswell, GA</title>

        {/* Disable social image preview */}
        <meta name="robots" content="noimageindex, noarchive, nofollow" />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="summary" />

        {/* Open Graph info */}
        <meta property="og:title" content="El Guy Tacos · Roswell, GA" />
        <meta property="og:description" content="Authentic Mexican street food · Prices may vary" />
      </Helmet>

      <main className="min-h-screen">
        <Hero />
        <MenuHighlights />
        <Reviews />
        <Hours />
        <footer className="py-8 px-6 text-center text-muted-foreground text-sm border-t border-border">
          <p>© {new Date().getFullYear()} El Guy Tacos · Roswell, GA</p>
        </footer>
      </main>
    </>
  );
};

export default Index;