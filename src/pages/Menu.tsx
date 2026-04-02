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
      { name: "Birria Tacos", description: "Slow-braised beef, crispy tortilla, melted cheese & consommé for dipping", price: "$4.50", image: birriaImg, popular: true },
      { name: "Tacos Al Pastor", description: "Marinated pork, grilled pineapple, onion & cilantro", price: "$3.50", image: pastorImg, popular: true },
      { name: "Carne Asada Tacos", description: "Grilled steak, onion, cilantro & salsa verde", price: "$4.00" },
      { name: "Chicken Tacos", description: "Seasoned chicken, lettuce, pico de gallo & crema", price: "$3.50" },
      { name: "Chorizo Tacos", description: "Spicy Mexican sausage with onion & cilantro", price: "$3.50" },

      { name: "Classic Street Tacos", description: "Simple tacos with your choice of meat, onion & cilantro", price: "$3.00" },
      { name: "Birria Tacos", description: "Slow-cooked beef tacos served with rich consommé", price: "$15.00", popular: true },
    ],
  },
  {
    title: "Quesadillas & More",
    items: [
      { name: "Quesadilla", description: "Large flour tortilla with melted cheese & your choice of meat", price: "$8.00", image: quesadillaImg },
      { name: "Birria Quesadilla", description: "Loaded with birria, cheese & served with consommé", price: "$10.00", popular: true },
      { name: "Mulita", description: "Two corn tortillas stuffed with meat, cheese & salsa", price: "$5.00" },
      { name: "Torta", description: "Mexican sandwich on telera bread with meat, beans, avocado & crema", price: "$9.00" },

      { name: "Burrito", description: "Flour tortilla stuffed with meat, rice & beans", price: "$12.00" },
      { name: "Burrito Bowl", description: "All burrito fillings served in a bowl", price: "$12.00" },
      { name: "Chef Combo", description: "Chef’s special combo plate with a mix of favorites", price: "$12.00" },
    ],
  },
  {
    title: "Sides",
    items: [
      { name: "Esquites", description: "Roasted corn off the cob with cotija, chili, lime & crema", price: "$5.00", image: esquitesImg, popular: true },
      { name: "Chips & Salsa", description: "Fresh tortilla chips with house-made red & green salsa", price: "$4.00" },
      { name: "Rice & Beans", description: "Mexican rice with refried beans", price: "$4.00" },
      { name: "Consommé Cup", description: "Rich birria broth served hot", price: "$3.00" },

      { name: "Nachos", description: "Loaded nachos with cheese & toppings", price: "$12.00" },
      { name: "Chips & Queso", description: "Crispy chips with melted cheese dip", price: "$6.00" },
    ],
  },
  {
    title: "Drinks & Dessert",
    items: [
      { name: "Horchata", description: "Sweet rice milk with cinnamon & vanilla", price: "$4.00", image: horchataImg },
      { name: "Jamaica", description: "Hibiscus iced tea, lightly sweetened", price: "$3.50" },
      { name: "Mexican Coke", description: "Glass bottle, real cane sugar", price: "$3.00" },

      { name: "Sangria", description: "Sweet red wine punch", price: "$4.00" },
      { name: "Sidral Mundet", description: "Mexican apple soda", price: "$3.00" },
      { name: "Jarritos", description: "Assorted fruit-flavored sodas", price: "$3.00" },
      { name: "Fanta", description: "Orange soda", price: "$2.50" },
      { name: "Sprite", description: "Lemon-lime soda", price: "$2.50" },
      { name: "Coca-Cola", description: "Classic Coke", price: "$2.50" },

      
      { name: "Tres Leches", description: "Moist sponge cake soaked in three milks", price: "$5.00" },
      { name: "Chocoflan", description: "Chocolate cake layered with flan", price: "$5.00" },
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
