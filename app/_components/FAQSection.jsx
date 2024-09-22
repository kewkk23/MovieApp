import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQSection = () => {
    return (
        <section className='w-full h-auto flex justify-center items-center'>
            <Accordion className='w-full p-3 lg:w-11/12 xl:w-[60%]' type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className='text-left'>1. Is using your site completely free?</AccordionTrigger>
                    <AccordionContent>
                        Yes, all movies available on our platform are completely free to watch. There are no hidden fees or subscriptions required.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className='text-left'>2. Do I need to create an account to watch movies?</AccordionTrigger>
                    <AccordionContent>
                        Yes, you must create a free account to access our movies. Signing up allows us to enhance your experience by offering personalized recommendations and keeping track of your watchlist.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className='text-left'>3. How can I watch a movie?</AccordionTrigger>
                    <AccordionContent>
                        After creating an account, simply browse through our collection, select the movie you want, and click "Play" to start streaming instantly.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className='text-left'>4. Is the content legal to watch?</AccordionTrigger>
                    <AccordionContent>
                        Yes, all the movies we provide are fully licensed and legal to stream. We partner with rights holders to ensure you have access to content legally.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className='text-left'>5. Do you offer HD quality streaming?</AccordionTrigger>
                    <AccordionContent>
                        Yes, we offer movies in various resolutions, including HD, depending on the availability of the content.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger className='text-left'>6. Can I download movies for offline viewing?</AccordionTrigger>
                    <AccordionContent>
                        Currently, we do not support downloading movies for offline viewing. All content is available for streaming online only.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </section>
    )
}

export default FAQSection