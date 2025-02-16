import { create } from 'zustand'

const useInviteStore = create((set) => ({
    openInvite: false,
    invite: {
        id: '',
        family: '',
        adults: 0,
        children: 0,
        confirm_adults: 0,
        confirm_children: 0
    },
    setOpenInvite: (newOpenInvite) => set({openInvite: newOpenInvite}),
    setInvite: (newInvite) => set({invite: newInvite})
}));

export default useInviteStore
