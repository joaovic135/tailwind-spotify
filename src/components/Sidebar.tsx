import { HomeIcon, Library, SearchIcon } from "lucide-react";

export function SideBar(){
  return(
    <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          </div>
          <nav className="space-y-5 mt-4">
            <a href="" className="flex items-center text-sm gap-3 font-semibold text-zinc-100">
              <HomeIcon />
              Home
            </a>
            <a href="" className="flex items-center text-sm gap-3 font-semibold text-zinc-100">
              <SearchIcon />
              search
            </a>
            <a href="" className="flex items-center text-sm gap-3 font-semibold text-zinc-100">
              <Library />
              Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Top Hits</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Chill Vibes</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Workout Mix</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Party Anthems</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Relax & Unwind</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Focus Beats</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Throwback Jams</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Indie Essentials</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Acoustic Favorites</a>
          </nav>
        </aside>
  )
}