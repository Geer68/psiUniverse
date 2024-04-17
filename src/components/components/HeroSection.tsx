import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section className="grid grid-cols-1 gap-6 md:pl-48">
      <header>
        <h2 className="text-4xl text-[#9576c5] font-semibold">
          Encontrá tu psicolgo ideal
        </h2>
        <div className="flex gap-2">
          <h2 className="text-4xl text-[#9576c5] font-semibold">con </h2>
          <h2 className="text-4xl text-purple-900 font-bold"> PsiUniverse</h2>
        </div>
      </header>
      <div>
        <p className="text-[#7e477f] text-xl max-w-sm">
          En PsiUniverse, nos asociamos con los mejores profesionales para
          garantizarte la más alta calidad en atención.
        </p>
      </div>
      <footer>
        <Button className="bg-purple-900 text-md hover:bg-purple-950 max-w-1/2">
          Agendá ya
          <ArrowRightIcon className="ml-2" />
        </Button>
      </footer>
    </section>
  );
}
