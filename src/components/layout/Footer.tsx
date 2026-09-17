function Footer() {
  return (
    <footer className="bg-eu-blue text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-2xl font-semibold">Eumedical</p>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
            Asistencia sanitaria digital con capacidad internacional para
            pacientes y empresas.
          </p>
        </div>

        <div>
          <p className="font-semibold">Navegación</p>

          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>
              <a className="hover:text-white" href="#servicios">
                Servicios
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#capacidades">
                Capacidades
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#eumedical">
                Sobre nosotros
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold">Contacto</p>

          <div className="mt-4 space-y-3 text-sm text-white/70">
            <p>business@eumedical.es</p>
            <p>+34 919 22 78 10</p>
            <p>Calle Velázquez 157, 28002 Madrid</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© Eumedical. Todos los derechos reservados.</p>

          <div className="flex gap-5">
            <a
              href="https://www.eumedical.es/pol%C3%ADtica-de-privacidad"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              Privacidad
            </a>

            <a
              href="https://www.eumedical.es/t%C3%A9rminos-y-condiciones"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer