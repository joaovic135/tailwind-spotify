import Image from "next/image";
import { Home as HomeIcon, SearchIcon, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
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
        <main className="flex-1 p-6">
          <div className="flex item-center gap-4">
            <button className="w-6 h-6 rounded-full bg-black/40" >
              <ChevronLeft />
            </button>
            <button className="w-6 h-6 rounded-full bg-black/40">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10 ">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4 ">
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do album"></Image>
              <strong>Circles</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden  hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do album"></Image>
              <strong>Circles</strong>
              <button className=" w-12 h-12 flex items-center justify-center	pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden  hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do album"></Image>
              <strong>Circles</strong>
              <button className=" w-12 h-12 flex items-center justify-center	pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group rounded flex items-center  gap-4 overflow-hidden  hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do album"></Image>
              <strong>Circles</strong>
              <button className=" w-12 h-12 flex items-center justify-center	pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group rounded flex items-center  gap-4 overflow-hidden  hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do album"></Image>
              <strong>Circles</strong>
              <button className=" w-12 h-12 flex items-center justify-center	pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group rounded flex items-center  gap-4 overflow-hidden  hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do album"></Image>
              <strong>Circles</strong>
              <button className=" w-12 h-12 flex items-center justify-center	pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-3xl mt-10 ">Made For You</h2>

          <div className="grid grid-cols-6 mt-4 gap-4">
            < a href="" className="bg-white/5 p-2 rounded-lg flex flex-col hover:bg-white/10">
              <Image src="/album.jpg" className="w-full" width={104} height={104} alt="Capa do album"></Image>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Vista Kicks,Circles</span>              
            </a>           
            < a href="" className="bg-white/5 p-2 rounded-lg flex flex-col hover:bg-white/10">
              <Image src="/album.jpg" className="w-full" width={104} height={104} alt="Capa do album"></Image>
                <strong className="font-semibold">Daily Mix 1</strong>
                <span className="text-sm text-zinc-400">Vista Kicks,Circles</span>
            </a>             
            <a href="" className="bg-white/5 p-2 rounded-lg flex flex-col hover:bg-white/10">
              <Image src="/album.jpg" className="w-full" width={104} height={104} alt="Capa do album"></Image>
                <strong className="font-semibold">Daily Mix 1</strong>
                <span className="text-sm text-zinc-400">Vista Kicks,Circles</span>
            </a>          
            <a href="" className="bg-white/5 p-2 rounded-lg flex flex-col hover:bg-white/10">
              <Image src="/album.jpg" className="w-full" width={104} height={104} alt="Capa do album"></Image>
                <strong className="font-semibold">Daily Mix 1</strong>
                <span className="text-sm text-zinc-400">Vista Kicks,Circles</span>
            </a>          
            < a href="" className="bg-white/5 p-2 rounded-lg flex flex-col hover:bg-white/10">
              <Image src="/album.jpg" className="w-full" width={104} height={104} alt="Capa do album"></Image>
                <strong className="font-semibold">Daily Mix 1</strong>
                <span className="text-sm text-zinc-400">Vista Kicks,Circles</span>
            </a> 
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between"> 
        
        <div className="flex items-center gap-3">
          <Image src="/album.jpg" className="w-full" width={56} height={56} alt="Capa do album"></Image>
          <div className="flex flex-col gap-1">
            <strong className="font-normal">Marceline</strong>
            <span className="text-xs text-zinc-400">Vista Kicks</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200"/>
            <SkipBack size={20} className="text-zinc-200"/>

            <button className=" w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black ">
            <Play ></Play>
            </button>

            <SkipForward size={20} className="text-zinc-200"/>       
            <Repeat size={20} className="text-zinc-200"/>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sx"></span>
          </div>
        </div>
        <div>

        </div>
      </footer>
    </div>
  );
}
