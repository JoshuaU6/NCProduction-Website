import ContactPageClient from "./ContactPageClient"
import { generateMetadata } from "@/components/seo/metadata"

export const metadata = generateMetadata({
  title: "Contact Us - NC Productions | Get In Touch",
  description:
    "Ready to bring your creative vision to life? Contact NC Productions for film, theatre, events, and ShadesOf projects. We're always interested in new collaborations.",
  keywords: [
    "contact nc productions",
    "get in touch",
    "creative collaboration",
    "film production contact",
    "theatre production contact",
    "event planning contact",
    "shadesof contact",
    "creative services inquiry",
    "project consultation",
    "london creative studio",
  ],
  canonical: "https://ncproductions.com/contact",
})

export default function ContactPage() {
  return <ContactPageClient />
}
