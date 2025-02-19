import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { SideBar } from "@/components/Sidebar/Sidebar";
import { Footer } from "@/components/Footer/Footer";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />

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

        <div className="space-x-2">
          <Button schema="error" className="bg-purple-700 h-20">Default</Button>
          <Button schema="success">Sucesso</Button>
          <Button schema="error">Falha</Button>
        </div>

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
      <Footer />
    </div>
  );
}
