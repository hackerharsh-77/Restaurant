import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import CartIcon from './CartIcon';
import Image from 'next/image';

function Navbar() {
    const user = false;
  return (
    <div className='h-12 px-4 text-red-500 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>
        {/* LEFT LINKS */}
        <div className='hidden md:flex gap-4 uppercase flex-1'>
            <Link href="/home">Homepage</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/contact">Contact</Link>
        </div>
        <div className='text-xl md:font-bold flex-1 text-center'>
            <Link href="/">
                PIZZERIA
            </Link>
        </div>
        <div className='md:hidden'>
            <Menu />
        </div>
        {/* RIGHT LINKS  */}
        <div className='hidden md:flex gap-4 uppercase items-center flex-1 justify-end'>
            <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
                <Image src="/phone.png" alt="phone" width={20} height={20}/>
                <span>123 456 789</span>
            </div>
            {user ? (
                <Link href="/order">Orders</Link>
            ) : (
                <Link href="/login">Login</Link>
            )}
            <CartIcon />
        </div>
    </div>
  )
}

export default Navbar