import { Outlet } from "react-router-dom";
import "./Careers.css";

import useFetch from "../../components/hooks/useFetch"

// useTranslation is needed for static content translation made using i18n
import { useTranslation } from "react-i18next";

// useLocale is needed for translation that is coming from backend
import { useLocale } from "../../components/LocaleContext";

export default function CareersLayout() {
  const {locale} = useLocale()

  const {data, loading} = useFetch(`/vacancies?locale=${locale}`)

  const {t} = useTranslation("vacancy", {useSuspense: true})

  return (
    <>
      <header className="careers-layout-header">
        <h1>
          {t('vacancy')}
        </h1>
        {data.length===0 && !loading && <p>{t('nojobatthemoment')}</p>}
      </header>
      <main className="careers-layout-main">
        <Outlet/>
      </main>
    </>
  )
}
