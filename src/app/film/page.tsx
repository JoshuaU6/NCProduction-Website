import FilmPageClient from "./FilmPageClient"
import { generateMetadata } from "@/components/seo/metadata"

export const metadata = generateMetadata({
  title: "Film Production - NC Productions | Empowering Stories Through Cinema",
  description:
    "We believe in the power of film to empower, inspire, and uplift communities. From documentaries to dramas, commercials to micro content, we deliver high-quality, impactful visual storytelling.",
  keywords: [
    "film production",
    "cinematography",
    "documentary filmmaking",
    "commercial video",
    "micro content",
    "visual storytelling",
    "sound design",
    "film direction",
    "video production",
    "community filmmaking",
    "impactful cinema",
    "professional video services",
  ],
  canonical: "https://ncproductions.com/film",
})

export default function FilmPage() {
  return <FilmPageClient />
}
