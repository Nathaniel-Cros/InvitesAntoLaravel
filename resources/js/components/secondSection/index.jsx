import React from 'react'
import ImageGallery from "react-image-gallery";

import First from '@/assets/images/TimeLine/first.jpeg'
import Second from '@/assets/images/TimeLine/second.jpeg'
import Third from '@/assets/images/TimeLine/third.jpeg'
import Fourth from '@/assets/images/TimeLine/fourth.jpeg'
import Fifth from '@/assets/images/TimeLine/fifth.jpeg'
import Sixth from '@/assets/images/TimeLine/sixth.jpeg'
import Seventh from '@/assets/images/TimeLine/seventh.jpeg'
import Eigth from '@/assets/images/TimeLine/eigth.jpeg'
import '@/styles/secondSection/global.scss'

const SecondSectionComponent = () => {
    const images = [
        {
            original: First,
            thumbnail: First,
        },
        {
            original: Second,
            thumbnail: Second,
        },
        {
            original: Third,
            thumbnail: Third,
        },
        {
            original: Fourth,
            thumbnail: Fourth,
        },
        {
            original: Fifth,
            thumbnail: Fifth,
        },
        {
            original: Sixth,
            thumbnail: Sixth,
        },
        {
            original: Seventh,
            thumbnail: Seventh,
        },
        {
            original: Eigth,
            thumbnail: Eigth,
        },
    ];
    return (
        <>
            <section id='section-linetime' className='flex flex-col min-h-screen justify-center items-center gap-y-4 pt-20 pb-10 bg-[#c3b491]'>
                <h2 className='text-6xl font-Carattere text-center text-[#010e30ff] pr-2 pl-2'>Mi galería</h2>
                <ImageGallery items={images} loading='lazy' lazyLoad showPlayButton={false} showThumbnails={false} />
            </section>
        </>
    )
}
export default SecondSectionComponent
