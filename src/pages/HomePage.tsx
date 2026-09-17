import {
  Ambulance,
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Globe2,
  HeartPulse,
  Home,
  Languages,
  Plane,
  ShieldCheck,
  Stethoscope,
  UsersRound,
  Video,
} from 'lucide-react'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

const capabilities = [
  {
    icon: Globe2,
    title: 'Red médica internacional',
    description:
      'Cobertura médica propia con capacidad de respuesta en más de 80 países.',
  },
  {
    icon: Clock3,
    title: 'Atención médica 24/7',
    description:
      'Asistencia disponible en cualquier momento y desde cualquier lugar.',
  },
  {
    icon: Languages,
    title: 'Atención multilingüe',
    description:
      'Una experiencia internacional preparada para pacientes de distintos países.',
  },
  {
    icon: ShieldCheck,
    title: 'Tecnología confiable',
    description:
      'Una experiencia digital pensada para ser clara, segura y fácil de utilizar.',
  },
]

const services = [
  {
    icon: Video,
    title: 'Teleconsulta 24/7',
    description:
      'Acceso a atención médica a distancia en cualquier momento y desde cualquier lugar.',
  },
  {
    icon: Home,
    title: 'Médicos a domicilio',
    description:
      'Coordinación de asistencia médica presencial cuando el paciente la necesita.',
  },
  {
    icon: Plane,
    title: 'Fit to Fly',
    description:
      'Valoración médica y certificación para viajar con mayor tranquilidad.',
  },
  {
    icon: Ambulance,
    title: 'Coordinación de ambulancias',
    description:
      'Gestión de traslados médicos de emergencia o programados.',
  },
  {
    icon: Stethoscope,
    title: 'Médicos especialistas',
    description:
      'Acceso a profesionales especializados en distintas áreas de la medicina.',
  },
  {
    icon: Building2,
    title: 'Coordinación sanitaria',
    description:
      'Organización de clínicas, soporte hospitalario y servicios médicos internacionales.',
  },
]

const metrics = [
  { value: '90k', label: 'Pacientes satisfechos' },
  { value: '250', label: 'Médicos expertos' },
  { value: '70k', label: 'Recetas aceptadas' },
  { value: '10', label: 'Especialidades médicas' },
]

