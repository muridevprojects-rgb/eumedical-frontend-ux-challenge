import { Languages, Mail, MapPin, Phone, UserRound } from 'lucide-react'
import { patient } from '../../features/patient/data/mockPatient'

const profileItems = [
  { label: 'Nombre completo', value: patient.name, icon: UserRound },
  { label: 'Correo electrónico', value: patient.email, icon: Mail },
  { label: 'Teléfono', value: patient.phone, icon: Phone },
  { label: 'Idioma', value: patient.language, icon: Languages },
  { label: 'Ubicación', value: patient.location, icon: MapPin },
]

function ProfilePage() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-semibold text-eu-aqua">Cuenta</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Perfil</h1>
        <p className="mt-3 text-eu-blue/65">Información demostrativa asociada al perfil del paciente.</p>
      </section>

      <section className="rounded-3xl border border-eu-blue-light bg-white p-6 sm:p-8">
        <div className="flex items-center gap-4 border-b border-eu-blue-light pb-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-eu-blue text-xl font-semibold text-white">AM</div>
          <div>
            <h2 className="text-xl font-semibold">{patient.name}</h2>
            <p className="mt-1 text-sm text-eu-blue/55">{patient.patientId}</p>
          </div>
        </div>

        <dl className="mt-7 grid gap-5 md:grid-cols-2">
          {profileItems.map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-2xl bg-eu-grey p-5">
              <dt className="flex items-center gap-2 text-sm font-semibold text-eu-blue/55">
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </dt>
              <dd className="mt-2 font-semibold">{value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 text-xs leading-5 text-eu-blue/45">
          Todos los datos mostrados en esta sección son ficticios y se utilizan exclusivamente para demostrar la experiencia de usuario.
        </p>
      </section>
    </div>
  )
}

export default ProfilePage
