"use client";

import { FilmHero } from "@/components/film/film-hero";
import { FilmVision } from "@/components/film/film-vision";
import { FilmPortfolio } from "@/components/film/film-portfolio";
import { FilmProcess } from "@/components/film/film-process";
import { FilmTechnology } from "@/components/film/film-technology";
import { FilmCTA } from "@/components/film/film-cta";

export default function FilmPageClient() {
  return (
    <main>
      <FilmHero />
      <FilmVision />
      <FilmPortfolio />
      <FilmProcess />
      <FilmTechnology />
      <FilmCTA />
    </main>
  );
}
