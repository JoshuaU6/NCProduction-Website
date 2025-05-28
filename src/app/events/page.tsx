import EventsPageClient from "./EventsPageClient"
import { generateMetadata } from "@/components/seo/metadata"

export const metadata = generateMetadata({
  title: "Events - NC Productions | Community Connection & Celebration",
  description:
    "Events at NC Productions are about connection, celebration, and community. We create inclusive spaces through Community Film Collective and ShadesOf initiatives.",
  keywords: [
    "event production",
    "community events",
    "inclusive events",
    "Community Film Collective",
    "ShadesOf",
    "diverse communities",
    "creative events",
    "multimedia events",
    "cultural celebrations",
    "artist showcases",
  ],
  canonical: "https://ncproductions.com/events",
})

export default function EventsPage() {
  return <EventsPageClient />
}
