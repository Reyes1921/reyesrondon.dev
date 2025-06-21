import {useTranslations} from "next-intl"

export const Experiencie = () => {
  const dict = useTranslations("Experience")
  return (
    <article className="flex flex-col items-center justify-center">
      <div className="px-10 py-5 w-full">
        <h2
          id="experience"
          className="text-3xl md:text-5xl text-center pb-2 font-bold mb-5 mt-4 scroll-mt-20 text-black dark:text-white"
        >
          {dict("title")}
        </h2>
        <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical flex flex-start">
          <li>
            <hr className="bg-primary" />
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
              <div className="text-black dark:text-white">
                <span className="text-primary text-lg font-black">
                  WordPress Developer
                </span>
                <span> - </span>
                <span className="text-base font-normal">
                  Addiction Marketing Agency (AMA),
                  <span className="text-primary">{dict("remote")}</span>
                </span>
              </div>
              <time className="font-mono italic text-black dark:text-white">
                {dict("dates_3")}
              </time>
              <p className="text-left md:text-start text-base md:text-xl mt-3 text-black dark:text-[#ffffffb5]">
                {dict("text3")}
              </p>
            </div>
            <hr className="bg-primary" />
          </li>

          <li>
            <hr className="bg-primary" />
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
              <div className="text-black dark:text-white">
                <span className="text-primary text-lg font-black">
                  WordPress Developer
                </span>
                <span> - </span>
                <span className="text-base font-normal">
                  Wordpress Hilfe & Support Berlin,
                  <span className="text-primary">{dict("remote")}</span>
                </span>
              </div>
              <time className="font-mono italic text-black dark:text-white">
                {dict("dates_2")}
              </time>
              <p className="text-left md:text-start text-base md:text-xl mt-3 text-black dark:text-[#ffffffb5]">
                {dict("text_2")}
              </p>
            </div>
            <hr className="bg-primary" />
          </li>

          <li>
            <hr className="bg-primary" />
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
              <div className="text-black dark:text-white">
                <span className="text-primary text-lg font-black">
                  {dict("lvl_2")}
                </span>
                <span> - </span>
                <span className="text-base font-normal">Freelance</span>
              </div>
              <time className="font-mono italic text-black dark:text-white">
                {dict("dates_1")}
              </time>
              <p className="text-left md:text-start text-base md:text-xl mt-3 text-black dark:text-[#ffffffb5]">
                {dict("text_1")}
              </p>
            </div>
            <hr className="bg-primary" />
          </li>
        </ul>
      </div>
    </article>
  )
}
