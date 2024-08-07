import { HomeIcon, Library, SearchIcon } from "lucide-react";
import {playlist , sideBarIcons} from './styles'
export function SideBar(){
  return(
    <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          </div>
          <nav className="space-y-5 mt-4">
            <a href="" className={sideBarIcons()}>
              <HomeIcon />
              Home
            </a>
            <a href="" className={sideBarIcons()}>
              <SearchIcon />
              search
            </a>
            <a href="" className={sideBarIcons()}>
              <Library />
              Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className={playlist()}>Top Hits</a>
            <a href="" className={playlist()}>Chill Vibes</a>
            <a href="" className={playlist()}>Workout Mix</a>
            <a href="" className={playlist()}>Party Anthems</a>
            <a href="" className={playlist()}>Relax & Unwind</a>
            <a href="" className={playlist()}>Focus Beats</a>
            <a href="" className={playlist()}>Throwback Jams</a>
            <a href="" className={playlist()}>Indie Essentials</a>
            <a href="" className={playlist()}>Acoustic Favorites</a>
          </nav>
        </aside>
  )
}