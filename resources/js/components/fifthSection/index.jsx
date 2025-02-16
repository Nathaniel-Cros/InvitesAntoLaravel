import React from 'react'
import TextDecorator from '@/assets/images/text-decorator.png'
import DressIcon from '@/assets/images/icon-dreess.png'
import useInviteStore from '@/store/inviteStore'
import '@/styles/fifthSection/global.scss'

const Option = ({isAdult, option}) => {
    return (
        <option value={option}>{option} {isAdult? `adulto${option === 1? '':'s'}`: `niño${option === 1? '':'s'}`}</option>
    )
}

const fifthSection = () => {
    const [invitesTotal, setInvitesTotal] = React.useState(0)
    const [optionsAdults, setOptionsAdults] = React.useState([])
    const [optionsChildren, setOptionsChildren] = React.useState([])
    const invite = useInviteStore((state) => state.invite)
    const setInvite = useInviteStore((state) => state.setInvite)

    React.useEffect(() => {
        if(invite) {
            setOptionsChildren([])
            setOptionsAdults([])
            setInvitesTotal(invite.adults + invite.children)
            const arrayAdutls = []
            const arrayChildren = []
            for(let adult = 1; adult < invite.adults + 1; adult++) {
                arrayAdutls.push(<Option isAdult={true} option={adult} />)
            }
            for(let child = 0; child < invite.children + 1; child++) {
                arrayChildren.push(<Option isAdult={false} option={child} />)
            }
            console.log('..:: Arrays ::..', arrayAdutls, arrayChildren)
            setOptionsAdults(arrayAdutls)
            setOptionsChildren(arrayChildren)
        }
    }, [invite])

    if(!invite) return null

    return (
        <>
            <sectdion id='confirmation-section' className='w-screen gap-y-8 flex flex-col items-center justify-center min-h-screen p-3'>
                <h1 className='text-decorator font-Carattere text-7xl z-10'>¿Asistiras?</h1>
                <img src={TextDecorator} alt='Dress Icon' className='w-auto h-14 absolute mt-[-36rem] z-0' />
                <span className='font-Carattere text-3xl'>Por favor, confirma tu asistencia a este día tan especial</span>
                <span className='font-Carattere text-3xl'>¡Tu respuesta es muy importante!</span>
                <span className='text-7xl font-Carattere text-center'>Familia {invite?.family}</span>
                <span className='font-Alice text-2xl text-center'>Tiene {invitesTotal} pases: {invite.adults > 1? `${invite.adults} adultos`:`${invite.adults} adulto`} {invite.children > 0? `${invite.children} niño${invite.children > 1? 's':''}`:``}</span>
                <div className='flex flex-col gap-y-3'>
                    { invite.adults > 1 &&
                        <div className='flex flex-row gap-x-3 font-Alice text-2xl'>
                            <span>Confirmar adultos:</span>
                            <select name="adults-confrmation" id="adults-confirmation">
                                {
                                    optionsAdults.map( option => (
                                        option
                                    ))
                                }
                            </select>
                        </div>
                    }
                    { invite.children > 1 &&
                        <div className='flex flex-row gap-x-3 font-Alice text-2xl'>
                            <span>Confirmar niños:</span>
                            <select name="children-confrmation" id="children-confirmation">
                                {
                                    optionsChildren.map( option => (
                                        option
                                    ))
                                }
                            </select>
                        </div>
                    }
                </div>
                <div className='flex flex-row gap-x-6 font-Alice text-2xl'>
                    <button className='py-2 px-7 rounded border-2 hover:bg-[#010310] hover:text-white'>Confirmar</button>
                    <button className='py-2 px-7 rounded border-2 hover:bg-[#010310] hover:text-white'>No podre asistir</button>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <span>Codigo de vestimenta</span>
                    <img className='h-24 w-24' src={DressIcon} alt="dress-icon"/>
                    <span>Formal</span>
                </div>
            </sectdion>
        </>
    )
}

export default fifthSection
