import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import SignatureServices from "@/components/home/SignatureServices";
import HomeVisit from "@/components/home/HomeVisit";
import Story from "@/components/home/Story";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <SignatureServices />
      <HomeVisit />
      <Story />
      <Testimonials />
    </>
  );
}
