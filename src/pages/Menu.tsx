import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface MenuItem {
  name: string;
  description: string;
  price?: string;
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
      {
        name: "Street Tacos (3)",
        description: "Mix & match any meats · onions, cilantro & lime",
        price: "3 for $11",
        popular: true
      },
      {
        name: "Birria Tacos",
        description: "Slow-cooked beef with consommé · onions & cilantro",
        price: "$16.00",
        popular: true,
      },
    ],
  },
  {
    title: "Mains",
    items: [
      {
        name: "Burrito",
        description: "Choice of meat · rice, beans, cheese, lettuce, sour cream & sauce",
        price: "$12.00",
      },
      {
        name: "Burrito Bowl",
        description: "Everything from a burrito, no tortilla",
        price: "$12.00",
      },
      {
        name: "Quesadilla",
        description: "Grilled tortilla with cheese & choice of meat",
        price: "$12.00",
      },
      {
        name: "Torta",
        description: "Mexican sandwich with meat, beans, avocado & jalapeños",
        price: "$11.00",
      },
      {
        name: "Chef Combo",
        description: "3 tacos + rice & beans",
        price: "$12.00",
        popular: true,
      },
      {
        name: "Mega Nachos",
        description: "Loaded with meat, cheese, jalapeños & toppings",
        price: "$12.00",
      },
    ],
  },
  {
    title: "Sides",
    items: [
      {
        name: "Esquites",
        description: "Street corn with cotija, chili, lime & crema",
        price: "$5.00",
        popular: true,
      },
      {
        name: "Chips & Cheese",
        description: "Crispy chips with warm cheese dip",
        price: "$6.00",
      },
    ],
  },
  {
    title: "Drinks",
    items: [
      {
        name: "Mexican Sodas",
        description: "Coke, Jarritos, Sidral, Fanta, Sangria",
      },
    ],
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Tres Leches",
        description: "Moist cake soaked in three milks",
        price: "$5.00",
      },
      {
        name: "Chocoflan",
        description: "Chocolate cake layered with flan",
        price: "$5.00",
      },
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
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>

          <h1 className="font-display text-5xl md:text-7xl">
            OUR <span className="text-gradient">MENU</span>
          </h1>

          <p className="text-muted-foreground mt-3">
            Authentic Mexican street food
          </p>
        </div>
      </div>

      {/* Sticky Category Nav */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-3 flex gap-4 overflow-x-auto text-sm">
          {menu.map((cat) => (
            <a
              key={cat.title}
              href={`#${cat.title}`}
              className="whitespace-nowrap text-muted-foreground hover:text-primary"
            >
              {cat.title}
            </a>
          ))}
        </div>
      </div>

      {/* Menu */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {menu.map((category) => (
          <section key={category.title} id={category.title}>
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              {category.title}
            </h2>

            <div className="grid gap-4">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className={`p-5 rounded-xl border transition hover:shadow-md ${
                    item.popular
                      ? "border-primary/40 bg-primary/5"
                      : "border-border"
                  }`}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-medium text-lg flex items-center gap-2">
                        {item.name}
                        {item.popular && (
                          <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full">
                            Popular
                          </span>
                        )}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {item.description}
                      </p>
                    </div>

                    {item.price && (
                      <span className="text-primary font-semibold text-lg">
                        {item.price}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border">
        © {new Date().getFullYear()} El Guy Tacos · Roswell, GA
      </footer>
    </main>
  );
};

export default MenuPage;