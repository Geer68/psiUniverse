import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { BrainIcon } from "lucide-react";

export function CardsCarousel() {
  return (
    <Carousel>
      <CarouselContent className="px-10 gap-4">
        <CarouselItem className="grid grid-cols-1 items-center justify-center align-middle md:basis-1/2 lg:basis-1/5 glassCard rounded-xl p-5 ">
          <header className="grid place-items-center">
            <BrainIcon className="h-12 w-12" />
            <h2 className="mt-5 text-xl font-bold">Desarrollo Personal</h2>
          </header>
          <p className="text-center mt-10">
            Exploración de la identidad, valores y metas personales para un
            mayor autoconocimiento.
          </p>
        </CarouselItem>
        <CarouselItem className="grid grid-cols-1 items-center justify-center align-middle md:basis-1/2 lg:basis-1/5 glassCard rounded-xl p-5 ">
          <header className="grid place-items-center">
            <BrainIcon className="h-12 w-12" />
            <h2 className="mt-5 text-xl font-bold">Desarrollo Personal</h2>
          </header>
          <p className="text-center mt-10">
            Exploración de la identidad, valores y metas personales para un
            mayor autoconocimiento.
          </p>
        </CarouselItem>
        <CarouselItem className="grid grid-cols-1 items-center justify-center align-middle md:basis-1/2 lg:basis-1/5 glassCard rounded-xl p-5 ">
          <header className="grid place-items-center">
            <BrainIcon className="h-12 w-12" />
            <h2 className="mt-5 text-xl font-bold">Desarrollo Personal</h2>
          </header>
          <p className="text-center mt-10">
            Exploración de la identidad, valores y metas personales para un
            mayor autoconocimiento.
          </p>
        </CarouselItem>
        <CarouselItem className="grid grid-cols-1 items-center justify-center align-middle md:basis-1/2 lg:basis-1/5 glassCard rounded-xl p-5 ">
          <header className="grid place-items-center">
            <BrainIcon className="h-12 w-12" />
            <h2 className="mt-5 text-xl font-bold">Desarrollo Personal</h2>
          </header>
          <p className="text-center mt-10">
            Exploración de la identidad, valores y metas personales para un
            mayor autoconocimiento.
          </p>
        </CarouselItem>
        <CarouselItem className="grid grid-cols-1 items-center justify-center align-middle md:basis-1/2 lg:basis-1/5 glassCard rounded-xl p-5 ">
          <header className="grid place-items-center">
            <BrainIcon className="h-12 w-12" />
            <h2 className="mt-5 text-xl font-bold">Desarrollo Personal</h2>
          </header>
          <p className="text-center mt-10">
            Exploración de la identidad, valores y metas personales para un
            mayor autoconocimiento.
          </p>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
