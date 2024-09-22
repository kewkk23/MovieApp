import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LanguageSection = () => {
    const filmsLanguage = [
        {
            id: 1,
            name: 'English',
            path: '/movies/categories/lang/england',
            image: '/england.png'
        },
        {
            id: 2,
            name: 'Germany',
            path: '/movies/categories/lang/germany',
            image: '/germany.png'
        },
        {
            id: 3,
            name: 'Polish',
            path: '/movies/categories/lang/polish',
            image: '/poland.png'
        }
    ]
    return (
        <section className='w-full h-auto flex mt-5 justify-center items-center'>
            <div className='w-full p-4 lg:w-11/12 xl:w-[60%] flex justify-center items-center'>
                <div className='flex flex-col lg:flex-row justify-between w-full h-full items-center flex-wrap gap-5 lg:gap-0'>
                    {filmsLanguage.map((item) => (
                        <Link className='w-full lg:w-1/4' href={item.path}><div key={item.id} className='bg-transparent flex flex-col justify-evenly items-center w-full p-3 border-2 border-purple-900 shadow-purple-900  shadow-lg h-[300px] lg:w-full rounded-xl hover:border-4 hover:scale-105 cursor-pointer transition-all ease-in-out'>
                            <div>
                                <Image src={item.image} alt={item.name} width={100} height={100} />
                            </div>
                            <h2 className='text-center text-2xl font-bold'>{item.name}</h2>
                        </div></Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LanguageSection