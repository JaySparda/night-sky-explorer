import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found">
      <span className="not-found-code">404</span>

      <h1>Lost in space?</h1>

      <p>The page you are looking for could not be found.</p>

      <Link to="/" className="hero-button">
        Return to Home
      </Link>
    </section>
  );
}
