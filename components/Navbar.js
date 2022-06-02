import Link from 'next/link';
import { useState } from 'react';
import CloseIcon from './CloseIcon';
import MenuIcon from './MenuIcon';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'Authors', 'About', 'Contact'];
  return (
    <nav className="bg-gray-800 w-[100%] h-[60px] fixed top-0 left-0 text-white shadow-lg shadow-black/30 text-xl flex z-10 md:justify-between">
      <div className="flex gap-x-4 items-center h-full mx-2">
        {open ? (
          <CloseIcon
            className="w-10 hover:cursor-pointer
            hover:opacity-80 scale-75 active:scale-100 transition-all md:hidden"
            onClick={() => setOpen(false)}
          />
        ) : (
          <MenuIcon
            className="w-10 hover:cursor-pointer
            hover:opacity-80 transition-all md:hidden"
            onClick={() => setOpen(true)}
          />
        )}
        <span>Bloggy</span>
      </div>
      <ul
        className={`flex md:flex-row flex-col absolute md:static md:w-auto w-[200px] md:h-auto h-[100vh] bg-gray-800 top-[60px] space-y-5 
        md:space-y-0 md:items-center
        ${open ? 'left-0' : 'left-[-100%]'} 
        transition-all md:transition-none duration-500 ease-in py-8 md:py-0 md:mr-10`}
      >
        {links.map((el, index) => {
          return (
            <li
              key={index}
              className="hover:cursor-pointer hover:bg-white md:hover:bg-transparent md:text-white md:hover:scale-105 md:hover:text-white hover:text-gray-900 w-[90%] ml-auto rounded-l-[30px] transition-all pl-4 ease-in-out"
            >
              <Link href="/">{el}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
