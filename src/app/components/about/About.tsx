import Image from "next/image"
import {useTranslations} from "next-intl"

export const About = () => {
  const dict = useTranslations("About")
  return (
    <article className="flex flex-col items-center justify-center">
      <div className="px-10 py-5 w-full ">
        <h2
          id="about"
          className="text-3xl md:text-5xl text-center pb-2 font-bold mb-5 mt-4"
        >
          {dict("title")}
        </h2>
        <div className="flex justify-center items-center float-none sm:float-left imgAbout mb-10 md:mb-0">
          <Image
            width={150}
            height={150}
            src="/reyes-rondon.webp"
            alt="Reyes Rondon"
            className="rounded-full border-4 border-lime-600 md:mr-6 w-2/5 md:w-44"
          />
        </div>
        <p className="text-base md:text-xl text-center md:text-left tracking-wider text-[#ffffffb5]">
          {dict("text")}
        </p>
        {/* <p className="text-xl text-center md:text-left">
          Ingeniero en informática con más de 4 años de experiencia en el
          desarrollo y mantenimiento de aplicaciones web con
          <span className="spanColor"> React</span>,
          <span className="spanColor"> PHP</span>,
          <span className="spanColor"> MySQL</span> y
          <span className="spanColor"> WordPress</span>, desde marcas personales
          hasta tiendas online. Tengo profundos conocimientos en
          <span className="spanColor"> HTML</span>,
          <span className="spanColor"> CSS</span>,
          <span className="spanColor"> JavaScript</span>,
          <span className="spanColor"> MySQL</span>,
          <span className="spanColor"> React</span>,
          <span className="spanColor"> TypeScript</span> y diseño web.
          Recientemente, trabajé en Wordpress Hilfe & Support Berlin, donde cree
          más de 30 páginas web.
        </p> */}
      </div>
    </article>
  )
}
