import { create } from 'zustand'

const useInviteStore = create((set) => ({
    openInvite: false,
    setOpenInvite: (newOpenInvite) => set({openInvite: newOpenInvite}),
}));

export default useInviteStore