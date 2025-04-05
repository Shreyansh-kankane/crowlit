import type { ReactNode } from "react"

interface UseCaseCardProps {
  title: string
  description: string
  icon: ReactNode
}

export default function UseCaseCard({ title, description, icon }: UseCaseCardProps) {
  return (
    <div>
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

