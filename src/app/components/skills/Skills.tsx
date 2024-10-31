"use client"

import Atropos from "atropos/react"
import "atropos/css"
import Image from "next/image"
import {useTranslations} from "next-intl"
import {icons} from "@/app/utils/icons"

export const Skills = () => {
  const dict = useTranslations("Skills")
  const {frontend, backend, bd, testing, tools} = icons()

  return (
    <article className="flex flex-col items-center justify-center">
      <div className="px-10 py-5 w-full">
        <h2
          id="projects"
          className="text-3xl md:text-5xl text-center pb-2 font-bold mb-5 mt-4 text-black dark:text-white"
        >
          {dict("title")}
        </h2>
        <div className="">
          <h2 className="text-center text-primary text-xl md:text-3xl font-bold mb-4 mt-5">
            Frontend
          </h2>
          <Atropos className="my-atropos mt-5 " rotateTouch="scroll-y">
            <div className="grid md:flex grid-cols-3 md:flex-row justify-around items-center backdrop-brightness-75 border bg-[#E3E6E8] dark:bg-[#0D131E] border-primary rounded-xl overflow-hidden">
              {frontend.map((icon) => (
                <div
                  key={icon.title}
                  className="flex flex-col flex-justify items-center p-3 text-black dark:text-white"
                >
                  <Image
                    width={150}
                    height={150}
                    src={icon.path}
                    className={`w-7 md:w-10 ${
                      icon.color ? "invert" : "invert-0"
                    } dark:invert-0`}
                    alt={icon.alt}
                  />
                  <span className="text-xs mt-2 text-center">{icon.title}</span>
                </div>
              ))}
            </div>
          </Atropos>
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h2 className="text-center text-primary text-xl md:text-3xl font-bold mb-4 mt-5 pr-2">
                Backend
              </h2>
              <Atropos className="my-atropos mt-5" rotateTouch="scroll-y">
                <div className="flex flex-row justify-around md:justify-between items-center backdrop-brightness-75 border bg-[#E3E6E8] dark:bg-[#0D131E] border-primary rounded-xl">
                  {backend.map((icon) => (
                    <div
                      key={icon.title}
                      className="flex flex-col flex-justify items-center p-4 text-black dark:text-white"
                    >
                      <Image
                        width={150}
                        height={150}
                        src={icon.path}
                        className={`w-7 md:w-10 ${
                          icon.color ? "invert" : "invert-0"
                        } dark:invert-0`}
                        alt={icon.alt}
                      />
                      <span className="text-xs mt-2 text-center">
                        {icon.title}
                      </span>
                    </div>
                  ))}
                </div>
              </Atropos>
            </div>
            <div>
              <h2 className="text-center text-primary  text-xl md:text-3xl font-bold mb-4 mt-5">
                {dict("bd")}
              </h2>
              <Atropos className="my-atropos mt-5" rotateTouch="scroll-y">
                <div className="flex flex-row justify-around md:justify-between items-center backdrop-brightness-75 border bg-[#E3E6E8] dark:bg-[#0D131E] border-primary rounded-xl">
                  {bd.map((icon) => (
                    <div
                      key={icon.title}
                      className="flex flex-col flex-justify items-center p-4 text-black dark:text-white"
                    >
                      <Image
                        width={150}
                        height={150}
                        src={icon.path}
                        className={`w-7 md:w-10 ${
                          icon.color ? "invert" : "invert-0"
                        } dark:invert-0`}
                        alt={icon.alt}
                      />
                      <span className="text-xs mt-2 text-center">
                        {icon.title}
                      </span>
                    </div>
                  ))}
                </div>
              </Atropos>
            </div>
            <div>
              <h2 className="text-center text-primary text-xl md:text-3xl font-bold mb-4 mt-5 pr-2">
                Testing
              </h2>
              <Atropos className="my-atropos mt-5" rotateTouch="scroll-y">
                <div className="flex flex-row justify-around items-center backdrop-brightness-75 border bg-[#E3E6E8] dark:bg-[#0D131E] border-primary rounded-xl">
                  {testing.map((icon) => (
                    <div
                      key={icon.title}
                      className="flex flex-col flex-justify items-center p-4 text-black dark:text-white"
                    >
                      <Image
                        width={150}
                        height={150}
                        src={icon.path}
                        className={`w-7 md:w-10 ${
                          icon.color ? "invert" : "invert-0"
                        } dark:invert-0`}
                        alt={icon.alt}
                      />
                      <span className="text-xs mt-2 text-center">
                        {icon.title}
                      </span>
                    </div>
                  ))}
                </div>
              </Atropos>
            </div>
          </div>

          <h2 className="text-center text-primary text-xl md:text-3xl font-bold mb-4 mt-5 pr-2">
            {dict("tools")}
          </h2>
          <Atropos className="my-atropos mt-5" rotateTouch="scroll-y">
            <div className="grid md:flex grid-cols-3 md:flex-row justify-between items-center backdrop-brightness-75 border bg-[#E3E6E8] dark:bg-[#0D131E] border-primary rounded-xl">
              {tools.map((icon) => (
                <div
                  key={icon.title}
                  className="flex flex-col flex-justify items-center p-4 text-black dark:text-white"
                >
                  <Image
                    width={150}
                    height={150}
                    src={icon.path}
                    className={`w-7 md:w-10 ${
                      icon.color ? "invert" : "invert-0"
                    } dark:invert-0`}
                    alt={icon.alt}
                  />
                  <span className="text-xs mt-2 text-center ">
                    {icon.title}
                  </span>
                </div>
              ))}
            </div>
          </Atropos>
        </div>
      </div>
    </article>
  )
}
