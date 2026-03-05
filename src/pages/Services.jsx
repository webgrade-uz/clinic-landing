import ServiceCategory from '../components/ServiceCategory'
import ApplicationForm from '../components/ApplicationForm'

const specialists = [
  { name: 'Аллерголог' },
  { name: 'Гинеколог' },
  { name: 'Инфекционист' },
  { name: 'Кардиолог' },
  { name: 'Невролог' },
  { name: 'Оториноларинголог (ЛОР)' },
  { name: 'Педиатр' },
  { name: 'Пульмонолог' },
  { name: 'Терапевт' },
  { name: 'Уролог' },
  { name: 'Физиотерапевт' },
  { name: 'Эндокринолог' },
]

const diagnostics = [
  { name: 'УЗИ-диагностика' },
  { name: 'Доплер' },
  { name: 'Эхо-сердца' },
]

const labTests = [
  { name: 'ToRCH-инфекции', url: 'https://www.mclinic.uz/service/torch-infektsii1016/' },
  { name: 'Биохимические исследования', url: 'https://www.mclinic.uz/service/biokhimicheskie-issledovaniia1241/' },
  { name: 'Гематологические исследования', url: 'https://www.mclinic.uz/service/gematologicheskie-issledovaniia358/' },
  { name: 'Гемостазиологические исследования', url: 'https://www.mclinic.uz/service/gemostaziologicheskie-issledovaniia6857/' },
  { name: 'Генетические исследования', url: 'https://www.mclinic.uz/service/geneticheskie-issledovaniia7410/' },
  { name: 'Гистологические исследования', url: 'https://www.mclinic.uz/service/gistologicheskie-issledovaniia8877/' },
  { name: 'Гормоны', url: 'https://www.mclinic.uz/service/gormony4051/' },
  { name: 'Иммуногематологические исследования', url: 'https://www.mclinic.uz/service/immunogematologicheskie-issledovaniia1430/' },
  { name: 'Иммуносерологические исследования', url: 'https://www.mclinic.uz/service/immunoserologicheskie-issledovaniia6353/' },
  { name: 'Иммуноферментный анализ', url: 'https://www.mclinic.uz/service/immunofermentnyi-analiz9013/' },
  { name: 'Кислотно-щелочное состояние крови', url: 'https://www.mclinic.uz/service/kislotno-shchelochnoe-sostoianie-krovi5496/' },
  { name: 'Лабораторные исследования', url: 'https://www.mclinic.uz/service/laboratornye-issledovaniia1547/' },
  { name: 'Микробиологические исследования', url: 'https://www.mclinic.uz/service/mikrobiologicheskie-issledovaniia5802/' },
  { name: 'Микроскопические исследования', url: 'https://www.mclinic.uz/service/mikroskopicheskie-issledovaniia7398/' },
  { name: 'Общеклинические исследования', url: 'https://www.mclinic.uz/service/obshcheklinicheskie-issledovaniia9002/' },
  { name: 'Онкомаркеры', url: 'https://www.mclinic.uz/service/onkomarkery1627/' },
  { name: 'Панели аллергенов', url: 'https://www.mclinic.uz/service/paneli-allergenov8321/' },
  { name: 'ПЦР-диагностика', url: 'https://www.mclinic.uz/service/ptsr-diagnostika7410/' },
  { name: 'Цитологические исследования', url: 'https://www.mclinic.uz/service/tsitologicheskie-issledovaniia5073/' },
]

const rehab = [
  { name: 'ЛФК', url: 'https://www.mclinic.uz/service/lfk3697/' },
  { name: 'Массаж', url: 'https://www.mclinic.uz/service/massazh8991/' },
  { name: 'Реабилитация', url: 'https://www.mclinic.uz/service/reabilitatsiia9864/' },
  { name: 'Физиотерапия', url: 'https://www.mclinic.uz/service/fizioterapiia5452/' },
]

function Services({ t }) {
  const cats = t.services.categories
  const detailLink = t.services.detailLink

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t.services.pageTitle}</h1>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <ServiceCategory title={cats.specialists} items={specialists} detailLink={detailLink} />
          <ServiceCategory title={cats.diagnostics} items={diagnostics} detailLink={detailLink} />
          <ServiceCategory title={cats.lab} items={labTests} detailLink={detailLink} />
          <ServiceCategory title={cats.rehab} items={rehab} detailLink={detailLink} />
        </div>
      </section>

      <ApplicationForm t={t} />
    </>
  )
}

export default Services
