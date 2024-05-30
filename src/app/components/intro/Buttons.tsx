export const Buttons = () => {
  return (
    <div className="flex flex-row justify-between mt-3">
      <a href="https://github.com/Reyes1921" target="_blank">
        <button className="flex gap-1 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-3 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
          <img
            src="/github.svg"
            height="12"
            width="20"
            className="filter invert"
            alt="github logo"
          />
          Github
        </button>
      </a>
      <a href="https://www.linkedin.com/in/reyes-rondon/" target="_blank">
        <button className="flex gap-1 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-3 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
          <img
            src="/linkedin.svg"
            height="12"
            width="20"
            className="filter invert"
            alt="linkedin logo"
          />
          Linkedin
        </button>
      </a>
      <a href="mailto:reyesjrondon@gmail.com">
        <button className="flex gap-1 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-3 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
          <img
            src="/gmail.svg"
            height="12"
            width="20"
            className="filter invert"
            alt="gmail logo"
          />
          reyesjrondon@gmail.com
        </button>
      </a>
      <a href="https://github.com/Reyes1921" target="_blank">
        <button className="flex gap-1 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-3 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
          <img
            src="/readdotcv.svg"
            height="12"
            width="20"
            className="filter invert"
            alt="cv logo"
          />
          CV
        </button>
      </a>
    </div>
  )
}
