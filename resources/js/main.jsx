import React from 'react'
import { createRoot } from 'react-dom/client'
import InviteComponent from './components/invite'
import PageInviteComponent from './components/pageInvite'
import { GetInvite} from './util'
import LoaderComponent from '@/components/loader'

import useInviteStore from '@/store/inviteStore'

import '../css/app.css'

const AppMain = () => {
    const [firstTime, setFirstTime] = React.useState(false)
    const [hasInvite, setHasInvite] = React.useState(false)
    const setInvite = useInviteStore((state) => state.setInvite)

    React.useEffect( () => {
        if(!firstTime) {
            setFirstTime(true)
            const id = window.location.pathname.replace('/', '')
            GetInvite(id).then(invite => {
                console.log('..:: Invite Response ::..',invite, !invite?.success)
                if (!invite?.success) {
                    console.error('..:: Not Found Invite ::..')
                    window.location.href = '/'
                }
                setInvite(invite.data)
                setTimeout(() => {
                    setHasInvite(true)
                }, 2000)
            })
        }
    }, [firstTime])

    if(!hasInvite) return <LoaderComponent />

    return (
        <>
            <InviteComponent/>
            <PageInviteComponent/>
        </>
    )
}

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppMain />
    </React.StrictMode>,
)
