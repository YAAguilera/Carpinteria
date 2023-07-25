import { useState } from "react";
import Faq from "./Faq";

const faqs = [
  {
    question: "¿Cuánto cuesta construir/armar un mueble específico?",
    answer:
      "El costo varía según el diseño, las medidas y los materiales que se utilicen. Como cada proyecto es único, es necesario analizar los detalles para proporcionar un presupuesto preciso y justo. Por favor, proporciónenos más información sobre su proyecto para ofrecerle una estimación detallada",
    dropKey: "first_faq",
  },
  {
    question: "¿Cuánto tiempo tomará completar mi proyecto?",
    answer:
      "El tiempo de finalización de su proyecto puede variar debido a nuestra carga de trabajo actual. Sin embargo, estamos comprometidos a brindarle un servicio de calidad. Una vez que revisemos los detalles específicos de su proyecto, podremos acordar una fecha de entrega que se ajuste a sus necesidades",
    dropKey: "second_faq",
  },
  {
    question: "¿Puedes asesorarme en el diseño y materiales para maximizar el espacio disponible?",
    answer:
      "!Absolutamente¡Trabajaremos juntos para crear soluciones funcionales y estéticas que se ajusten a tus necesidades y aprovechen al máximo el espacio.",
    dropKey: "third_faq",
  },
  {
    question: "¿Cuál es tu proceso de trabajo?",
    answer:
      "Nuestro proceso de trabajo incluye: escuchar tus ideas, crear un boceto detallado, seleccionar materiales de alta calidad, y una precisa instalación.",
    dropKey: "four_faq",
  },
];

const FAQ = () => {
  const [dropState, setDropState] = useState([
    { id: "first_faq", isOpen: false },
    { id: "second_faq", isOpen: false },
    { id: "third_faq", isOpen: false },
    { id: "four_faq", isOpen: false },
  ]);

  const handleToggleDrop = (id) => {
    setDropState(
      dropState.map((faq) => {
        if (faq.id === id) {
          return { ...faq, isOpen: !faq.isOpen };
        } else {
          return faq;
        }
      })
    );
  };

  return (
    <section name="faq" className=" flex-col gap-y-4  items-center flex ">
      <main className=" pt-16 flex items-center flex-col gap-y-6">
        <h3 className="text-4xl   text-center font-extrabold underline decoration-solid text-black">
          Preguntas frecuentes
        </h3>
        {faqs.map((f) => (
          <Faq
            key={f.dropKey}
            question={f.question}
            answer={f.answer}
            onDrop={() => handleToggleDrop(f.dropKey)}
            isDrop={dropState.find((faq) => faq.id === f.dropKey)}
          />
        ))}
      </main>
    </section>
  );
};

export default FAQ;
