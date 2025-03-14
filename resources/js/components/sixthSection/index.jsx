import React from 'react'
import Typed from 'typed.js'
import ScrollReveal from '@/components/ScrollReveal'
import TopPergamino from '@/assets/images/Top_pergamino.png'
import {ProgramData} from '@/constants'

import '@/styles/sixthSection/global.scss'

const SixthSection = () => {
    try {
        const [intersecting, setIntersecting] = React.useState(false)
        const ReferenceAllSection = React.useRef(null)
        const sectionsToEffects = ProgramData.map(program => ({
            ...program,
            ref: React.useRef(null)
        }))
        const [arrayComponents, setArrayComponents] = React.useState([])
        React.useEffect(() => {
            const arrayTyped = sectionsToEffects.map(({type: As, ref, className}, index) => (
                <As key={`programa-${index}`} ref={ref} className={className}></As>
            ))

            setArrayComponents(arrayTyped)
        }, []);

        React.useEffect(() => {
            // Create an IntersectionObserver to observe the ref's visibility
            const observer = new IntersectionObserver(([entry]) =>
                setIntersecting(entry.isIntersecting)
            );

            // Start observing the element
            observer.observe(ReferenceAllSection.current);

            // Cleanup the observer when the component unmounts or ref changes
            return () => {
                observer.disconnect();
            };
        },[ReferenceAllSection])

        React.useEffect(() => {
            if(intersecting && arrayComponents.length > 0) {
                const typesJS = sectionsToEffects.map( ({ref, loop, typeSpeed, text, showCursor}, index) => {
                    return new Typed(ref.current, {
                        strings: [text],
                        typeSpeed,
                        loop,
                        showCursor,
                        startDelay: 1000 * index,
                    })
                })

                return () => {
                    typesJS.forEach(typed => typed.destroy())
                }
            }
        },[intersecting])

        return (
            <section
                ref={ReferenceAllSection}
                id='section-sixth'
                className='flex flex-col min-h-screen justify-center items-center pt-20 pb-10 bg-[#c3b491]'
            >
                <img src={TopPergamino} className='w-9/12' alt="----"/>

                <ScrollReveal id="section-pergamino"
                              classNames='flex flex-col w-[63%] md:w-[54%] pl-6 md:pl-12 pt-6 pb-6'>
                    {arrayComponents.map((Component, index) => (Component))}
                </ScrollReveal>
                <img src={TopPergamino} className='w-9/12 rotate-180' alt="----"/>

            </section>
        )
    } catch (e) {
        console.error('Error in SixthSection component:', e)
        return null
    }
}

export default SixthSection
