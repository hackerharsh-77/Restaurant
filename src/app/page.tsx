import Image from "next/image";
import Slider from "./components/Slider";
import Featued from "./components/Featued";
import Offer from "./components/Offer";

export default function Home() {
  return (
    <main>
      <Slider />
      <Featued />
      <Offer />
    </main>
  );
}
