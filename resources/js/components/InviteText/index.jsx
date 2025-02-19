import React from 'react'
import Photo from '@/assets/images/FrasePhoto.jpeg'
import ScrollReveal from '@/components/ScrollReveal'
import '@/styles/InviteText/global.scss'

const InviteText = () => {

    return (
        <section id='invite-text' className='w-screen flex flex-col md:flex-row justify-center items-center'>
            <ScrollReveal classNames='w-11/12 md:w-5/12 p-7'>
                <span className='text-one text-2xl md:text-7xl font-Carattere text-[#c3b491]'>
                    Algunas fechas son más que un número en el calendario; son un recuerdo para siempre.
                </span>
                <span className='text-2xl md:text-7xl font-Carattere text-[#c3b491]'>
                    Yo <span className='text-3xl md:text-8xl'>Luzyeisy del Valle Lara Avila</span> te invito a formar parte de esta noche inolvidable para mi hija <span className='text-3xl md:text-8xl'>Antonella.</span>
                </span>
            </ScrollReveal>
            <ScrollReveal classNames='w-11/12 md:w-5/12 p-7'>
                <img className='max-h-[800px] rounded-xl' src={Photo} alt="photo"/>
            </ScrollReveal>
        </section>
    )
}

export default InviteText
