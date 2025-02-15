import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InviteComponent from './components/invite'
import PageInviteComponent from './components/pageInvite'
import '../css/app.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <>
            <InviteComponent/>
            <PageInviteComponent/>
        </>
    </StrictMode>,
)
