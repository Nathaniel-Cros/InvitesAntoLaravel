import React from 'react'
import iconWhats from '@/assets/images/iconWhats.webp'


const TableInfo = ({invites}) => {
    const [search, setSearch] = React.useState('')
    const [invitesFiltered, setInvitesFiltered] = React.useState(invites)

    React.useEffect(() => {
        console.log('..:: Search ::..', search)
        if(search === '') {
            setInvitesFiltered(invites)
        } else {
            setInvitesFiltered(invites.filter(invite => invite.family.toLowerCase().includes(search.toLowerCase())))
        }
    }, [search])

    React.useEffect(() => {
        console.log('..:: Invites ::..', invitesFiltered)
    }, [invitesFiltered])

    const handleDeleteFilters = () => {
        setSearch('')
    }

    return (
        <section className='flex flex-col justify-center items-center w-[100%] gap-y-3 max-w-screen overflow-hidden'>
            <div className='flex flex-row justify-center items-center w-[90%] gap-x-3'>
                <input className='rounded w-[30%] border border-[#dabb85ff] border-black p-3' value={search} onChange={(e) => { setSearch(e.target.value) }}/>
                <button className='bg-[#dabb85ff] text-white rounded p-3' onClick={handleDeleteFilters} disabled={search.length === 0}>Borrar Filtos</button>
            </div>
            <article className='w-[90%] text-center flex flex-col overflow-x-auto overflow-y-hidden'>
                <div className='w-[900px] md:w-[100%] flex flex-col overflow-x-auto'>
                    <div className='overflow-x-auto border grid grid-cols-7 gap-x-3'>
                        <span className='flex-none font-bold'>Familia</span>
                        <span className='flex-none font-bold'>Adultos</span>
                        <span className='flex-none font-bold'>Niños</span>
                        <span className='flex-none font-bold'>Adultos Confirmados</span>
                        <span className='flex-none font-bold'>Niños Confirmados</span>
                        <span className='flex-none font-bold'>Link a invitación</span>
                        <span className='flex-none font-bold'>Compartir</span>
                    </div>
                </div>
                <div className='w-[900px] md:w-[100%] flex flex-col overflow-x-auto'>
                {invitesFiltered?.map((invite) => (
                    <div key={`invite-${invite.id}`} className='border grid grid-cols-7 gap-x-3'>
                        <span>{invite.family}</span>
                        <span>{invite.adults}</span>
                        <span>{invite.children}</span>
                        <span>{invite.confirm_adults}</span>
                        <span>{invite.confirm_children}</span>
                        <span><a href={window.location.origin.concat(`/${invite.id}`)} target='_blank'>Ver Invitación</a></span>
                        <span>
                            <a target='_blank' href={`https://api.whatsapp.com/send?text=${decodeURI(`¡La cuenta regresiva comenzó! Aquí te dejo la invitación para los XV años de Antonella. ¡Te esperamos! \n ${window.location.origin.concat(`/${invite.id}`)}`)}`}>
                                <img src={iconWhats} width='20' height='20' alt="whatsapp"/>
                            </a>
                        </span>
                    </div>
                ))}
                </div>
            </article>
        </section>
    )
}

export default TableInfo
