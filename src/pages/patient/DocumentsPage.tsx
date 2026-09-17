import { FileCheck2, FileText } from 'lucide-react'
import { medicalDocuments } from '../../features/patient/data/mockPatient'

function DocumentsPage() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-semibold text-eu-aqua">Documentación</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Documentos médicos</h1>
        <p className="mt-3 text-eu-blue/65">Accede a informes y documentos asociados a tus consultas.</p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {medicalDocuments.map((document) => (
          <article key={document.id} className="rounded-3xl border border-eu-blue-light bg-white p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-eu-blue-light">
                <FileText className="h-6 w-6" aria-hidden="true" />
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-eu-aqua-light px-3 py-1 text-xs font-semibold">
                <FileCheck2 className="h-3.5 w-3.5" aria-hidden="true" />
                Disponible
              </span>
            </div>
            <h2 className="mt-6 text-xl font-semibold">{document.title}</h2>
            <p className="mt-2 text-sm text-eu-blue/60">{document.type}</p>
            <p className="mt-1 text-sm text-eu-blue/45">{document.date}</p>
            <p className="mt-6 rounded-2xl bg-eu-grey p-4 text-sm leading-6 text-eu-blue/60">
              Documento ficticio de demostración. No contiene información clínica real.
            </p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default DocumentsPage
