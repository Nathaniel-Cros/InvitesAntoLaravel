import React from 'react'
import ScrollReveal from '@/components/ScrollReveal'

import '@/styles/thirdSecction/global.scss'

const ThirdSectionComponent = () => {
    const eventName ="Faltan"
    const eventDate= "2025-07-26:18:30:00"
    const [timeRemaining, setTimeRemaining] = React.useState(0);

    const formatDate = (date) => {
        const options = { month: "long", day: "numeric", year: "numeric" };
        return new Date(date).toLocaleDateString("en-US", options);
    };

    const formatTime = (time) => {
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        return (
            <>
                <div className='rounded-full flex flex-col items-center justify-center bg-[#c3b491] min-w-20 min-h-20 md:min-w-28 md:min-h-28'>
                    <span className='hours-time b text-3xl md:text-5xl font-FleurDeLeah'>{days.toString().padStart(2, "0")}</span>
                    <span className='text-xs md:text-lg font-FleurDeLeah'>Días</span>
                </div>
                <div className='rounded-full flex flex-col items-center justify-center bg-[#c3b491] min-w-20 min-h-20 md:min-w-28 md:min-h-28'>
                    <span className='hours-time b text-3xl md:text-5xl font-FleurDeLeah'>{hours.toString().padStart(2, "0")} </span>
                    <span className='text-xs md:text-lg font-FleurDeLeah'>Horas</span>
                </div>
                <div className='rounded-full flex flex-col items-center justify-center bg-[#c3b491] min-w-20 min-h-20 md:min-w-28 md:min-h-28'>
                    <span className='minutes-time b text-3xl md:text-5xl font-FleurDeLeah'>{minutes.toString().padStart(2, "0")} </span>
                    <span className='text-xs md:text-lg font-FleurDeLeah'>Minutos</span>
                </div>
                <div className='rounded-full flex flex-col items-center justify-center bg-[#c3b491] min-w-20 min-h-20 md:min-w-28 md:min-h-28'>
                    <span className='seconds-time b text-3xl md:text-5xl font-FleurDeLeah'>{seconds.toString().padStart(2, "0")} </span>
                    <span className='text-xs md:text-lg font-FleurDeLeah'>Segundos</span>
                </div>
            </>
        )
    }

    React.useEffect(() => {
        if (eventDate) {
            const countdownInterval = setInterval(() => {
                const currentTime = new Date().getTime();
                const eventTime = new Date(eventDate).getTime();
                let remainingTime = eventTime - currentTime;

                if (remainingTime <= 0) {
                    remainingTime = 0;
                    clearInterval(countdownInterval);
                    console.log("..::Countdown complete!::..");
                }

                setTimeRemaining(remainingTime);
            }, 1000);

            return () => clearInterval(countdownInterval);
        }
    }, [eventDate, timeRemaining]);

    return (
        <>
            <section id='countdown-timer-container' className='flex flex-col justify-center items-center w-full min-h-[600px] gap-y-8'>
                <ScrollReveal>
                    <h2 className='text-7xl font-FleurDeLeah text-[#c3b491]'>{eventName}</h2>
                </ScrollReveal>
                <ScrollReveal classNames='flex flex-row justify-center items-center text-3xl gap-x-3'>
                    {formatTime(timeRemaining)}
                </ScrollReveal>
            </section>
        </>
    )
}

export default ThirdSectionComponent
