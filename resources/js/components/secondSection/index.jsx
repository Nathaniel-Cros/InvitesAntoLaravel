import React from 'react'
import ImageGallery from 'react-image-gallery'
import ScrollReveal from '@/components/ScrollReveal'

import First from '@/assets/images/TimeLine/first.jpeg'
import Second from '@/assets/images/TimeLine/second.jpeg'
import Third from '@/assets/images/TimeLine/third.jpeg'
import Fourth from '@/assets/images/TimeLine/fourth.jpeg'
import Anto1 from '@/assets/images/TimeLine/Anto1.webp'
import Anto2 from '@/assets/images/TimeLine/Anto2.webp'
import Anto3 from '@/assets/images/TimeLine/Anto3.webp'
import Anto4 from '@/assets/images/TimeLine/Anto4.webp'
import Anto5 from '@/assets/images/TimeLine/Anto5.webp'
import Anto6 from '@/assets/images/TimeLine/Anto7.webp'
import Anto7 from '@/assets/images/TimeLine/Anto8.webp'
import Anto8 from '@/assets/images/TimeLine/Anto8.webp'
import Anto9 from '@/assets/images/TimeLine/Anto9.webp'
import Anto10 from '@/assets/images/TimeLine/Anto10.webp'
import '@/styles/secondSection/global.scss'

const SecondSectionComponent = () => {
    const images = [
        {
            original: First,
            thumbnail: First,
        },
        {
            original: Third,
            thumbnail: Third,
        },
        {
            original: Second,
            thumbnail: Second,
        },
        {
            original: Fourth,
            thumbnail: Fourth,
        },
        {
            original: Anto1,
            thumbnail: Anto1,
        },
        {
            original: Anto2,
            thumbnail: Anto2,
        },
        {
            original: Anto3,
            thumbnail: Anto3,
        },
        {
            original: Anto4,
            thumbnail: Anto4,
        },
        {
            original: Anto5,
            thumbnail: Anto5,
        },
        {
            original: Anto6,
            thumbnail: Anto6,
        },
        {
            original: Anto7,
            thumbnail: Anto7,
        },
        {
            original: Anto8,
            thumbnail: Anto8,
        },
        {
            original: Anto9,
            thumbnail: Anto9,
        },
        {
            original: Anto10,
            thumbnail: Anto10,
        },
    ];
    return (
        <>
            <section id='section-linetime' className='flex flex-col min-h-screen justify-center items-center gap-y-4 pt-20 pb-10 bg-[#c3b491]'>
                <ScrollReveal classNames='flex flex-col gap-y-3 items-center'>
                    <h2 className='text-4xl md:text-6xl font-Carattere text-center text-[#010e30ff] pr-2 pl-2'>Un reflejo de la emoción y la magia de este gran día...</h2>
                    <span className='text-2xl font-Cormorant text-center'>Cada foto refleja la alegría y emoción de este momento tan especial en la vida de Antonella. ¡Disfrútalas!</span>
                </ScrollReveal>
                <ScrollReveal classNames='flex flex-col items-center'>
                    <ImageGallery items={images} loading='lazy' lazyLoad showPlayButton={false} showThumbnails={false} />
                </ScrollReveal>
            </section>
        </>
    )
}
export default SecondSectionComponent
