// import about page styles
import "./About.css";

import { Outlet } from "react-router-dom";

export default function About() {
  return (
    <main className="about-page">
      <Outlet/>
    </main>
  );
}