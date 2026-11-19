import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import DeepSkyObjects from "./pages/DeepSkyObjects";
import Exoplanets from "./pages/Exoplanets";
import MeteorShowers from "./pages/MeteorShowers";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="deep-sky" element={<DeepSkyObjects />} />

        <Route path="exoplanets" element={<Exoplanets />} />

        <Route path="meteors" element={<MeteorShowers />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    // At the router here it act like a link and it direct to the URL to the page
  );
}
