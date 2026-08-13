"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-black/8 shadow-sm">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-6 md:px-margin-desktop h-20">
        <Link href="/" className="font-display-lg text-headline-lg tracking-tighter text-primary flex items-center">
          <img src="/no-bg-highres.png" alt="AIWorrk Logo" style={{ width: '200px', height: '200px', objectFit: 'contain' }} className="mr-2" />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-on-surface-variant hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5 focus:outline-none mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-black/8 shadow-lg flex flex-col gap-4 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 py-6 px-6 opacity-100' : 'max-h-0 py-0 px-6 opacity-0'}`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-on-surface-variant hover:text-primary transition-colors duration-300"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
