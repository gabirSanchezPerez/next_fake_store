import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Pág Main
      <nav className='grid gap-4 grid-cols-2'>
        <Link className='py-2 px-4 border-2 rounded-md hover:bg-green-800 border-green-600 hover:text-white' href="categorias">Categorias</Link>
        <Link className='py-2 px-4 border-2 rounded-md hover:bg-blue-800 border-blue-600 hover:text-white' href="productos">Productos</Link>
      </nav>
    </main>
  )
}
