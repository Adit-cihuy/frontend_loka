import Negosasi from "../components/Negosasi";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import NewsLetterBox from "../components/NewsLetterBox";
import OurPolicy from "../components/OurPolicy";

export default function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <Negosasi />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
}
