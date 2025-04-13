import {
  projectImage8,
  projectImage9,
  projectImage10,
  projectImage11,
  projectImage12,
  projectImage13,
  projectImage14,
  projectImage15,
  projectImage16,
  projectImage17,
  projectImage18,
  projectImage19,
  projectImage20,
  projectImage21,
  projectImage22,
} from "./projectsImages";

import SingleProject from "../../components/SingleProjectComponent/SingleProject";
import useFetch from "../../components/hooks/useFetch";
// useLocale is needed for translation that is coming from backend
import { useLocale } from "../../components/LocaleContext";

// useTranslation is needed for static content translation made using i18n
import { useTranslation } from "react-i18next";

export default function OngoingProjects() {
  const {locale} = useLocale()
  const {data, loading} = useFetch(`/ongoing-projects?locale=${locale}&populate=*`)
  const sortedData = [...data].sort((a,b)=> a.id - b.id)

  const {t} = useTranslation("projects", {useSuspense: true})

  const lenkeranPeshePhotos = [projectImage8, projectImage9, projectImage10];
  const hovsanPhotos = [projectImage11, projectImage12, projectImage13];
  const midaPhotos = [projectImage14, projectImage15, projectImage16];
  const shushaPhotos = [projectImage17, projectImage18, projectImage19];
  const qubaDostPhotos = [projectImage20, projectImage21, projectImage22];

  return (
    <>
      <header className="projects-page_header">
        <h1 className="main-heading">{t('ongoing-projects')}</h1>
      </header>
      <main className="projects-page_main-content">

        {loading && <div className="loader"></div>}
        {!loading && data.length > 0 && sortedData?.map((obj)=>{
          const imgs = obj.attributes.ongoing_project_imgs.data.map((img)=>img.attributes.url)
          return (
            <SingleProject 
              key={obj.id}
              title={obj.attributes.ongoing_project_heading} 
              photos={imgs} 
            />
          )
        })}

        {!loading && data.length === 0 && (
          <>
            <SingleProject
              title="Lənkəran Peşə Liseyinin Yenidən qurulması"
              photos={lenkeranPeshePhotos}
            />

            <SingleProject
              title="Bakı şəhəri, Suraxanı rayonu, Hövsan qəsəbəsinin 23,25 ha
              ərazisində MIDA yaşayış kompleksi tərkibində olan 4 ədəd
              9-mərtəbəli və 2 ədəd 12-mərtəbəli yeni yaşayış binaların inşası"
              photos={hovsanPhotos}
            />

            <SingleProject
              title="“MİDA” MMC-nin sifarişi ilə Sumqayıt şəhəri, M.Hüseynzadə adına
              şəhər stadionunun şimal şərqində çoxmənzilli yaşayış binaların
              tikintisi"
              photos={midaPhotos}
            />

            <SingleProject
              title="Şuşa şəhərində, Cənub yaşayış zonasında yaşayış binalarının
              tikintisi"
              photos={shushaPhotos}
            />

            <SingleProject
              title="Azərbaycan Respublikasının Əmək və Əhalinin Sosial Müdafiəsi
              Nazirliyinin tabeliyində Dayanıqlı və Operativ Sosial Təminat
              Agentliyi Quba DOST və Peşə Hazırlığı Mərkəzlərinin tikintisi"
              photos={qubaDostPhotos}
            />
          </>
        )}
      </main>
    </>
  );
}
