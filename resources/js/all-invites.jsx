import React from 'react'
import { createRoot } from 'react-dom/client'
import TableInfo from '@/components/AdminSection/TableInfo'
import { GetAllInvites } from '@/components/AdminSection/utils'

import '../css/app.css'

const AllInvitesSections = () => {
    const [allInvites, setAllInvites] = React.useState([])
    const [allAdults, setAllAdults] = React.useState(0)
    const [allChildren, setAllChildren] = React.useState(0)
    React.useEffect(() => {
        if(allInvites.length === 0) {
            GetAllInvites().then(invites => {
                console.log('..:: All Invites Response ::..', invites?.data)
                if (invites?.success) {
                    setAllInvites(invites?.data)
                    setAllAdults(invites?.data.reduce((acc, inv) => acc + inv.adults, 0))
                    setAllChildren(invites?.data.reduce((acc, inv) => acc + inv.children, 0))
                }
            })
        }
    }, [])

    return (
        <>
            <section id='all-invites' className='flex flex-col items-center justify-center w-screen min-h-screen'>
                <h2 className='font-Carattere text-6xl text-center'>Invitaciones de Antonella</h2>
                <hr/>
                <div className='flex flex-row items-center justify-center w-[100%]'>
                    <div className='flex flex-col justify-center items-center'>
                        <span>{allAdults}</span>
                        <span>Adultos</span>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span>{allChildren}</span>
                        <span>Niños</span>
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
        <AllInvitesSections />
    </React.StrictMode>
)
