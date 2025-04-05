"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <>
      <Hero />
      <About />
    </>
  );
}
