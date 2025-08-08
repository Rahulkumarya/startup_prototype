import FadeInSection from "./FadeInSection";
import Hero from "./Hero";
import CommunitySection from "../pages/community/page";
import ServicePage from "../pages/resource/page"
import About from "../pages/about/page";
import ContactPage from "../pages/contact/page";
import ScrollHeader from "./AnimatedONScroll"
import Stats from "./Stats";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";

export default function HomePage() {
  return (
    <>
      <ScrollHeader />
      <main>
        <Hero />
        <FadeInSection delay={0.0}></FadeInSection>
        <FadeInSection delay={0.2}>
          <CommunitySection />
        </FadeInSection>
        <FadeInSection delay={0.1}>
          <Stats />
        </FadeInSection>
        <FadeInSection delay={0.1}>
          <ServicePage />
        </FadeInSection>
        <FadeInSection delay={0.1}>
          <Testimonials />
        </FadeInSection>
        <FadeInSection delay={0.1}>
          <FAQ />
        </FadeInSection>
        <FadeInSection delay={0.1}>
          <About />
        </FadeInSection>
        <FadeInSection delay={0.1}>
          <ContactPage />
        </FadeInSection>
      </main>
    </>
  );
}
