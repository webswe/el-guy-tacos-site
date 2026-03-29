import { MapPin, Phone, Navigation } from "lucide-react";

const schedule = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "6 PM – 12 AM" },
  { day: "Wednesday", hours: "6 PM – 12 AM" },
  { day: "Thursday", hours: "6 PM – 12 AM" },
  { day: "Friday", hours: "6 PM – 1 AM" },
  { day: "Saturday", hours: "6 PM – 1 AM" },
  { day: "Sunday", hours: "6 PM – 12 AM" },
];

const Hours = () => {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-12">
            FIND <span className="text-gradient">US</span>
          </h2>

          <div className="space-y-6">
            <a
              href="https://maps.google.com/?q=1105+Holcomb+Bridge+Rd+Roswell+GA+30076"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="text-foreground group-hover:text-primary transition-colors">
                  1105 Holcomb Bridge Rd
                </p>
                <p className="text-muted-foreground">Roswell, GA 30076</p>
              </div>
            </a>

            <a href="tel:4709087283" className="flex items-center gap-4 group">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <span className="text-foreground group-hover:text-primary transition-colors">
                (470) 908-7283
              </span>
            </a>

            <a
              href="https://maps.google.com/maps/dir//1105+Holcomb+Bridge+Rd+Roswell+GA+30076"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-warm text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity mt-4"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-3xl text-foreground mb-8">HOURS</h3>
          <div className="space-y-4">
            {schedule.map(({ day, hours }) => (
              <div
                key={day}
                className={`flex justify-between py-3 border-b border-border ${
                  day === today ? "text-primary" : "text-foreground"
                }`}
              >
                <span className={day === today ? "font-medium" : ""}>
                  {day}
                  {day === today && (
                    <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                      Today
                    </span>
                  )}
                </span>
                <span className={hours === "Closed" ? "text-accent" : ""}>
                  {hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hours;
