import i18n from "i18next"
import Backend from "i18next-http-backend"
import {initReactI18next} from "react-i18next"

i18n.use(Backend).use(initReactI18next).init({
  backend:{
    // translation file path
    loadPath: '/assets/i18n/{{ns}}/{{lng}}.json',
  },
  fallbackLng: localStorage.getItem('locale') || 'az-Latn',
  debug: false,
  // we can have multiple namespaces in case we want to divide a huge translation into smaller pieces and load them on demand
  ns: ['common', 'about', 'projects', 'vacancy', 'contact', 'footer'],
  interpolation:{
    escapeValue: false,
    formatSeparator: ",",
  },
})

export default i18n;