"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function NavBar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className='header'>
      <div className='logo'>
        <Link href='/'>FinTeck Solutions</Link>
      </div>
      <div
        className='menu'
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
      >
        <button>
          {isMobileNavOpen ? (
            <Image
              src='/close-outline.svg'
              width={30}
              height={30}
              alt='close'
            />
          ) : (
            <Image src='/menu-outline.svg' alt='menu' width={30} height={30} />
          )}
        </button>
      </div>
      <nav>
        <ul className={isMobileNavOpen ? "links-ul show" : "links-ul"}>
          <li>
            <Link href='#solutions'>Solutions</Link>
          </li>
          <li>
            <Link href='#about'>About</Link>
          </li>
          <li>
            <Link href='#services'>Services</Link>
          </li>
          <li>
            <Link href='#contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
