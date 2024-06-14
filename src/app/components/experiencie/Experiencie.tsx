export const Experiencie = () => {
  return (
    <article className="flex flex-col items-center justify-center">
      <div className="p-10 w-full">
        <h2
          id="experience"
          className="text-4xl text-center md:text-5xl pb-2 font-bold mb-5"
        >
          Experiencia
        </h2>
        <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical flex flex-start">
          <li>
            <hr className="bg-[#65a30d]" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <div>
                <span className="text-[#65a30d] text-lg font-black">
                  Full-Stack WordPress Developer
                </span>
                <span> - </span>
                <span className="text-base font-normal">
                  Wordpress Hilfe & Support Berlin,{" "}
                  <span className="text-[#65a30d]">Remoto</span>
                </span>
              </div>
              <time className="font-mono italic">Julio 2019 - Enero 2024</time>
              <p className="text-left md:text-start text-xl mt-3">
                Adapté y creé plugins utilizando
                <span className="spanColor"> HTML</span>,
                <span className="spanColor"> CSS</span>,
                <span className="spanColor"> JavaScript</span>,
                <span className="spanColor"> JQuery</span>,
                <span className="spanColor"> MySQL</span> y
                <span className="spanColor"> PHP</span>, además lideré un equipo
                de desarrolladores para cumplir con los plazos de los proyectos.
              </p>
            </div>
            <hr className="bg-[#65a30d]" />
          </li>
          <li>
            <hr className="bg-[#65a30d]" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <div>
                <span className="text-[#65a30d] text-lg font-black">
                  Full-Stack WordPress Developer
                </span>
                <span> - </span>
                <span className="text-base font-normal">
                  Wordpress Hilfe & Support Berlin,{" "}
                  <span className="text-[#65a30d]">Remoto</span>
                </span>
              </div>
              <time className="font-mono italic">Julio 2019 - Enero 2024</time>
              <p className="text-left md:text-start text-xl mt-3">
                Adapté y creé plugins utilizando
                <span className="spanColor"> HTML</span>,
                <span className="spanColor"> CSS</span>,
                <span className="spanColor"> JavaScript</span>,
                <span className="spanColor"> JQuery</span>,
                <span className="spanColor"> MySQL</span> y
                <span className="spanColor"> PHP</span>, además lideré un equipo
                de desarrolladores para cumplir con los plazos de los proyectos.
              </p>
            </div>
            <hr className="bg-[#65a30d]" />
          </li>
        </ul>
      </div>
    </article>
  )
}
