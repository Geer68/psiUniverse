import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Heart, HeartHandshake, SmilePlus } from "lucide-react";
import { Link } from "react-router-dom";

export function CardsCarousel() {
  return (
    <Carousel
      orientation="vertical"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className=" gap-4">
        <CarouselItem className="py-0 mt-5 max-h-[250px] min-w-[300px] grid grid-cols-1 items-center justify-center align-middle md:basis-1/2 lg:basis-1/4  rounded-xl ">
          <div className=" p-6 m-0 bg-white border border-gray-200 rounded-lg shadow grid grid-cols-1 gap-2">
            <h4 className="flex  items-center mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              <Heart className="mr-2" />
              ¿Que nos diferencia?
            </h4>

            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Te brindamos un equipo multidiciplinario para que encuentres tu
              profesional ideal. Una terapia desde cualquier lugar y en el
              horario que mas te convenga. Te queremos guiar en el camino hacia
              un futuro mejor, promoviendo tu bienestar integral
            </p>
            <Link
              to="/help"
              className="inline-flex font-medium items-center text-purple-900 hover:underline"
            >
              Consultá nuestras opciones
              <svg
                className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </Link>
          </div>
        </CarouselItem>
        <CarouselItem className="py-0 max-h-[250px] min-w-[300px] grid grid-cols-1 items-center justify-center align-middle md:basis-1/2 lg:basis-1/4  rounded-xl ">
          <div className=" p-6 m-0 bg-white border border-gray-200 rounded-lg shadow grid grid-cols-1 gap-2">
            <h4 className="flex  items-center mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              <SmilePlus className="mr-2" />
              Disfrutá de la comodidad
            </h4>

            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Conectate desde la comodidad de tu hogar o cualquier lugar. Tu
              tiempo, tus reglas. Elegí tu el horario que mejor se adapte a tu
              rutina y reprogramá citas con facilidad.
            </p>
            <Link
              to="/help"
              className="inline-flex font-medium items-center text-purple-900 hover:underline"
            >
              Mirá nuestros tips para una sesión
              <svg
                className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </Link>
          </div>
        </CarouselItem>
        <CarouselItem className="py-0 max-h-[250px] min-w-[300px] grid grid-cols-1 items-center justify-center align-middle md:basis-1/2 lg:basis-1/4  rounded-xl ">
          <div className=" p-6 m-0 bg-white border border-gray-200 rounded-lg shadow grid grid-cols-1 gap-2">
            <h4 className="flex  items-center mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              <HeartHandshake className="mr-2" />
              Nuestro compromiso es con vos
            </h4>

            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Psicologos comprometidos con tu bienestar, terapias diseañdas a
              medida para atender tus necesidades especificas. Tambien te
              ofrecemos un entorno donde expresarte con libertad y sin
              prejuicios. Queremos guiarte en tu camino hacia una vida sana.
            </p>
            <Link
              to="/help"
              className="inline-flex font-medium items-center text-purple-900 hover:underline"
            >
              Mirá todos nuestros tipos de terapia
              <svg
                className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </Link>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
