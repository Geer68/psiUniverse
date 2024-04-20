import { useParams } from "react-router";
import data from "../../public/data.json";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, Plus } from "lucide-react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

export function Professional() {
  const { id } = useParams();
  const parsedId = id ? parseInt(id) : 0;
  const [psychologist] = useState(data[parsedId]);

  if (!psychologist) {
    // Manejar el caso donde psychologist es undefined
    return <div>No se encontró ningún psicólogo con el ID proporcionado.</div>;
  }
  const localizer = momentLocalizer(moment);
  const events = [
    {
      title: "Disponible",
      start: new Date(2024, 3, 22, 10, 0),
      end: new Date(2024, 3, 22, 11, 0),
    },
    {
      title: "Disponible",
      start: new Date(2024, 3, 22, 12, 0),
      end: new Date(2024, 3, 22, 13, 0),
    },
    // Add more events for 22-04-24 as needed
    {
      title: "Disponible",
      start: new Date(2024, 3, 23, 10, 0),
      end: new Date(2024, 3, 23, 11, 0),
    },
    {
      title: "Disponible",
      start: new Date(2024, 3, 23, 12, 0),
      end: new Date(2024, 3, 23, 13, 0),
    },
    // Add more events for 23-04-24 as needed
    {
      title: "Disponible",
      start: new Date(2024, 3, 24, 10, 0),
      end: new Date(2024, 3, 24, 11, 0),
    },
    {
      title: "Disponible",
      start: new Date(2024, 3, 24, 12, 0),
      end: new Date(2024, 3, 24, 13, 0),
    },
    // Add more events for 24-04-24 as needed
    {
      title: "Disponible",
      start: new Date(2024, 3, 25, 10, 0),
      end: new Date(2024, 3, 25, 11, 0),
    },
    {
      title: "Disponible",
      start: new Date(2024, 3, 25, 12, 0),
      end: new Date(2024, 3, 25, 13, 0),
    },
    // Add more events for 25-04-24 as needed
    {
      title: "Disponible",
      start: new Date(2024, 3, 26, 10, 0),
      end: new Date(2024, 3, 26, 11, 0),
    },
    {
      title: "Disponible",
      start: new Date(2024, 3, 26, 12, 0),
      end: new Date(2024, 3, 26, 13, 0),
    },
    // Add more events for 26-04-24 as needed
  ];

  const MyCalendar = () => (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 800 }}
      />
    </div>
  );

  return (
    <>
      <main className="bg-[#f5f6f8]">
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
        <div className="w-full flex justify-center items-center align-middle">
          <div className="w-8/12">{MyCalendar()}</div>
        </div>
      </main>
    </>
  );
}
