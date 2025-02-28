import React from 'react'
import ScrollReveal from '@/components/ScrollReveal'

import '@/styles/sevenSection/global.scss'

const SeventhSection = () => {
    const iframe = {
        __html:`<iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.8782888647715!2d-63.8416141242304!3d10.972558455543886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c318eeb204dcae3%3A0xb75a00a1e17d2f4d!2sHotel%20Puerta%20del%20Sol%20Porlamar!5e0!3m2!1sen!2smx!4v1740533853000!5m2!1sen!2smx"
                    class="w-[100%] h-[100%]" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>`
        }
    return (
        <>
            <section id="map-section" className='flex flex-col w-screen h-screen justify-center items-center gap-y-8 p-8 md:p-28 pt-8 pb-8'>
                <ScrollReveal classNames='flex flex-col w-[100%] h-[100%] justify-center items-center gap-y-8'>
                    <h2 className='font-Carattere text-4xl md:text-6xl text-center text-[#c3b491]'>¡Cerca o lejos, tu presencia es lo que importa!</h2>
                    <span className='font-Cormorant text-xl md:text-4xl text-center text-[#c3b491]'>Nos emociona compartir este día con quienes han sido parte importante en la vida de Antonella.</span>
                    <div className='w-[100%] h-[50%]' dangerouslySetInnerHTML={iframe}/>
                    <span className='font-Carattere text-4xl md:text-6xl text-center text-[#c3b491]'>Por cuestiones de organización, contamos con un espacio reservado para cada invitado especial.</span>
                </ScrollReveal>
            </section>
        </>
    )
}

export default SeventhSection
