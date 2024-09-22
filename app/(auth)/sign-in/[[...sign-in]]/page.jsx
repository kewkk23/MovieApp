import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className='flex justify-center items-center h-[81.5vh]'>
            <SignIn />
        </div>
    )
}