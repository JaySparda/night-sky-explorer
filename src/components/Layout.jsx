import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="app-layout">
      <Navbar />

      <main className="container main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>Night Sky Explorer</p>
        <p>Discover the wonders of the universe.</p>
      </footer>
    </div>
  );
}
