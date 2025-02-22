import React from 'react'
import Play from '@/assets/images/play.png'
import Song from '@/assets/song/PERFECT.mp3'

const PlayerMedia = () => {
    const [play, setPlay] = React.useState(true)
    const reference = React.useRef(null)

    const handleClick = () => {
        const audio = reference.current
        if(play) {
            setPlay(!play)
            audio.pause()
        }
        else {
            setPlay(!play)
            audio.play()
        }
    }

    return (
        <>
            <button onClick={handleClick} className='fixed bottom-1 right-1 z-10'>
                <img src={Play} className='w-14' alt=">"/>
            </button>
            <audio id="music-reference" ref={reference} type="audio/mp3" src={Song} autoPlay loop/>
        </>
    )
}

export default PlayerMedia
