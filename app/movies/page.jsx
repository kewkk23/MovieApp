'use client'
import React, { useEffect, useState } from 'react'
import Hero from './_components/Hero'
import PopularitySection from './_components/PopularitySection'
import Hits from './_components/Hits'
import { Input } from '@/components/ui/input'
import Form from './_components/Form'
import HorrorsSection from './_components/OldSection'

const page = () => {
    const [moviesListPageOne, setMoviesListPageOne] = useState([])
    const [moviesListPageTwo, setMoviesListPageTwo] = useState([])
    const [moviesListOldSection, setMoviesListOldSection] = useState([])
    const ApiKey = process.env.NEXT_PUBLIC_MOVIEDB_KEY
    const getMoviesPageOne = async () => {
        const API = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&page=1`
        await fetch(API).then(resp => resp.json())
            .then(resp => {
                setMoviesListPageOne(resp.results);
            })
    }
    const getMoviesPageTwo = async () => {
        const API = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&page=2`;
        await fetch(API)
            .then(resp => resp.json())
            .then(data => {
                setMoviesListPageTwo(data.results)
            })
            .catch(error => console.error('Error fetching data:', error));
    };
    const getHorrorMovies = async () => {
        const API = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&year=1990`;
        await fetch(API)
            .then(resp => resp.json())
            .then(data => {
                setMoviesListOldSection(data.results);
            })
            .catch(error => console.error('Error fetching data:', error));
    };
    useEffect(() => {
        getMoviesPageOne()
        getMoviesPageTwo()
        getHorrorMovies()
    }, [])
    return (
        <main>
            <Hero moviesList={moviesListPageOne} />
            <h1 className='text-4xl font-bold text-center mt-2'>News</h1>
            <PopularitySection moviesList={moviesListPageOne} />
            <h1 className='mt-2 text-center font-bold text-4xl'>Emotionals</h1>
            <Hits moviesList={moviesListPageTwo} />
            <h1 className='text-4xl font-bold text-center mt-2'>Old films</h1>
            <HorrorsSection moviesList={moviesListOldSection} />
            <Form />
        </main>
    )
}

export default page