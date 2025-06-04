"use client";

import { FilmHero } from "@/components/film/film-hero";
import { FilmVision } from "@/components/film/film-vision";
import { FilmProcess } from "@/components/film/film-process";
import { FilmCTA } from "@/components/film/film-cta";
import { RecentWorks } from "@/components/film/recent-work";

export default function FilmPageClient() {
  return (
    <main>
      <FilmHero />
      <FilmVision />
      <RecentWorks />
      <FilmProcess />
      <FilmCTA />
    </main>
  );
}
