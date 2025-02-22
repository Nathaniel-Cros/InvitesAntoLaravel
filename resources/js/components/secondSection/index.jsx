import React from 'react'
import ImageGallery from 'react-image-gallery'
import ScrollReveal from '@/components/ScrollReveal'

import First from '@/assets/images/TimeLine/first.jpeg'
import Second from '@/assets/images/TimeLine/second.jpeg'
import Third from '@/assets/images/TimeLine/third.jpeg'
import Fourth from '@/assets/images/TimeLine/fourth.jpeg'
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
    ];
    return (
        <>
            <section id='section-linetime' className='flex flex-col min-h-screen justify-center items-center gap-y-4 pt-20 pb-10 bg-[#c3b491]'>
                <ScrollReveal classNames='flex flex-col gap-y-3 items-center'>
                    <h2 className='text-6xl font-Carattere text-center text-[#010e30ff] pr-2 pl-2'>Mi galería</h2>
                    <span className='text-2xl font-Alice text-center'>Cada foto refleja la alegría y emoción de este momento tan especial en la vida de Antonella. ¡Disfrútalas!</span>
                </ScrollReveal>
                <ScrollReveal classNames='flex flex-col items-center'>
                    <ImageGallery items={images} loading='lazy' lazyLoad showPlayButton={false} showThumbnails={false} />
                </ScrollReveal>
            </section>
        </>
    )
}
export default SecondSectionComponent
