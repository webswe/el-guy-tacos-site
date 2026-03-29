import heroImage from "@/assets/hero-tacos.jpg";
import { MapPin, Clock, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="El Guy Tacos - Authentic birria tacos"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20 pt-40">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-gradient-warm text-primary-foreground px-3 py-1 rounded-full text-sm font-medium tracking-wide">
            ★ 4.7
          </span>
          <span className="text-muted-foreground text-sm">47 reviews</span>
          <span className="text-muted-foreground text-sm">·</span>
          <span className="text-muted-foreground text-sm">$10–20</span>
        </div>

        <h1 className="font-display text-7xl md:text-9xl text-foreground leading-none mb-4">
          EL GUY<br />
          <span className="text-gradient">TACOS</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8">
          Authentic late-night street tacos & birria in Roswell, GA. 
          Made fresh from our trailer with love.
        </p>

        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <a href="https://maps.google.com/?q=1105+Holcomb+Bridge+Rd+Roswell+GA+30076" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <MapPin className="w-4 h-4 text-primary" />
            1105 Holcomb Bridge Rd, Roswell
          </a>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            Open Tue–Sun, 6 PM–Late
          </div>
          <a href="tel:4709087283" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4 text-primary" />
            (470) 908-7283
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
