import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <div className="flex flex-col items-center transition-all justify-center gap-6 h-screen lg:-mt-24 lg:gap-48 lg:flex-row-reverse">
        <Image width={250} height={250} src="/imgHero.png" alt={""} className='w-64 aspect-square lg:w-72' />
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <h1 className="text-5xl font-semibold w-80 dark:text-zinc-200 transition-all lg:w-[8em] lg:text-6xl lg:leading-tight">Talking your business to new heights</h1>
          <span className="dark:text-zinc-200 transition-all w-72 lg:w-96">The cost of corporate services varies depending on the scope of work, the size of the business, and the specific services required</span>
          <Link href={'#'} className='flex gap-2 w-80 bg-blue-800 dark:bg-neutral-900 transition-all p-2 rounded-md text-zinc-200 justify-center hover:bg-blue-500' >Discover more <Plus /> </Link>
        </div>
      </div>
    </>
  )
}