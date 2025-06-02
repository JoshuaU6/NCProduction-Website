import {
  AboutHero,
  CallToAction,
  OurStory,
  OurValues,
} from "@/components/about";

export default function AboutPageClient() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <OurValues />
      {/* <Leadership /> */}
      <CallToAction />
    </main>
  );
}
