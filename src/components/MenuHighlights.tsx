import birriaImg from "@/assets/birria.jpg";
import esquitesImg from "@/assets/esquites.jpg";

const items = [
  {
    name: "Birria Tacos",
    description: "Slow-braised beef in rich chili broth, crispy tortilla, melted cheese & consommé",
    image: birriaImg,
  },
  {
    name: "Esquites",
    description: "Roasted corn off the cob with cotija, chili, lime & crema",
    image: esquitesImg,
  },
];

const MenuHighlights = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
          FAN <span className="text-gradient">FAVORITES</span>
        </h2>
        <p className="text-muted-foreground mb-16 text-lg">
          What keeps people coming back night after night.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div
              key={item.name}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-3xl text-foreground mb-2">{item.name}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
