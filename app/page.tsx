import Overview from '@/components/Overview'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'

export default function Home() {
  return (
    <div
      className="w-full h-full overflow-hidden
      overflow-y-auto bg-zinc-200 grid grid-cols-6 gap-4"
    >
      <Sidebar />
      <Overview />
    </div>
  )
}
