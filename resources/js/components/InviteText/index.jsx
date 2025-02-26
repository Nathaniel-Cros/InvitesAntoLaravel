import React from 'react'
import Photo from '@/assets/images/TimeLine/second.jpeg'
import ScrollReveal from '@/components/ScrollReveal'
import '@/styles/InviteText/global.scss'

const InviteText = () => {

    return (
        <section id='invite-text' className='w-screen flex flex-col justify-center items-center pt-8'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className="text-center text-6xl font-Carattere text-[#c3b491]">La magia de esta noche...</h1>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <ScrollReveal classNames='w-11/12 md:w-5/12 p-7 text-justify'>
                    <span className='text-one text-2xl md:text-4xl font-Cormorant text-[#c3b491]'>
                        Algunas noches son simplemente inolvidables, y esta será una de ellas.
                        <br/>
                        <span className='text-3xl md:text-5xl pl-3'>Antonella</span> inicia un nuevo capítulo en su vida, y no sería lo mismo sin ti. Eres parte de esta historia, y juntos haremos de este momento algo mágico.
                    </span>
                </ScrollReveal>
                <ScrollReveal classNames='w-11/12 md:w-5/12 p-7'>
                    <img className='max-h-[800px] rounded-xl' src={Photo} alt="photo"/>
                </ScrollReveal>
            </div>
        </section>
    )
}

export default InviteText
