import React from 'react'
import InviteTop from '@/assets/images/sobre_1.png'
import InviteTopMobile from '@/assets/images/sobre_1_M.png'
import InviteBottom from '@/assets/images/sobre_2.png'
import InviteBottomMobile from '@/assets/images/sobre_2_M.png'
import useInviteStore from '@/store/inviteStore'
import LetterA from '@/assets/images/Open.webp'

const InviteComponent = () => {
    const openInvite = useInviteStore((state) => state.openInvite)
    const setOpenInvite = useInviteStore((state) => state.setOpenInvite)
    React.useEffect( () => {
        console.log('..:: Open invite ::..', openInvite)
    }, [openInvite])

    const OpenInvite = () => {
        console.log('..:: Open invite ::..')
        const btnOpen = document.querySelector('#btn-open');
        const inviteTopElement = document.querySelector('#InviteTop');
        const inviteBottomElement = document.querySelector('#InviteBottom');
        const familyName = document.querySelector('#family-name');

        if(btnOpen && inviteTopElement && inviteBottomElement && familyName){
            btnOpen.classList.add('invisible')
            inviteTopElement.classList.add('up-effect')
            inviteBottomElement.classList.add('down-effect')
            familyName.classList.add('animate-fade')
            setTimeout(() => {
                inviteTopElement.classList.add('invisible')
                inviteBottomElement.classList.add('invisible')
                familyName.classList.add('invisible')
                setOpenInvite(true)
            }, 3000)

        }
    }
    if(openInvite) return null

    return (
        <>
            <section
                className='flex flex-col w-screen h-screen justify-center content-center absolute left-0 top-0 z-0'>
                <span id='family-name' className='text-4xl md:text-6xl font-Romanesco bg-[#dabb85ff] rounded px-4 text-[#010e30ff] absolute top-[73%] left-[5%] md:top-[64%] md:left-[15%] z-50'>
                    Familia Lara Avila
                </span>
                <button id='btn-open'
                        className='h-[10%] md:h-[15%] w-[20%] md:w-[20%] flex justify-center items-center rounded-full z-50 m-auto'
                        onClick={OpenInvite}>
                    <img src={LetterA} className='h-full rounded-full animate-pulse' alt="Abreme"/>
                </button>

                <div className='absolute top-0 left-0 z-10 w-full m-auto justify-center content-center'>
                    <div id='InviteTop'
                         className='flex flex-col z-10 absolute top-0 left-0 m-auto w-full h-screen justify-center items-center'>
                        <img className='hidden md:block w-9/12 max-h-[500px] mt-[-100px] ml-[-40px]' src={InviteTop}
                             alt="invite top"/>
                        <img className='block md:hidden mt-[-50px]' src={InviteTopMobile} alt='invite top'/>
                    </div>
                    <div id='InviteBottom'
                         className='flex flex-col z-20 absolute top-0 left-0 m-auto w-full h-screen justify-center items-center'>
                        <img className='hidden md:block w-9/12 max-h-[500px] mt-[-100px] ml-[-40px]' src={InviteBottom}
                             alt="invite bottom"/>
                        <img className='block md:hidden mt-[-50px]' src={InviteBottomMobile} alt='invite bottom'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InviteComponent