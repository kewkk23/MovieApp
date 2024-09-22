import Link from 'next/link'
import React from 'react'

const OlderSection = () => {
    const Old = [
        {
            id: 1,
            name: 'to 1990 year',
            text: '1990',
            path: '/movies/categories/old/1990'
        },
        {
            id: 2,
            name: 'to 2000 year',
            text: '2000',
            path: '/movies/categories/old/2000'
        },
        {
            id: 3,
            name: 'to 2010 year',
            text: '2010',
            path: '/movies/categories/old/2010'
        },
    ]
    return (
        <section className='w-full h-auto flex mt-5 justify-center items-center'>
            <div className='w-full p-4 lg:w-11/12 xl:w-[60%] flex justify-center items-center'>
                <div className='flex flex-col lg:flex-row justify-between w-full h-full items-center flex-wrap gap-5 lg:gap-0'>
                    {Old.map((item) => (
                        <Link className='w-full lg:w-1/4' href={item.path}><div key={item.id} className='bg-transparent flex flex-col justify-evenly items-center w-full p-3 border-2 border-purple-900 shadow-purple-900  shadow-lg h-[300px] lg:w-full rounded-xl hover:border-4 hover:scale-105 cursor-pointer transition-all ease-in-out'>
                            <div>
                                <h1 className='font-extrabold text-4xl'>{item.text}</h1>
                            </div>
                            <h2 className='text-center text-2xl font-bold'>{item.name}</h2>
                        </div></Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OlderSection