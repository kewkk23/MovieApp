'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { toast } from "sonner"
import { useUser } from '@clerk/nextjs'
const NewsLetter = () => {
    const { user } = useUser()
    const fullName = user?.fullName
    const [value, setValue] = useState('')
    const checkInput = () => {
        if (value == '') {
            toast('The email field cannot be empty!')
        } else {
            if (user) {
                toast(`Thank you, ${fullName}, for subscribing to the newsletter!`)
            } else {
                toast('Thank you for subscribing to the newsletter!')
            }
        }
    }
    const inputValue = (e) => {
        setValue(e.target.value)
    }
    return (
        <section className='mt-5 w-full h-auto flex justify-center items-center'>
            <div className='w-full lg:w-11/12 xl:w-[60%] h-auto bg-primary p-10 rounded-xl'>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <h2 className='text-3xl font-bold text-center'>Stay Updated - Sign Up for Our Newsletter!</h2>
                    <Input value={value} onChange={inputValue} className='w-full lg:w-1/2 rounded-xl' placeholder='E-mail' />
                    <Button onClick={checkInput} variant='outline' className='w-full lg:w-1/3 hover:bg-white hover:text-black rounded-xl transition-all ease-in-out'>Enroll</Button>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter