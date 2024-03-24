import { CardsCarousel } from "@/components/components/CardsCarousel";
import MainImg from "@/components/components/MainImg";
import "./Home.css";
import { patternImage } from "@/consts/const";
export function Home() {
  return (
    <>
      <MainImg />
      <section className="relative flex items-center py-12 justify-center w-full min-h-80  text-black">
        <div className="absolute inset-0 z-0">
          <img
            src={patternImage()}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="z-10 relative w-full">
          <CardsCarousel />
        </div>
      </section>
    </>
  );
}
