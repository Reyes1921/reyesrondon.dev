import {notFound} from "next/navigation"
import {getRequestConfig} from "next-intl/server"

// Can be imported from a shared config
const locales = ["es", "en"]

export default getRequestConfig(async ({requestLocale}) => {

  let locale = await requestLocale


  if (!locale || !locales.includes(locale as any)) {
    notFound()
  }

  return {
    locale, 
    messages: (await import(`../dictionaries/${locale}.json`)).default,
  }
})
