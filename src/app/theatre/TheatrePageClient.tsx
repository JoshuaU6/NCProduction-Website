import {
  CollaborationCTA,
  ProductionShowcase,
  TheatreApproach,
  TheatreHero,
  TheatreVision,
} from "@/components/theatre";

export default function TheatrePageClient() {
  return (
    <main>
      <TheatreHero />
      <TheatreVision />
      <ProductionShowcase />
      <TheatreApproach />
      <CollaborationCTA />
    </main>
  );
}
