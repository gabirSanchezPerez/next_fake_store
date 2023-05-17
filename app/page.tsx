import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Pág Main
      <nav>
        <Link href="categorias">Categorias</Link>
        <Link href="productos">Productos</Link>
      </nav>
    </main>
  )
}
