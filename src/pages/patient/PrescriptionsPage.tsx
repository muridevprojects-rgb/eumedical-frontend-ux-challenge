import { CalendarDays, Pill, UserRound } from 'lucide-react'
import { prescriptions } from '../../features/patient/data/mockPatient'

function PrescriptionsPage() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-semibold text-eu-aqua">Tratamiento</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Prescripciones</h1>
        <p className="mt-3 text-eu-blue/65">Consulta las prescripciones asociadas a tu atención médica.</p>
      </section>

      <section className="space-y-5">
        {prescriptions.map((prescription) => (
          <article key={prescription.id} className="rounded-3xl border border-eu-blue-light bg-white p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-eu-aqua-light">
                <Pill className="h-7 w-7 text-eu-blue" aria-hidden="true" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-xl font-semibold">{prescription.medication}</h2>
                  <span className="rounded-full bg-eu-aqua-light px-3 py-1 text-xs font-semibold">{prescription.status}</span>
                </div>
                <p className="mt-3 leading-7 text-eu-blue/65">{prescription.instructions}</p>

                <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
                  <div className="flex gap-3 rounded-2xl bg-eu-grey p-4">
                    <CalendarDays className="h-5 w-5 shrink-0 text-eu-aqua" aria-hidden="true" />
                    <div>
                      <p className="font-semibold">Vigencia</p>
                      <p className="mt-1 text-eu-blue/55">{prescription.issuedAt} — {prescription.expiresAt}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 rounded-2xl bg-eu-grey p-4">
                    <UserRound className="h-5 w-5 shrink-0 text-eu-orange" aria-hidden="true" />
                    <div>
                      <p className="font-semibold">Profesional</p>
                      <p className="mt-1 text-eu-blue/55">{prescription.doctor}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default PrescriptionsPage
