import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = ({ moviesList }) => {
    return (
        <section className='w-full mt-4 h-auto flex justify-center items-center'>
            <div className='w-full lg:w-11/12 xl:w-[60%] rounded-xl bg-primary h-full'>
                <div className='flex w-full justify-evenly items-center h-full flex-col md:flex-row '>
                    <div className=' w-full md:w-1/2 flex justify-evenly p-3'>
                        <Image src={'https://image.tmdb.org/t/p/w500' + moviesList[0]?.poster_path} width={200} height={200} alt='movie' />
                    </div>
                    <div className=' w-full md:w-1/2 justify-center flex flex-col p-6 gap-3 items-center md:items-end'>
                        <h2 className='font-bold text-3xl text-center'>{moviesList[0]?.title}</h2>
                        <h2 className='text-gray-200 text-justify lg:text-right'>{moviesList[0]?.overview}</h2>
                        <h2 className='flex gap-3'><Star />{moviesList[0]?.vote_average.toFixed(2)}</h2>
                        <Link className='w-full lg:w-1/2' href={'/movies/films/' + moviesList[0]?.id}><Button className='bg-black w-full  rounded-xl hover:bg-black'>Watch now</Button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero