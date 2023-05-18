import { User } from "lucide-react";
import Image from "next/image";
import nlwLogo from "../assets/nlw-spacetime-logo.svg";

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        <div className="absolute top-0 bottom-0 w-2 right-2 bg-stripes" />
        <a href="" className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className="text-sm leading-snug max-w-[140px]"><span className="underline">Create your account</span> and save your memories!</p>
        </a>
        <div className="space-y-5">
          <Image src={nlwLogo} alt="NLW Spacetime" />
          <div className="max-w-[420px] space-y-4">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">Your time capsule</h1>
            <p className="text-lg leading-relaxed">Collect memorable moments of your journey and share them with the world!</p>
          </div>
          <a className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600" href="">Add memory</a>
        </div>
        <div className="text-sm leading-relaxed text-gray-200">Made with 💜 by <a href="https://github.com/biagavirete" target="_blank" rel="noreferrer" className="underline hover:text-gray-100">biagavirete</a> during NLW</div>
      </div>
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            No memories yet, <a className="underline hover:text-gray-50" href="">start now</a>!
          </p>
        </div>
      </div>
    </main>
  );
}
