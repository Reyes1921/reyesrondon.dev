import {Buttons} from "./Buttons"

export const Intro = () => {
  return (
    <article className="flex items-center justify-center flex-col-reverse md:flex-row">
      <div className="p-10 md:pr-10 md:w-3/4">
        <h1 className="text-4xl md:text-5xl pb-2 font-bold">Reyes Rondón</h1>
        <span className="flex justify-between flex-col md:flex-row pb-4 text-lime-600 text-xl">
          <p>Ingeniero en informática</p>
        </span>
        <p className="text-start text-xl">
          Tengo más de 4 años de experiencia en el desarrollo y mantenimiento de
          aplicaciones web con <span className="spanColor">React</span>,
          <span className="spanColor"> PHP</span>,
          <span className="spanColor"> MySQL</span> y
          <span className="spanColor"> WordPress</span>.
        </p>
        <Buttons />
      </div>
      <div className="w-3/6 md:w-2/6 md:mb-0">
        <img
          src="/reyes-rondon.jpg"
          alt="imagen de Reyes Rondon"
          className=" rounded-full border-4 border-lime-600 w-4/5"
        />
      </div>
    </article>
  )
}
