'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const FilmsSection = () => {
    const [movie, setMovie] = useState([])
    const ApiKey = process.env.NEXT_PUBLIC_MOVIEDB_KEY
    const getMovies = async () => {
        const API = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&page=3`
        await fetch(API).then(resp => resp.json())
            .then(resp => {
                setMovie(resp.results);
            })
    }
    useEffect(() => {
        getMovies()
    }, [])
    return (
        <section className='w-full h-auto flex justify-center items-center mt-5'>
            <div className='w-full h-full xl:w-[70%] flex justify-center items-center'>
                <Carousel plugins={[
                    Autoplay({
                        delay: 1000,
                    }),
                ]} className='w-full'>
                    <CarouselContent className='flex gap-2'>
                        {movie.map((item, index) => (
                            <CarouselItem key={index} className="basis-1/2 lg:basis-1/4 "><Image className='hover:shadow-md' src={'https://image.tmdb.org/t/p/w500' + item.poster_path} alt={item.title} width={400} height={400} /></CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

            </div>
        </section>
    )
}

export default FilmsSection