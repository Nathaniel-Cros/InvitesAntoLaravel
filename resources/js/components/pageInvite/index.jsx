import React from 'react'
import FirstSectionComponent from '@/components/firstSection'
import InviteText from '@/components/InviteText'
import SecondSectionComponent from '@/components/secondSection'
import ThirdSectionComponent from '@/components/thirdSection'
import FourthSectionComponent from '@/components/fourthSection'
import FifthSectionComponent from '@/components/fifthSection'
import useInviteStore from '@/store/inviteStore'

const PageInviteComponent = () => {
    const { openInvite } = useInviteStore()

    if(!openInvite) return null

    return (
        <div>
            <FirstSectionComponent />
            <InviteText />
            <SecondSectionComponent />
            <ThirdSectionComponent />
            <FourthSectionComponent />
            <FifthSectionComponent />
        </div>
    )
}

export default PageInviteComponent
