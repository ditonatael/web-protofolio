import Image from "next/image";
import IntroductionSection from "~/components/introduction";
import Roomer from "~/components/Roomer";
import Efnote from "~/components/Efnote";
import Skills from "~/components/skills";

export default function Home() {
  return (
    <div className="z-0">
      <IntroductionSection />
      <div id="project">
        <Roomer />
        <Efnote />
      </div>
      <div id="skill">
        <Skills />
      </div>
    </div>
  );
}
