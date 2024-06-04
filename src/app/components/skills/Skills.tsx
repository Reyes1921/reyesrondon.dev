"use client"

import Atropos from "atropos/react"
import "atropos/css"
import Image from "next/image"

export const Skills = () => {
  const frontend = [
    {
      path: "/icons/html5.svg",
      title: "HTML",
      alt: "HTML logo",
    },
    {
      path: "/icons/css3.svg",
      title: "CSS",
      alt: "CSS logo",
    },
    {
      path: "/icons/javascript.svg",
      title: "JavaScript",
      alt: "JavaScript logo",
    },
    {
      path: "/icons/typescript.svg",
      title: "TypeScript",
      alt: "TypeScript logo",
    },
    {
      path: "/icons/react.svg",
      title: "React",
      alt: "React logo",
    },
    {
      path: "/icons/nextdotjs.svg",
      title: "Next.Js",
      alt: "Next.Js logo",
    },
    {
      path: "/icons/tailwindcss.svg",
      title: "Tailwind CSS",
      alt: "Tailwind CSS logo",
    },
    {
      path: "/icons/bootstrap.svg",
      title: "Bootstrap",
      alt: "Bootstrap logo",
    },
  ]

  const backend = [
    {
      path: "/icons/nodedotjs.svg",
      title: "NodeJs",
      alt: "NodeJs logo",
    },
    {
      path: "/icons/express.svg",
      title: "Express",
      alt: "Express logo",
    },
    {
      path: "/icons/php.svg",
      title: "PHP",
      alt: "PHP logo",
    },
  ]

  const bd = [
    {
      path: "/icons/mongodb.svg",
      title: "MongoDB",
      alt: "MongoDB logo",
    },
    {
      path: "/icons/postgresql.svg",
      title: "PostgreSQL",
      alt: "PostgreSQL logo",
    },
    {
      path: "/icons/mysql.svg",
      title: "MySQL",
      alt: "MySQL logo",
    },
  ]

  const testing = [
    {
      path: "/icons/jest.svg",
      title: "Jest",
      alt: "Jest logo",
    },
    {
      path: "/icons/testinglibrary.svg",
      title: "Testing Library",
      alt: "Testing Library logo",
    },
  ]

  const tools = [
    {
      path: "/icons/git.svg",
      title: "Git",
      alt: "Git logo",
    },
    {
      path: "/icons/github.svg",
      title: "GitHub",
      alt: "GitHub logo",
    },
    {
      path: "/icons/visualstudio.svg",
      title: "VSCode",
      alt: "VSCode logo",
    },
    {
      path: "/icons/npm.svg",
      title: "npm",
      alt: "npm logo",
    },
    {
      path: "/icons/gnometerminal.svg",
      title: "Terminal",
      alt: "Terminal logo",
    },
    {
      path: "/icons/wordpress.svg",
      title: "WordPress",
      alt: "WordPress logo",
    },
  ]

  return (
    <article className="flex items-center justify-center md:flex-row">
      <div className="p-10 w-full">
        <h2
          id="projects"
          className="text-4xl text-center md:text-5xl pb-2 font-bold"
        >
          Tecnologías
        </h2>
        <div className="">
          <h2 className="text-center text-lime-600 text-3xl font-bold mb-4 mt-5">
            Frontend
          </h2>
          <Atropos className="my-atropos mt-5" rotateTouch="scroll-y">
            <div className="grid md:flex grid-cols-3 md:flex-row justify-around items-center backdrop-brightness-75 border border-lime-600 rounded-xl">
              {frontend.map((icon) => (
                <div
                  key={icon.title}
                  className="flex flex-col flex-justify items-center p-4"
                >
                  <Image
                    width={150}
                    height={150}
                    src={icon.path}
                    className="w-7 md:w-10 color-[#F7DF1E]"
                    alt={icon.alt}
                  />
                  <span className="text-xs mt-2">{icon.title}</span>
                </div>
              ))}
            </div>
          </Atropos>
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h2 className="text-center text-lime-600 text-3xl font-bold mb-4 mt-5 pr-2">
                Backend
              </h2>
              <Atropos className="my-atropos mt-5 ">
                <div className="flex flex-row justify-around md:justify-between items-center backdrop-brightness-75 border border-lime-600 rounded-xl">
                  {backend.map((icon) => (
                    <div
                      key={icon.title}
                      className="flex flex-col flex-justify items-center p-4"
                    >
                      <Image
                        width={150}
                        height={150}
                        src={icon.path}
                        className="w-7 md:w-10 color-[#F7DF1E]"
                        alt={icon.alt}
                      />
                      <span className="text-xs mt-2">{icon.title}</span>
                    </div>
                  ))}
                </div>
              </Atropos>
            </div>
            <div>
              <h2 className="text-center text-lime-600 text-3xl font-bold mb-4 mt-5">
                Bases de Datos
              </h2>
              <Atropos className="my-atropos mt-5">
                <div className="flex flex-row justify-around md:justify-between items-center backdrop-brightness-75 border border-lime-600 rounded-xl">
                  {bd.map((icon) => (
                    <div
                      key={icon.title}
                      className="flex flex-col flex-justify items-center p-4"
                    >
                      <Image
                        width={150}
                        height={150}
                        src={icon.path}
                        className="w-7 md:w-10 color-[#F7DF1E]"
                        alt={icon.alt}
                      />
                      <span className="text-xs mt-2">{icon.title}</span>
                    </div>
                  ))}
                </div>
              </Atropos>
            </div>
            <div>
              <h2 className="text-center text-lime-600 text-3xl font-bold mb-4 mt-5 pr-2">
                Testing
              </h2>
              <Atropos className="my-atropos mt-5">
                <div className="flex flex-row justify-around items-center backdrop-brightness-75 border border-lime-600 rounded-xl">
                  {testing.map((icon) => (
                    <div
                      key={icon.title}
                      className="flex flex-col flex-justify items-center p-4"
                    >
                      <Image
                        width={150}
                        height={150}
                        src={icon.path}
                        className="w-7 md:w-10 color-[#F7DF1E]"
                        alt={icon.alt}
                      />
                      <span className="text-xs mt-2">{icon.title}</span>
                    </div>
                  ))}
                </div>
              </Atropos>
            </div>
          </div>

          <h2 className="text-center text-lime-600 text-3xl font-bold mb-4 mt-5 pr-2">
            Herramientas
          </h2>
          <Atropos className="my-atropos mt-5">
            <div className="grid md:flex grid-cols-3 md:flex-row justify-between items-center backdrop-brightness-75 border border-lime-600 rounded-xl">
              {tools.map((icon) => (
                <div
                  key={icon.title}
                  className="flex flex-col flex-justify items-center p-4"
                >
                  <Image
                    width={150}
                    height={150}
                    src={icon.path}
                    className="w-7 md:w-10 color-[#F7DF1E]"
                    alt={icon.alt}
                  />
                  <span className="text-xs mt-2">{icon.title}</span>
                </div>
              ))}
            </div>
          </Atropos>
        </div>
      </div>
    </article>
  )
}
