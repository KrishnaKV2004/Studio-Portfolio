import HeroText from "../components/HeroText";
import Parallax from "../components/Parallax";

const Hero = () => {
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
        <HeroText />
        <Parallax />
    </section>
  );
}

export default Hero;