import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Link from 'next/link'

const OldSection = ({ moviesList }) => {
    return (
        <section className='w-full h-auto flex justify-center items-center mt-5'>
            <div className='w-full h-full lg:w-11/12 xl:w-[60%] flex justify-center items-center'>
                <Carousel className='w-full'>
                    <CarouselContent className='flex gap-2'>
                        {moviesList.map((item, index) => (
                            <CarouselItem key={index} className="basis-1/2 lg:basis-1/4 hover:shadow-md hover:border cursor-pointer"><Link href={'/movies/films/' + item.id}><Image className='hover:shadow-md' src={'https://image.tmdb.org/t/p/w500' + item.poster_path} alt={item.title} width={400} height={400} /></Link></CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='hidden lg:flex justify-center items-center' />
                    <CarouselNext className='hidden lg:flex justify-center items-center' />
                </Carousel>

            </div>
        </section>
    )
}

export default OldSection