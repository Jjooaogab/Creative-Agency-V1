import { ArrowRight, Edit, Laptop, Lightbulb, Minus, Newspaper, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CardAbout from "./Card";

export default function AboutSection() {
  return (
    <main className="min-h-screen  transition-all bg-blue-900 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row lg:justify-around justify-center items-center">
        <div className="flex flex-col text-zinc-100 items-center gap-4 lg:items-start lg:ml-16">
          <span className="flex mt-6 text-1lg items-center gap-2 font-semibold text-cyan-300 lg:ml-8"><Minus />About us<Minus /></span>
          <div className="flex flex-col text-center gap-2">
            <h1 className="text-3lg font-semibold lg:w-96 lg:text-left lg:text-4lg lg:ml-8">Digital Solutions For Modern Problems</h1>
            <span className="mx-8 lg:text-left lg:w-96">
              It is a long established fact that a reader will be distracted by the readable contet of
              a page when looking at its layoput. Simply and typsetting industry
            </span>
            <div className="sm:flex sm:gap-32 lg:gap-1 justify-center lg:flex-col">
              <div className="flex gap-4 justify-center mt-4 transition-all sm:flex-col lg:flex-row">
                <span className="flex items-center gap-2">
                  <div className="bg-blue-700 p-2 rounded-md transition-all hover:opacity-80">
                    <Lightbulb />
                  </div>
                  Pixie Digital
                </span>
                <span className="flex items-center gap-2">
                  <div className="bg-blue-700 p-2 rounded-md transition-all hover:opacity-80">
                    <Newspaper />
                  </div>
                  Fuse Agency
                </span>
              </div>
              <div className="flex gap-4 justify-center mt-4 sm:flex-col lg:flex-row">
                <div className="flex items-center justify-start gap-2">
                  <div className="transition-all hover:opacity-80">
                    <Image
                      src={"/imageAbout.png"} alt={""}
                      width={250} height={250}
                      className="w-12 aspect-square rounded-full"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm">
                      João Gabriel
                    </span>
                    <span className="text-xs">
                      Devloper
                    </span>
                  </div>
                </div>
                <Link href={'#'} className="flex items-center gap-2 bg-blue-700 px-3 py-1 rounded-md transition hover:bg-blue-500">
                  Veja Sobre <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mr-16">
          <Image
            src={"/GridAbout.png"} alt={""}
            width={450} height={450}
            className='invisible w-96 mt-6 lg:visible'
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 -mt-72 pb-8 sm:items-center md:flex-row md:justify-center lg:mt-16 md:items-center">
        <CardAbout
          icon={Smartphone}
          title={'Byte Labs'}
        />
        <CardAbout
          icon={Edit}
          title={'Pixel Punch'}
        />
        <CardAbout
          icon={Laptop}
          title={'Dream Digitals'}
        />
      </div>
    </main>
  )
}