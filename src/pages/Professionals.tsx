import { PsychologistCard } from "@/components/components/PsycologhistCard";
import data from "../../public/data.json";
export function Professionals() {
  console.log(data);
  return (
    <>
      <main className="bg-[#f5f6f8]">
        <h2 className="pt-10 font-bold text-3xl text-center p-3 text-purple-900">
          Te presentamos a nuestros profesionales
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 px-10">
          {data.map((psychologist) => (
            <PsychologistCard key={psychologist.id} id={psychologist.id} />
          ))}
        </div>
      </main>
    </>
  );
}
