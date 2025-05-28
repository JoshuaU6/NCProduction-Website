import TheatrePageClient from "./TheatrePageClient"
import { generateMetadata } from "@/components/seo/metadata"

export const metadata = generateMetadata({
  title: "Theatre Productions - NC Productions | Experimental & Inclusive Theatre",
  description:
    "We see the stage as a space to play, experiment, and provoke conversation. Committed to introducing new works and fresh approaches to theatre in bold and inclusive ways.",
  keywords: [
    "theatre productions",
    "experimental theatre",
    "inclusive theatre",
    "new works",
    "contemporary theatre",
    "innovative stagecraft",
    "diverse audiences",
    "theatrical experiences",
    "stage productions",
    "community theatre",
    "bold theatre",
    "fresh approaches",
  ],
  canonical: "https://ncproductions.com/theatre",
})

export default function TheatrePage() {
  return <TheatrePageClient />
}
