'use client';

import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const Page = ({ params }) => {
    const [movie, setMovie] = useState({});
    const { id } = params;
    const searchParams = useSearchParams();
    const lang = searchParams.get('lang') || 'en-US';
    const ApiKey = process.env.NEXT_PUBLIC_MOVIEDB_KEY;
    const API = `https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=${lang}`;

    const getMovie = async () => {
        const resp = await fetch(API);
        const data = await resp.json();
        setMovie(data);
    };

    useEffect(() => {
        if (id) {
            getMovie();
        }
    }, [id, lang]);

    return (
        <section className='w-full h-auto relative'>
            <div className='w-full h-[150vh] lg:h-[60vh] xl:h-[80vh] md:h-screen relative'>
                {movie.backdrop_path && (
                    <Image
                        className='object-cover'
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        fill
                        alt={movie.title || 'Movie Image'}
                        priority
                    />
                )}
                <div className="absolute inset-0 flex items-center justify-start bg-black bg-opacity-50">
                    <div className='w-full lg:w-11/12 xl:w-[60%] flex flex-col gap-4 justify-center items-center'>
                        <div className='w-full p-3 lg:w-1/2'>
                            <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={200} height={100} alt='movie' />
                            <h2 className='text-white mt-5 text-3xl md:text-4xl text-left lg:text-5xl font-bold px-4'>
                                {movie.title}
                            </h2>
                            <p className='text-justify mt-2'>{movie.overview}</p>
                            <span className='flex gap-2 mt-2'><Star />{movie.vote_average?.toFixed(1)}</span>
                        </div>
                        <div className='w-full lg:w-1/2 p-3'>
                            <Button className='w-full rounded-xl'>Watch now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
