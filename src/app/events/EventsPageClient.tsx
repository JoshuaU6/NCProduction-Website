import {
  ClientTestimonials,
  CommunityFocus,
  EventsCTA,
  EventsHero,
  Initiatives,
} from "@/components/events";

export default function EventsPageClient() {
  return (
    <main>
      <EventsHero />
      <CommunityFocus />
      <Initiatives />
      <ClientTestimonials />
      <EventsCTA />
    </main>
  );
}
