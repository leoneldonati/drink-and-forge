import Image from "next/image";
import presentation from "@assets/presentation.png";
export default function About() {
  return (
    <section className="flex flex-col gap-5 font-brand-1 text-pretty [&>p]:text-lg [&>p>strong]:text-brand-1 [&>p>strong]:contrast-150 ">
      <h2 className="text-4xl font-brand-2 text-center animate-slide_in">
        ¿Quiénes somos?
      </h2>

      <Image
        src={presentation}
        alt=""
        className="w-full rounded-md shadow-md shadow-brand-1 animate-from-center"
      />

      <p>
        La vida tiene sus momentos: amores que terminan, días que bajonean y
        cosas que simplemente es mejor <strong>olvidar</strong>.
      </p>
      <p>
        Para ésto también existen esas noches, esos{" "}
        <strong>brindis con amigos</strong>, esas risas que te{" "}
        <strong>curan el alma</strong> y te hacen decir <strong>ya fue</strong>.
      </p>
      <p>
        Así nació <strong>Drink and Forget</strong>.
      </p>
      <p>
        Una marca para los que saben que <strong>la vida sigue</strong>, que
        cada trago puede ser un <strong>nuevo comienzo</strong>, y que siempre
        hay un motivo para <strong>celebrar</strong>.
      </p>
    </section>
  );
}
