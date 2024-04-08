import {Home as HomeIcon, Search, Library, Divide, ChevronLeft, ChevronRight, Play, SkipBack, Shuffle, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, ExpandIcon, Maximize2} from 'lucide-react';
import Image from 'next/image';

export function Sidebar() {
    return(
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'/>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'/>
            <div className='w-3 h-3 bg-green-500 rounded-full'/>
          </div>
          <nav className='space-y-6 mt-10'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <HomeIcon/>
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Search/>
              Search
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Library/>
              Your Library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Liked Songs</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Release Radar</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Discover Weekly</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Daily Mix 1</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Daily Mix 2</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Daily Mix 3</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Moody Mix</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Funk Mix</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Trap Gold</a>
          </nav>
        </aside>
    )
}