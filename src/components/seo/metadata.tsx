import type { Metadata } from "next"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
  noIndex?: boolean
}

export function generateMetadata({
  title = "NC Productions - Creating Unforgettable Experiences",
  description = "Award-winning creative studio specializing in film, theatre, events, and exhibitions. We bring creative visions to life across multiple media platforms with cutting-edge technology and artistic excellence.",
  keywords = [
    "film production",
    "theatre productions",
    "event planning",
    "creative studio",
    "multimedia experiences",
    "cinematography",
    "stage design",
    "exhibition design",
    "creative agency",
    "video production",
  ],
  ogImage = "/og-image.jpg",
  canonical,
  noIndex = false,
}: SEOProps = {}): Metadata {
  const baseUrl = "https://ncproductions.com"

  return {
    title,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: "NC Productions" }],
    creator: "NC Productions",
    publisher: "NC Productions",
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical || baseUrl,
      title,
      description,
      siteName: "NC Productions",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@ncproductions",
    },
    alternates: {
      canonical: canonical || baseUrl,
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
    },
  }
}
