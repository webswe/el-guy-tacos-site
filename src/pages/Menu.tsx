import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import birriaImg from "@/assets/birria.jpg";
import esquitesImg from "@/assets/esquites.jpg";
import pastorImg from "@/assets/tacos-pastor.jpg";
import quesadillaImg from "@/assets/quesadilla.jpg";
import horchataImg from "@/assets/horchata.jpg";
import churrosImg from "@/assets/churros.jpg";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
  popular?: boolean;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menu: MenuCategory[] = [
  {
    title: "Tacos",
    items: [
      { name: "Tacos", description: "Onions, cilantro & lime", price: "$3.00" },
      { name: "Birria Tacos", description: "Onions & cilantro", price: "$16.00", popular: true },
    ],
  },
  {
    title: "Quesadillas & More",
    items: [
      { name: "Tortas", description: "Mayonnaise, beans, cheese, lettuce, tomato, avocado & jalapeños", price: "$11.00" },
      { name: "Burrito", description: "Beans, rice, cheese, lettuce, tomatoes, onions, sour cream & sauce", price: "$12.00" },
      { name: "Burrito Bowl", description: "Rice, beans, lettuce, chips, cheese, tomatoes & onions", price: "$12.00" },
      { name: "Quesadillas", description: "Lettuce, tomatoes, sour cream & sauce", price: "$12.00" },
      { name: "Chef Combo", description: "3 tacos, rice & beans", price: "$12.00", popular: true },
      { name: "Mega Nachos", description: "Chips, cheese, lettuce, tomatoes, onions, sour cream, jalapeños & cilantro", price: "$12.00" },
    ],
  },
  {
    title: "Sides",
    items: [
      { name: "Chips & Cheese", description: "Crispy chips with melted cheese", price: "$6.00" },
      { name: "Esquites", description: "Corn, mayonnaise, cotija cheese, cayenne pepper & lime", price: "$5.00", popular: true },
    ],
  },
  {
    title: "Meats",
    items: [
      { name: "Steak", description: "", price: "" },
      { name: "Roasted Pork", description: "", price: "" },
      { name: "Chicken", description: "", price: "" },
      { name: "Mexican Sausage", description: "", price: "" },
      { name: "Shredded Pork", description: "", price: "" },
      { name: "Steak + Mexican Sausage Mix", description: "", price: "" },
    ],
  },
  {
    title: "Drinks & Dessert",
    items: [
      { name: "Mexican Drinks", description: "Coke, Fanta, Jarritos, Sidral, Sangria", price: "" },
      { name: "Desserts", description: "Tres leches cake, chocoflan", price: "$5.00" },
    ],
  },
];

const MenuPage = () => {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="pt-12 pb-8 px-6 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <h1 className="font-display text-6xl md:text-8xl text-foreground">
            OUR <span className="text-gradient">MENU</span>
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Authentic Mexican street food · Prices may vary
          </p>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        {menu.map((category) => (
          <section key={category.title}>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-10 flex items-center gap-4">
              {category.title}
              <span className="h-px flex-1 bg-border" />
            </h2>

            <div className="space-y-6">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="group flex gap-5 items-start p-4 -mx-4 rounded-xl hover:bg-card transition-colors duration-300"
                >
                  {item.image && (
                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-border">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-foreground font-medium text-lg flex items-center gap-2">
                        {item.name}
                        {item.popular && (
                          <span className="bg-primary/15 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
                            Popular
                          </span>
                        )}
                      </h3>
                      <span className="text-primary font-display text-xl shrink-0">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-muted-foreground text-sm border-t border-border">
        <p>© {new Date().getFullYear()} El Guy Tacos · Roswell, GA</p>
      </footer>
    </main>
  );
};

export default MenuPage;
