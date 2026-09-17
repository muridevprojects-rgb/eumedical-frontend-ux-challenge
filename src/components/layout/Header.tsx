import eumedicalLogo from '../../assets/brand/eumedical-logo.avif'

function Header() {
  return (
    <header className="border-b border-eu-blue-light bg-eu-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="/" aria-label="Eumedical - Inicio">
          <img
            src={eumedicalLogo}
            alt="Eumedical"
            className="h-auto w-[140px]"
          />
        </a>

        <nav aria-label="Navegación principal">
          <ul className="flex items-center gap-8">
            <li>
              <a href="#servicios" className="hover:text-eu-aqua">
                Servicios
              </a>
            </li>

            <li>
              <a href="#eumedical" className="hover:text-eu-aqua">
                Eumedical
              </a>
            </li>

            <li>
              <a href="#contacto" className="hover:text-eu-aqua">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header