import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import eumedicalLogo from '../../assets/brand/eumedical-logo.avif'

const navigation = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Capacidades', href: '#capacidades' },
  { label: 'Eumedical', href: '#eumedical' },
  { label: 'Contacto', href: '#contacto' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-eu-blue-light bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="/" aria-label="Eumedical - Inicio">
          <img src={eumedicalLogo} alt="Eumedical" className="h-auto w-[140px]" />
        </a>

        <nav className="hidden md:block" aria-label="Navegación principal">
          <ul className="flex items-center gap-7">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm font-medium text-eu-blue transition hover:text-eu-aqua focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-eu-orange">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/patient" className="text-sm font-semibold text-eu-blue transition hover:text-eu-aqua">
                Área paciente
              </Link>
            </li>
          </ul>
        </nav>

        <a href="#contacto" className="hidden rounded-full bg-eu-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-eu-yellow hover:text-eu-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-eu-orange lg:inline-flex">
          Habla con nosotros
        </a>

        <button
          type="button"
          className="inline-flex rounded-lg p-2 text-eu-blue focus-visible:outline-2 focus-visible:outline-eu-orange md:hidden"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-eu-blue-light bg-white px-6 py-5 md:hidden" aria-label="Navegación móvil">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="block rounded-lg px-3 py-3 font-medium text-eu-blue hover:bg-eu-grey" onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/patient" className="block rounded-lg px-3 py-3 font-semibold text-eu-blue hover:bg-eu-grey" onClick={() => setIsOpen(false)}>
                Área paciente
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
