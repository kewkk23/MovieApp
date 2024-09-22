import React from 'react'
import LanguageSection from './_components/LanguageSection'
import OlderSection from './_components/OlderSection'
import Info from './_components/Info'

const page = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-2'>Language</h1>
            <LanguageSection />
            <h1 className='text-4xl font-bold text-center mt-2'>Old films</h1>
            <OlderSection />
            <Info />
        </div>
    )
}

export default page