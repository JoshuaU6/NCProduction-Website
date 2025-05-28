import AboutPageClient from "./AboutPageClient"
import { generateMetadata } from "@/components/seo/metadata"

export const metadata = generateMetadata({
  title: "About Us - NC Productions | Amplifying Underrepresented Voices",
  description:
    "NC Productions is a dynamic multimedia production company dedicated to amplifying the voices of underrepresented communities through film, theatre, and fine art storytelling.",
  keywords: [
    "about nc productions",
    "underrepresented voices",
    "multimedia production",
    "diverse storytelling",
    "film production company",
    "theatre productions",
    "fine art",
    "social impact",
    "creative studio",
    "inclusive media",
  ],
  canonical: "https://ncproductions.com/about",
})

export default function AboutPage() {
  return <AboutPageClient />
}
