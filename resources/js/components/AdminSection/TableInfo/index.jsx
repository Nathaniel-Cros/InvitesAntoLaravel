import React from 'react'


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
        <section className='flex flex-col justify-center items-center w-[100%] gap-y-3'>
            <div className='flex flex-row justify-center items-center w-[90%] gap-x-3'>
                <input className='rounded w-[30%] border border-[#dabb85ff] border-black p-3' value={search} onChange={(e) => { setSearch(e.target.value) }}/>
                <button className='bg-[#dabb85ff] text-white rounded p-3' onClick={handleDeleteFilters} disabled={search.length === 0}>Borrar Filtos</button>
            </div>
            <table className='w-[900px] md:w-[90%] text-center'>
                <thead>
                    <tr className='border'>
                        <th>Familia</th>
                        <th>Adultos</th>
                        <th>Niños</th>
                        <th>Adultos Confirmados</th>
                        <th>Niños Confirmados</th>
                        <th>Link a invitación</th>
                        <th>Actualizar</th>
                    </tr>
                </thead>
                <tbody>
                {invitesFiltered?.map((invite) => (
                    <tr key={`invite-${invite.id}`} className='border'>
                        <td>{invite.family}</td>
                        <td>{invite.adults}</td>
                        <td>{invite.children}</td>
                        <td>{invite.confirm_adults}</td>
                        <td><a href={window.location.origin.concat(`/${invite.id}`)} target='_blank'>Ver Invitación</a></td>
                        <td>{invite.confirm_children}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    )
}

export default TableInfo
