'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { UserButton, useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
const Navbar = () => {
    const { user } = useUser()
    return (
        <header className='w-full h-[80px] shadow-md shadow-primary flex justify-center items-center p-3 md:p-0'>
            <nav className='flex w-full lg:w-11/12 xl:w-[70%] justify-between items-center h-full'>
                <div>
                    <Link href='/'><Image src='/logo.svg' alt='logo' width={200} height={80} /></Link>
                </div>
                <div>
                    {user ? (<div className='flex gap-2'><Link href='/movies'><Button className='rounded-xl hover:bg-white hover:text-black transition-all ease-in-out' variant='outline'>Movies</Button></Link><UserButton /></div>) : (<Link href='/sign-in'><Button className='rounded-xl w-[100px]'>Sign in</Button></Link>)}
                </div>
            </nav>
        </header>
    )
}

export default Navbar