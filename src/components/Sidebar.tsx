import { HomeIcon, Library, Search } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-full md:w-72 bg-zinc-950 p-6">
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
  );
};

export default Sidebar;
