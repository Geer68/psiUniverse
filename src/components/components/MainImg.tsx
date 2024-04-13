"use client";

import { Button } from "@/components/ui/button";
import { mainImg } from "../../consts/const";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function MainImg() {
  return (
    <section className="grid gap-4 justify-items-center w-full relative">
      <div className="relative">
        <img
          src={mainImg()}
          alt="portada"
          className="aspect-[4/3] sm:aspect-video  sm:w-full object-cover sm:max-h-[60vh] "
        />
        <div className="absolute top-0 left-0 w-full h-full blur bg-pink-500 opacity-25"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-8">
          <h1 className="text-2xl sm:text-4xl lg:text-4xl font-bold mb-6">
            Encontrá tu profesional ideal
          </h1>
          <h3 className="font-normal max-w-md md:max-w-lg mt-6 md:text-xl">
            En PsiUniverse, conectamos con los mejores profesionales para
            ofrecerte la mejor atención.
          </h3>
          <Button className="mt-6 bg-pink-900 text-md hover:bg-pink-950 ">
            <Link to="/psychologists">Agendá ya</Link>
            <ArrowRightIcon className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
