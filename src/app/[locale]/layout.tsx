import {Nunito} from "next/font/google"
import {NextIntlClientProvider} from "next-intl"
import {getMessages, getTranslations} from "next-intl/server"
import {cookies} from "next/headers"
import {Footer, Header} from "../components"
import "./globals.css"
interface RootMetadata {
  params: {locale: string}
}

export async function generateMetadata({params}: RootMetadata) {
  const t = await getTranslations({params, namespace: "Metadata"})

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/favicon.ico",
    },
    alternates: {
      canonical: "http://reyesrondon.vercel.app/",
    },
  }
}

const inter = Nunito({subsets: ["latin"], style: ["normal", "italic"]})

interface RootLayoutProps {
  children: React.ReactNode
  params: {locale: string}
}

export default async function RootLayout({
  children,
  params: {locale},
}: Readonly<RootLayoutProps>) {
  const dictionaries = await getMessages()
  const cookieStore = cookies()
  const theme = cookieStore.get("theme")?.value === "dark" ? "dark" : ""

  return (
    <html lang={locale} className={theme}>
      <body
        className={`
          ${inter.className}
          bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-gray-100 to-gray-400 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-gray-900 dark:via-gray-900 dark:to-black`}
      >
        <NextIntlClientProvider messages={dictionaries}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
