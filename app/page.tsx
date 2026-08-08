import Nav from "@/components/layout/Nav";
import TunnelIntro from "@/components/sections/Intro/TunnelIntro";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Journey from "@/components/sections/Journey/LightJourney";
import DesignStack from "@/components/sections/Stack/DesignStack";
import Work from "@/components/sections/Work/Work";
import Experience from "@/components/sections/Experience/Experience";
import Certifications from "@/components/sections/Certifications/Certifications";
import Moments from "@/components/sections/Moments/Moments";
import Connect from "@/components/sections/Connect/Connect";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <TunnelIntro />
        <Hero />
        <About />
        <Journey />
        <DesignStack />
        <Work />
        <Experience />
        <Certifications />
        <Moments />
        <Connect />
      </main>
    </>
  );
}
