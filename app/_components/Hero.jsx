import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section className='w-full mt-5 h-auto flex justify-center items-center'>
            <div className='w-full lg:w-11/12 xl:w-[60%] flex flex-col justify-center items-center gap-5'>
                <div className='w-full flex flex-col items-center'>
                    <h1 className='text-5xl text-purple-500 text-center font-bold'>Welcome in Movie App</h1>
                    <h2 className='text-3xl text-center font-bold'>Where you can watch <span className='text-primary'>all the movies</span> in the world</h2>
                </div>
                <div className='w-full flex justify-center'>
                    <Image className='border-2 border-primary rounded-xl shadow-xl shadow-primary' src='/mockup.jpg' width={600} alt='mockup' height={400} />
                </div>
            </div>
        </section>
    )
}

export default Hero