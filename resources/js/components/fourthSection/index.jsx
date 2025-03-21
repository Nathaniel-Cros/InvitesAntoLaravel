import React from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import BG from '@/assets/video/bg.mp4'

const fourthSectionComponent = () => {
    return (
        <>
            <section className='gap-y-5 w-full flex flex-col justify-center items-center bg-[#010310]'>
                <video src={BG} className='w-full max-h-screen z-0' autoPlay loop muted playsInline/>
                <ScrollReveal classNames='gap-y-5 w-full flex flex-col justify-center items-center absolute text-[#b78f5f]'>
                    <span className='text-7xl font-Carattere z-10'>El gran día</span>
                    <span className='text-4xl ml-24 font-Carattere z-10'>Sábado</span>
                    <span className='text-9xl font-FleurDeLeah z-10 animate-pulse w-[9rem]'>19</span>
                    <span className='text-3xl mr-24 font-Carattere z-10'>de Julio</span>
                    <span className='text-3xl ml-14 mt-[-2.5rem] font-Carattere z-10'>2025</span>
                    <span className='text-3xl mt-[-1.5rem] font-Carattere z-10'>7:00 p.m.</span>
                </ScrollReveal>
            </section>
        </>
    )
}

export default fourthSectionComponent
