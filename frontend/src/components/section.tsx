interface Props {
  children: React.ReactNode
  id?: string
  className?: string
}

export default function Section({ children, id, className }: Props) {
  return (
    <section id={id} className={`py-20 px-6 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  )
}