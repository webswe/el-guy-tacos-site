import birriaImg from "@/assets/birria.jpg";
import esquitesImg from "@/assets/esquites.jpg";
import tacosImg from "@/assets/tacos.jpg";
import { Link } from "react-router-dom";
import { ArrowRight, Flame } from "lucide-react";

const items = [
  {
    name: "Birria Tacos",
    description: "Slow-braised beef in rich chili broth, crispy tortilla, melted cheese & consommé",
    image: birriaImg,
    tag: "Most Popular",
  },
  {
    name: "Tacos",
    description: "",
    image: tacosImg,
    tag: "Staff Pick",
  },
  {
    name: "Esquites",
    description: "Roasted corn off the cob with cotija cheese, chili, lime & crema",
    image: esquitesImg,
    tag: "Fan Favorite",
  },
];

const MenuHighlights = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium text-sm tracking-widest uppercase">What's Hot</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-foreground">
              FAN <span className="text-gradient">FAVORITES</span>
            </h2>
          </div>
          <Link
            to="/menu"
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Full Menu <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={item.name}
              className={`group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_hsl(36_90%_55%/0.1)] ${
                i === 0 ? "md:row-span-2" : ""
              }`}
            >
              <div className={`overflow-hidden ${i === 0 ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block bg-gradient-warm text-primary-foreground text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-3">
                  {item.tag}
                </span>
                <h3 className="font-display text-3xl text-foreground mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/menu"
          className="md:hidden flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium mt-8"
        >
          View Full Menu <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default MenuHighlights;
