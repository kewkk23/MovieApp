'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {
    const [movies, setMovies] = useState([])
    const { id: param } = params
    const ApiKey = process.env.NEXT_PUBLIC_MOVIEDB_KEY;
    const API = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&year=${param}`;
    const getMovies = async () => {
        await fetch(API).then(resp => resp.json()).then(resp => {
            setMovies(resp.results)
        })
    }
    useEffect(() => {
        getMovies()
    }, [])
    return (
        <section className='w-full h-auto flex my-5 justify-center items-center'>
            <div className='w-full lg:w-11/12 p-3 xl:w-[60%] flex flex-wrap justify-evenly items-center gap-3'>
                {movies.map((item, index) => (
                    <Link
                        key={index}
                        className='bg-transparent w-full lg:w-1/4 h-[300px] flex flex-col shadow-lg shadow-primary justify-evenly items-center rounded-xl border-2 border-primary p-3 cursor-pointer hover:scale-105 transition-all ease-in-out'
                        href={`/movies/films/${item.id}`}
                    >
                        <Image src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} width={100} height={100} alt='Movie Poster' />
                        <h2 className='font-bold text-2xl text-center'>{item.title}</h2>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default page