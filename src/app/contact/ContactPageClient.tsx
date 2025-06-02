"use client";

import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { CommunitySection } from "@/components/contact/community-section";

export default function ContactPageClient() {
  return (
    <main>
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-0">
        <ContactInfo />
        <ContactForm />
      </div>
      {/* <ContactMap /> */}
      <CommunitySection />
    </main>
  );
}
