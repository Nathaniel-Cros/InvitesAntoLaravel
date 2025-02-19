import React from 'react'
import LogoAnto from '@/assets/images/Open.webp'

const LoaderComponent = () => {
    return (
        <div className='flex w-screen h-screen items-center justify-center absolute bg-[#dabb85ff]'>
            <img src={LogoAnto} className='coin-rotation rounded-full w-40' alt="Anto"/>
        </div>
    )
}

export default LoaderComponent
