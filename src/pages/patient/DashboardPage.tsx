import { CalendarDays, ChevronRight, FileText, LifeBuoy, Pill, Video } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  medicalDocuments,
  patient,
  prescriptions,
  upcomingAppointments,
} from '../../features/patient/data/mockPatient'

function DashboardPage() {
  const nextAppointment = upcomingAppointments[0]

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-semibold text-eu-aqua">Resumen de atención</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Hola, {patient.firstName}
        </h1>
        <p className="mt-3 max-w-2xl text-eu-blue/65">
          Aquí puedes consultar tus próximas citas, documentos, prescripciones y opciones de soporte.
        </p>
      </section>

      <section aria-labelledby="next-appointment-title">
        <article className="overflow-hidden rounded-3xl bg-eu-blue text-white shadow-lg">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-sm text-white/65">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Próxima consulta
              </div>
              <h2 id="next-appointment-title" className="mt-4 text-2xl font-semibold">
                {nextAppointment.date} · {nextAppointment.time}
              </h2>
              <p className="mt-2 text-white/80">
                {nextAppointment.doctor} · {nextAppointment.specialty}
              </p>
              <p className="mt-1 text-sm text-white/55">{nextAppointment.reason}</p>
            </div>

            <Link
              to="/patient/appointments"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-eu-orange px-6 py-3 font-semibold text-white transition hover:bg-eu-yellow hover:text-eu-blue"
            >
              <Video className="h-5 w-5" aria-hidden="true" />
              Preparar teleconsulta
            </Link>
          </div>
        </article>
      </section>

      <section className="grid gap-5 md:grid-cols-3" aria-label="Accesos rápidos">
        <Link to="/patient/documents" className="rounded-3xl border border-eu-blue-light bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
          <FileText className="h-7 w-7 text-eu-aqua" aria-hidden="true" />
          <p className="mt-5 text-3xl font-semibold">{medicalDocuments.length}</p>
          <div className="mt-1 flex items-center justify-between">
            <span className="text-sm text-eu-blue/60">Documentos recientes</span>
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </div>
        </Link>

        <Link to="/patient/prescriptions" className="rounded-3xl border border-eu-blue-light bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
          <Pill className="h-7 w-7 text-eu-orange" aria-hidden="true" />
          <p className="mt-5 text-3xl font-semibold">{prescriptions.length}</p>
          <div className="mt-1 flex items-center justify-between">
            <span className="text-sm text-eu-blue/60">Prescripciones activas</span>
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </div>
        </Link>

        <Link to="/patient/support" className="rounded-3xl border border-eu-blue-light bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
          <LifeBuoy className="h-7 w-7 text-eu-blue" aria-hidden="true" />
          <p className="mt-5 text-xl font-semibold">¿Necesitas ayuda?</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm text-eu-blue/60">Contacta con soporte</span>
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </div>
        </Link>
      </section>
    </div>
  )
}

export default DashboardPage
