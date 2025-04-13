import { createContext, useState, useContext, useEffect } from "react"
import i18n from "i18next"

const LocaleContext = createContext()
export const useLocale = () => useContext(LocaleContext)

const LocaleProvider = ({children}) => {
  // initialize locale from local storage or default to 'az-Latn'
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'az-Latn') //Default Locale

  useEffect(()=>{
    // listen for language changes
    i18n.on('languageChanged', (lng)=>{
      setLocale(lng)
      // save the new locale to local storage
      localStorage.setItem('locale', lng)
    })
    i18n.changeLanguage(locale)
  }, [locale])

  const changeLocale = (newLocale) => {
    // this will trigger the 'languagechanged' event
    i18n.changeLanguage(newLocale)
  }

  return (
    <LocaleContext.Provider value={{locale, changeLocale}}>
      {children}
    </LocaleContext.Provider>
  )
}
export default LocaleProvider