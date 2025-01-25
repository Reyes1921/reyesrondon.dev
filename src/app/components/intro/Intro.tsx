import Image from "next/image"
import {Buttons} from "./Buttons"
import {useTranslations} from "next-intl"

export const Intro = () => {
  const dict = useTranslations("Intro")
  return (
    <article className="flex items-center justify-center flex-col-reverse md:flex-row">
      <div className="px-10 py-5 md:w-11/12 text-center mx-auto">
        <h1 className="text-3xl md:text-5xl pb-2 font-bold text-center md:text-left main-heading text-black dark:text-white">
          {/* <span className="text-primary">{"<"} </span> */}
          Reyes Rondón
          {/* <span className="text-primary"> {"/>"}</span> */}
        </h1>

        <div className="flex items-center mt-5 mb-5 justify-center md:justify-start">
          <span className="relative inline-flex overflow-hidden rounded-lg p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#44d62c_0%,#144d0b_50%,#44d62c_100%)]"></span>
            <div className="inline-flex items-center justify-center w-full px-3 py-1 md:text-xl text-black bg-zinc-100 rounded-lg  dark:bg-[#0C1426] dark:text-white backdrop-blur-3xl whitespace-nowrap">
              {dict("level")}
            </div>
          </span>
        </div>

        <p className="text-center md:text-start text-base md:text-xl  text-black dark:text-[#ffffffb5]">
          {dict("experience")}{" "}
          <span className="text-primary">{dict("engineer")}</span>{" "}
          {dict("text_1")}{" "}
          <span className="text-primary">{dict("developer")}</span>{" "}
          {dict("text")} <span className="text-primary"> React</span>{" "}
          {dict("text_1")}
          <span className="text-primary"> WordPress</span>.
        </p>
        <Buttons />
      </div>
      <div className="flex justify-center  md:justify-start w-2/6 md:mb-0">
        <Image
          width={150}
          height={150}
          src="/profile/reyes-rondon.webp"
          alt="Reyes Rondon"
          className="rounded-full border-4 border-primary w-4/5 animate-shadow-drop-center"
        />
      </div>
    </article>
  )
}
