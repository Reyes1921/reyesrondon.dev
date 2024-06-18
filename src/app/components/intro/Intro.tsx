import Image from "next/image"
import {Buttons} from "./Buttons"
import {useTranslations} from "next-intl"

export const Intro = () => {
  const dict = useTranslations("Intro")
  return (
    <article className="flex items-center justify-center flex-col-reverse md:flex-row">
      <div className="px-10 py-5 md:w-11/12 text-center mx-auto">
        <h1 className="text-3xl md:text-5xl pb-2 font-bold text-center md:text-left main-heading">
          Reyes Rondón
        </h1>
        <span className="flex justify-between flex-col md:flex-row pb-4 text-lime-600 text-base md:text-xl">
          <p>{dict("level")}</p>
        </span>
        <p className="text-center md:text-start text-base md:text-xl">
          {dict("text")}
        </p>
        <Buttons />
      </div>
      <div className="flex justify-center  md:justify-start w-2/6 md:mb-0">
        <Image
          width={150}
          height={150}
          src="/reyes-rondon.webp"
          alt="Reyes Rondon"
          className="rounded-full border-4 border-lime-600 w-4/5"
        />
      </div>
    </article>
  )
}
