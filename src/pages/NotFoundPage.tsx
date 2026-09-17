import { ArrowLeft, Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import eumedicalLogo from '../assets/brand/eumedical-logo.avif'

function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-eu-grey px-6 py-12 text-eu-blue">
      <section className="w-full max-w-2xl rounded-[2rem] border border-eu-blue-light bg-white p-8 text-center shadow-sm sm:p-12">
        <Link
          to="/"
          className="inline-flex focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-eu-orange"
          aria-label="Volver al inicio de Eumedical"
        >
          <img src={eumedicalLogo} alt="Eumedical" className="h-auto w-[140px]" />
        </Link>

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.16em] text-eu-aqua">
          Error 404
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Página no encontrada
        </h1>

        <p className="mx-auto mt-5 max-w-lg leading-7 text-eu-blue/60">
          La dirección que has abierto no existe o ya no está disponible.
          Puedes volver al sitio principal o acceder al área de paciente.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-eu-blue px-6 py-3 font-semibold text-white transition hover:bg-eu-aqua focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-eu-orange"
          >
            <Home className="h-5 w-5" aria-hidden="true" />
            Volver al inicio
          </Link>

          <Link
            to="/patient"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-eu-blue-light px-6 py-3 font-semibold text-eu-blue transition hover:bg-eu-grey focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-eu-orange"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            Área paciente
          </Link>
        </div>
      </section>
    </main>
  )
}

export default NotFoundPage
