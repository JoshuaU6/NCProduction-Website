"use client";

import { NotFoundHero } from "./not-found-hero";
import { NotFoundSuggestions } from "./not-found-suggestion";

export default function NotFoundClient() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-500">
      <main>
        <NotFoundHero />
        <NotFoundSuggestions />
      </main>
    </div>
  );
}
