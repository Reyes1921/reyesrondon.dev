"use client"

import Atropos from "atropos/react"
import Image from "next/image"

export const Project = () => {
  const projects = [
    {
      title: "Title Project",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: "/reyes-rondon.webp",
      path: "/",
      icons: [
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
      ],
    },
    {
      title: "Title Project",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: "/reyes-rondon.webp",
      path: "/",
      icons: [
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
      ],
    },
    {
      title: "Title Project",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: "/reyes-rondon.webp",
      path: "/",
      icons: [
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
      ],
    },
    {
      title: "Title Project",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: "/reyes-rondon.webp",
      path: "/",
      icons: [
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
      ],
    },
    {
      title: "Title Project",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: "/reyes-rondon.webp",
      path: "/",
      icons: [
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
      ],
    },
    {
      title: "Title Project",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: "/reyes-rondon.webp",
      path: "/",
      icons: [
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
      ],
    },
  ]

  return (
    <article className="flex flex-col items-center justify-center">
      <h2 id="projects" className="text-4xl md:text-5xl pb-2 font-bold">
        Proyectos
      </h2>
      <div className="p-10 w-full ">
        <div className="grid grid-cols md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <Atropos
              key={project.title}
              className="my-atropos mt-5"
              rotateTouch="scroll-y"
            >
              <div className="block rounded-lg shadow-secondary-1 border border-lime-600 bg-[rgb(9,12,20)]">
                <a href={project.path}>
                  <Image
                    className="rounded-t-lg"
                    width={200}
                    height={100}
                    src={project.img}
                    alt={project.title}
                  />
                </a>
                <div className="p-5">
                  <h5 className="mb-2 text-xl leading-tight text-lime-600 font-bold">
                    {project.title}
                  </h5>
                  <p className="mb-4 text-base">{project.desc}</p>
                  <div className="flex">
                    {project.icons.map((icon) => (
                      <Image
                        key={icon.title}
                        width={70}
                        height={70}
                        src={icon.path}
                        className="w-7 md:w-10 color-[#F7DF1E] p-2"
                        alt={icon.alt}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Atropos>
          ))}
        </div>
      </div>
    </article>
  )
}
