import useFetch from "../../components/hooks/useFetch";
// useLocale is needed for translation that is coming from backend
import { useLocale } from "../../components/LocaleContext";
// useTranslation is needed for static content translation made using i18n
import { useTranslation } from "react-i18next";
import SingleProject from "../../components/SingleProjectComponent/SingleProject";

import {
  projectImage23,
  projectImage24,
  projectImage25,
  projectImage26,
  projectImage27,
  projectImage28,
  projectImage29,
  projectImage30,
} from "./projectsImages";


export default function RestorationProjects() {
  const {locale} = useLocale()
  const {data, loading} = useFetch(`/restoration-projects?locale=${locale}&populate=*`)
  const sortedData = [...data].sort((a,b)=> a.id - b.id)

  const {t} = useTranslation("projects", {useSuspense: true})

  const bakiXanlarEvi = [projectImage23, projectImage24, projectImage25];
  const shushaBinaKonservasiya = [projectImage26, projectImage27];
  const shushaQalaDivari = [projectImage28, projectImage29, projectImage30];

  return (
    <>
      <header className="projects-page_header">
        <h1 className="main-heading">{t('restoration-projects')}</h1>
      </header>
      <main className="projects-page_main-content">

        {loading && <div className="loader"></div>}
        {!loading && data.length > 0 && sortedData?.map((obj)=>{
          const imgs = obj.attributes.restoration_project_imgs.data.map((img)=>img.attributes.url)
          return (
            <SingleProject 
              key={obj.id}
              title={obj.attributes.restoration_project_heading} 
              photos={imgs} 
            />
          )
        })}

        {!loading && data.length === 0 && (
          <>
            <SingleProject title="Bakı Xanlar Evi" photos={bakiXanlarEvi} />

            <SingleProject
              title="Şuşa şəhərində tarixi binanın müvəqqəti konservasiyası"
              photos={shushaBinaKonservasiya}
            />
            
            <SingleProject
              title="Şuşa şəhərində yerləşən,  XVIII əsrə aid edilən, ölkə əhəmiyyətli tarix və mədəniyyət abidəsi olan Qala Divarının bərpası"
              photos={shushaQalaDivari}
            />
          </>
        )}
        

      </main>
    </>
  );
}
