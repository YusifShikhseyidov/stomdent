import SingleProject from "../../components/SingleProjectComponent/SingleProject";
import useFetch from "../../components/hooks/useFetch";
// useLocale is needed for translation that is coming from backend
import { useLocale } from "../../components/LocaleContext";
// useTranslation is needed for static content translation made using i18n
import { useTranslation } from "react-i18next";
// U can use react-spring library for smooth transition appear and diisappear of the divs for extra photos example of which is at codesandbox.io

export default function FinishedProjects() {
  const {locale} = useLocale()

  const {t} = useTranslation("projects", {useSuspense: true})

  const {data, loading} = useFetch(`/finished-projects?locale=${locale}&populate=*`)
  const sortedData = [...data].sort((a,b)=> a.id - b.id)
  console.log(sortedData)

  return (
    <>
      <header className="projects-page_header">
        <h1 className="main-heading">{t('finished-projects')}</h1>
      </header>

      <main className="projects-page_main-content">
        {loading && <div className="loader"></div>}
        {!loading && data && sortedData?.map((obj)=>{
          const imgs = obj.attributes.finished_project_imgs.data.map((img)=>img.attributes.url)
          return (
            <SingleProject
              key={obj.id}
              title={obj.attributes.finished_project_heading}
              photos={imgs}
            />
          )
        })}

      </main>
    </>
  );
}
