"use client"
import Link from "next/link"
import {useEffect} from "react"

export default function NotFound() {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.theme = "light"
    }
  }, [])

  return (
    <html className="flex flex-col justify-center items-center min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-white to-white dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-gray-900 dark:via-gray-900 dark:to-black">
      <body>
        <div className="main animated fadeIn md:min-w-[850px] flex justify-center items-center ">
          <div className="flex flex-col justify-center items-center">
            <p className="text-9xl font-bold text-lime-600">404</p>
            <Link href="/">
              <button className="button-error m-5 border-2 border-lime-600 flex justify-center items-center p-4 text-white rounded-xl text-base hover:scale-105 ease-in-out shadow-drop-center ">
                <span className="text-sm flex justify-center items-center">
                  Go Back / Atrás
                </span>
              </button>
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}
