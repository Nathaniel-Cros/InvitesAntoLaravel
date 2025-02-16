import React from 'react'
import { createRoot } from 'react-dom/client'
import InviteComponent from './components/invite'
import PageInviteComponent from './components/pageInvite'
import { GetInvite} from './util';
import useInviteStore from '@/store/inviteStore'

import '../css/app.css'

const AppMain = () => {
    const [firstTime, setFirstTime] = React.useState(false)
    const setInvite = useInviteStore((state) => state.setInvite)

    React.useEffect( () => {
        if(!firstTime) {
            setFirstTime(true)
            const id = window.location.pathname.replace('/', '')
            GetInvite(id).then(invite => {
                if (!invite?.success) {
                    window.href = '/'
                }
                setInvite(invite.data)
            })
        }
    }, [firstTime])

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
