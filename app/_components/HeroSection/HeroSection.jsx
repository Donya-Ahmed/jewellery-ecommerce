import React from "react";
import styles from "./HeroSection.module.css";
import Typewriter from "../Typewriter/Typewriter";
export default function HeroSection() {
  return (
    <section className={`${styles.bgBanner}`}>
      <div className="absolute inset-0 bg-black/50  from-black/95 to-black/25 ltr:bg-gradient-to-r rtl:bg-gradient-to-l"></div>

      <div className="relative  max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
          <h1
            className={`text-3xl font-extrabold sm:text-5xl text-gold ${styles.h50}`}
          >
            <Typewriter text="Smile Stones..." speed={200} delay={1000} />
          </h1>
          <h1></h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-gray titleHeader">
            Our most important jewels are the women in our lives: our mothers,
            sisters, and daughters. We celebrate their beauty by creating
            jewelry that celebrates the unique power of women.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-gold px-12 py-3 text-sm font-medium text-white shadow hover:bg-goldHover focus:outline-none focus:ring active:bg-goldHover sm:w-auto"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
