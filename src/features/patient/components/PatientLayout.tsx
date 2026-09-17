import { useState } from 'react'
import {
  CalendarDays,
  FileText,
  History,
  LayoutDashboard,
  LifeBuoy,
  Menu,
  Pill,
  UserRound,
  X,
} from 'lucide-react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import eumedicalLogo from '../../../assets/brand/eumedical-logo.avif'
import { patient } from '../data/mockPatient'

const navigation = [
  { to: '/patient', label: 'Inicio', icon: LayoutDashboard, end: true },
  {
    to: '/patient/appointments',
    label: 'Próximas consultas',
    icon: CalendarDays,
  },
  { to: '/patient/history', label: 'Historial', icon: History },
  { to: '/patient/documents', label: 'Documentos', icon: FileText },
  { to: '/patient/prescriptions', label: 'Prescripciones', icon: Pill },
  { to: '/patient/profile', label: 'Perfil', icon: UserRound },
  { to: '/patient/support', label: 'Soporte', icon: LifeBuoy },
]

function Navigation({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav aria-label="Navegación del área de paciente">
      <ul className="space-y-1.5">
        {navigation.map(({ to, label, icon: Icon, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              onClick={onNavigate}
              className={({ isActive }) =>
                [
                  'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition',
                  isActive
                    ? 'bg-eu-blue text-white'
                    : 'text-eu-blue/75 hover:bg-eu-blue-light hover:text-eu-blue',
                ].join(' ')
              }
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function PatientLayout() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-eu-grey text-eu-blue lg:grid lg:grid-cols-[280px_1fr]">
      <aside className="hidden h-screen border-r border-eu-blue-light bg-white p-6 lg:sticky lg:top-0 lg:flex lg:flex-col">
        <Link to="/" className="inline-flex" aria-label="Volver a Eumedical">
          <img src={eumedicalLogo} alt="Eumedical" className="h-auto w-[140px]" />
        </Link>

        <div className="mt-10">
          <p className="px-4 text-xs font-semibold uppercase tracking-[0.16em] text-eu-blue/45">
            Área privada
          </p>
          <div className="mt-4">
            <Navigation />
          </div>
        </div>

        <div className="mt-auto rounded-2xl bg-eu-blue-light p-4">
          <p className="text-sm font-semibold">{patient.name}</p>
          <p className="mt-1 text-xs text-eu-blue/60">{patient.patientId}</p>
          <Link
            to="/"
            className="mt-4 inline-flex text-xs font-semibold text-eu-blue underline-offset-4 hover:underline"
          >
            Volver al sitio público
          </Link>
        </div>
      </aside>

      <div className="min-w-0">
        <header className="sticky top-0 z-40 flex h-18 items-center justify-between border-b border-eu-blue-light bg-white px-5 lg:px-10">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-lg p-2 text-eu-blue focus-visible:outline-2 focus-visible:outline-eu-orange lg:hidden"
              aria-label="Abrir navegación"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(true)}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-eu-blue/45">
                Portal del paciente
              </p>
              <p className="text-sm font-semibold">{patient.name}</p>
            </div>
          </div>

          <span className="rounded-full bg-eu-aqua-light px-3 py-1.5 text-xs font-semibold text-eu-blue">
            Demo
          </span>
        </header>

        <main className="mx-auto w-full max-w-7xl p-5 sm:p-7 lg:p-10">
          <Outlet />
        </main>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Cerrar navegación"
            className="absolute inset-0 bg-eu-blue/40"
            onClick={() => setIsOpen(false)}
          />

          <aside className="relative h-full w-[86%] max-w-sm bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <Link to="/" onClick={() => setIsOpen(false)} aria-label="Volver a Eumedical">
                <img src={eumedicalLogo} alt="Eumedical" className="h-auto w-[140px]" />
              </Link>

              <button
                type="button"
                aria-label="Cerrar menú"
                className="rounded-lg p-2 text-eu-blue"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-10">
              <Navigation onNavigate={() => setIsOpen(false)} />
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}

export default PatientLayout
