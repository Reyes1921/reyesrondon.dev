import {Nunito} from "next/font/google"
import {NextIntlClientProvider} from "next-intl"
import {getMessages, getTranslations} from "next-intl/server"
import {cookies} from "next/headers"
import {Footer, Header} from "../components"
import "./globals.css"
import {GoogleTagManager, GoogleAnalytics} from "@next/third-parties/google"

interface Props {
  children: React.ReactNode
  params: Promise<{locale: string}>
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params
  const t = await getTranslations({locale, namespace: "Metadata"})

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/favicon.ico",
    },
    alternates: {
      canonical: t("canonical"),
    },
    openGraph: {
      title: t("title_og"),
      description: t("description_og"),
      images: [
        {
          url: "https://www.reyesrondon.dev/_next/image?url=%2Fprofile%2Freyes-rondon.webp&w=384&q=75",
          width: 1200,
          height: 630,
          alt: "Reyes Rondón",
        },
      ],
    },
  }
}

const inter = Nunito({subsets: ["latin"], style: ["normal", "italic"]})

export default async function RootLayout({children, params}: Readonly<Props>) {
  // 1. Resolvemos la promesa de params
  const {locale} = await params

  // 2. Resolvemos las cookies asíncronas y calculamos el theme
  const cookieStore = await cookies()
  const theme = cookieStore.get("theme")?.value === "dark" ? "dark" : ""

  // 3. Obtenemos las traducciones y mensajes pasando el locale explícito
  const dictionaries = await getMessages()
  const dict = await getTranslations({locale, namespace: "Metadata"})

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Reyes Rondón",
    url: dict("urlSchema"),
    image:
      "https://www.reyesrondon.dev/_next/image?url=%2Fprofile%2Freyes-rondon.webp&w=384&q=75",
    sameAs: dict("linkedinSchema"),
    jobTitle: dict("jobTitleSchema"),
    worksFor: {
      "@type": "Organization",
      name: "Addiction Marketing Agency (AMA)",
    },
  }

  return (
    <html lang={locale} className={theme}>
      <head>
        <GoogleAnalytics gaId="G-BK2C3D0GKH" />
        <GoogleTagManager gtmId="GTM-TQFZ2GNB" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body
        className={`
          ${inter.className}
          bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100 via-zinc-100 to-zinc-400 dark:from-slate-900 dark:via-slate-950 dark:to-black`}
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
