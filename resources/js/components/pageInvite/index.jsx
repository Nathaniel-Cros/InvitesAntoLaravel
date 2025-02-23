import React from 'react'
import FirstSectionComponent from '@/components/firstSection'
import InviteText from '@/components/InviteText'
import SecondSectionComponent from '@/components/secondSection'
import ThirdSectionComponent from '@/components/thirdSection'
import FourthSectionComponent from '@/components/fourthSection'
import FifthSectionComponent from '@/components/fifthSection'
import SixthSection from '@/components/sixthSection'
import PlayerMedia from '@/components/PlayerMedia'
import useInviteStore from '@/store/inviteStore'

const PageInviteComponent = () => {
    const { openInvite } = useInviteStore()

    if(!openInvite) return null

    return (
        <div>
            <PlayerMedia />
            <FirstSectionComponent />
            <InviteText />
            <SecondSectionComponent />
            <ThirdSectionComponent />
            <FourthSectionComponent />
            <FifthSectionComponent />
            <SixthSection />
        </div>
    )
}

export default PageInviteComponent
