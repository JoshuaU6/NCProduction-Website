import {
  ClientTestimonials,
  CommunityFocus,
  EventServices,
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
      <EventServices />
      <ClientTestimonials />
      <EventsCTA />
    </main>
  );
}
