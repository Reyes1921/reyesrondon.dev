"use client"
import Image from "next/image"
import Link from "next/link"
import {useTranslations} from "next-intl"

export const Project = () => {
  const dict = useTranslations("Projects")
  const projects = [
    {
      title: "Shortner Url",
      desc: dict("shortner_text"),
      img: dict("shortner_img"),
      path: dict("shortner_path"),
      level: "Full Stack",
      github: dict("shortner_git"),
      icons: [
        {
          path: "/icons/typescript.svg",
          title: "TypeScript",
          alt: "TypeScript logo",
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
          path: "/icons/mongodb.svg",
          title: "MongoDB",
          alt: "MongoDB logo",
        },
      ],
    },
    {
      title: "Image Color Detector",
      desc: dict("img_detector_text"),
      img: dict("img_detector_img"),
      path: dict("img_detector_path"),
      level: "Frontend",
      github: dict("img_detector_git"),
      icons: [
        {
          path: "/icons/react.svg",
          title: "React",
          alt: "React logo",
        },
        {
          path: "/icons/typescript.svg",
          title: "TypeScript",
          alt: "TypeScript logo",
        },
        {
          path: "/icons/tailwindcss.svg",
          title: "Tailwind CSS",
          alt: "Tailwind CSS logo",
        },
      ],
    },
    {
      title: "Shortner Url",
      desc: dict("shortner_text"),
      img: dict("shortner_img"),
      path: dict("shortner_path"),
      level: "Full Stack",
      github: dict("shortner_git"),
      icons: [
        {
          path: "/icons/typescript.svg",
          title: "TypeScript",
          alt: "TypeScript logo",
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
          path: "/icons/mongodb.svg",
          title: "MongoDB",
          alt: "MongoDB logo",
        },
      ],
    },
    {
      title: "Shortner Url",
      desc: dict("shortner_text"),
      img: dict("shortner_img"),
      path: dict("shortner_path"),
      level: "Full Stack",
      github: dict("shortner_git"),
      icons: [
        {
          path: "/icons/typescript.svg",
          title: "TypeScript",
          alt: "TypeScript logo",
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
          path: "/icons/mongodb.svg",
          title: "MongoDB",
          alt: "MongoDB logo",
        },
      ],
    },
  ]

  return (
    <article className="flex flex-col items-center justify-center">
      <div className="px-10 py-5 w-full">
        <h2
          id="projects"
          className="text-3xl md:text-5xl text-center pb-2 font-bold mb-5"
        >
          {dict("title")}
        </h2>
        <div className="grid grid-cols md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className="shadow-drop-center hover:scale-105 ease-in-out duration-500 block rounded-lg shadow-secondary-1 border border-lime-600 bg-[rgb(9,12,20)] min-h-3.5 relative"
            >
              <span className="absolute p-1 m-2 bg-[#65a30d] rounded-lg">
                {project.level}
              </span>
              <Link
                href={project.github}
                className="absolute right-0 m-2 hover:scale-110 hover:opacity-70 inline-block"
              >
                <Image
                  width={25}
                  height={25}
                  src="/icons/github.svg"
                  alt="github logo"
                />
              </Link>
              <Link href={project.path}>
                <Image
                  className="rounded-t-lg w-full"
                  width={400}
                  height={200}
                  src={project.img}
                  alt={project.title}
                />
              </Link>
              <div className="p-5">
                <Link href={project.path} className="flex">
                  <h5 className="mb-2 text-base md:text-xl leading-tight text-lime-600 font-bold">
                    {project.title}
                  </h5>
                </Link>

                <p className="mb-4 text-sm md:text-base">{project.desc}</p>
                <div className="flex justify-start">
                  {project.icons.map((icon) => (
                    <Image
                      key={icon.title}
                      width={70}
                      height={70}
                      src={icon.path}
                      className="w-9 md:w-10 color-[#F7DF1E] p-2"
                      alt={icon.alt}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
