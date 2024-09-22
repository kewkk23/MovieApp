'use client'
import { Book, Heart, Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'
const Navbar = () => {
    const pathname = usePathname()
    const Menu = [
        {
            id: 1,
            name: 'Home',
            icon: <Home />,
            path: '/movies'
        },
        {
            id: 2,
            name: 'Categories',
            icon: <Book />,
            path: '/movies/categories'
        },
    ]
    return (
        <header className='w-full shadow-md shadow-primary h-[80px] flex justify-center items-center'>
            <nav className='flex justify-between w-full lg:w-11/12 xl:w-[70%] h-full items-center'>
                <div className='p-3 lg:p-0'>
                    <Link href='/movies'><Image src='/logo.svg' alt='logo' width={200} height={80} /></Link>
                </div>
                <div className='flex gap-2 justify-center items-center p-2'>
                    {Menu.map((item) => (
                        <div key={item.id} className='flex justify-center items-center'>
                            <Link href={item.path}><div className={`flex p-3 gap-3 hover:underline transition-all ease-in-out ${item.path == pathname ? 'underline font-bold' : ''}`}>
                                <p className='hidden md:block'>{item.name}</p>
                                <p className={`border p-2 rounded-full hover:bg-white hover:text-black md:hover:bg-transparent transition-all ease-in-out md:hover:text-white md:border-none md:p-0 ${item.path == pathname ? 'bg-white text-black md:text-white md:bg-transparent' : ''}`}>{item.icon}</p>
                            </div></Link>
                        </div>
                    ))}
                    <UserButton />
                </div>
            </nav>
        </header>
    )
}

export default Navbar