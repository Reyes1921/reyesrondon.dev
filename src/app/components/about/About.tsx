import Image from "next/image"
import {useTranslations} from "next-intl"

export const About = () => {
  const dict = useTranslations("About")
  return (
    <article className="flex flex-col items-center justify-center mb-10">
      <div className="px-10 py-5 w-full ">
        <h2
          id="about"
          className="text-3xl md:text-5xl text-center pb-2 font-bold mb-5 mt-4 scroll-mt-20 text-black dark:text-white"
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
        <p className="text-base md:text-xl text-center md:text-left tracking-tight text-black dark:text-[#ffffffb5] ">
          {dict("text_1")}
          <span className=" text-lime-600"> React</span>,
          <span className=" text-lime-600"> PHP</span>,
          <span className=" text-lime-600"> MySQL</span> {dict("text_2")}
          <span className=" text-lime-600"> WordPress</span>, {dict("text_3")}
          <span className=" text-lime-600"> HTML</span>,
          <span className=" text-lime-600"> CSS</span>,
          <span className=" text-lime-600"> JavaScript</span>,
          <span className=" text-lime-600"> MySQL</span>,
          <span className=" text-lime-600"> React</span>,
          <span className=" text-lime-600"> TypeScript</span> {dict("text_4")}
        </p>
      </div>
    </article>
  )
}
