import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex items-center justify-center flex-col min-h-screen'>
      <h1 className='text-4xl'>DevSS Store</h1>
      <Link className='text-blue-600 hover:underline mt-10' href={"/dashboard"}>Dashboard</Link>
    </div>
  )
}
