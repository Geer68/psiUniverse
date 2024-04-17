import { CardsCarousel } from "@/components/components/CardsCarousel";
import "./Home.css";
import { brainImage, mainImg } from "@/consts/const";
import { HeroSection } from "@/components/components/HeroSection";
export function Home() {
  return (
    <>
      <header className="flex bg-[#eae0ff] py-10 justify-between">
        <aside className="pt-10">
          <HeroSection />
        </aside>
        <img src={mainImg()} alt="ideas" />
      </header>
      <section className=" bg-[#f5f6f8] grid grid-cols-1 py-10">
        <h2 className="mb-5 font-bold text-purple-900 text-3xl text-center p-3">
          ¿Por qué Psi-Universe?
        </h2>
        <div className="flex">
          <aside className="flex items-center align-middle">
            <img src={brainImage()} alt="study" />
          </aside>
          <aside className="w-1/2 grid grid-cols-1 gap-5">
            <CardsCarousel />
            {/* <CardsCarousel /> */}
          </aside>
        </div>
      </section>
    </>
  );
}
