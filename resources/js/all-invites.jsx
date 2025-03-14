import React from 'react'
import { createRoot } from 'react-dom/client'
import TableInfo from '@/components/AdminSection/TableInfo'
import { GetAllInvites } from '@/components/AdminSection/utils'

import '../css/app.css'

const AllInvitesSections = () => {
    const [allInvites, setAllInvites] = React.useState([])
    const [allAdults, setAllAdults] = React.useState(0)
    const [allChildren, setAllChildren] = React.useState(0)
    const [allConfirmationAdults, setAllConfirmationAdults] = React.useState(0)
    const [allConfirmationChildren, setAllConfirmationChildren] = React.useState(0)
    React.useEffect(() => {
        if(allInvites.length === 0) {
            GetAllInvites().then(invites => {
                console.log('..:: All Invites Response ::..', invites?.data)
                if (invites?.success) {
                    setAllInvites(invites?.data)
                    setAllAdults(invites?.data.reduce((acc, inv) => acc + inv.adults, 0))
                    setAllChildren(invites?.data.reduce((acc, inv) => acc + inv.children, 0))
                    setAllConfirmationAdults(invites?.data.reduce((acc, inv) => acc + inv.confirm_adults, 0))
                    setAllConfirmationChildren(invites?.data.reduce((acc, inv) => acc + inv.confirm_children, 0))
                }
            })
        }
    }, [])

    return (
        <>
            <section id='all-invites' className='flex flex-col items-center justify-center w-screen min-h-screen p-10'>
                <h2 className='font-Carattere text-6xl text-center'>Invitaciones de Antonella</h2>
                <hr/>
                <div className='grid grid-cols-2 md:grid-cols-5 items-center justify-center w-[100%] gap-3'>
                    <div className='flex flex-col justify-center items-center font-Romanesco text-3xl md:text-5xl'>
                        <span>{allAdults}</span>
                        <span>Adultos</span>
                    </div>
                    <div className='flex flex-col justify-center items-center font-Romanesco text-3xl md:text-5xl'>
                        <span>{allChildren}</span>
                        <span>Niños</span>
                    </div>
                    <div className='flex flex-col justify-center items-center font-Romanesco text-3xl md:text-5xl'>
                        <span>{allConfirmationAdults}</span>
                        <span>Adultos Confirmados</span>
                    </div>
                    <div className='flex flex-col justify-center items-center font-Romanesco text-3xl md:text-5xl'>
                        <span>{allConfirmationChildren}</span>
                        <span>Niños Confirmados</span>
                    </div>
                    <div className='flex flex-col justify-center items-center font-Romanesco text-3xl md:text-5xl'>
                        <span>{allConfirmationAdults+allConfirmationChildren}</span>
                        <span>Confirmados Totales</span>
                    </div>
                </div>
                <hr/>
                {allInvites.length > 0 &&
                    <TableInfo invites={allInvites}/>
                }
            </section>
        </>
    )
}

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AllInvitesSections/>
    </React.StrictMode>
)
