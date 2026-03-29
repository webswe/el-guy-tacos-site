import { Star } from "lucide-react";

const reviews = [
  {
    name: "Aaron Edewards",
    time: "1 month ago",
    text: "To be clear this is a trailer, that is why the tacos are amazing. They are open late and have delicious birria. It is very inexpensive for what you get.",
    rating: 5,
  },
  {
    name: "Yashar Kiarashi",
    time: "11 months ago",
    text: "Amazing! Very delicious food by very welcoming staff. I tried the pulled beef taco and will be there again soon! They also have esquites which tastes great.",
    rating: 5,
  },
  {
    name: "Shaunice Murray",
    time: "2 months ago",
    text: "My favorite tacos! I could eat them every day literally. So juicy and fresh and the flavor is on point. I choose this taco truck over anywhere else!!",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-4 mb-16">
          <h2 className="font-display text-5xl md:text-7xl text-foreground">
            REVIEWS
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-gradient font-display text-5xl">4.7</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-background rounded-2xl p-8 border border-border"
            >
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{review.text}"</p>
              <div>
                <p className="text-foreground font-medium">{review.name}</p>
                <p className="text-muted-foreground text-sm">{review.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
