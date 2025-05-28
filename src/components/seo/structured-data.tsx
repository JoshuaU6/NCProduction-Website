"use client"

import Script from "next/script"

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NC Productions",
    description: "Award-winning creative studio specializing in film, theatre, events, and exhibitions.",
    url: "https://ncproductions.com",
    logo: "https://ncproductions.com/logo.png",
    foundingDate: "2010",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-0123",
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: [
      "https://instagram.com/ncproductions",
      "https://twitter.com/ncproductions",
      "https://linkedin.com/company/ncproductions",
      "https://youtube.com/ncproductions",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Creative Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Film Production",
            description: "Complete film production services from concept to final cut",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Theatre Productions",
            description: "Innovative stage productions that push creative boundaries",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Event Planning",
            description: "Immersive event experiences with cutting-edge production technology",
          },
        },
      ],
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NC Productions",
    url: "https://ncproductions.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://ncproductions.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  )
}
