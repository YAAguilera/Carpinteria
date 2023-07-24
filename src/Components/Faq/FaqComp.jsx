import { useState } from "react";
import Faq from "./Faq";

const faqs = [
  {
    question: "¿Pregunta 1?",
    answer:
      "Respuesta 1.",
    dropKey: "first_faq",
  },
  {
    question: "¿Pregunta 2?",
    answer:
      "Respuesta 2",
    dropKey: "second_faq",
  },
  {
    question: "Pregunta 3?",
    answer:
      "Respuesta 3.",
    dropKey: "third_faq",
  },
  {
    question: "¿Pregunta 4?",
    answer:
      "Respuesta 4.",
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
      <main className=" pt-16 flex flex-col gap-y-6">
        <h3 className="text-4xl  text-center font-extrabold underline decoration-solid text-black">
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
