import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import {Home as HomeIcon, Search, Library, Divide, ChevronLeft, ChevronRight, Play, SkipBack, Shuffle, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, ExpandIcon, Maximize2} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar/>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft/>
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight/>
            </button>
          </div>
          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon!</h1>
          <div className='grid grid-cols-3 gap-4 mt-6'>
            <a className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="capa do album Master Of Puppets da banda Metallica"/>
              <strong>Master of Puppets</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="capa do album Master Of Puppets da banda Metallica"/>
              <strong>Master of Puppets</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="capa do album Master Of Puppets da banda Metallica"/>
              <strong>Master of Puppets</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="capa do album Master Of Puppets da banda Metallica"/>
              <strong>Master of Puppets</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="capa do album Master Of Puppets da banda Metallica"/>
              <strong>Master of Puppets</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="capa do album Master Of Puppets da banda Metallica"/>
              <strong>Master of Puppets</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
          </div>
          <h2 className='font-semibold text-2xl mt-10'>Made for Gabriel Bartelli</h2>

          <div className='grid grid-cols-7 gap-4 mt-4'>
            <a className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <Image src="/album.jpg" className='w-full' width={104} height={104} alt="capa do album Master Of Puppets da banda Metallica"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Katy Perry, Basshunter, A Touch of Class and more</span>
            </a>
            <a className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <Image src="/album.jpg" className='w-full' width={104} height={104} alt="capa do album Master Of Puppets da banda Metallica"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Katy Perry, Basshunter, A Touch of Class and more</span>
            </a>
            <a className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <Image src="/album.jpg" className='w-full' width={104} height={104} alt="capa do album Master Of Puppets da banda Metallica"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Katy Perry, Basshunter, A Touch of Class and more</span>
            </a>
            <a className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <Image src="/album.jpg" className='w-full' width={104} height={104} alt="capa do album Master Of Puppets da banda Metallica"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Katy Perry, Basshunter, A Touch of Class and more</span>
            </a>
            <a className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <Image src="/album.jpg" className='w-full' width={104} height={104} alt="capa do album Master Of Puppets da banda Metallica"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Katy Perry, Basshunter, A Touch of Class and more</span>
            </a>
            <a className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <Image src="/album.jpg" className='w-full' width={104} height={104} alt="capa do album Master Of Puppets da banda Metallica"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Katy Perry, Basshunter, A Touch of Class and more</span>
            </a>
            <a className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <Image src="/album.jpg" className='w-full' width={104} height={104} alt="capa do album Master Of Puppets da banda Metallica"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Katy Perry, Basshunter, A Touch of Class and more</span>
            </a>
          </div>
        </main>    
      </div>
      <Footer/>
    </div>
  )
}
