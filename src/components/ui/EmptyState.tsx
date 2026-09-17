import type { LucideIcon } from 'lucide-react'

type EmptyStateProps = {
  icon: LucideIcon
  title: string
  description: string
}

function EmptyState({ icon: Icon, title, description }: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-dashed border-eu-blue-light bg-white px-6 py-12 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-eu-blue-light">
        <Icon className="h-7 w-7 text-eu-blue" aria-hidden="true" />
      </div>
      <h2 className="mt-5 text-xl font-semibold">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-eu-blue/60">
        {description}
      </p>
    </div>
  )
}

export default EmptyState
