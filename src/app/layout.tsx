import type {Metadata} from "next"
import {Nunito} from "next/font/google"
import "./globals.css"

const inter = Nunito({subsets: ["latin"], style: ["normal", "italic"]})

export const metadata: Metadata = {
  title: "Portafolio de Reyes Rondón - Desarrollador y Programador Web",
  description: "Fronted developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black"
    >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
