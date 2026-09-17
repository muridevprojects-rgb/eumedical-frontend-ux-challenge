import { CircleHelp, Mail, Phone } from 'lucide-react'

const faq = [
  {
    question: '¿Cuándo puedo acceder a mi teleconsulta?',
    answer: 'La interfaz de demostración muestra el acceso desde la sección Próximas consultas. En un producto real, el acceso dependería del horario configurado para la cita.',
  },
  {
    question: '¿Dónde encuentro mis informes médicos?',
    answer: 'Los informes y documentos disponibles se agrupan en la sección Documentos.',
  },
  {
    question: '¿Esta demo utiliza datos reales?',
    answer: 'No. Todos los pacientes, consultas, profesionales y documentos mostrados son ficticios.',
  },
]

function SupportPage() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-semibold text-eu-aqua">Ayuda</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Soporte</h1>
        <p className="mt-3 text-eu-blue/65">Encuentra respuestas rápidas o contacta con el equipo de soporte.</p>
      </section>

      <section className="grid gap-5 sm:grid-cols-2">
        <a href="mailto:business@eumedical.es" className="rounded-3xl bg-eu-blue p-6 text-white transition hover:-translate-y-1">
          <Mail className="h-7 w-7 text-eu-yellow" aria-hidden="true" />
          <h2 className="mt-5 text-xl font-semibold">Correo electrónico</h2>
          <p className="mt-2 text-sm text-white/65">business@eumedical.es</p>
        </a>

        <a href="tel:+34919227810" className="rounded-3xl bg-eu-aqua p-6 text-white transition hover:-translate-y-1">
          <Phone className="h-7 w-7" aria-hidden="true" />
          <h2 className="mt-5 text-xl font-semibold">Atención telefónica</h2>
          <p className="mt-2 text-sm text-white/80">+34 919 22 78 10</p>
        </a>
      </section>

      <section aria-labelledby="faq-title">
        <div className="flex items-center gap-3">
          <CircleHelp className="h-6 w-6 text-eu-orange" aria-hidden="true" />
          <h2 id="faq-title" className="text-2xl font-semibold">Preguntas frecuentes</h2>
        </div>

        <div className="mt-5 space-y-4">
          {faq.map((item) => (
            <article key={item.question} className="rounded-3xl border border-eu-blue-light bg-white p-6">
              <h3 className="font-semibold">{item.question}</h3>
              <p className="mt-3 text-sm leading-6 text-eu-blue/60">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default SupportPage
