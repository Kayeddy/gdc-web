"use client";

// Framer motion imports
import { motion } from "framer-motion";

// Utils imports
import { staggerContainer } from "../../utils/motion";

// Components imports
import { TitleText, TypingText } from "@/components/custom/CustomTexts";
import CanvasRevealCard from "@/components/cards/CanvasRevealCard";
import { CanvasRevealEffect } from "@/components/design/canvas-reveal-effect";

const Explore = () => {
  const gdcBenefits = [
    {
      id: "benefit-1",
      title: "Proyectos reales",
      description:
        "Trabaja en proyectos reales con equipos multidisciplinarios exclusivos de tu Universidad.",
      cardBorderBackground: "/svg/card-1.svg",
      children: (
        <>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial fade gradient */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </>
      ),
    },
    {
      id: "benefit-2",
      title: "Mentoría personalizada",
      description:
        "Recibe mentoría de desarrolladores experimentados de la industria.",
      cardBorderBackground: "/svg/card-2.svg",
      children: (
        <>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </>
      ),
    },
    {
      id: "benefit-3",
      title: "Recursos educativos",
      description:
        "Accede a recursos educativos exclusivos de partners como Platzi, Codecademy y más.",
      cardBorderBackground: "/svg/card-3.svg",

      children: (
        <>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </>
      ),
    },
    {
      id: "benefit-4",
      title: "Crea conexiones",
      description:
        "Conéctate con una red regional de estudiantes apasionados por la tecnología.",
      cardBorderBackground: "/svg/card-4.svg",

      children: (
        <>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial fade gradient */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </>
      ),
    },
    {
      id: "benefit-5",
      title: "Impulsa tus habilidades",
      description:
        "Desarrolla habilidades técnicas y blandas demandadas por las empresas.",
      cardBorderBackground: "/svg/card-5.svg",

      children: (
        <>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </>
      ),
    },
    {
      id: "benefit-6",
      title: "Experiencia laboral",
      description:
        "Obtén experiencia laboral invaluable en un entorno de startup.",
      cardBorderBackground: "/svg/card-6.svg",

      children: (
        <>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial fade gradient */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </>
      ),
    },
    {
      id: "benefit-7",
      title: "Atrae inversionistas",
      description:
        "Presenta tu proyecto en Demo Days frente a inversionistas ángeles y reclutadores.",
      cardBorderBackground: "/svg/card-1.svg",
      children: (
        <>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </>
      ),
    },
  ];

  return (
    <section className={`paddings`} id="explore">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`inner-width mx-auto flex flex-col`}
      >
        <TypingText title="| Beneficios" textStyles="text-center" />
        <TitleText
          title={
            <>
              Beneficios <br className="md:block hidden" /> de unirte al GDC
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5 flex-wrap w-full items-center justify-center">
          {gdcBenefits.map((benefit, index) => (
            <CanvasRevealCard
              key={index}
              children={benefit.children}
              title={benefit.title}
              description={benefit.description}
              cardBorderBackground={benefit.cardBorderBackground}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
