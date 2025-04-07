"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Services";
import ServiceTwo from "@/components/ServiceTwo";
import Portfolio from "@/components/Portfolio";
import ClientSection from "@/components/ClientSection";
import Counter from "@/components/Counter";
import Contact from "@/components/Contact";
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
      <Service />
      <ServiceTwo />
      <Portfolio />
      <ClientSection />
      <Counter />
      <Contact />
    </>
  );
}
