import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ElementType } from "react";

interface CardAboutProps {
  icon: ElementType;
  title: string;
}

export default function CardAbout({ icon: Icon, title }: CardAboutProps) {
  return (
    <div className="w-56 xl:w-72 h-44 bg-blue-800">
      <div className="absolute bg-blue-900 w-12 aspect-square translate-x-5 -translate-y-5 shadow-inner rounded-md">
        <div className="flex justify-center items-center h-full text-zinc-200">
          <Icon />
        </div>
      </div>
      <div className="mx-5 flex mt-12 flex-col gap-3 text-zinc-200">
        <h3 className="text-lg">{title}</h3>
        <span className="text-xs font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        <Link href={'#'} className='text-sm flex items-center gap-4'><ArrowRight size={16} className='text-blue-500 font-bold' /> Read more</Link>
      </div>
    </div>
  )
}