import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import OurSolutions from "./components/OurSolutions";
import HowWorks from "./components/HowWorks";
import Review from "./components/Review";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <OurSolutions />
      <HowWorks />
      <Review />
      <Contact />
    </main>
  );
}
