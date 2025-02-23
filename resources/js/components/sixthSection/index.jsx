import React from 'react'
import TopPergamino from '@/assets/images/Top_pergamino.png'

import '@/styles/sixthSection/global.scss'

const SixthSection = () => {
    return(
        <section id='section-sixth' className='flex flex-col min-h-screen justify-center items-center pt-20 pb-10 bg-[#c3b491]'>
            <img src={TopPergamino} className='w-9/12' alt="----"/>
            <div id="section-pergamino" className='flex flex-col w-[90%] md:w-[48%] pl-6 md:pl-12 pt-6 pb-6'>
                <h2 className='text-6xl font-Carattere text-center text-[#010e30ff]'>Programa</h2>
                <span className='text-left font-Cormorant text-xl md:text-2xl'>6:00 - 7:00 pm - Recepción</span>
                <span className='text-left font-Cormorant text-xl md:text-2xl'>7:20 - 7:40 pm - Vals</span>
                <span className='text-left font-Cormorant text-xl md:text-2xl'>7:40 - 7:50 pm - Brindis</span>
                <span className='text-left font-Cormorant text-xl md:text-2xl'>8:00 - 8:30 pm - Sorpresas</span>
                <span className='text-left font-Cormorant text-xl md:text-2xl'>8:30 - 9:00 pm - Cena</span>
                <span className='text-left font-Cormorant text-xl md:text-2xl'>9:00 pm - Musica DJ</span>
                <span className='text-left font-Cormorant text-xl md:text-2xl'>9:30 pm - Apertura de mesa de dulces</span>
                <span className='text-left font-Cormorant text-xl md:text-2xl'>10:00 pm - Orquesta</span>
                <span className='text-left font-Cormorant text-xl md:text-2xl'>12:00 pm - Canto cumpleaños</span>
                <span className='text-left font-Cormorant text-xl md:text-2xl'>12:10 pm - Hora loca</span>
            </div>
            <img src={TopPergamino} className='w-9/12 rotate-180' alt="----"/>

        </section>
    )
}

export default SixthSection
