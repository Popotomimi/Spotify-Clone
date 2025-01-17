import Head from "next/head";
import Image from "next/image";

import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
} from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen bg-zinc-900 text-zinc-50 flex flex-col">
      <Head>
        <title>Spotify</title>
        <meta name="TailWind Spotify" content="Clone do Spotify com TailWind" />
      </Head>
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-2">
            <a
              href="#"
              className="flex items-center gap-3 text-xs font-semibold text-zinc-200">
              <HomeIcon />
              Home
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-xs font-semibold text-zinc-200">
              <Search />
              Search
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-xs font-semibold text-zinc-200">
              <Library />
              Your Library
            </a>
          </nav>
          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2">
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              The Best Music
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Charlie Brown JR
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Funk
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              MPB
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Rock
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Reggae
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              My Playlist
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Love Song
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Eletronic
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Top Brasil
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Lowfy
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Skateboard
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Work
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Daily
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Favorite
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Music 1
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/30 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/30 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="text-bold text-3xl mt-7">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 trasition-colors">
              <Image
                src="/cbjr1.jpg"
                width={80}
                height={80}
                alt="Capa do album do Charlie Brown JR"
              />
              <strong className="text-xs">100% Charlie Brown</strong>
              <button className="p-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 trasition-colors">
              <Image
                src="/cbjr2.jpg"
                width={80}
                height={80}
                alt="Capa do album do Charlie Brown JR"
              />
              <strong className="text-xs">Imunidade Musical</strong>
              <button className="p-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 trasition-colors">
              <Image
                src="/cbjr5.jpg"
                width={80}
                height={80}
                alt="Capa do album do Charlie Brown JR"
              />
              <strong className="text-xs">Bocas Ordinárias</strong>
              <button className="p-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 trasition-colors">
              <Image
                src="/cbjr2.jpg"
                width={80}
                height={80}
                alt="Capa do album do Charlie Brown JR"
              />
              <strong className="text-xs">Imunidade Musical</strong>
              <button className="p-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 trasition-colors">
              <Image
                src="/cbjr5.jpg"
                width={80}
                height={80}
                alt="Capa do album do Charlie Brown JR"
              />
              <strong className="text-xs">Bocas Ordinárias</strong>
              <button className="p-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 trasition-colors">
              <Image
                src="/cbjr6.jpg"
                width={80}
                height={80}
                alt="Capa do album do Charlie Brown JR"
              />
              <strong className="text-xs">De 1997 A 2007</strong>
              <button className="p-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
          <h2 className="text-bold text-1xl mt-7">
            {" "}
            Made for Roberto de Oliveira
          </h2>
          <div className="grid grid-cols-6 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 p-2 flex flex-col gap-2 roundend hover:bg-white/10">
              <Image
                src="/cbjr1.jpg"
                className="w-full"
                width={80}
                height={80}
                alt="Capa do album do Charlie Brown JR"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Chorão do Charlie Brown Jr
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-2 flex flex-col gap-2 roundend hover:bg-white/10">
              <Image
                src="/cbjr2.jpg"
                className="w-full"
                width={80}
                height={80}
                alt="Capa do album do Charlie Brown JR"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Chorão do Charlie Brown Jr
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-2 flex flex-col gap-2 roundend hover:bg-white/10">
              <Image
                src="/cbjr6.jpg"
                className="w-full"
                width={80}
                height={80}
                alt="Capa do album do Charlie Brown JR"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Chorão do Charlie Brown Jr
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-2 flex flex-col gap-2 roundend hover:bg-white/10">
              <Image
                src="/cbjr5.jpg"
                className="w-full"
                width={80}
                height={80}
                alt="Capa do album do Charlie Brown JR"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Chorão do Charlie Brown Jr
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-2 flex flex-col gap-2 roundend hover:bg-white/10">
              <Image
                src="/cbjr1.jpg"
                className="w-full"
                width={80}
                height={80}
                alt="Capa do album do Charlie Brown JR"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Chorão do Charlie Brown Jr
              </span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/cbjr1.jpg"
            width={50}
            height={50}
            className="w-20 h-20"
            alt="Capa do album do Charlie Brown JR"
          />
          <div className="flex flex-col">
            <strong className="text-xs font-normal">Como tudo deve ser</strong>
            <span className="text-xs text-zinc-400">Charlie Brown JR</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3">
            <Shuffle size={18} className="text-zinc-200 " />
            <SkipBack size={18} className="text-zinc-200 " />
            <button className="w-5 h-5 text-zinc-200  flex items-center justify-center rounded-full bg-white text-black ml-auto">
              <Play />
            </button>
            <SkipForward size={18} className="text-zinc-200 " />
            <Repeat size={18} className="text-zinc-200 " />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">3:15</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Mic2 size={12} />
          <LayoutList size={12} />
          <Laptop2 size={12} />
          <div className="flex items-center gap-2">
            <Volume size={12} />
            <div className="h-1 rounded-full w-12 bg-zinc-600">
              <div className="bg-zinc-200 w-4 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={10} />
        </div>
      </footer>
    </div>
  );
}
