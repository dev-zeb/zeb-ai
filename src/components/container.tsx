import { Card } from "@/components/card"

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <Card className={`p-6 ${className}`}>
        {children}
      </Card>
    </div>
  )
}
