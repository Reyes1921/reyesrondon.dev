"use client"
import Image from "next/image"
import {useEffect, useState} from "react"

export const DarkMode = () => {
  const [isDark, setIsDark] = useState(true)

  const handleClick = () => {
    setIsDark(!isDark)
    localStorage.theme = isDark ? "light" : "dark"
    document.documentElement.classList.toggle("dark")
  }

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
      setIsDark(true)
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.theme = "light"
      setIsDark(false)
    }
  }, [])

  return (
    <button
      className="mr-2 md:mr-5 border-[#111827] dark:border-white rounded-lg p-0.5 "
      onClick={handleClick}
    >
      <Image
        src="/sun.svg"
        alt="Sun Logo"
        width={22}
        height={22}
        className={`invert ${isDark ? "flex" : "hidden"}`}
      />
      <Image
        src="/moon.svg"
        alt="Moon Logo"
        width={22}
        height={22}
        className={` ${isDark ? "hidden" : "flex"}`}
      />
    </button>
  )
}
