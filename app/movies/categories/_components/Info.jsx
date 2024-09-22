'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { toast } from "sonner"
import { useUser } from '@clerk/nextjs'

const Info = () => {
    const { user } = useUser()
    const fullName = user?.fullName
    const [value, setValue] = useState('')
    const checkInput = () => {
        if (value == '') {
            toast('The idea field cannot be empty!')
        } else {
            if (user) {
                toast(`Thank you, ${fullName}, for idea!`)
            } else {
                toast('Thank you, for idea!')
            }
        }
    }
    const inputValue = (e) => {
        setValue(e.target.value)
    }
    return (
        <section className='w-full mt-5 h-auto lg:h-[20vh] flex justify-center items-center'>
            <div className='w-full lg:w-11/12 xl:w-[60%] rounded-xl bg-primary h-full p-3'>
                <div className='flex flex-col justify-center items-center w-full h-full gap-4'>
                    <div>
                        <h2 className='font-bold text-xl lg:text-3xl text-center'>Do you have an idea for a new category? Let us know!</h2>
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col justify-center items-center gap-3'>
                        <Input onChange={inputValue} value={value} className='rounded-xl ' placeholder='Write idea' />
                        <Button onClick={checkInput} className='w-1/2 rounded-xl hover:bg-white hover:text-black transition-all ease-in-out' variant='outline'>Send</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info