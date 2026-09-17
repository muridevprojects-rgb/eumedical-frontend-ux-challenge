import { useState } from 'react'
import {
  CalendarDays,
  Camera,
  CheckCircle2,
  Clock3,
  Mic,
  ShieldCheck,
  Video,
  Wifi,
} from 'lucide-react'
import EmptyState from '../../components/ui/EmptyState'
import { upcomingAppointments } from '../../features/patient/data/mockPatient'

function AppointmentsPage() {
  const [showPreparation, setShowPreparation] = useState(false)
  const appointment = upcomingAppointments[0]

  if (!appointment) {
    return (
      <div className="space-y-8">
        <section>
          <p className="text-sm font-semibold text-eu-aqua">Consultas</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            Próximas consultas
          </h1>
          <p className="mt-3 text-eu-blue/65">
            Consulta los detalles de tu próxima cita y prepara tu dispositivo antes de entrar.
          </p>
        </section>
        <EmptyState
          icon={CalendarDays}
          title="No hay consultas programadas"
          description="Cuando se programe una nueva consulta, podrás ver aquí todos los detalles y preparar tu teleconsulta."
        />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-semibold text-eu-aqua">Consultas</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Próximas consultas
        </h1>
        <p className="mt-3 text-eu-blue/65">
          Consulta los detalles de tu próxima cita y prepara tu dispositivo antes de entrar.
        </p>
      </section>

      <article className="rounded-3xl border border-eu-blue-light bg-white p-6 sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-eu-aqua-light px-3 py-1 text-xs font-semibold">
              {appointment.status}
            </span>
            <h2 className="mt-4 text-2xl font-semibold">
              {appointment.date} · {appointment.time}
            </h2>
            <p className="mt-2 text-eu-blue/70">
              {appointment.doctor} · {appointment.specialty}
            </p>
            <p className="mt-1 text-sm text-eu-blue/55">{appointment.reason}</p>
          </div>

          <button
            type="button"
            onClick={() => setShowPreparation((current) => !current)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-eu-orange px-6 py-3 font-semibold text-white transition hover:bg-eu-yellow hover:text-eu-blue"
          >
            <Video className="h-5 w-5" aria-hidden="true" />
            {showPreparation ? 'Cerrar preparación' : 'Preparar teleconsulta'}
          </button>
        </div>
      </article>

      {showPreparation && (
        <section
          className="rounded-3xl bg-eu-blue p-6 text-white sm:p-8"
          aria-labelledby="preparation-title"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-eu-yellow">Comprobación previa</p>
              <h2 id="preparation-title" className="mt-2 text-2xl font-semibold">
                Todo listo para tu teleconsulta
              </h2>
            </div>
            <ShieldCheck className="h-8 w-8 shrink-0 text-eu-aqua-light" aria-hidden="true" />
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Camera, label: 'Cámara', value: 'Disponible' },
              { icon: Mic, label: 'Micrófono', value: 'Disponible' },
              { icon: Wifi, label: 'Conexión', value: 'Estable' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-2xl bg-white/10 p-5">
                <Icon className="h-6 w-6 text-eu-yellow" aria-hidden="true" />
                <p className="mt-4 font-semibold">{label}</p>
                <p className="mt-1 text-sm text-white/65">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-white/10 p-5">
            <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-eu-yellow" aria-hidden="true" />
            <p className="text-sm leading-6 text-white/75">
              En esta demo no se inicia una videollamada real. En producción, el acceso se habilitaría de acuerdo con la hora de la consulta.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-white/70">
            <CheckCircle2 className="h-5 w-5 text-eu-aqua-light" aria-hidden="true" />
            Datos ficticios utilizados únicamente para esta demostración.
          </div>
        </section>
      )}
    </div>
  )
}

export default AppointmentsPage
