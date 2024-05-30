import {Buttons} from "./Buttons"

export const Intro = () => {
  return (
    <article className="flex items-center justify-center flex-row">
      <div className="pr-10 w-3/4">
        <h1 className="text-4xl md:text-5xl pb-2">Reyes Rondón</h1>
        <span className="flex justify-between pb-4 text-lime-600 text-xl">
          <p>Ingeniero en informática</p> - <p>Desarrollador Front end</p>
        </span>
        <p className="text-start text-2xl">
          Tengo más de 4 años de experiencia en el desarrollo y mantenimiento de
          aplicaciones web con <span className="spanColor">React</span>,
          <span className="spanColor"> PHP</span>,
          <span className="spanColor"> MySQL</span> y
          <span className="spanColor"> WordPress</span>.
        </p>
        <Buttons />
      </div>
      <div className="w-2/4">
        <img
          src="/reyes-rondon.jpg"
          alt="imagen de Reyes Rondon"
          className=" rounded-full border-4 border-lime-600 w-4/5"
        />
      </div>
    </article>
  )
}
