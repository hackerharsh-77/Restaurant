"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  //temp
  const user = false;
  return (
    <div>
      {menuOpen ? (
        <Image
          src="/close.png"
          alt="menu"
          width={20}
          height={20}
          onClick={toggleMenu}
        />
      ) : (
        <Image
          src="/open.png"
          alt="menu"
          width={20}
          height={20}
          onClick={toggleMenu}
        />
      )}
     {menuOpen && (
        <div className="bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] w-full flex flex-col gap-8 items-center justify-center text-3xl z-10">
        {links.map((item) => (
           <Link href={item.url} key={item.id} onClick={toggleMenu}>{item.title}</Link>
         ))}
           {user ? (
               <Link href="/order" onClick={toggleMenu}>Orders</Link>
           ) : (
               <Link href="/login" onClick={toggleMenu}>Login</Link>
           )}
           <Link href="/cart" onClick={toggleMenu}>
               <CartIcon />
           </Link>
        </div>
     )}
    </div>
  );
}

export default Menu;
