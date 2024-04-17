import { useParams } from "react-router";
import data from "../../public/data.json";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, Plus } from "lucide-react";
import calendar from "../../public/captura.png";

export function Professional() {
  const { id } = useParams();
  const parsedId = id ? parseInt(id) : 0;
  const [psychologist] = useState(data[parsedId]);

  if (!psychologist) {
    // Manejar el caso donde psychologist es undefined
    return <div>No se encontró ningún psicólogo con el ID proporcionado.</div>;
  }
  return (
    <>
      <header className="flex">
        <aside>
          <img
            src="https://thispersondoesnotexist.com/"
            className="rounded-full align-middle  m-16 ml-18 lg:ml-40 max-w-[200px]"
          />
        </aside>
        <aside className="flex items-center">
          <section className="grid grid-cols-1 gap-6">
            <h2 className="text-4xl font-bold">{psychologist.name}</h2>
            <p className="text-2xl font-semibold">Psi. {psychologist.type}</p>
            <p className="w-2/3 text-xl">{psychologist.description}</p>
            <footer className="flex gap-4">
              <Button className="bg-purple-900 text-md hover:bg-purple-950 max-w-1/2">
                <Plus className="mr-2" />
                Linkedin
              </Button>
              <Button variant={"ghost"} className=" max-w-1/2">
                <ArrowDownToLine className="mr-2" />
                Curriculum Vitae
              </Button>
            </footer>
          </section>
        </aside>
      </header>
      <div className="grid grid-cols-1 items-center justify-center align-middle">
        <div className="w-full">
          <img src={calendar} alt="" className="ml-48 mt-10" />
        </div>
      </div>
    </>
  );
}
