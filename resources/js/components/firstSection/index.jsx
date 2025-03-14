import React from 'react'
import {isMobile} from 'react-device-detect';


const FirstSectionComponent = () => {

    React.useEffect(() => {
        console.log('..:: Selection Mobile ::..', isMobile)
    },[isMobile])

    if(isMobile) {
        return (
            <section className='flex flex-col w-screen h-screen items-center justify-center bg-[#010310]'>
                <video src="https://files.nathaniel-ruiz.com/bg-mob.mp4" className='w-full h-full z-0' autoPlay loop playsInline/>
            </section>
        )
    }
    return (
        <section className='flex flex-col w-screen h-screen items-center justify-center bg-[#010310]'>
            <video src="https://files.nathaniel-ruiz.com/bg-desk.mp4" className='w-full h-full z-0' autoPlay loop playsInline/>
        </section>
    )
}

export default FirstSectionComponent
