import React from 'react'
import BGVideo from '@/assets/video/bg-esc.mp4'

const FirstSectionComponent = () => {
    return (
        <section className='flex flex-col w-screen h-screen items-center justify-center bg-[#010310]'>
            <video src={BGVideo} className='w-full h-full z-0' autoPlay loop playsInline/>
            <h2 className='z-10 absolute top-1/2 animate-pulse m-auto text-3xl font-Alice'>Mis XV</h2>
            <h1 className='z-10 absolute top-1/2 animate-pulse m-auto mt-6 text-6xl font-Arizona'>Antonella Sofia</h1>
        </section>
    )
}

export default FirstSectionComponent