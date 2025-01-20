import {
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from "lucide-react";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center gap-3 mb-4 md:mb-0">
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
      <div className="flex flex-col items-center mt-3 mb-4 md:mb-0">
        <div className="flex items-center gap-3">
          <Shuffle size={18} className="text-zinc-200" />
          <SkipBack size={18} className="text-zinc-200" />
          <button className="w-5 h-5 text-zinc-200 flex items-center justify-center rounded-full bg-white text-black ml-auto">
            <Play />
          </button>
          <SkipForward size={18} className="text-zinc-200" />
          <Repeat size={18} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2 mt-2 w-full">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 rounded-full flex-1 bg-zinc-600">
            <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
          </div>
          <span className="text-xs text-zinc-400">3:15</span>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-3">
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
  );
};

export default Footer;
