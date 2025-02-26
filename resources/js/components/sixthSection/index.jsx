import React from 'react'
import Typed from 'typed.js'
import ScrollReveal from '@/components/ScrollReveal'
import TopPergamino from '@/assets/images/Top_pergamino.png'

import '@/styles/sixthSection/global.scss'

const SixthSection = () => {
    try {
        const secctionsToEffects = [
            {
                type: 'h2',
                className: 'text-6xl font-Carattere text-center text-[#010e30ff]',
                text: 'Programa',
                typeSpeed: 300,
                loop: false,
                showCursor: false,
                ref: React.useRef(null)
            },
            {
                type: 'span',
                className: 'text-left font-Cormorant text-xl md:text-2xl',
                text: '6:00 - 7:00 pm - Recepción',
                typeSpeed: 300,
                loop: false,
                showCursor: false,
                ref: React.useRef(null)
            },
            {
                type: 'span',
                className: 'text-left font-Cormorant text-xl md:text-2xl',
                text: '7:20 - 7:40 pm - Vals',
                typeSpeed: 300,
                loop: false,
                showCursor: false,
                ref: React.useRef(null)
            },
            {
                type: 'span',
                className: 'text-left font-Cormorant text-xl md:text-2xl',
                text: '7:40 - 7:50 pm - Brindis',
                typeSpeed: 300,
                loop: false,
                showCursor: false,
                ref: React.useRef(null)
            },
            {
                type: 'span',
                className: 'text-left font-Cormorant text-xl md:text-2xl',
                text: '8:00 - 8:30 pm - Sorpresas',
                typeSpeed: 300,
                loop: false,
                showCursor: false,
                ref: React.useRef(null)
            },
            {
                type: 'span',
                className: 'text-left font-Cormorant text-xl md:text-2xl',
                text: '8:30 - 9:00 pm - Cena',
                typeSpeed: 300,
                loop: false,
                showCursor: false,
                ref: React.useRef(null)
            },
            {
                type: 'span',
                className: 'text-left font-Cormorant text-xl md:text-2xl',
                text: '9:00 pm - Musica DJ',
                typeSpeed: 300,
                loop: false,
                showCursor: false,
                ref: React.useRef(null)
            },
            {
                type: 'span',
                className: 'text-left font-Cormorant text-xl md:text-2xl',
                text: '9:30 pm - Apertura de mesa de dulces',
                typeSpeed: 300,
                loop: false,
                showCursor: false,
                ref: React.useRef(null)
            },
            {
                type: 'span',
                className: 'text-left font-Cormorant text-xl md:text-2xl',
                text: '10:00 pm - Orquesta',
                typeSpeed: 300,
                loop: false,
                showCursor: false,
                ref: React.useRef(null)
            },
            {
                type: 'span',
                className: 'text-left font-Cormorant text-xl md:text-2xl',
                text: '12:00 pm - Canto cumpleaños',
                typeSpeed: 300,
                loop: false,
                showCursor: false,
                ref: React.useRef(null)
            },
            {
                type: 'span',
                className: 'text-left font-Cormorant text-xl md:text-2xl',
                text: '12:10 pm - Hora loca',
                typeSpeed: 300,
                loop: false,
                showCursor: false,
                ref: React.useRef(null)
            }
        ]
        const [arrayComponents, setArrayComponents] = React.useState([])
        React.useEffect(() => {
            const arrayTyped = secctionsToEffects.map(({type: As, ref, className}, index) => (
                <As key={`programa-${index}`} ref={ref} className={className}></As>
            ))

            setArrayComponents(arrayTyped)

            // return () => {
            //     // Destroy Typed instance during cleanup to stop animation
            //     arrayTyped.map(sectionToEffect => sectionToEffect.type.destroy())
            // };
        }, []);

        React.useEffect(() => {
            if(arrayComponents.length > 0) {
                const typesJS = secctionsToEffects.map( ({ref, loop, typeSpeed, text, showCursor}, index) => {
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
        },[arrayComponents])

        return (
            <section id='section-sixth'
                     className='flex flex-col min-h-screen justify-center items-center pt-20 pb-10 bg-[#c3b491]'>
                <img src={TopPergamino} className='w-9/12' alt="----"/>

                <ScrollReveal id="section-pergamino"
                              classNames='flex flex-col w-[90%] md:w-[48%] pl-6 md:pl-12 pt-6 pb-6'>
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
