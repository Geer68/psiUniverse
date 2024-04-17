import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Help() {
  return (
    <main className="w-full px-52 py-12 bg-[#f5f6f8] grid grid-cols-1 gap-2">
      <Accordion
        type="single"
        collapsible
        className="w-full bg-white p-5 rounded-lg border-[#eae0ff] border-2"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">
            ¿Son los psicólogos/as particulares estudiantes en formación o
            profesionales graduados/as?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Todos nuestros psicólogos son{" "}
            <strong className="text-purple-900">profesionales graduados</strong>{" "}
            y licenciados, con la formación y experiencia necesaria para brindar
            un servicio de calidad. Algunos pueden estar en formación continua
            para especializarse aún más en su campo.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        type="single"
        collapsible
        className="w-full bg-white p-5 rounded-lg border-[#eae0ff] border-2"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">
            ¿Es posible tener una conversación inicial con el psicólogo/a antes
            de reservar mi primera sesión?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Sí, ofrecemos una{" "}
            <strong className="text-purple-900">
              consulta inicial gratuita
            </strong>{" "}
            para que puedas conocer al psicólogo y discutir tus expectativas y
            necesidades antes de comprometerte a una terapia.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        type="single"
        collapsible
        className="w-full bg-white p-5 rounded-lg border-[#eae0ff] border-2"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">
            ¿Con qué frecuencia debo asistir a las sesiones de terapia?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            La frecuencia de las sesiones varía según las necesidades
            individuales. Generalmente, se recomienda comenzar con sesiones{" "}
            <strong className="text-purple-900">semanales</strong> y ajustar
            según el progreso y la recomendación del terapeuta.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        type="single"
        collapsible
        className="w-full bg-white p-5 rounded-lg border-[#eae0ff] border-2"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">
            ¿Qué pasa si no me siento cómodo con mi psicólogo?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Es importante que te sientas cómodo con tu terapeuta. Si no es así,
            te animamos a que lo discutas con él o ella. Si lo prefieres,
            podemos facilitarte un cambio para que encuentres un terapeuta con
            el que te sientas más a gusto.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        type="single"
        collapsible
        className="w-full bg-white p-5 rounded-lg border-[#eae0ff] border-2"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">
            ¿Se mantienen en privado las conversaciones con un psicólogo?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Absolutamente. La{" "}
            <strong className="text-purple-900">confidencialidad</strong> es un
            pilar de nuestros servicios. Todas las conversaciones se mantienen
            en estricta privacidad, salvo en circunstancias excepcionales que la
            ley exija divulgar información.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        type="single"
        collapsible
        className="w-full bg-white p-5 rounded-lg border-[#eae0ff] border-2"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">
            ¿Qué tipo de terapias ofrecen?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Ofrecemos una variedad de terapias adaptadas a las necesidades
            individuales de cada cliente. Para el apoyo académico y el estrés
            académico, ofrecemos terapias cognitivo-conductuales, terapia de
            aceptación y compromiso, terapia de manejo del estrés, entre otras.
            Estas terapias pueden ayudar a desarrollar habilidades de manejo del
            tiempo, técnicas de estudio, manejo del estrés y a mejorar la
            autoestima y la confianza en las habilidades académicas.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        type="single"
        collapsible
        className="w-full bg-white p-5 rounded-lg border-[#eae0ff] border-2"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">
            ¿Cómo puedo programar una cita?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Puedes programar una cita a través de nuestro sitio web. Nuestro
            equipo te asistirá para encontrar el horario que mejor se adapte a
            tus necesidades.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        type="single"
        collapsible
        className="w-full bg-white p-5 rounded-lg border-[#eae0ff] border-2"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">
            ¿Cuál es la política de cancelación de citas?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Si necesitas cancelar o reprogramar tu cita, te pedimos que nos lo
            comuniques con al menos 24 horas de anticipación. De esta manera,
            podemos ofrecer tu horario a otro cliente que pueda necesitarlo.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        type="single"
        collapsible
        className="w-full bg-white p-5 rounded-lg border-[#eae0ff] border-2"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">
            ¿Cómo puedo prepararme para mi sesión de terapia?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Para prepararte para tu sesión de terapia, te sugerimos tener en
            mente los temas o preocupaciones que te gustaría discutir. También
            es útil estar en un lugar tranquilo y privado donde te sientas
            cómodo para hablar abiertamente.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
