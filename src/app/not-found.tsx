import { NotFoundClient } from "@/components/not-found";
import { generateMetadata } from "@/components/seo/metadata";

export const metadata = generateMetadata({
  title: "Page Not Found - NC Productions | 404 Error",
  description:
    "The page you're looking for doesn't exist. Explore our film, theatre, events, and ShadesOf projects instead.",
  keywords: ["404", "page not found", "error", "nc productions"],
  canonical: "https://www.ncproductions.net/404",
  noIndex: true,
});

export default function NotFound() {
  return <NotFoundClient />;
}
