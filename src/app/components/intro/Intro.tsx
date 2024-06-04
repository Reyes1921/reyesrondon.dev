import Image from "next/image"
import {Buttons} from "./Buttons"

export const Intro = () => {
  return (
    <article className="flex items-center justify-center flex-col-reverse md:flex-row">
      <div className="p-10 md:w-11/12 text-center mx-auto">
        <h1 className="text-4xl md:text-5xl pb-2 font-bold text-center md:text-left main-heading">
          Reyes Rondón
        </h1>
        <span className="flex justify-between flex-col md:flex-row pb-4 text-lime-600 text-xl">
          <p>Ingeniero en Informática</p>
        </span>
        <p className="text-center md:text-start text-xl">
          Tengo más de 4 años de experiencia en el desarrollo y mantenimiento de
          aplicaciones web con <span className="spanColor">React</span>,
          <span className="spanColor"> PHP</span>,
          <span className="spanColor"> MySQL</span> y
          <span className="spanColor"> WordPress</span>.
        </p>
        <Buttons />
      </div>
      <div className="flex justify-center md:justify-start w-3/6 md:w-2/6 md:mb-0">
        <Image
          width={150}
          height={150}
          src="/reyes-rondon.webp"
          alt="imagen de Reyes Rondon"
          className=" rounded-full border-4 border-lime-600 w-4/5"
        />
      </div>
    </article>
  )
}
