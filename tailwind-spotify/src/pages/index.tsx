import Head from 'next/head';

import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen bg-zinc-900 text-zinc-50 flex flex-col">
      <Head>
        <title>Spotify</title>
        <meta name="TailWind Spotify" content="Clone do Spotify com TailWind" />
      </Head>
      <div className="flex flex-1">
      <aside className="w-72 bg-zinc-950 p-6">
        <nav className='space-y-2'>
          <a href="#" className='flex items-center gap-3 text-xs font-semibold text-zinc-200'>
            <HomeIcon />
            Home
          </a>
          <a href="#" className='flex items-center gap-3 text-xs font-semibold text-zinc-200'>
            <Search />
            Search
          </a>
          <a href="#" className='flex items-center gap-3 text-xs font-semibold text-zinc-200'>
            <Library />
            Your Library
          </a>
        </nav>
        <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2'>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>The Best Music</a>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Charlie Brown JR</a>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Funk</a>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>MPB</a>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Rock</a>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Reggae</a>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>My Playlist</a>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Love Song</a>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Eletronic</a>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Top Brasil</a>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Lowfy</a>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Skateboard</a>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Work</a>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Daily</a>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Favorite</a>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Music 1</a>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <div className='flex items-center gap-3'>
          <button className='rounded-full bg-black/30 p-1'>
            <ChevronLeft />
          </button>
          <button className='rounded-full bg-black/30 p-1'>
            <ChevronRight />
          </button>
        </div>
        <h1 className='text-bold text-3xl mt-7'>Good Afternoon</h1>
        <div className='grid grid-cols-3 gap-4'>
          <div className='bg-white/10 rounded'>Playlist</div>
          <div className='bg-white/10 rounded'>Playlist</div>
          <div className='bg-white/10 rounded'>Playlist</div>
          <div className='bg-white/10 rounded'>Playlist</div>
          <div className='bg-white/10 rounded'>Playlist</div>
          <div className='bg-white/10 rounded'>Playlist</div>
        </div>
      </main>
      </div>
      <footer className='bg-zinc-800 border-t border-zinc-700 p-6'>
        footer
      </footer>
    </div>
  );
}
