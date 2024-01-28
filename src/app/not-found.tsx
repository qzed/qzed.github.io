import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Maximilian Luz | Page not found',
}

export default function NotFound() {
  return (
    <main className='w-full h-full text-sky-950 dark:text-sky-100'>
      <div className='p-8 w-fit mx-auto mt-[calc(max(15dvh,0px))] flex flex-col *:w-fit *:mx-auto'>
        <div className='text-9xl font-bold mb-6'>
          404
        </div>
        <p className='text-lg mb-1'>
          Sorry. The page you are looking for does not exist.
        </p>
        <Link href="/" className='
          mt-8 px-5 py-3
          rounded-full border border-transparent
          bg-slate-300 dark:bg-slate-800
          hover:border-slate-400 dark:hover:border-slate-600
        '>
          Home
        </Link>
      </div>
    </main>
  )
}
