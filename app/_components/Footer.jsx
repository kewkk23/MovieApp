import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full p-3 h-auto flex mt-5 justify-center items-center'>
            <div className='flex w-full lg:w-11/12 xl:w-[70%] h-full flex-wrap justify-center gap-4 md:justify-between md:gap-0 items-center'>
                <div className='flex flex-col gap-2 items-center'>
                    <Image src='/logo.svg' width={150} height={150} alt='logo' />
                    <h1 className='font-bold text-2xl'>Movie app</h1>
                </div>
                <div className='flex flex-col gap-5'>
                    <Link className='p-3 border hover:bg-white hover:text-black transition-all ease-in-out' target='_blank' href='https://github.com/kewkk23'>Website powerd by Kewin Kulas</Link>
                    <Link className='p-3 border hover:bg-white hover:text-black transition-all ease-in-out' target='_blank' href='https://github.com/kewkk23'>Website powerd by Kewin Kulas</Link>
                    <Link className='p-3 border hover:bg-white hover:text-black transition-all ease-in-out' target='_blank' href='https://github.com/kewkk23'>Website powerd by Kewin Kulas</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer