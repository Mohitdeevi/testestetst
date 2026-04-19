'use client';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '../../lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          Mohit Deevi
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white md:hidden">
          Menu
        </button>
        <div className={cn('md:flex', { hidden: !isOpen })}>
          <Link href="#about" className="text-white px-4 py-2">
            About
          </Link>
          <Link href="#projects" className="text-white px-4 py-2">
            Projects
          </Link>
          <Link href="#contact" className="text-white px-4 py-2">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
