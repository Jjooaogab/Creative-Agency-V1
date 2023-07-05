'use client'

import { ChevronDown, Menu, MoveRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="py-8">
      <nav>
        <section className="lg:hidden">
          <div className="flex items-center justify-around gap-8">
            <Link href={'#'} className='flex gap-4 bg-blue-800 dark:bg-neutral-900 rounded-sm items-center text-zinc-100 py-2 px-4 transition-all hover:bg-blue-500'>Get a quote <MoveRight /> </Link>
            <div
              className="flex"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <Menu size={36} className='text-zinc-700 dark:text-zinc-200' />
            </div>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center gap-8 uppercase ">
              <li className="border-b border-gray-400">
                <a href="#">Home</a>
              </li>
              <li className="border-b border-gray-400">
                <a href="#">About</a>
              </li>
              <li className="border-b border-gray-400">
                <a href="#">Services</a>
              </li>
              <li className="border-b border-gray-400">
                <a href="#">Projects</a>
              </li>
              <li className="border-b border-gray-400">
                <a href="#">Blog</a>
              </li>
              <li className="border-b border-gray-400">
                <a href="#">Page</a>
              </li>
              <li className="border-b border-gray-400">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <div className="hidden items-center justify-around gap-4 lg:flex">
          <div className="hidden lg:flex gap-24">
            <ul className="hidden font-medium text-sm lg:flex lg:justify-center lg:gap-5 dark:text-zinc-200">
              <li className="flex items-center gap-2 cursor-pointer transition 
          hover:text-blue-700 group">
                <a href="#">Home</a>
                <ChevronDown size={12} className='mt-2 transition-all group-hover:translate-y-1' />
              </li>
              <li className="flex items-center gap-2 cursor-pointer transition 
          hover:text-blue-700 group">
                <a href="#">About</a>
                <ChevronDown size={12} className='mt-2 transition-all group-hover:translate-y-1' />
              </li>
              <li className="flex items-center gap-2 cursor-pointer transition 
          hover:text-blue-700 group">
                <a href="#">Services</a>
                <ChevronDown size={12} className='mt-2 transition-all group-hover:translate-y-1' />
              </li>
              <li className="flex items-center gap-2 cursor-pointer transition 
          hover:text-blue-700 group">
                <a href="#">Projects</a>
                <ChevronDown size={12} className='mt-2 transition-all group-hover:translate-y-1' />
              </li>
              <li className="flex items-center gap-2 cursor-pointer transition 
          hover:text-blue-700 group">
                <a href="#">Blog</a>
                <ChevronDown size={12} className='mt-2 transition-all group-hover:translate-y-1' />
              </li>
              <li className="flex items-center gap-2 cursor-pointer transition 
          hover:text-blue-700 group">
                <a href="#">Page</a>
                <ChevronDown size={12} className='mt-2 transition-all group-hover:translate-y-1' />
              </li>
              <li className="flex items-center gap-2 cursor-pointer transition 
          hover:text-blue-700 group">
                <a href="#">Contact</a>
              </li>

            </ul>

            <Link href={'#'} className='flex gap-2 bg-blue-800 dark:bg-neutral-900 rounded-sm text-sm items-center text-zinc-100 py-3 px-4 transition-all hover:bg-blue-500'>Get a quote <MoveRight /> </Link>
          </div>
        </div>


      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}