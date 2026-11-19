import { Link } from "react-router-dom";

const categories = [
  {
    title: "Deep-Sky Objects",
    description: "Search galaxies, nebulae and star clusters.",
    theme: "deep-sky",
    path: "/deep-sky",
  },
  {
    title: "Exoplanets",
    description: "Sort and page through works around other stars",
    theme: "exoplanets",
    path: "/exoplanets",
  },
  {
    title: "Meteor Showers",
    description: "Find showers by peak month and hemisphere",
    theme: "meteors",
    path: "/meteors",
  },
];

export default function Home() {
  return (
    <section className="home-page">
      {/* Hero section */}
      <div className="home-hero">
        <p className="hero-eyebrow">OBSERVE.DISCOVER.WONDER</p>

        <h1>Explore the Universe</h1>

        <p className="hero-description">
          Your guide to what is up there tonight. Pick a category below to start
          exploring the observatory catalogue.
        </p>
      </div>

      <div className="home-section-heading">
        <h2>Choose your exploration</h2>
        <p>Select a category to begin your journey.</p>
      </div>

      <div className="home-grid">
        {categories.map((category) => (
          <Link key={category.path} to={category.path} className="home-card">
            <div className="home-card-body">
              <h2>{category.title}</h2>

              <p>{category.description}</p>

              <span className="home-card-link">Explore</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
