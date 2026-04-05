import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center">
      {/* Big 404 Header */}
      <h1 className="text-7xl md:text-9xl font-display text-gradient mb-6 animate-bounce">
        404
      </h1>

      {/* Fun Message */}
      <p className="text-lg md:text-xl text-muted-foreground mb-8">
        Oops! Looks like you wandered off the taco trail 🌮<br />
        This page doesn’t exist… yet.
      </p>

      {/* Call to Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Link
          to="/"
          className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
        >
          Back to Home
        </Link>

        <Link
          to="/menu"
          className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition"
        >
          See Our Menu
        </Link>
      </div>

      {/* Optional footer image or emoji */}
      <div className="mt-12 text-6xl animate-pulse">🌮🔥</div>
    </main>
  );
};

export default NotFound;