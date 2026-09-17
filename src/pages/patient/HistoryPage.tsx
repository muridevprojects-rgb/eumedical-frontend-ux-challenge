import { CalendarCheck2, Stethoscope } from 'lucide-react'
import { consultationHistory } from '../../features/patient/data/mockPatient'

function HistoryPage() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-semibold text-eu-aqua">Consultas</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Historial de consultas</h1>
        <p className="mt-3 text-eu-blue/65">Revisa las consultas médicas realizadas anteriormente.</p>
      </section>

      <section className="space-y-4" aria-label="Consultas anteriores">
        {consultationHistory.map((consultation) => (
          <article key={consultation.id} className="rounded-3xl border border-eu-blue-light bg-white p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-eu-blue-light">
                <Stethoscope className="h-6 w-6 text-eu-blue" aria-hidden="true" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-semibold">{consultation.doctor} · {consultation.specialty}</h2>
                  <span className="rounded-full bg-eu-grey px-3 py-1 text-xs font-semibold text-eu-blue/65">{consultation.status}</span>
                </div>
                <p className="mt-2 text-sm text-eu-blue/60">{consultation.date} · {consultation.time}</p>
                <p className="mt-1 text-sm text-eu-blue/55">{consultation.reason}</p>
              </div>

              <CalendarCheck2 className="h-6 w-6 text-eu-aqua" aria-hidden="true" />
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default HistoryPage
