import {
  CollaborationCTA,
  TheatreHero,
  TheatreVision,
} from "@/components/theatre";

export default function TheatrePageClient() {
  return (
    <main>
      <TheatreHero />
      <TheatreVision />
      {/* <TheatreApproach /> */}
      <CollaborationCTA />
    </main>
  );
}
