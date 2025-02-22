import React from 'react'

const FirstSectionComponent = () => {
    return (
        <section className='flex flex-col w-screen h-screen items-center justify-center bg-[#010310]'>
            <video src="http://files.nathaniel-ruiz.com/bg-esc.mp4" className='w-full h-full z-0' autoPlay loop playsInline/>
        </section>
    )
}

export default FirstSectionComponent