function HomePage() {
  return (
    <>
      <Header />

      <main>
        <section className="relative overflow-hidden bg-eu-grey">
          <div className="absolute -right-40 -top-32 h-96 w-96 rounded-full bg-eu-aqua-light/50 blur-3xl" />
          <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-eu-yellow/15 blur-3xl" />

          <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-eu-blue-light px-4 py-2 text-sm font-semibold text-eu-blue">
                <HeartPulse className="h-4 w-4" aria-hidden="true" />
                Asistencia sanitaria digital internacional
              </div>

              <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight text-eu-blue sm:text-6xl">
                Atención médica
                <span className="block text-eu-aqua">
                  sin fronteras
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-eu-blue/75">
                Conectamos pacientes, profesionales médicos y servicios
                sanitarios mediante una atención ágil, cercana y disponible
                las 24 horas.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-eu-orange px-6 py-3.5 font-semibold text-white transition hover:bg-eu-yellow hover:text-eu-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-eu-orange"
                >
                  Descubre nuestros servicios
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full border border-eu-blue px-6 py-3.5 font-semibold text-eu-blue transition hover:bg-eu-blue hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-eu-blue"
                >
                  Habla con nosotros
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-eu-blue/70">
                <span className="flex items-center gap-2">
                  <CheckCircle2
                    className="h-4 w-4 text-eu-aqua"
                    aria-hidden="true"
                  />
                  Atención 24/7
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2
                    className="h-4 w-4 text-eu-aqua"
                    aria-hidden="true"
                  />
                  Más de 80 países
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2
                    className="h-4 w-4 text-eu-aqua"
                    aria-hidden="true"
                  />
                  Red médica internacional
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-6 rotate-3 rounded-[2.5rem] bg-eu-aqua-light" />

              <div className="relative overflow-hidden rounded-[2rem] bg-eu-blue p-7 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/60">Eumedical Care</p>
                    <p className="mt-1 text-xl font-semibold text-white">
                      Atención donde estés
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-eu-orange">
                    <HeartPulse
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="mt-8 rounded-3xl bg-white p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-eu-blue-light">
                      <Video
                        className="h-6 w-6 text-eu-blue"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <p className="font-semibold text-eu-blue">
                        Teleconsulta
                      </p>
                      <p className="text-sm text-eu-blue/60">
                        Atención médica digital
                      </p>
                    </div>

                    <span className="ml-auto rounded-full bg-eu-aqua-light px-3 py-1 text-xs font-semibold text-eu-blue">
                      24/7
                    </span>
                  </div>

                  <div className="my-6 h-px bg-eu-blue-light" />

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-eu-grey p-4">
                      <Globe2
                        className="h-5 w-5 text-eu-aqua"
                        aria-hidden="true"
                      />
                      <p className="mt-3 text-2xl font-semibold text-eu-blue">
                        80+
                      </p>
                      <p className="mt-1 text-xs text-eu-blue/60">
                        países
                      </p>
                    </div>

                    <div className="rounded-2xl bg-eu-grey p-4">
                      <Languages
                        className="h-5 w-5 text-eu-orange"
                        aria-hidden="true"
                      />
                      <p className="mt-3 text-2xl font-semibold text-eu-blue">
                        10+
                      </p>
                      <p className="mt-1 text-xs text-eu-blue/60">
                        idiomas
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-6 text-white/65">
                  Una experiencia sanitaria clara, accesible y preparada para
                  acompañar al paciente durante todo su proceso de atención.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="capacidades"
          className="scroll-mt-24 bg-white py-24"
          aria-labelledby="capabilities-title"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="font-semibold uppercase tracking-[0.18em] text-eu-orange">
                Capacidades
              </p>

              <h2
                id="capabilities-title"
                className="mt-3 text-4xl font-semibold tracking-tight text-eu-blue"
              >
                Una red preparada para responder globalmente
              </h2>

              <p className="mt-5 text-lg leading-8 text-eu-blue/70">
                Tecnología, profesionales y coordinación médica trabajando
                juntos para ofrecer una experiencia sanitaria sencilla y
                confiable.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {capabilities.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-3xl border border-eu-blue-light bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-eu-blue-light">
                    <Icon
                      className="h-6 w-6 text-eu-blue"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-eu-blue">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-eu-blue/65">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="servicios"
          className="scroll-mt-24 bg-eu-grey py-24"
          aria-labelledby="services-title"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="font-semibold uppercase tracking-[0.18em] text-eu-orange">
                  Servicios
                </p>

                <h2
                  id="services-title"
                  className="mt-3 text-4xl font-semibold tracking-tight text-eu-blue"
                >
                  Soluciones médicas para diferentes necesidades
                </h2>
              </div>

              <p className="max-w-lg text-base leading-7 text-eu-blue/65">
                Un modelo de atención que combina servicios digitales,
                asistencia presencial y coordinación sanitaria internacional.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="group rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-eu-aqua-light transition group-hover:bg-eu-aqua">
                    <Icon
                      className="h-6 w-6 text-eu-blue"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-eu-blue">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-eu-blue/65">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-eu-blue py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-5xl font-semibold text-eu-yellow">
                    {metric.value}
                  </p>
                  <p className="mt-3 text-sm text-white/70">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="eumedical"
          className="scroll-mt-24 bg-white py-24"
          aria-labelledby="about-title"
        >
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-eu-orange">
                Eumedical
              </p>

              <h2
                id="about-title"
                className="mt-3 text-4xl font-semibold tracking-tight text-eu-blue"
              >
                Salud digital con visión internacional
              </h2>

              <p className="mt-6 text-lg leading-8 text-eu-blue/70">
                Eumedical es una compañía de asistencia sanitaria digital con
                capacidad internacional para responder a las necesidades de
                pacientes y empresas alrededor del mundo.
              </p>

              <p className="mt-5 leading-7 text-eu-blue/65">
                Nuestro enfoque combina conocimiento local, coordinación médica
                y tecnología para simplificar cada etapa de la atención.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-eu-aqua"
                    aria-hidden="true"
                  />
                  <p className="text-eu-blue/75">
                    Atención centrada en las necesidades de cada paciente.
                  </p>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-eu-aqua"
                    aria-hidden="true"
                  />
                  <p className="text-eu-blue/75">
                    Coordinación médica internacional con enfoque integral.
                  </p>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-eu-aqua"
                    aria-hidden="true"
                  />
                  <p className="text-eu-blue/75">
                    Experiencias digitales diseñadas para generar confianza.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] bg-eu-blue-light p-8 sm:p-10">
                <div className="rounded-[1.5rem] bg-white p-7 shadow-lg">
                  <UsersRound
                    className="h-8 w-8 text-eu-aqua"
                    aria-hidden="true"
                  />

                  <p className="mt-8 text-2xl font-semibold leading-9 text-eu-blue">
                    “La tecnología debe simplificar la atención, no hacerla más
                    distante.”
                  </p>

                  <div className="mt-8 border-t border-eu-blue-light pt-6">
                    <p className="font-semibold text-eu-blue">
                      Experiencia Eumedical
                    </p>
                    <p className="mt-1 text-sm text-eu-blue/60">
                      Clara · cercana · internacional
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-eu-aqua p-5 text-white">
                    <FileCheck2 className="h-6 w-6" aria-hidden="true" />
                    <p className="mt-5 text-sm font-semibold">
                      Procesos claros
                    </p>
                  </div>

                  <div className="rounded-2xl bg-eu-orange p-5 text-white">
                    <Clock3 className="h-6 w-6" aria-hidden="true" />
                    <p className="mt-5 text-sm font-semibold">
                      Respuesta ágil
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="scroll-mt-24 bg-eu-blue-light py-24"
          aria-labelledby="contact-title"
        >
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
            <p className="font-semibold uppercase tracking-[0.18em] text-eu-orange">
              Contacto
            </p>

            <h2
              id="contact-title"
              className="mt-3 text-4xl font-semibold tracking-tight text-eu-blue sm:text-5xl"
            >
              ¿Necesitas una solución médica?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-eu-blue/70">
              Nuestro equipo puede ayudarte a encontrar la respuesta adecuada
              para tus necesidades de asistencia sanitaria.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="mailto:business@eumedical.es"
                className="inline-flex items-center justify-center rounded-full bg-eu-orange px-7 py-4 font-semibold text-white transition hover:bg-eu-yellow hover:text-eu-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-eu-orange"
              >
                business@eumedical.es
              </a>

              <a
                href="tel:+34919227810"
                className="inline-flex items-center justify-center rounded-full border border-eu-blue px-7 py-4 font-semibold text-eu-blue transition hover:bg-eu-blue hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-eu-blue"
              >
                +34 919 22 78 10
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default HomePage